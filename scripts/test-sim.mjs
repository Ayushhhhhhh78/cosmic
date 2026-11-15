// Headless tests for the pure-logic layer (terrain, physics, controller, objectives, data). Run: npm test
import assert from 'node:assert/strict';
import { createHeightField, craterList, PAD_R } from '../src/worlds/heightfield.js';
import { Physics, STEP } from '../src/physics/Physics.js';
import { PlayerController, MOVE } from '../src/player/PlayerController.js';
import * as Obj from '../src/systems/Objectives.js';
import { Interaction } from '../src/systems/Interaction.js';
import { DISCOVERIES, UNLOCKS, SAMPLE_TYPES } from '../src/data/discoveries.js';
import { WORLDS } from '../src/data/worlds.js';
import * as Colony from '../src/systems/Colony.js';
import { summarize, summarizeSave } from '../src/systems/ColonySummary.js';
import { overviewHtml } from '../src/ui/colonyOverview.js';
import * as Cons from '../src/systems/Construction.js';
import * as DS from '../src/systems/DustStorm.js';

import { MISSIONS } from '../src/data/missions.js';
const mem = new Map(); globalThis.localStorage = { getItem: k => mem.get(k) ?? null, setItem: (k, v) => mem.set(k, v), removeItem: k => mem.delete(k) }; // storage.js falls back to localStorage when IndexedDB is absent
const { saves } = await import('../src/utils/storage.js');

let n = 0; const t = (name, fn) => { fn(); n++; console.log('ok', name); };
const ta = async (name, fn) => { await fn(); n++; console.log('ok', name); };
const body = (o = {}) => ({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, grounded: true, coyote: 0, radius: 0.4, ...o });

