// Headless smoke test: runs the real WorldScene (build, movement, jump, scan, collect, save) for both worlds against a fake Three.js.
// Verifies game wiring and state, NOT rendering, performance or feel. Run: npm run smoke
import { register } from 'node:module';
register('./hooks.mjs', import.meta.url);
import assert from 'node:assert/strict';

const store = new Map(), noop = () => {};
globalThis.localStorage = { getItem: k => store.get(k) ?? null, setItem: (k, v) => store.set(k, v) };
globalThis.addEventListener = globalThis.removeEventListener = noop;
globalThis.requestAnimationFrame = cb => setTimeout(cb, 0);
const docL = {};
globalThis.document = { addEventListener: (t, f) => { docL[t] = f; }, removeEventListener: (t, f) => { if (docL[t] === f) delete docL[t]; }, visibilityState: 'visible', pointerLockElement: null, exitPointerLock: noop,
  createElement: () => ({ width: 0, height: 0, getContext: () => new Proxy({}, { get: (_, k) => k === 'createImageData' ? (w, h) => ({ data: new Uint8ClampedArray(w * h * 4) }) : noop, set: () => true }) }) };

const { WorldScene } = await import('../src/worlds/WorldScene.js');
const { EventBus } = await import('../src/core/EventBus.js');
const { saves } = await import('../src/utils/storage.js');
const { WORLDS } = await import('../src/data/worlds.js');

