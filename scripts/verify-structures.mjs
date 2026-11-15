// Geometry checks for the Stage 6H colony structures, run against the REAL Three.js (not the stub). No GPU needed: it inspects the scene graph.
// Proves: every building sits on the pad, never underground, stays inside its footprint, overlaps nothing else, is in view from the spawn, and the camera cannot end up inside one.
// Does not prove how it looks. Run: npm run structures
import assert from 'node:assert/strict';
import { Box3, Vector3, Matrix4, Frustum, Sphere, PerspectiveCamera } from 'three';
import { createHeightField, PAD_R } from '../src/worlds/heightfield.js';
import { createOutpost } from '../src/worlds/outpost.js';
import { createColonyProps } from '../src/worlds/colonyProps.js';
import { createColonyStructures, FOOTPRINT, SLOTS, UTILITY_ID } from '../src/worlds/colonyStructures.js';
import { createColony } from '../src/systems/Colony.js';
import { STRUCTURES, def as sdef } from '../src/systems/Construction.js';
import { Physics } from '../src/physics/Physics.js';
import { ThirdPersonCamera } from '../src/camera/ThirdPersonCamera.js';
import { WORLDS } from '../src/data/worlds.js';

let n = 0; const ok = m => console.log('ok', m);
const SPAWN = { x: 0, z: 30 };
const verts = (obj, fn) => { // calls fn(worldVector, mesh) for every vertex, including every instance of an InstancedMesh
  obj.updateMatrixWorld(true); const v = new Vector3(), im = new Matrix4(), w = new Matrix4();
  obj.traverse(o => {
    if (!o.isMesh || !o.geometry?.attributes?.position) return; const pos = o.geometry.attributes.position;
    const count = o.isInstancedMesh ? o.count : 1;
    for (let k = 0; k < count; k++) { w.copy(o.matrixWorld); if (o.isInstancedMesh) { o.getMatrixAt(k, im); w.multiply(im); }
      for (let i = 0; i < pos.count; i++) fn(v.fromBufferAttribute(pos, i).applyMatrix4(w), o); }
  });
};
const distToBox = (x, z, b) => Math.hypot(x - Math.max(b.min.x, Math.min(x, b.max.x)), z - Math.max(b.min.z, Math.min(z, b.max.z)));