for (const w of ['moon', 'mars']) {
  t(`${w}: heightfield finite, flat pad, mountains, craters`, () => {
    const h = createHeightField(w); let lo = 1e9, hi = -1e9;
    for (let x = -240; x <= 240; x += 8) for (let z = -240; z <= 240; z += 8) { const v = h(x, z); assert.ok(Number.isFinite(v)); lo = Math.min(lo, v); hi = Math.max(hi, v); }
    for (let a = 0; a < 6.28; a += 0.3) assert.ok(Math.abs(h(Math.cos(a) * (PAD_R - 1), Math.sin(a) * (PAD_R - 1))) < 1e-9);
    assert.ok(hi > 15, `peaks ${hi}`); assert.ok(lo < -1, `craters ${lo}`);
    assert.ok(craterList(w).length >= 10);
  });
  t(`${w}: jump apex matches v^2/2g`, () => {
    const g = WORLDS[w].gravity, p = new Physics({ heightAt: () => 0 }), b = body({ grounded: true });
    p.step(b, 1 / 240, 0, 0, false, true, g, MOVE.jumpV); let apex = 0;
    for (let i = 0; i < 4000 && !(b.grounded && i > 2); i++) { p.step(b, 1 / 240, 0, 0, false, false, g, MOVE.jumpV); apex = Math.max(apex, b.y); }
    const exp = MOVE.jumpV ** 2 / (2 * g); assert.ok(Math.abs(apex - exp) / exp < 0.05, `${apex} vs ${exp}`); assert.ok(b.grounded);
  });
}
t('gravity ordering: Moon jumps higher than Mars', () => assert.ok(WORLDS.moon.gravity < WORLDS.mars.gravity));
t('falls and lands', () => { const p = new Physics({ heightAt: () => 0 }), b = body({ y: 5, grounded: false }); for (let i = 0; i < 600; i++) p.step(b, 1 / 60, 0, 0, false, false, 3.71, 3); assert.equal(b.y, 0); assert.ok(b.grounded); });
t('tall collider blocks', () => { const p = new Physics({ heightAt: () => 0, colliders: [{ x: 5, z: 0, r: 1.5, top: 3 }] }), b = body(); for (let i = 0; i < 300; i++) p.step(b, 1 / 60, 3, 0, true, false, 1.62, 3); assert.ok(b.x < 5 - 1.5 + 0.01, `x=${b.x}`); });
t('low collider can be stepped onto', () => { const p = new Physics({ heightAt: () => 0, colliders: [{ x: 3, z: 0, r: 1, top: STEP - 0.05 }] }), b = body(); for (let i = 0; i < 200; i++) p.step(b, 1 / 60, 3, 0, true, false, 1.62, 3); assert.ok(b.x > 4); });
t('can land on top of a rock when jumping', () => { const p = new Physics({ heightAt: () => 0, colliders: [{ x: 2, z: 0, r: 1.2, top: 1 }] }), b = body({ x: 2, y: 3, grounded: false }); for (let i = 0; i < 300; i++) p.step(b, 1 / 60, 0, 0, false, false, 1.62, 3); assert.equal(b.y, 1); });
t('steep slope blocks, gentle slope climbs', () => {
  const steep = new Physics({ heightAt: x => x * 2.5 }), b = body(); for (let i = 0; i < 120; i++) steep.step(b, 1 / 60, 3, 0, true, false, 3.7, 3); assert.ok(b.x < 1, `steep x=${b.x}`);
  const soft = new Physics({ heightAt: x => x * 0.3 }), c = body(); for (let i = 0; i < 120; i++) soft.step(c, 1 / 60, 3, 0, true, false, 3.7, 3); assert.ok(c.x > 4, `soft x=${c.x}`); assert.ok(Math.abs(c.y - c.x * 0.3) < 1e-6);
});
t('world bounds clamp', () => { const p = new Physics({ heightAt: () => 0, half: 50 }), b = body(); for (let i = 0; i < 2000; i++) p.step(b, 1 / 60, 6, 0, true, false, 3.7, 3); assert.ok(b.x <= 50); });
t('controller: camera-relative movement and run speed', () => {
  const pc = new PlayerController(new Physics({ heightAt: () => 0 }), 1.62, { x: 0, z: 0 });
  for (let i = 0; i < 120; i++) pc.update(1 / 60, 0, 1, true, false, 0); // yaw 0: forward is -z
  assert.ok(pc.body.z < -5 && Math.abs(pc.body.x) < 1e-6); assert.ok(Math.abs(pc.speed - MOVE.run) < 0.01);
});
t('objectives progress and complete', () => {
  const ex = Obj.defaultExplore(); let b = Obj.list(ex);
  assert.equal(Obj.tick(ex, 100, 100, b).length, 0);
  let done = Obj.tick(ex, 3, 3, b); assert.deepEqual(done.map(o => o.id), ['outpost']); b = Obj.list(ex);
  ex.rover = true; ex.scannedIds.push('a', 'b', 'c'); ex.collectedIds.push('s1', 's2', 's3');
  done = Obj.tick(ex, 3, 3, b); assert.ok(done.some(o => o.id === 'return') && done.some(o => o.id === 'scan') && ex.returned);
});
t('interaction: scan needs facing + hold; interact needs range', () => {
  const hits = [], scans = [], s = { pos: { x: 0, y: 1.4, z: -10 }, range: 20, scanned: false };
  const it = new Interaction({ interactables: [{ pos: { x: 0, y: 0, z: -2 }, range: 3, active: true }], scannables: [s], onInteract: x => hits.push(x), onScanned: x => scans.push(x) });
  const pos = { x: 0, y: 0, z: 0 };
  it.update(0.1, pos, { x: 0, y: 0, z: 1 }, true); assert.equal(it.scanTarget, null);
  for (let i = 0; i < 30; i++) it.update(0.1, pos, { x: 0, y: 0, z: -1 }, true);
  assert.equal(scans.length, 1); assert.ok(s.scanned); it.interact(); assert.equal(hits.length, 1);
  const far = { x: 0, y: 0, z: 50 }; it.update(0.1, far, { x: 0, y: 0, z: -1 }, false); assert.equal(it.target, null);
});
t('data: every unlock and sample resolves to a discovery', () => {
  for (const [w, u] of Object.entries(UNLOCKS)) for (const v of Object.values(u)) for (const id of [].concat(v)) assert.ok(DISCOVERIES[id], id);
  for (const [w, arr] of Object.entries(SAMPLE_TYPES)) for (const s of arr) assert.ok(DISCOVERIES[`${w}.sample.${s.key}`], s.key);
  for (const d of Object.values(DISCOVERIES)) assert.ok(d.title && d.body && d.category);
});
t('colony summary: separate Moon and Mars colonies with names, resources, buildings, population', () => {
  const moon = summarize('moon', Colony.createColony('moon')), mars = summarize('mars', Colony.createColony('mars'));
  assert.equal(moon.colonyName, WORLDS.moon.colonyName); assert.equal(mars.colonyName, WORLDS.mars.colonyName); assert.notEqual(moon.colonyName, mars.colonyName);
  assert.deepEqual(moon.resources.map(r => r.key), ['oxygen', 'water', 'food', 'materials', 'ice', 'power']);
  assert.equal(moon.population.crew, 2); assert.equal(moon.buildings.some(b => b.id === 'shield'), false); assert.equal(mars.buildings.some(b => b.id === 'shield'), true);
  assert.notEqual(moon.resources[0].value, mars.resources[0].value); // each world starts with its own supplies
  const c = Colony.createColony('mars'); c.mod.hab2.built = true; c.mod.water.built = true; c.mod.water.on = false; const s2 = summarize('mars', c);
  assert.equal(s2.population.crew, 4); assert.equal(s2.buildings.find(b => b.id === 'water').state, 'Switched off'); assert.equal(s2.builtCount, 3);
  assert.equal(summarizeSave('moon', null).visited, false); assert.equal(summarizeSave('moon', { colony: Colony.serialize(c) }).visited, true);
});
t('colony summary does not mutate colony state; overview renders both sections', () => {
  const c = Colony.createColony('moon'), before = JSON.stringify(c); const sm = summarize('moon', c); assert.equal(JSON.stringify(c), before);
  const html = overviewHtml([sm, summarize('mars', Colony.createColony('mars'))], 'moon');
  assert.ok(html.includes('data-w="moon"') && html.includes('data-w="mars"') && html.includes(WORLDS.moon.colonyName) && html.includes('you are here'));
});
t('construction: four Moon structures, each with a resource cost', () => {
  assert.deepEqual(Cons.idsFor('moon').map(id => Cons.def('moon', id).name), ['Lunar Habitat', 'Solar Power Station', 'Research Lab', 'Storage Unit']);
  for (const w of ['moon', 'mars']) for (const id of Cons.idsFor(w)) { const d = Cons.def(w, id); assert.ok(Object.keys(d.cost).length >= 1); for (const [k, v] of Object.entries(d.cost)) { assert.ok(k in Colony.createColony(w).res && v > 0, k); } }
});
t('construction: four Mars structures, each with a resource cost', () => {
  assert.deepEqual(Cons.idsFor('mars').map(id => Cons.def('mars', id).name), ['Mars Habitat', 'Solar Power Station', 'Research Lab', 'Water Extraction Unit']);
  assert.deepEqual(Cons.view(Colony.createColony('mars')).map(b => b.name), ['Mars Habitat', 'Solar Power Station', 'Research Lab', 'Water Extraction Unit']);
  assert.equal(Cons.def('mars', 'storage'), null); assert.equal(Cons.def('moon', 'extractor'), null);
  assert.deepEqual(Cons.def('moon', 'habitat').cost, { materials: 45 }); // Moon costs unchanged by the Mars overrides
});
t('construction (Mars): blocked without resources, nothing deducted', () => {
  const c = Colony.createColony('mars'); c.res.materials = 10; const before = JSON.stringify(c);
  for (const id of Cons.idsFor('mars')) { const r = Cons.construct(c, id); assert.equal(r.ok, false, id); assert.ok(/Not enough resources/.test(r.msg)); } assert.equal(JSON.stringify(c), before);
  const w = Colony.createColony('mars'); w.res.materials = 100; w.res.battery = 1; // materials but not enough battery power
  assert.equal(Cons.construct(w, 'extractor').ok, false); assert.equal(w.res.materials, 100); assert.equal(w.res.battery, 1);
  assert.equal(Cons.view(w).find(b => b.id === 'extractor').canBuild, false);
});
t('construction (Mars): success deducts every cost and counts the building', () => {
  const c = Colony.createColony('mars'); c.res.materials = 200; c.res.battery = 5;
  assert.equal(Cons.construct(c, 'extractor').ok, true); assert.equal(c.res.materials, 170); assert.equal(c.res.battery, 3); assert.equal(Cons.count(c, 'extractor'), 1);
  assert.equal(Cons.construct(c, 'habitat').ok, true); assert.equal(c.res.materials, 120);
  assert.equal(Cons.construct(c, 'power').ok, true); assert.equal(c.res.materials, 85);
  assert.equal(Cons.construct(c, 'lab').ok, true); assert.equal(c.res.materials, 45); assert.equal(c.res.battery, 0);
  assert.equal(Cons.construct(c, 'storage').ok, false); assert.equal(c.res.materials, 45); // Moon-only structure
  assert.deepEqual(Cons.completed(c).map(b => b.name), ['Mars Habitat', 'Solar Power Station', 'Research Lab', 'Water Extraction Unit']);
  assert.equal(Cons.completed(Colony.createColony('moon')).length, 0); // Mars builds never touch the Moon colony
});
t('construction (Mars): per-type limit, saved and loaded, shown in the Mars overview only', () => {
  const c = Colony.createColony('mars'); c.res.materials = 200; c.res.battery = 20;
  for (let i = 0; i < Cons.def('mars', 'extractor').max; i++) assert.equal(Cons.construct(c, 'extractor').ok, true);
  const m = c.res.materials; assert.equal(Cons.construct(c, 'extractor').ok, false); assert.equal(c.res.materials, m);
  const back = Colony.loadColony('mars', JSON.parse(JSON.stringify(Colony.serialize(c)))); assert.deepEqual(back.outpost, c.outpost);
  assert.equal(Colony.loadColony('moon', JSON.parse(JSON.stringify(Colony.serialize(c)))).outpost.extractor, 0); // a Mars-only structure never loads onto the Moon
  const sm = summarize('mars', c); assert.deepEqual(sm.structures.map(b => b.count), [0, 0, 0, 3]);
  const html = overviewHtml([summarize('moon', Colony.createColony('moon')), sm], 'mars'); assert.ok(html.includes('Water Extraction Unit') && html.includes('Mars Habitat') && html.includes('\u00d73'));
});
t('construction: blocked without resources, nothing deducted', () => {
  const c = Colony.createColony('moon'); c.res.materials = 10; const before = JSON.stringify(c);
  const r = Cons.construct(c, 'habitat'); assert.equal(r.ok, false); assert.equal(JSON.stringify(c), before);
  assert.equal(Cons.construct(c, 'nope').ok, false);
  const lab = Colony.createColony('moon'); lab.res.materials = 100; lab.res.battery = 1; // enough materials, not enough battery power
  assert.equal(Cons.construct(lab, 'lab').ok, false); assert.equal(lab.res.materials, 100); assert.equal(Cons.count(lab, 'lab'), 0);
  assert.equal(Cons.view(lab).find(b => b.id === 'lab').canBuild, false);
});
t('construction: success deducts every cost and counts the building', () => {
  const c = Colony.createColony('moon'); c.res.materials = 100; c.res.battery = 5;
  assert.equal(Cons.construct(c, 'lab').ok, true); assert.equal(c.res.materials, 65); assert.equal(c.res.battery, 2); assert.equal(Cons.count(c, 'lab'), 1);
  assert.equal(Cons.construct(c, 'storage').ok, true); assert.equal(c.res.materials, 45);
  assert.equal(Cons.construct(c, 'habitat').ok, true); assert.equal(c.res.materials, 0); assert.equal(Cons.construct(c, 'power').ok, false);
  assert.deepEqual(Cons.completed(c).map(b => b.id), ['habitat', 'lab', 'storage']);
});
t('construction: per-type limit, Moon-only structure refused on Mars, other colony state untouched', () => {
  const c = Colony.createColony('moon'); c.res.materials = 200; const max = Cons.STRUCTURES.storage.max;
  for (let i = 0; i < max; i++) assert.equal(Cons.construct(c, 'storage').ok, true);
  const m = c.res.materials; assert.equal(Cons.construct(c, 'storage').ok, false); assert.equal(c.res.materials, m);
  const mars = Colony.createColony('mars'); mars.res.materials = 200; assert.equal(Cons.construct(mars, 'storage').ok, false); assert.equal(mars.res.materials, 200);
  assert.equal(Cons.available('mars'), true); assert.equal(Colony.createColony('moon').mod.hab2.built, false);
});
t('construction: saved and loaded with the colony, old saves load empty, bad data clamped', () => {
  const c = Colony.createColony('moon'); c.res.materials = 200; Cons.construct(c, 'habitat'); Cons.construct(c, 'storage');
  const back = Colony.loadColony('moon', JSON.parse(JSON.stringify(Colony.serialize(c)))); assert.deepEqual(back.outpost, c.outpost);
  const old = Colony.serialize(Colony.createColony('moon')); delete old.outpost; assert.deepEqual(Colony.loadColony('moon', old).outpost, Cons.blankOutpost());
  const bad = Colony.loadColony('moon', { outpost: { habitat: 999, power: -3, lab: 'x', storage: 1.9, extractor: 2 } }); assert.deepEqual(bad.outpost, { habitat: Cons.STRUCTURES.habitat.max, power: 0, lab: 0, storage: 1, extractor: 0 });
});
t('construction: completed buildings appear in the Moon colony overview', () => {
  const c = Colony.createColony('moon'); c.res.materials = 100; Cons.construct(c, 'habitat'); Cons.construct(c, 'storage'); Cons.construct(c, 'storage');
  const sm = summarize('moon', c); assert.deepEqual(sm.structures.map(b => b.count), [1, 0, 0, 2]); assert.deepEqual(summarize('mars', Colony.createColony('mars')).structures.map(b => b.count), [0, 0, 0, 0]);
  const html = overviewHtml([sm, summarize('mars', Colony.createColony('mars'))], 'moon'); assert.ok(html.includes('Lunar Habitat') && html.includes('Storage Unit') && html.includes('\u00d72'));
  assert.equal(html.split('Outpost structures').length - 1, 2); // one section per world
});
// ---- Stage 6F: Mars dust storm hazard ----
const FAR = { x: 0, z: 100 }, HOME = { x: 0, z: -6 };
const step = (s, sec, pos, busy = false) => { const ev = []; for (let i = 0; i < sec * 10; i++) ev.push(...DS.tick(s, 0.1, { ...pos, busy })); return ev; };
t('dust storm: Mars only, nothing before the exploring delay or when too near the outpost', () => {
  assert.ok(DS.available('mars') && !DS.available('moon'));
  const s = DS.create(null); step(s, DS.CFG.minPlay - 5, FAR); assert.equal(s.phase, 'idle');
  const near = DS.create(null); step(near, 200, { x: 0, z: 10 }); assert.equal(near.phase, 'idle', 'storm waits while the player is close to the outpost');
  const busy = DS.create(null); step(busy, 200, FAR, true); assert.equal(busy.phase, 'idle', 'waits for the colony storm to finish');
  assert.equal(DS.view(s, FAR.x, FAR.z), null);
});
t('dust storm: warning, then storm, visibility drops and a safe-zone objective is shown', () => {
  const s = DS.create(null); let ev = step(s, DS.CFG.minPlay + 1, FAR); assert.equal(s.phase, 'warning'); assert.ok(ev.some(e => e.type === 'warning'));
  let v = DS.view(s, FAR.x, FAR.z); assert.ok(v.title.includes('WARNING') && v.nav && v.dist > 80); assert.ok(s.level > 0 && s.level <= DS.CFG.haze + 1e-9, 'warning only hazes');
  ev = step(s, DS.CFG.warn + 1, FAR); assert.equal(s.phase, 'active'); assert.ok(ev.some(e => e.type === 'start'));
  step(s, 8, FAR); assert.equal(s.level, 1, 'full storm'); v = DS.view(s, FAR.x, FAR.z); assert.equal(v.tone, 'crit'); assert.ok(v.text.includes('safe zone'));
  assert.ok(s.total >= 75 && s.total <= 150 && DS.stormSeconds(DS.distance(0, 100)) * 3 >= DS.distance(0, 100), 'enough time to walk home');
});
t('dust storm: reaching the safe zone completes, visibility is restored, and completion is saved', () => {
  const s = DS.create(null); step(s, DS.CFG.minPlay + DS.CFG.warn + 8, FAR); assert.equal(s.phase, 'active'); assert.equal(s.level, 1);
  const ev = step(s, 0.1, HOME); assert.ok(ev.some(e => e.type === 'safe')); assert.equal(s.phase, 'clearing'); assert.equal(s.done, true);
  const v = DS.view(s, HOME.x, HOME.z); assert.equal(v.title, 'MISSION COMPLETE'); assert.equal(v.tone, 'ok'); assert.ok(!v.nav);
  const end = step(s, DS.CFG.clear + 1, HOME); assert.ok(end.some(e => e.type === 'end' && e.outcome === 'safe')); assert.equal(s.phase, 'done'); assert.equal(s.level, 0, 'normal visibility restored');
  assert.equal(DS.view(s, HOME.x, HOME.z)?.title, 'MISSION COMPLETE'); step(s, DS.CFG.card + 1, HOME); assert.equal(DS.view(s, HOME.x, HOME.z), null);
  assert.deepEqual(DS.serialize(s), { done: true }); const back = DS.create(JSON.parse(JSON.stringify(DS.serialize(s)))); assert.equal(back.phase, 'done'); step(back, 500, FAR); assert.equal(back.phase, 'done', 'a completed storm does not repeat');
});
t('dust storm: running back during the warning also counts; the storm never ends the objective early', () => {
  const s = DS.create(null); step(s, DS.CFG.minPlay + 1, FAR); assert.equal(s.phase, 'warning'); step(s, 0.1, HOME); assert.equal(s.phase, 'clearing'); assert.equal(s.outcome, 'safe');
  const o = DS.create(null); step(o, DS.CFG.minPlay + DS.CFG.warn + 1, FAR); assert.equal(o.phase, 'active'); step(o, o.total - 3, { x: 0, z: 30 }); assert.equal(o.phase, 'active', 'still active until the timer runs out');
});
t('dust storm: caught in the open, the storm still passes and visibility returns; not saved as done', () => {
  const s = DS.create(null); step(s, DS.CFG.minPlay + DS.CFG.warn + 1, FAR); const ev = step(s, s.total + 1, FAR);
  assert.ok(ev.some(e => e.type === 'expired')); assert.equal(s.outcome, 'exposed'); assert.equal(s.done, false);
  const end = step(s, DS.CFG.clear + 1, FAR); assert.ok(end.some(e => e.type === 'end' && e.outcome === 'exposed')); assert.equal(s.phase, 'over'); assert.equal(s.level, 0);
  assert.equal(DS.serialize(s).done, false); step(s, 300, FAR); assert.equal(s.phase, 'over', 'one storm per visit');
});
t('dust storm: safe zone covers the Mars outpost buildings, bad saves are ignored', () => {
  for (const [x, z] of [[0, -10], [9, -5], [-11, -5], [3, -1.5], [-4, -3.5], [12.2, -3.5]]) assert.ok(DS.inSafe(x, z), `${x},${z}`);
  assert.ok(!DS.inSafe(0, 30) && DS.distance(0, -6) === 0); assert.equal(DS.create({ done: 'yes' }).phase, 'done'); assert.equal(DS.create(undefined).phase, 'idle'); assert.equal(DS.create(7).phase, 'idle');
});
// ---- Stage 6G: final integration and save system ----
t('save/load: resources, buildings, structures, missions and colony storm survive a JSON round trip (Mars)', () => {
  const c = Colony.createColony('mars'); c.res.materials = 150; c.res.oxygen = 123.5; c.res.battery = 9.25; c.carried.materials = 10; c.carried.ice = 5;
  c.mod.battery = { built: true, cond: 55, on: true, dust: 0 }; c.mod.water = { built: true, cond: 80, on: false, dust: 0.25 };
  Cons.construct(c, 'extractor'); Cons.construct(c, 'extractor'); Cons.construct(c, 'habitat');
  c.missions.done = [MISSIONS.mars[0].id]; c.missions.obj = { [MISSIONS.mars[1].id]: { [MISSIONS.mars[1].objectives[0].id]: true } };
  c.storm = { phase: 'forecast', t: 12.5, next: 3, failed: false, armed: true }; c.nodes['mars.cache#0'] = { charges: 1, t: 20 };
  const back = Colony.loadColony('mars', JSON.parse(JSON.stringify(Colony.serialize(c))));
  assert.deepEqual(Colony.serialize(back), Colony.serialize(c));
  assert.equal(back.outpost.extractor, 2); assert.equal(back.outpost.habitat, 1); assert.ok(back.mod.battery.built && !back.mod.water.on);
  assert.deepEqual(Cons.completed(back).map(b => [b.id, b.count]), [['habitat', 1], ['extractor', 2]]);
});
t('save/load: Moon and Mars colonies never mix, a colony saved for the other world is ignored', () => {
  const moon = Colony.createColony('moon'); moon.res.materials = 200; Cons.construct(moon, 'storage'); Cons.construct(moon, 'habitat'); moon.mod.battery.built = true; moon.missions.done = [MISSIONS.moon[0].id];
  const asMars = Colony.loadColony('mars', JSON.parse(JSON.stringify(Colony.serialize(moon))));
  assert.deepEqual(Colony.serialize(asMars), Colony.serialize(Colony.createColony('mars')), 'Mars starts fresh when handed a Moon colony'); assert.equal(asMars.world, 'mars');
  assert.equal(Colony.loadColony('moon', Colony.serialize(moon)).outpost.storage, 1);
  const legacy = Colony.serialize(moon); delete legacy.world; assert.equal(Colony.loadColony('moon', legacy).outpost.habitat, 1, 'older records without a world field still load');
  assert.equal(summarizeSave('mars', { world: 'mars', colony: Colony.serialize(moon) }).structures.every(b => b.count === 0), true);
});
t('colony overview: reset button only in the main-menu panel, only for colonies with a save', () => {
  const list = [summarize('moon', Colony.createColony('moon'), true), summarize('mars', Colony.createColony('mars'), false)];
  const menu = overviewHtml(list, null, '', true); assert.ok(menu.includes('data-reset="moon"') && !menu.includes('data-reset="mars"'));
  assert.ok(!overviewHtml(list, 'moon').includes('data-reset'), 'in-world Colonies tab has no reset button');
});
await ta('save system: resetColony clears one world\u2019s colony and hazard progress, keeps everything else, never touches the other world', async () => {
  const moon = Colony.createColony('moon'), mars = Colony.createColony('mars'); moon.res.materials = 90; Cons.construct(moon, 'habitat'); mars.res.materials = 90; Cons.construct(mars, 'extractor'); mars.mod.water.built = true;
  const keep = { pos: { x: 4, z: 9 }, inventory: { basalt: 2 }, discoveries: ['mars.gravity'], explore: { reached: true, scannedIds: ['mars.habitat'], collectedIds: ['s1'] }, stage: 5 };
  await saves.write('moon', { colony: Colony.serialize(moon), pos: { x: 1, z: 2 } }); await saves.write('mars', { ...keep, colony: Colony.serialize(mars), dustStorm: { done: true } });
  await saves.write('mars', { pos: { x: 5, z: 9 } }); // a partial write must not drop colony or hazard data
  assert.ok((await saves.load('mars')).colony.outpost.extractor === 1 && (await saves.load('mars')).dustStorm.done === true);
  const moonBefore = JSON.stringify(await saves.load('moon')), marsBefore = await saves.load('mars');
  assert.equal(await saves.resetColony('mars'), true);
  const after = await saves.load('mars'); assert.ok(!('colony' in after) && !('dustStorm' in after), 'colony and hazard progress removed');
  for (const k of ['world', 'createdAt', 'updatedAt', 'version', 'mission', 'discoveries', 'inventory', 'explore', 'stage']) assert.deepEqual(after[k], marsBefore[k], `${k} kept`);
  assert.deepEqual(after.pos, { x: 5, z: 9 }); assert.equal(JSON.stringify(await saves.load('moon')), moonBefore, 'the Moon save is untouched');
  const fresh = Colony.loadColony('mars', after.colony); assert.deepEqual(Colony.serialize(fresh), Colony.serialize(Colony.createColony('mars'))); assert.equal(DS.create(after.dustStorm).phase, 'idle', 'storm can happen again');
  assert.equal(await saves.resetColony('mars'), true, 'resetting twice is harmless'); assert.equal(await saves.resetColony('nowhere'), false); assert.equal(await saves.load('nowhere'), null);
});
console.log(`\n${n} tests passed`);
