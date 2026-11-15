import { Scene, PerspectiveCamera, Vector3, PCFSoftShadowMap } from 'three';
import { buildWorld } from './WorldBuilder.js';
import { Physics } from '../physics/Physics.js';
import { PlayerController } from '../player/PlayerController.js';
import { Astronaut } from '../player/Astronaut.js';
import { ThirdPersonCamera } from '../camera/ThirdPersonCamera.js';
import { Input } from '../core/Input.js';
import { Interaction } from '../systems/Interaction.js';
import * as Objectives from '../systems/Objectives.js';
import * as Colony from '../systems/Colony.js';
import * as Missions from '../systems/Missions.js';
import * as Construction from '../systems/Construction.js';
import * as DustStorm from '../systems/DustStorm.js';
import { summarize, summarizeSave } from '../systems/ColonySummary.js';
import { DISCOVERIES } from '../data/discoveries.js';
import { WORLDS, WORLD_IDS } from '../data/worlds.js';
import { saves } from '../utils/storage.js';

const SUB = 1 / 60, AUTOSAVE = 30;

// Playable world: Moon or Mars. Scene contract from core/App.js plus resume/saveNow/quit used by the HUD.
export class WorldScene {
  scene = new Scene(); camera = new PerspectiveCamera(60, 1, 0.1, 1200);
  ready = false; playing = false; istate = { interact: null, scan: null, progress: 0 }; #tok = 0; #hudT = 0; #saveT = 0; #missT = 0; #lastActive = null; #other = null; managing = false; panelTab = 'resources'; #fwd = new Vector3(); #t = 0;
  #flush = e => { if (e?.type === 'pagehide' || document.visibilityState === 'hidden') this.saveNow(); }; // Stage 6G: save when the tab is hidden or closed, so a reload keeps the latest colony state
  constructor(app) { this.app = app; }
  resize(w, h) { this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }
  #hud(extra = {}) { this.app.bus.emit('hud', extra); }