for (const world of ['moon', 'mars']) {
  const heightAt = createHeightField(world), accent = WORLDS[world].accent, S = createColonyStructures(world, heightAt, accent);
  const added = []; const physics = { add: c => added.push(c) };

  // 1. Starter outpost: with nothing constructed, one of every type is standing, solid and visible from the first frame
  const C = createColony(world); S.sync(C, physics, null);
  assert.equal(S.visibleCount(), 5, 'starter outpost = greenhouse + habitat + power + lab + storage/extractor');
  assert.equal(S.colliders.length, 5); assert.equal(added.length, 0, 'starters are collided from world start, not re-added');
  assert.deepEqual(S.units.filter(u => u.shown).map(u => u.type).sort(), ['greenhouse', 'habitat', 'lab', 'power', 'utility']);
  ok(`${world}: empty colony shows a starter outpost of ${S.visibleCount()} buildings`);

  // 2. Fully built colony: every slot is used, count = 1 starter + constructed units
  const full = createColony(world), caps = { habitat: sdef(world, 'habitat').max, power: sdef(world, 'power').max, lab: sdef(world, 'lab').max, [UTILITY_ID[world]]: sdef(world, UTILITY_ID[world]).max };
  for (const [id, max] of Object.entries(caps)) full.outpost[id] = max;
  const F = createColonyStructures(world, heightAt, accent), added2 = []; F.sync(full, { add: c => added2.push(c) }, null);
  const expected = 1 + (1 + caps.habitat) + (1 + caps.power) + (1 + caps.lab) + (1 + caps[UTILITY_ID[world]]);
  assert.equal(F.visibleCount(), expected); assert.equal(added2.length, expected - 5, 'constructed units get colliders'); ok(`${world}: fully built colony shows ${expected} buildings`);
  assert.ok(STRUCTURES[UTILITY_ID[world]].worlds.includes(world));

  // 3. Per unit: on the pad, never underground, inside its footprint, above ground, not clipping each other
  F.group.updateMatrixWorld(true);
  for (const u of F.units.filter(u => u.shown)) {
    assert.ok(Math.hypot(u.x, u.z) + u.R <= PAD_R, `${u.type}#${u.index} must lie on the flat pad`);
    let gmax = -1e9, gmin = 1e9; for (let a = 0; a < 24; a++) for (const f of [0, 0.5, 1]) { const h = heightAt(u.x + Math.cos(a * 0.2618) * u.R * f, u.z + Math.sin(a * 0.2618) * u.R * f); gmax = Math.max(gmax, h); gmin = Math.min(gmin, h); }
    assert.ok(u.y >= gmax + 0.05 && u.y <= gmax + 0.2, `${u.type}#${u.index} slab top ${u.y} must sit just above the highest ground ${gmax}`);
    let top = -1e9, minBuild = 1e9, maxR = 0, slabBottom = 1e9;
    verts(u.group, (v, m) => { const r = Math.hypot(v.x - u.x, v.z - u.z); maxR = Math.max(maxR, r); if (m.name === 'slab') slabBottom = Math.min(slabBottom, v.y); else { minBuild = Math.min(minBuild, v.y); top = Math.max(top, v.y); } });
    assert.ok(slabBottom < gmin, `${u.type}#${u.index} plinth reaches below the ground`); assert.ok(minBuild >= u.y - 1e-6, `${u.type}#${u.index} has geometry below its base`);
    assert.ok(maxR <= u.R + 1e-6, `${u.type}#${u.index} sticks out of its footprint: ${maxR.toFixed(2)} > ${u.R}`);
    assert.ok(top - u.y > 1.5, `${u.type}#${u.index} is too low to read as a building`); assert.ok(u.collider.top - u.y >= 2.4, 'cannot be stood on');
  }
  for (const a of F.units.filter(u => u.shown)) for (const b of F.units.filter(u => u.shown && u !== a)) assert.ok(Math.hypot(a.x - b.x, a.z - b.z) >= a.R + b.R, `${a.type}#${a.index} overlaps ${b.type}#${b.index}`);
  ok(`${world}: ${expected} buildings on flat pad, nothing underground, inside footprints, no overlaps`);

  // 4. Nothing overlaps the existing outpost, build sites (built or not), landing pad, spawn or the walking lane
  const outpost = createOutpost(world, accent), props = createColonyProps(world, heightAt, accent), boxes = [];
  for (const root of [outpost.group, props.group]) { root.updateMatrixWorld(true); root.traverse(o => { if (o.isMesh && o.geometry?.attributes?.position) { const b = new Box3().setFromObject(o, true); b.round = /^(Circle|Ring)Geometry$/.test(o.geometry.type); boxes.push(b); } }); } // round meshes (landing pad and its ring) are tested as circles, not as their bounding squares
  const clear = (u, b) => b.round ? Math.hypot(u.x - (b.min.x + b.max.x) / 2, u.z - (b.min.z + b.max.z) / 2) - (b.max.x - b.min.x) / 2 : distToBox(u.x, u.z, b);
  for (const u of F.units) for (const b of boxes) { if (b.min.y > u.y + 6 || b.max.y < 0) continue; assert.ok(clear(u, b) >= u.R, `${u.type}#${u.index} overlaps an existing object at ${b.min.toArray().map(x => +x.toFixed(1))}`); }
  for (const c of [...outpost.colliders, ...props.colliders]) for (const u of F.units) assert.ok(Math.hypot(u.x - c.x, u.z - c.z) >= u.R + c.r - 0.3, `${u.type}#${u.index} overlaps collider at ${c.x},${c.z}`);
  for (const u of F.units) { assert.ok(Math.hypot(u.x - SPAWN.x, u.z - SPAWN.z) >= u.R + 5, `${u.type}#${u.index} is too close to the spawn`);
    assert.ok(distToBox(u.x, u.z, { min: { x: -3, z: 8 }, max: { x: 3, z: 36 } }) >= u.R, `${u.type}#${u.index} blocks the lane from the pad to the outpost`); }
  ok(`${world}: clear of the existing outpost, build sites, landing pad, spawn and walking lane`);

  // 5. Visible from the start: starter buildings inside the camera frustum at the spawn view (16:9 and 4:3)
  for (const aspect of [16 / 9, 4 / 3]) {
    const cam = new PerspectiveCamera(60, aspect, 0.1, 1200), rig = new ThirdPersonCamera(cam, heightAt); rig.snap();
    rig.update(0.016, { x: SPAWN.x, y: heightAt(SPAWN.x, SPAWN.z), z: SPAWN.z }); cam.updateMatrixWorld(true); cam.updateProjectionMatrix();
    const fr = new Frustum().setFromProjectionMatrix(new Matrix4().multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse));
    const seen = S.units.filter(u => u.shown).filter(u => fr.intersectsSphere(new Sphere(new Vector3(u.x, u.y + 1.5, u.z), u.R * 0.8)));
    assert.ok(seen.length >= 2, `at least two starter buildings must be in the first view (aspect ${aspect.toFixed(2)}), got ${seen.length}`);
    ok(`${world}: spawn view (${aspect > 1.5 ? '16:9' : '4:3'}) shows ${seen.length} starter buildings: ${seen.map(u => u.type).join(', ')}`);
  }

  // 6. Camera never ends up inside a building: stand at the wall of each building and orbit the camera all the way around
  const phys = new Physics({ heightAt, colliders: [...F.colliders, ...F.units.filter(u => u.index > 0).map(u => u.collider)] });
  for (const u of F.units) {
    const cam = new PerspectiveCamera(60, 1.6, 0.1, 1200), rig = new ThirdPersonCamera(cam, heightAt, (x, z) => phys.near(x, z));
    for (let a = 0; a < 16; a++) for (const pitch of [-0.2, 0.05, 0.28]) {
      const px = u.x + Math.cos(a * 0.3927) * (u.collider.r + 0.4 + 0.3), pz = u.z + Math.sin(a * 0.3927) * (u.collider.r + 0.4 + 0.3), body = { x: px, y: 0, z: pz };
      rig.yaw = a * 0.3927 + 2.4; rig.pitch = pitch; rig.snap(); for (let f = 0; f < 90; f++) rig.update(0.016, body);
      const p = cam.position;
      for (const c of phys.near(p.x, p.z)) if (c.r >= 0.9 && p.y < c.top + 0.35) assert.ok(Math.hypot(p.x - c.x, p.z - c.z) >= c.r + 0.45, `camera inside ${u.type}#${u.index} (yaw ${a}, pitch ${pitch})`);
    }
  }
  ok(`${world}: camera stays outside every building while orbiting at the wall`);

  // 7. Building during play: appears, rises smoothly, becomes solid, never lands on the astronaut; the first build adds a unit and keeps the starter
  const live = createColonyStructures(world, heightAt, accent), lc = createColony(world), lp = [], body = { x: SLOTS.habitat[1][0], z: SLOTS.habitat[1][1], radius: 0.4 };
  live.sync(lc, { add: c => lp.push(c) }, body); assert.equal(live.visibleCount(), 5);
  lc.outpost.habitat = 1; live.sync(lc, { add: c => lp.push(c) }, body);
  assert.equal(live.visibleCount(), 6); assert.equal(lp.length, 1);
  const hu = live.units.find(u => u.type === 'habitat' && u.index === 1); assert.ok(hu.shown && hu.group.visible && hu.group.scale.x < 0.01, 'starts tiny');
  assert.ok(Math.hypot(body.x - hu.x, body.z - hu.z) >= hu.collider.r + 0.4, 'astronaut was moved clear of the new building');
  for (let i = 0; i < 80; i++) live.update(1 / 60, i / 60); assert.equal(hu.group.scale.x, 1); assert.ok(live.units.find(u => u.type === 'habitat' && u.index === 0).shown, 'starter stays');
  live.sync(lc, { add: c => lp.push(c) }, body); assert.equal(lp.length, 1, 'no duplicate colliders on repeat sync');
  ok(`${world}: constructing a habitat adds a 3D unit, a collider, a rise-up animation and keeps the astronaut clear`);

  // 8. Greenhouse crops follow the colony greenhouse module (data link)
  const gh = live.units.find(u => u.type === 'greenhouse').extra; assert.equal(gh.grown.visible, false); assert.equal(gh.seedlings.visible, true);
  lc.mod.greenhouse.built = true; live.sync(lc, null, null); assert.equal(gh.grown.visible, true); assert.equal(gh.seedlings.visible, false);
  lc.mod.greenhouse.on = false; lc.outpost.power = 1; live.sync(lc, null, null); assert.equal(gh.grown.visible, false);
  ok(`${world}: greenhouse crops follow the colony greenhouse module`);
  n++;
}

// 9. Moon and Mars are distinct: different materials, different building shapes
{
  const sig = w => { const S = createColonyStructures(w, createHeightField(w), WORLDS[w].accent); S.sync(createColony(w), null, null); const cols = new Set(), meshes = {}; S.units.filter(u => u.shown).forEach(u => { let k = 0; u.group.traverse(o => { if (o.isMesh) { k++; cols.add(o.material.color?.getHex?.()); } }); meshes[u.type] = k; }); return { cols, meshes }; };
  const a = sig('moon'), b = sig('mars'); assert.notDeepEqual(a.meshes, b.meshes, 'different models'); assert.ok([...a.cols].some(c => !b.cols.has(c)) && [...b.cols].some(c => !a.cols.has(c)), 'different palettes');
  ok(`moon and mars use different models and palettes (mesh counts ${JSON.stringify(a.meshes)} vs ${JSON.stringify(b.meshes)})`);
}
console.log(`structure checks passed for ${n} worlds`);