for (const world of ['moon', 'mars']) {
  const bus = new EventBus(), toasts = [], huds = []; bus.on('toast', m => toasts.push(m)); bus.on('hud', s => huds.push(s));
  const canvas = { requestPointerLock: noop };
  const app = { bus, settings: { quality: 'medium' }, renderer: { shadowMap: {}, domElement: canvas } };
  const ws = new WorldScene(app); const t0 = Date.now();
  await ws.enter({ world }); for (let i = 0; i < 400 && !ws.ready; i++) await new Promise(r => setTimeout(r, 25));
  assert.ok(ws.ready, `${world} failed to build: ${huds.at(-1)?.error}`); const built = Date.now() - t0;
  ws.input.locked = true; ws.playing = true;
  { // Stage 6A: Colonies tab shows this world live and the other world from its save; closing returns to play
    const n0 = huds.length; ws.openPanel('colonies'); await new Promise(r => setTimeout(r, 20));
    const ov = huds.slice(n0).map(h => h.overview).filter(Boolean).at(-1);
    assert.ok(ov && ov.current === world && ov.list.length === 2, `${world}: colonies overview missing`);
    assert.deepEqual(ov.list.map(x => x.world).sort(), ['mars', 'moon']); assert.ok(ov.list.every(x => x.colonyName && x.resources.length === 6 && x.buildings.length && x.population.crew >= 2));
    ws.input.requestLock = () => {}; ws.closePanel(); assert.equal(ws.managing, false); ws.input.locked = true; ws.playing = true;
  }
  { // Stage 6B/6C: construction through the real scene (Moon and Mars): refused when short, built and deducted when affordable, shown in the HUD data, saved
    const n0 = huds.length, C = ws.colony, mars = world === 'mars', first = mars ? 'extractor' : 'habitat', cost = mars ? 30 : 45;
    const ST = ws.world.structures, before = ST.visibleCount(); assert.equal(before, 5, 'Stage 6H: starter outpost is standing before anything is built'); assert.ok(ws.world.root.children.includes(ST.group), 'structures are part of the scene');
    ws.openPanel('construct'); C.res.materials = 10; C.res.battery = 5; ws.colonyAction({ type: 'construct', id: first });
    assert.equal(C.res.materials, 10, 'refused build deducts nothing'); assert.equal(C.outpost[first], 0);
    C.res.materials = 100; ws.colonyAction({ type: 'construct', id: first });
    assert.equal(C.res.materials, 100 - cost); assert.equal(C.outpost[first], 1); if (mars) assert.equal(C.res.battery, 3);
    assert.equal(ST.visibleCount(), before + 1, 'Stage 6H: the constructed structure appears in the 3D world'); assert.ok(ST.units.some(u => u.type === (mars ? 'utility' : 'habitat') && u.index === 1 && u.shown && u.collided));
    await new Promise(r => setTimeout(r, 20));
    const k = huds.slice(n0).map(h => h.construction).filter(Boolean).at(-1); assert.ok(k && k.structures.length === 4 && k.done.some(d => d.id === first && d.count === 1), 'built structure reaches the Construction screen');
    if (mars) assert.ok(k.structures.some(b => b.name === 'Water Extraction Unit') && k.structures.some(b => b.name === 'Mars Habitat'));
    assert.equal((await saves.load(world)).colony.outpost[first], 1, 'construction is saved');
    ws.input.requestLock = () => {}; ws.closePanel(); ws.input.locked = true; ws.playing = true;
  }
  let T = 0; const run = (sec, keys = []) => { keys.forEach(k => ws.input.down.add(k)); for (let i = 0; i < sec * 60; i++) ws.update(1 / 60, (T += 1 / 60)); keys.forEach(k => ws.input.down.delete(k)); };
  const b = ws.player.body, start = { x: b.x, z: b.z };

  { // Stage 6F: Mars dust storm through the real scene (Moon has none): warning, reduced visibility, safe zone, completion, restored visibility, saved
    if (world === 'moon') assert.equal(ws.storm, null, 'no dust storm hazard on the Moon');
    else {
      const put = (x, z) => { Object.assign(b, { x, z, vx: 0, vz: 0 }); b.y = ws.physics.groundAt(x, z, 1e3); }, fog = ws.scene.fog, far0 = fog.far, hz = () => huds.filter(h => 'hazard' in h).at(-1).hazard;
      assert.ok(ws.storm && ws.world.beacon && !ws.world.beacon.group.visible, 'hazard armed, beacon hidden');
      put(0, 100); ws.storm.play = 100; run(0.3);
      assert.equal(ws.storm.phase, 'warning'); assert.ok(toasts.some(m => m.includes('Dust storm warning')), 'warning toast'); assert.ok(hz().title === 'DUST STORM WARNING' && hz().nav && Number.isFinite(hz().angle), 'warning reaches the HUD');
      run(13); assert.equal(ws.storm.phase, 'active'); run(6);
      assert.equal(ws.storm.level, 1); assert.ok(fog.far < far0 / 5 && fog.near < 5, `visibility reduced (fog ${fog.near}-${fog.far})`); assert.ok(ws.world.beacon.group.visible, 'beacon shown during the storm'); assert.equal(hz().tone, 'crit');
      put(-1, 0); run(0.3);
      assert.equal(ws.storm.phase, 'clearing'); assert.ok(toasts.some(m => m.startsWith('Mission complete')), 'mission complete message'); assert.equal(hz().title, 'MISSION COMPLETE'); assert.ok(!ws.world.beacon.group.visible);
      await new Promise(r => setTimeout(r, 30)); assert.equal((await saves.load(world)).dustStorm.done, true, 'completion saved');
      run(13); assert.equal(ws.storm.phase, 'done'); assert.equal(ws.storm.level, 0); assert.equal(fog.far, far0, 'normal visibility restored'); assert.ok(toasts.some(m => m.includes('Visibility restored')));
      run(7); assert.equal(hz(), null, 'banner cleared'); put(start.x, start.z); run(0.2);
    }
  }

  run(2, ['KeyW', 'ShiftLeft']);
  assert.ok(Math.hypot(b.x - start.x, b.z - start.z) > 8, 'astronaut moves'); assert.ok(Number.isFinite(b.x + b.y + b.z));
  assert.equal(ws.astro.group.position.x, b.x);
  run(0.5, ['Space']); assert.ok(ws.discoveries.includes(`${world}.gravity`), 'jump unlocks gravity entry');
  run(7);
  assert.ok(b.grounded, 'lands again');

  const sample = ws.world.samples[0]; Object.assign(b, { x: sample.pos.x + 1, z: sample.pos.z, vx: 0, vz: 0 }); b.y = ws.physics.groundAt(b.x, b.z, 1e3); run(0.2);
  assert.equal(ws.istate.interact?.id, sample.id, 'sample prompt appears'); ws.input.hit.add('KeyE'); run(0.1);
  assert.ok(!sample.active && ws.explore.collectedIds.includes(sample.id), 'sample collected'); assert.ok(ws.discoveries.includes(sample.discovery));

  Object.assign(b, { x: 0, z: -3, vx: 0, vz: 0 }); b.y = 0; run(0.1); assert.ok(ws.explore.reached, 'reaching outpost registers');
  run(2.2, ['KeyF']); assert.ok(ws.explore.scannedIds.includes(`${world}.habitat`) || ws.explore.scannedIds.length > 0, 'scan completes while holding F');
  Object.assign(b, { x: 13, z: 5, vx: 0, vz: 0 }); b.y = 0; run(0.2); ws.input.hit.add('KeyE'); run(0.1); assert.ok(ws.explore.rover, 'rover inspected');

  // finish objectives to exercise completion + save
  ws.world.scannables.forEach(s => { if (ws.explore.scannedIds.length < 3 && !s.scanned) { s.scanned = true; ws.explore.scannedIds.push(s.id); } });
  ws.world.samples.slice(1, 3).forEach(s => { if (!ws.explore.collectedIds.includes(s.id)) ws.explore.collectedIds.push(s.id); });
  Object.assign(b, { x: 2, z: 2, vx: 0, vz: 0 }); run(0.5);
  assert.ok(ws.explore.returned, 'return objective completes'); assert.ok(toasts.some(m => m.startsWith('Objective complete') || m.startsWith('Mission complete')), 'objective or mission completion toast');

  await ws.saveNow(); const save = await saves.load(world);
  assert.equal(save.world ?? world, world); assert.ok(save.explore.returned && save.discoveries.length >= 3 && save.pos);
  { // Stage 6G: hiding the tab saves the live colony state
    ws.colony.res.materials = 61; assert.ok(docL.visibilitychange, 'save-on-hide handler registered'); document.visibilityState = 'hidden'; docL.visibilitychange(); document.visibilityState = 'visible';
    await new Promise(r => setTimeout(r, 30)); assert.equal((await saves.load(world)).colony.res.materials, 61, 'hidden tab saved the colony');
  }
  const C0 = ws.colony, first = world === 'mars' ? 'extractor' : 'habitat', hadStorm = !!ws.storm?.done;
  C0.mod.battery.built = true; C0.mod.battery.cond = 72; C0.res.materials = 77; C0.res.oxygen = 111; await ws.saveNow(); // (the Moon save and the Mars save are written by different scenes)
  ws.exit(); assert.ok(!ws.ready); assert.equal(docL.visibilitychange, undefined, 'save-on-hide handler removed on exit');
  { // Stage 6G: reload. A fresh scene rebuilds the same colony from this world's own save: buildings visible, resources and construction kept, hazard progress kept
    const app2 = { bus: new EventBus(), settings: { quality: 'medium' }, renderer: { shadowMap: {}, domElement: canvas } }, ws2 = new WorldScene(app2), huds2 = []; app2.bus.on('hud', h => huds2.push(h));
    await ws2.enter({ world }); for (let i = 0; i < 400 && !ws2.ready; i++) await new Promise(r => setTimeout(r, 25)); assert.ok(ws2.ready, `${world}: reload failed`);
    const C2 = ws2.colony, site = ws2.world.colony.sites.battery;
    assert.equal(C2.world, world); assert.equal(C2.outpost[first], 1, 'constructed structure survives reload'); assert.equal(C2.res.materials, 77); assert.equal(C2.res.oxygen, 111);
    assert.ok(C2.mod.battery.built && Math.round(C2.mod.battery.cond) === 72 && site.body.visible && site.built && !site.ghost.visible, 'built module is visible again after reload');
    ws2.openPanel('construct'); await new Promise(r => setTimeout(r, 20));
    const k2 = huds2.map(h => h.construction).filter(Boolean).at(-1); assert.ok(k2 && k2.done.some(d => d.id === first && d.count === 1), 'Completed buildings list is rebuilt from the save');
    if (world === 'mars') { assert.ok(ws2.storm.done && ws2.storm.phase === 'done', 'completed dust storm is remembered'); assert.equal(hadStorm, true); } else assert.equal(ws2.storm, null);
    assert.equal(C2.missions.done.length, C0.missions.done.length, 'mission progress kept');
    ws2.exit(); await new Promise(r => setTimeout(r, 30));
  }
  { // Stage 6G: reset one colony from its save; the other world and this world's exploration are untouched
    const other = world === 'moon' ? 'mars' : 'moon', otherBefore = JSON.stringify(await saves.load(other)), before = await saves.load(world);
    assert.equal(await saves.resetColony(world), true); const after = await saves.load(world);
    assert.ok(!after.colony && !after.dustStorm); assert.deepEqual(after.explore, before.explore); assert.deepEqual(after.discoveries, before.discoveries); assert.deepEqual(after.pos, before.pos);
    assert.equal(JSON.stringify(await saves.load(other)), otherBefore, 'the other world is untouched');
    const ws3 = new WorldScene({ bus: new EventBus(), settings: { quality: 'medium' }, renderer: { shadowMap: {}, domElement: canvas } }); await ws3.enter({ world }); for (let i = 0; i < 400 && !ws3.ready; i++) await new Promise(r => setTimeout(r, 25));
    assert.ok(ws3.ready && ws3.colony.outpost[first] === 0 && !ws3.colony.mod.battery.built && !ws3.world.colony.sites.battery.body.visible, 'reset colony starts fresh in the world');
    if (world === 'mars') assert.ok(!ws3.storm.done && ws3.storm.phase === 'idle', 'hazard can happen again after a reset'); assert.ok(ws3.explore.returned, 'exploration progress kept');
    ws3.exit(); await new Promise(r => setTimeout(r, 30));
  }
  console.log(`ok ${world}: build ${built} ms, ${ws.worldId}, ${save.discoveries.length} discoveries, toasts: ${toasts.length}, gravity ${WORLDS[world].gravity}`);
}
// independent saves
assert.notDeepEqual(await saves.load('moon'), await saves.load('mars')); console.log('ok independent Moon/Mars saves');
process.exit(0);