  async enter({ world }) {
    const tok = ++this.#tok; this.worldId = world; this.ready = false; this.playing = false; this.managing = false;
    this.#hud({ loading: true, world: { name: WORLDS[world].name, mission: WORLDS[world].mission } });
    try {
      const save = (await saves.load(world)) ?? {};
      await new Promise(r => requestAnimationFrame(() => r())); // let the loading screen paint before the heavy build
      if (tok !== this.#tok) return;
      this.#build(world, save);
    } catch (err) { console.error(err); this.#hud({ loading: false, error: 'Could not build this world: ' + err.message }); }
  }

  #build(world, save) {
    const q = this.app.settings.quality, r = this.app.renderer;
    r.shadowMap.enabled = q !== 'low'; r.shadowMap.type = PCFSoftShadowMap;
    this.world = buildWorld(world, this.scene, q);
    const W = this.world, def = W.def;
    this.physics = new Physics({ heightAt: W.heightAt, colliders: W.colliders, half: W.half });
    const sp = save.pos && Number.isFinite(save.pos.x) && Number.isFinite(save.pos.z) && Math.abs(save.pos.x) < W.half && Math.abs(save.pos.z) < W.half ? save.pos : W.spawn;
    this.player = new PlayerController(this.physics, def.gravity, sp);
    this.astro = new Astronaut(def.accent); this.scene.add(this.astro.group);
    this.astro.group.traverse(o => { if (o.isMesh) o.receiveShadow = false; });
    this.rig = new ThirdPersonCamera(this.camera, W.heightAt, (x, z) => this.physics.near(x, z)); this.rig.snap(); // colliders let the camera stay outside buildings and rocks
    if (!save.pos) { this.rig.yaw = 0; } // spawn faces the outpost (-z)

    this.discoveries = Array.isArray(save.discoveries) ? save.discoveries.filter(id => DISCOVERIES[id]) : [];
    this.explore = { ...Objectives.defaultExplore(), ...(save.explore ?? {}) };
    this.inventory = { ...(save.inventory ?? {}) };
    for (const s of W.scannables) if (this.explore.scannedIds.includes(s.id)) { s.scanned = true; s.marker.visible = false; }
    for (const it of W.samples) if (this.explore.collectedIds.includes(it.id)) { it.active = false; it.group.visible = false; }

    this.colony = Colony.loadColony(world, save.colony); // separate state per world: Moon and Mars never share a colony
    this.#initColonyWorld();
    this.storm = DustStorm.available(world) ? DustStorm.create(save.dustStorm) : null; // Stage 6F: Mars dust storm hazard (Moon has none)
    this.interaction = new Interaction({ interactables: W.interactables, scannables: W.scannables, onInteract: it => this.#onInteract(it), onScanned: s => this.#onScanned(s) });
    this.input = new Input(r.domElement);
    this.input.onLockChange = locked => { this.playing = (locked || this.input.fallback) && !this.managing; this.#emit(true); };
    this.input.onKey = code => {
      const tab = { Tab: 'resources', KeyM: 'missions', KeyC: 'colonies', KeyB: 'construct' }[code]; // B opens construction (Moon and Mars)
      if (tab && (tab !== 'construct' || Construction.available(this.worldId))) { if (this.managing && this.panelTab === tab) this.closePanel(); else if (this.managing) { this.panelTab = tab; this.#emit(true); } else if (this.playing) this.openPanel(tab); return; }
      if (this.managing && code === 'Escape') { this.closePanel(); return; }
      if (this.input.fallback && !this.managing && (code === 'Escape' || code === 'KeyP')) { this.playing = !this.playing; this.#emit(true); }
    };
    this.input.attach(); document.addEventListener('visibilitychange', this.#flush); addEventListener('pagehide', this.#flush);
    this.ready = true; this.#saveT = 0; this.#emit(true);
  }

  #loadOther() { // Stage 6A: the other world's colony comes from its own save (read-only); this world's is live
    const id = this.worldId, other = WORLD_IDS.find(x => x !== id); this.#other = null;
    saves.load(other).then(s => { if (this.worldId !== id || !this.ready) return; this.#other = summarizeSave(other, s); this.#emit(true); }).catch(() => {});
  }
  openPanel(tab = 'resources') { if (!this.ready) return; this.#loadOther(); this.managing = true; this.panelTab = tab; this.playing = false; if (document.pointerLockElement) document.exitPointerLock(); this.#emit(true); }
  closePanel() { if (!this.managing) return; this.managing = false; this.resume(); }
  setPanelTab(tab) { this.panelTab = tab; this.#emit(true); }
  colonyAction(a) { // management-panel controls
    if (!this.ready) return;
    if (a.type === 'toggle') this.#report(Colony.toggle(this.colony, a.id));
    else if (a.type === 'construct') { if (this.#report(Construction.construct(this.colony, a.id))) this.saveNow(); } // Stage 6B
    this.#colonyChanged(); this.#emit(true);
  }
  resume() { if (!this.ready) return; this.input.fallback ? (this.playing = true, this.#emit(true)) : this.input.requestLock(); }
  async saveNow() { if (!this.ready) return false; await saves.write(this.worldId, { pos: { x: this.player.body.x, z: this.player.body.z }, inventory: this.inventory, discoveries: this.discoveries, explore: this.explore, colony: Colony.serialize(this.colony), ...(this.storm ? { dustStorm: DustStorm.serialize(this.storm) } : {}), stage: 5 }); return true; }
  quit(to) { this.app.goTo(to); }

  exit() {
    this.#tok++;
    if (this.ready) this.saveNow();
    this.ready = false; this.playing = false; this.managing = false; this.storm = null;
    this.input?.detach(); this.input = null; document.removeEventListener('visibilitychange', this.#flush); removeEventListener('pagehide', this.#flush);
    if (this.astro) { this.scene.remove(this.astro.group); this.astro.group.traverse(o => { o.geometry?.dispose?.(); o.material?.dispose?.(); }); this.astro = null; }
    this.world?.dispose(); this.world = null; this.scene.background = null;
  }

  #toast(title, text) { this.app.bus.emit('toast', text ? `${title}: ${text}` : title); }
  #unlock(id) {
    if (!id || this.discoveries.includes(id)) return;
    this.discoveries.push(id); this.#toast('Discovery unlocked', DISCOVERIES[id].title); this.saveNow();
  }
  #check() { // objective bookkeeping after any state change or on the periodic position check
    const before = Objectives.list(this.explore), b = this.player.body, done = Objectives.tick(this.explore, b.x, b.z, before);
    this.#missions(); if (done.length) this.saveNow(); // explore flags (reached, rover, scans, samples) feed the mission objectives
  }
  #onInteract(it) {
    if (it.kind === 'sample') {
      it.active = false; it.group.visible = false; this.explore.collectedIds.push(it.id); this.inventory[it.type] = (this.inventory[it.type] ?? 0) + 1;
      this.#toast('Collected', it.label); this.#unlock(it.discovery);
    } else if (it.kind === 'rover') { this.explore.rover = true; this.#toast('Rover inspected', 'Wheels, mast and solar panel check out.'); it.discoveries.forEach(d => this.#unlock(d)); }
    else if (it.kind === 'terminal') { this.#toast('Environment console', 'Report logged.'); it.discoveries.forEach(d => this.#unlock(d)); }
    else this.#colonyInteract(it);
    this.#colonyChanged(); this.#check(); this.saveNow();
  }
  #onScanned(s) {
    this.explore.scannedIds.push(s.id); s.marker.visible = false; this.#toast('Scanned', s.kind === 'ice' ? 'Ice located. You can extract it.' : s.name); this.#unlock(s.discovery);
    this.#initColonyWorld(); this.#check(); this.saveNow();
  }

  // ---- Stage 5: colony, resources, missions ----
  #report(r) { if (r) this.#toast(r.ok ? 'Colony' : 'Cannot do that', r.msg); return r?.ok; }
  #activeId() { return Missions.activeMission(this.colony)?.id ?? null; }
  #initColonyWorld() { // ice deposits unlock when located (Mars) or are known from the start (Moon); built sites get their visuals
    for (const n of this.world.colony.nodes) if (n.kind === 'ice') { n.active = this.worldId === 'moon' || this.explore.scannedIds.includes(n.id); n.group.visible = n.active; }
    this.#syncSites();
  }
  #syncSites() {
    const C = this.colony, act = this.#activeId(), cp = this.world.colony;
    this.world.structures.sync(C, this.physics, this.player.body); // Stage 6H: shows the starter outpost and one more 3D unit per constructed structure
    for (const site of Object.values(cp.sites)) {
      const m = C.mod[site.id], gated = Colony.gated(C, site.id, act);
      if (m.built && !site.built) { site.built = true; const col = cp.addCollider(site.id); if (col) this.physics.add(col); }
      site.body.visible = m.built; site.ghost.visible = !m.built && gated; site.interact.active = m.built || gated;
      site.lamp.visible = m.built || (site.id === 'solar');
      site.lampMat.color.setHex(!m.built ? 0xff4a4a : m.cond <= 10 ? 0xff4a4a : !m.on ? 0x7a808c : m.cond < 40 ? 0xffb84a : 0x4aff9a);
      const d = site.def;
      site.prompt = !m.built ? `${d.verb ?? 'Build'} ${d.name.toLowerCase()} (${Object.entries(d.cost).map(([k, v]) => `${v} ${k}`).join(', ')})`
        : site.id === 'water' && C.carried.ice >= 1 ? `Load ${Math.floor(C.carried.ice)} ice into processor` : `Service ${d.name.toLowerCase()} (${Math.round(m.cond)}%)`;
    }
    const cp2 = cp; cp2.depot.p = C.carried.materials >= 1 ? `Store ${Math.floor(C.carried.materials)} materials` : 'Supply depot (store materials here)';
    cp2.lab.p = 'Analyse a sample'; cp2.uplink.p = C.stats.linked ? 'Earth link established' : C.stats.linkStart ? `Uplink settling ${Math.round(C.stats.linkProg * 100)}%` : 'Start Earth uplink';
    for (const n of cp.nodes) { const left = C.nodes[n.id]?.charges ?? Colony.NODE_CHARGES; n.p = left > 0 ? `${n.kind === 'ice' ? 'Extract water ice' : 'Salvage construction materials'} (${left} left)` : 'Deposit exhausted, regrowing'; }
  }
  #colonyInteract(it) {
    const C = this.colony, act = this.#activeId();
    if (it.kind === 'site') {
      const m = C.mod[it.site];
      if (!m.built) this.#report(Colony.build(C, it.site, act));
      else if (it.site === 'water' && C.carried.ice >= 1) this.#report(Colony.loadIce(C));
      else this.#report(Colony.maintain(C, it.site));
    } else if (it.kind === 'cache') this.#report(Colony.mine(C, it.id, 'materials'));
    else if (it.kind === 'ice') { if (this.#report(Colony.mine(C, it.id, 'ice'))) this.#unlock(`${this.worldId}.ice`); }
    else if (it.kind === 'depot') this.#report(Colony.deposit(C));
    else if (it.kind === 'uplink') this.#report(Colony.startLink(C));
    else if (it.kind === 'lab') {
      const type = Object.keys(this.inventory).find(k => this.inventory[k] > 0);
      if (!type) this.#report({ ok: false, msg: 'Collect a sample first.' });
      else if (this.#report(Colony.analyze(C))) { this.inventory[type]--; }
    }
  }
  #maintainNearest() { // R: service the closest built module in reach, whatever it is
    const b = this.player.body; let best = null, bd = 7;
    for (const s of Object.values(this.world.colony.sites)) { if (!this.colony.mod[s.id].built) continue; const d = Math.hypot(s.pos.x - b.x, s.pos.z - b.z); if (d < bd) { best = s; bd = d; } }
    if (!best) return this.#toast('Nothing to service nearby');
    this.#report(Colony.maintain(this.colony, best.id)); this.#colonyChanged(); this.saveNow();
  }
  #colonyChanged() { this.#syncSites(); this.#missions(); }
  #missions() {
    const evs = Missions.evaluate(this.colony, this.explore); if (!evs.length) return;
    for (const e of evs) {
      if (e.type === 'objective') { this.#toast('Objective complete', e.text); this.app.bus.emit('mission:objective', { world: this.worldId, ...e }); }
      else if (e.type === 'mission') { this.#toast(`Mission complete: ${e.title}`, `${e.done} Reward ${e.reward}.${e.next ? ` Next: ${e.next}.` : ''}`); this.app.bus.emit('mission:complete', { world: this.worldId, ...e }); }
    }
    this.#syncSites(); this.saveNow();
  }
  #colonyEvents(evs) {
    for (const e of evs) {
      const msg = { incident: ['Crew emergency', 'Evacuated to the shelter. Some supplies and equipment condition were lost.'], linked: ['Earth link', 'Handshake complete. Link established.'], 'storm-forecast': ['Dust storm forecast', 'Charge batteries and protect the panels.'], 'storm-start': ['Dust storm', 'Solar output has collapsed.'], 'storm-end': ['Dust storm', e.survived ? 'The storm has passed. Colony held.' : 'The storm passed but the colony was in trouble. Another will come.'] }[e.type];
      if (msg) this.#toast(...msg); this.app.bus.emit('colony:event', { world: this.worldId, ...e });
      if (e.type === 'storm-start') this.#unlock('mars.storm');
      if (e.type === 'incident' || e.type === 'storm-end' || e.type === 'linked') this.saveNow();
    }
  }

  // ---- Stage 6F: Mars dust storm hazard ----
  #stormEvents(evs) {
    for (const e of evs) {
      const msg = { warning: ['Dust storm warning', `Front arriving in ${e.seconds} s. Head for the outpost safe zone.`], start: ['Dust storm', 'Visibility is dropping. Follow the green beacon to the outpost.'],
        safe: ['Mission complete', 'You reached the outpost shelter. Dust storm survived.'], expired: ['Dust storm', 'You were caught in the open. The storm is passing.'], end: ['Dust storm', 'The storm has passed. Visibility restored.'] }[e.type];
      if (msg) this.#toast(...msg);
      this.app.bus.emit('hazard:event', { world: this.worldId, hazard: 'dust-storm', ...e });
      if (e.type === 'safe') this.saveNow(); // completion is saved so the storm does not repeat
    }
  }
  #hazardHud() { // banner data for the HUD, with the safe zone's bearing relative to where the camera faces
    if (!this.storm) return null;
    const b = this.player.body, v = DustStorm.view(this.storm, b.x, b.z); if (!v) return null;
    const f = this.#fwd, dx = DustStorm.SAFE.x - b.x, dz = DustStorm.SAFE.z - b.z;
    v.angle = Math.atan2(-dx * f.z + dz * f.x, dx * f.x + dz * f.z); return v;
  }

  #emit(force) {
    if (!this.ready) return;
    const st = this.istate, b = this.player.body;
    this.#hud({
      loading: false, error: null, playing: this.playing, fallback: this.input.fallback,
      world: { name: this.world.def.name, mission: this.world.def.mission, gravity: this.world.def.gravity },
      managing: this.managing, panelTab: this.panelTab, ...this.#colonyHud(), hazard: this.#hazardHud(),
      samples: `${this.explore.collectedIds.length}/${this.world.samples.length}`, discoveries: this.discoveries.length,
      interact: st.interact ? st.interact.prompt : null, scan: st.scan ? { name: st.scan.name, progress: st.progress } : null,
      speed: this.player.speed, airborne: !b.grounded, force,
    });
  }

  #colonyHud() {
    const C = this.colony, act = Missions.activeMission(C), rt = C.rates, cap = Colony.battCap(C), R = C.res;
    const objs = act ? Missions.view(C, this.explore).find(m => m.id === act.id).objectives : [];
    const out = { missionTitle: act?.title ?? 'All missions complete', missionBrief: act?.brief ?? 'Sandbox play continues. Keep the colony alive.', objectives: objs,
      colony: { res: { ...R }, cap: Colony.CAP, batt: { kwh: R.battery, cap, net: rt.battNet }, power: { gen: rt.gen, demand: rt.demand, used: rt.used, curtailed: rt.curtailed }, rates: { oxygen: rt.oxygen, water: rt.water, food: rt.food, ice: rt.ice }, carried: { ...C.carried }, crew: { size: Colony.crewSize(C), health: C.crew.health }, alerts: Colony.alerts(C), storm: { phase: C.storm.phase, t: C.storm.t }, link: { done: !!C.stats.linked, prog: C.stats.linkProg } } };
    if (this.managing) {
      out.colony.modules = Object.keys(C.mod).filter(id => this.world.colony.sites[id]).map(id => { const m = C.mod[id], d = Colony.MODULES[id]; return { id, name: d.name, built: m.built, cond: m.cond, on: m.on, toggle: !!d.toggle, dust: m.dust, gated: Colony.gated(C, id, act?.id ?? null), load: rt.loads[id] ?? null, cost: d.cost }; });
      out.missions = Missions.view(C, this.explore);
      if (Construction.available(this.worldId)) out.construction = { structures: Construction.view(C), done: Construction.completed(C), colonyName: WORLDS[this.worldId].colonyName };
      if (this.panelTab === 'colonies') out.overview = { current: this.worldId, list: WORLD_IDS.map(id => id === this.worldId ? summarize(id, C, true) : this.#other).filter(Boolean) };
    }
    return out;
  }
  update(dt, t) {
    if (!this.ready) return;
    const inp = this.input, b = this.player.body; this.#t = t;
    const [dx, dy] = inp.look(), wheel = inp.takeWheel();
    this.camera.getWorldDirection(this.#fwd);
    if (this.playing) {
      this.rig.look(dx, dy, wheel);
      const mx = (inp.isDown('KeyD') ? 1 : 0) - (inp.isDown('KeyA') ? 1 : 0), mz = (inp.isDown('KeyW') ? 1 : 0) - (inp.isDown('KeyS') ? 1 : 0);
      const run = inp.isDown('ShiftLeft') || inp.isDown('ShiftRight'), jump = inp.isDown('Space');
      let left = dt, jumped = false;
      while (left > 1e-5) { const s = Math.min(left, SUB); jumped = this.player.update(s, mx, mz, run, jump, this.rig.yaw) || jumped; left -= s; }
      if (jumped) this.#unlock(UNLOCK_GRAVITY(this.worldId));
      const st = this.istate = this.interaction.update(dt, b, this.#fwd, inp.isDown('KeyF'));
      if (inp.pressed('KeyE') && st.interact) this.interaction.interact();
      this.astro.animate(dt, this.player.speed, b.grounded, b.vy);
      if ((this.#saveT += dt) > AUTOSAVE) { this.#saveT = 0; this.saveNow(); }
    }
    if (this.playing || this.managing) { // the colony only runs while you are actually in the game
      const evs = Colony.tick(this.colony, Math.min(dt, 0.1), this.#activeId()); if (evs.length) this.#colonyEvents(evs);
      if ((this.#missT += dt) > 0.25) { this.#missT = 0; this.#missions(); }
    }
    if (this.storm) { // the hazard runs only while you are playing; visibility and beacon follow its level every frame
      if (this.playing) { const evs = DustStorm.tick(this.storm, Math.min(dt, 0.1), { x: b.x, z: b.z, busy: this.colony.storm.phase !== 'none' }); if (evs.length) this.#stormEvents(evs); }
      this.world.sky.setStorm(this.storm.level); this.world.beacon?.set(this.storm.phase === 'warning' || this.storm.phase === 'active', t);
    }
    if (this.playing && inp.pressed('KeyR')) this.#maintainNearest();
    for (const s of Object.values(this.world.colony.sites)) if (s.ghost.visible) s.ghost.material.opacity = 0.25 + 0.15 * Math.sin(t * 3);
    inp.endFrame();
    this.astro.group.position.set(b.x, b.y, b.z); this.astro.group.rotation.y = this.player.heading;
    this.rig.update(dt, b);
    this.world.sky.update(dt, this.camera.position, b); this.world.structures.update(dt, t);
    for (const s of this.world.scannables) if (s.marker.visible) { s.marker.rotation.y += dt * 1.5; s.marker.position.y = s.baseY + Math.sin(t * 2 + s.pos.x) * 0.15; }
    for (const it of this.world.samples) if (it.active) { it.group.position.y = it.baseY + Math.sin(t * 2 + it.pos.x) * 0.08; it.group.rotation.y += dt; it.beam.material.opacity = 0.28 + 0.12 * Math.sin(t * 3 + it.pos.z); }
    if ((this.#hudT += dt) > 0.1) { this.#hudT = 0; if (this.playing) this.#check(); this.#syncSites(); this.#emit(false); }
  }
}
const UNLOCK_GRAVITY = w => `${w}.gravity`;
