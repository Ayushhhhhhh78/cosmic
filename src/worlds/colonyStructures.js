// Stage 6H: 3D colony structures for the Moon and Mars.
// Before this stage, structures bought on the Construction tab only existed as counts in colony.outpost: no model was ever added to the scene.
// This module owns those models. A starter outpost (one of each) is always standing; every structure the colony builds adds one more unit.
// Placement is a fixed layout on the flat landing pad (terrain height is exactly 0 within PAD_R), so nothing can end up underground.
import { Group, Mesh, MeshStandardMaterial, MeshBasicMaterial, BoxGeometry, CylinderGeometry, SphereGeometry, ConeGeometry, TorusGeometry, RingGeometry, InstancedMesh, Matrix4, Quaternion, Euler, Vector3, Color, DoubleSide } from 'three';
import { count as builtCount } from '../systems/Construction.js';

// Footprint radius reserved for each type (metres). Every vertex of a unit stays inside it (checked by scripts/verify-structures.mjs).
export const FOOTPRINT = { greenhouse: 4.7, habitat: 3.0, power: 2.7, lab: 2.8, utility: 2.3 };
// [x, z] per slot. Slot 0 is the starter unit; slot k is the k-th constructed unit. Checked against the outpost, build sites, landing pad and spawn.
export const SLOTS = {
  greenhouse: [[-15.5, 23]],
  habitat: [[17.5, 15.5], [-25.5, 14], [-27, 6], [-26, -13]],
  power: [[10.5, 13.5], [25.5, 11.5], [13, 27.5], [-12, -27], [12, -27]],
  lab: [[-13, -18.5], [13, -18.5], [-21, -21]],
  utility: [[19.5, 22.5], [-4, -28], [4, -28], [20, -8.5], [22, -18]], // Moon: Storage Unit. Mars: Water Extraction Unit.
};
export const UTILITY_ID = { moon: 'storage', mars: 'extractor' };
const COLLIDER = { // circle collider radius and height above the slab (the astronaut cannot walk through or stand on these)
  greenhouse: { r: 4.4, h: 3.6 }, habitat: { r: 2.9, h: 3.8 }, power: { r: 2.4, h: 2.6 }, lab: { r: 2.6, h: 3.6 }, utility: { r: 2.1, h: 3.0 },
};
const FACE = { x: 0, z: 12 }; // every unit faces the approach lane from the landing pad
const SLAB_TOP = 0.08; // plinth top above the highest ground under the footprint
const TYPES = Object.keys(SLOTS);

export function createColonyStructures(world, heightAt, accent) {
  const mars = world === 'mars', group = new Group(), colliders = [], units = [];
  group.name = 'colonyStructures';
  const mat = (c, o = {}) => new MeshStandardMaterial({ color: c, roughness: 0.6, metalness: 0.2, ...o });
  const P = mars
    ? { hull: 0xd8c4b4, dark: 0x4a3a34, panel: 0x2c2f58, berm: 0x7a3f2a, soil: 0x5a3322, crop: 0x7fb04a, fruit: 0xe8a23a, grow: 0xff7fd6, glass: 0xffd9c2, glassEm: 0x5a2a20, pipe: 0x7fc4ff }
    : { hull: 0xe6e8ee, dark: 0x3a3f4a, panel: 0x1b2a56, berm: 0x8b8b92, soil: 0x3b3b40, crop: 0x4fbf5a, fruit: 0xd8443a, grow: 0xdff3ff, glass: 0xbfe8d8, glassEm: 0x1c5a38, pipe: 0x7fc4ff };
  const hull = mat(P.hull, { roughness: 0.55, metalness: 0.15 }), dark = mat(P.dark, { roughness: 0.7, metalness: 0.3 }), slabMat = mat(0x4a4e58, { roughness: 0.9, metalness: 0.1 });
  const panel = mat(P.panel, { roughness: 0.3, metalness: 0.6, emissive: 0x070d22 }), berm = mat(P.berm, { roughness: 1, metalness: 0 });
  const glow = mat(accent, { emissive: accent, emissiveIntensity: 1.1 }), win = mat(0xbfe8ff, { emissive: 0x8fd4ff, emissiveIntensity: 0.8 });
  const glass = mat(P.glass, { transparent: true, opacity: 0.3, roughness: 0.08, metalness: 0, emissive: P.glassEm, emissiveIntensity: 0.5, side: DoubleSide, depthWrite: false });
  const soil = mat(P.soil, { roughness: 1, metalness: 0 }), pipe = mat(P.pipe, { roughness: 0.3, metalness: 0.4, emissive: 0x1a3a5a, emissiveIntensity: 0.4 });
  const ice = mat(0x7fd0ff, { emissive: 0x4aa8ff, emissiveIntensity: 1.0, roughness: 0.3 });
  const ringMat = new MeshBasicMaterial({ color: accent });
  const growMat = mat(P.grow, { emissive: P.grow, emissiveIntensity: 1.5 });
  const leafMat = mat(P.crop, { roughness: 0.8, metalness: 0, emissive: 0x1a5a2a, emissiveIntensity: 0.5 }), fruitMat = mat(P.fruit, { roughness: 0.5, metalness: 0, emissive: P.fruit, emissiveIntensity: 0.35 });
  const seedMat = mat(0x6fbf6a, { roughness: 0.8, metalness: 0, emissive: 0x1a5a2a, emissiveIntensity: 0.4 });
  const Y = new Vector3(0, 1, 0);

  const mk = (geo, m, x, y, z, parent, shadow = true) => { const o = new Mesh(geo, m); o.position.set(x, y, z); o.castShadow = shadow; o.receiveShadow = true; parent.add(o); return o; };
  const box = (w, h, d) => new BoxGeometry(w, h, d), cyl = (rt, rb, h, n = 20) => new CylinderGeometry(rt, rb, h, n), ball = (r, n = 16, m = 10) => new SphereGeometry(r, n, m);
  const half = r => new SphereGeometry(r, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2);
  const beacon = (g, x, y, z) => mk(ball(0.15, 10, 8), glow, x, y, z, g, false);

  // ---- models: local origin is the centre of the slab top; +z faces the lane; y is up ----
  const MODEL = {
    habitat(g) {
      if (!mars) { // Lunar Habitat: horizontal pressure vessel on two saddles, airlock and roof panel
        for (const sx of [-1.35, 1.35]) mk(box(0.5, 0.9, 2.4), dark, sx, 0.45, 0, g);
        const y = 2.15; mk(cyl(1.45, 1.45, 2.8, 28), hull, 0, y, 0, g).rotation.z = Math.PI / 2;
        for (const sx of [-1.4, 1.4]) mk(ball(1.45, 24, 14), hull, sx, y, 0, g);
        mk(cyl(1.52, 1.52, 0.25, 28), dark, 0, y, 0, g).rotation.z = Math.PI / 2;
        for (const sx of [-0.9, 0, 0.9]) mk(box(0.5, 0.38, 0.06), win, sx, y + 0.4, 1.4, g, false);
        mk(box(2.6, 0.1, 0.05), glow, 0, y - 0.35, 1.41, g, false);
        mk(cyl(0.7, 0.7, 1.0, 18), hull, -0.4, 1.7, 1.75, g).rotation.x = Math.PI / 2;
        mk(cyl(0.55, 0.55, 0.08, 18), win, -0.4, 1.7, 2.28, g, false).rotation.x = Math.PI / 2;
        const pn = mk(box(2.2, 0.06, 1.0), panel, 0, 3.72, 0, g); pn.rotation.x = -0.12;
        mk(cyl(0.04, 0.04, 1.0, 6), dark, 1.0, 4.2, 0, g); beacon(g, 1.0, 4.75, 0);
      } else { // Mars Habitat: shielded dome sunk into a regolith berm, tunnel airlock, vents
        mk(cyl(2.3, 2.9, 1.25, 36), berm, 0, 0.625, 0, g);
        mk(half(2.3), hull, 0, 1.25, 0, g);
        for (let k = 0; k < 4; k++) { const rib = mk(new TorusGeometry(2.32, 0.05, 6, 24, Math.PI), dark, 0, 1.25, 0, g, false); rib.rotation.y = k * Math.PI / 4; }
        for (const th of [-0.6, 0, 0.6]) { const pv = new Group(); pv.rotation.y = th; g.add(pv); const w = mk(box(0.5, 0.35, 0.06), win, 0, 2.2, 2.08, pv, false); w.rotation.x = -0.44; }
        mk(cyl(0.75, 0.75, 1.0, 18), hull, 0, 0.85, 2.35, g).rotation.x = Math.PI / 2;
        mk(cyl(0.58, 0.58, 0.08, 18), win, 0, 0.85, 2.84, g, false).rotation.x = Math.PI / 2;
        mk(cyl(0.79, 0.79, 0.1, 18), glow, 0, 0.85, 2.0, g, false).rotation.x = Math.PI / 2;
        for (const sx of [-0.9, 0.9]) mk(cyl(0.16, 0.2, 0.9, 10), dark, sx, 3.7, -0.3, g);
        mk(cyl(0.04, 0.04, 1.2, 6), dark, 0, 4.1, 0.2, g); beacon(g, 0, 4.8, 0.2);
      }
    },
    power(g) { // Solar Power Station: one bank of tilted panels facing the lane, inverter and light mast. Mars banks are wider (weaker sun).
      const cols = mars ? 3 : 2, cw = mars ? 1.5 : 2.1, gap = mars ? 0.08 : 0.1, w = cols * cw + (cols - 1) * gap;
      const pv = new Group(); pv.position.set(0, 1.6, -0.2); pv.rotation.x = 0.55; g.add(pv);
      for (let c = 0; c < cols; c++) for (const z of [-0.65, 0.65]) mk(box(cw, 0.08, 1.2), panel, -w / 2 + cw / 2 + c * (cw + gap), 0, z, pv);
      mk(box(w + 0.1, 0.05, 0.07), dark, 0, 0.06, 0, pv, false); mk(box(0.07, 0.05, 2.5), dark, 0, 0.06, 0, pv, false);
      for (const sx of [-w / 2 + 0.3, w / 2 - 0.3]) { mk(cyl(0.09, 0.09, 2.2, 8), dark, sx, 1.1, -0.9, g); mk(cyl(0.07, 0.07, 1.0, 8), dark, sx, 0.5, 0.95, g); }
      mk(box(0.9, 0.9, 0.7), hull, 0, 0.5, -1.7, g); mk(box(0.5, 0.1, 0.05), glow, 0, 0.7, -1.34, g, false);
      mk(cyl(0.04, 0.04, 2.6, 6), dark, mars ? 2.0 : 1.9, 1.3, -1.2, g); beacon(g, mars ? 2.0 : 1.9, 2.7, -1.2);
    },
    lab(g) { // Research Laboratory: sealed block with windows, door and roof equipment (observatory dome on the Moon, drill rig on Mars)
      mk(box(4.2, 0.35, 3.0), dark, 0, 0.175, 0, g); mk(box(4.0, 2.2, 2.8), hull, 0, 1.45, 0, g); mk(box(4.1, 0.12, 2.9), dark, 0, 2.61, 0, g);
      for (const sx of [-1.2, 0, 1.2]) mk(box(0.7, 0.5, 0.06), win, sx, 1.75, 1.43, g, false);
      mk(box(3.6, 0.1, 0.05), glow, 0, 0.95, 1.42, g, false); mk(box(0.06, 1.3, 0.9), win, 2.03, 1.1, -0.2, g, false);
      if (!mars) {
        mk(cyl(0.95, 0.95, 0.12, 20), dark, -1.0, 2.73, -0.2, g); mk(half(0.9), hull, -1.0, 2.79, -0.2, g);
        mk(box(0.12, 0.7, 0.05), glow, -1.0, 3.2, 0.62, g, false);
        mk(cyl(0.04, 0.04, 1.3, 6), dark, 1.3, 3.3, 0.5, g); beacon(g, 1.3, 4.0, 0.5);
      } else {
        mk(cyl(0.1, 0.12, 2.4, 8), dark, -1.2, 3.8, 0, g); mk(box(0.5, 0.25, 0.5), dark, -1.2, 5.05, 0, g);
        for (const s of [-1, 1]) { const br = mk(cyl(0.04, 0.04, 2.0, 6), dark, -1.2 + s * 0.35, 3.7, 0, g); br.rotation.z = -s * 0.17; }
        const dish = mk(new SphereGeometry(0.7, 18, 8, 0, Math.PI * 2, 0, 0.9), new MeshStandardMaterial({ color: 0xf2f3f6, roughness: 0.4, metalness: 0.3, side: DoubleSide }), 1.1, 3.4, 0.3, g); dish.rotation.x = -0.6;
        mk(cyl(0.05, 0.05, 0.8, 6), dark, 1.1, 2.95, 0.3, g); beacon(g, -1.2, 5.3, 0);
        for (const [x, z] of [[2.2, 0.9], [2.2, 0.2]]) mk(box(0.5, 0.45, 0.5), mat(0xc9a24a), x, 0.225, z, g);
      }
    },
    utility(g) {
      if (!mars) { // Storage Unit: stacked cargo containers and a propellant tank
        mk(box(3.2, 1.3, 1.4), hull, 0, 0.7, 0, g);
        for (let i = -2; i <= 2; i++) mk(box(0.08, 1.3, 1.5), dark, i * 0.6, 0.7, 0, g, false);
        mk(box(3.0, 0.08, 0.05), glow, 0, 1.0, 0.71, g, false);
        const top = mk(box(2.6, 1.2, 1.3), hull, 0.1, 1.95, -0.1, g); top.rotation.y = 0.25;
        mk(cyl(0.6, 0.6, 1.6, 18), hull, 0, 0.65, 1.45, g).rotation.z = Math.PI / 2;
        mk(cyl(0.62, 0.62, 0.15, 18), dark, 0.4, 0.65, 1.45, g).rotation.z = Math.PI / 2;
        beacon(g, -1.3, 2.75, -0.2);
      } else { // Water Extraction Unit: drilling derrick over a borehole, heated ice-melt tank, pipe run and control box
        mk(cyl(1.5, 1.7, 0.2, 24), dark, 0, 0.1, 0, g); mk(cyl(0.5, 0.5, 0.04, 16), mat(0x0a0a0c), 0, 0.22, 0, g, false);
        const leg = (bx, bz, tx, tz, h) => { const dx = tx - bx, dy = h - 0.2, dz = tz - bz, len = Math.hypot(dx, dy, dz), o = mk(cyl(0.05, 0.08, len, 6), dark, (bx + tx) / 2, 0.2 + dy / 2, (bz + tz) / 2, g); o.quaternion.copy(new Quaternion().setFromUnitVectors(Y, new Vector3(dx / len, dy / len, dz / len))); };
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) leg(sx * 0.8, sz * 0.8, sx * 0.25, sz * 0.25, 4.6);
        for (const [y, s] of [[1.8, 1.25], [3.2, 0.95]]) { mk(box(s, 0.05, 0.05), dark, 0, y, s / 2, g, false); mk(box(s, 0.05, 0.05), dark, 0, y, -s / 2, g, false); mk(box(0.05, 0.05, s), dark, s / 2, y, 0, g, false); mk(box(0.05, 0.05, s), dark, -s / 2, y, 0, g, false); }
        mk(cyl(0.07, 0.07, 4.4, 8), dark, 0, 2.4, 0, g); mk(box(0.7, 0.35, 0.7), dark, 0, 4.7, 0, g); beacon(g, 0, 5.1, 0);
        mk(cyl(0.85, 0.85, 1.7, 22), hull, 0.9, 1.05, 0.9, g); mk(cyl(0.87, 0.87, 0.25, 22), ice, 0.9, 1.3, 0.9, g, false);
        const pg = new Group(); pg.position.set(0.45, 0.45, 0.45); pg.rotation.y = -Math.PI / 4; g.add(pg); mk(cyl(0.08, 0.08, 1.2, 8), pipe, 0, 0, 0, pg).rotation.z = Math.PI / 2;
        mk(box(0.6, 0.8, 0.5), dark, -1.1, 0.5, 0.9, g); mk(box(0.4, 0.3, 0.05), win, -1.1, 0.7, 1.16, g, false);
      }
    },
    greenhouse(g) { // transparent dome over raised crop beds with irrigation and grow lights; returns handles so the crops can follow colony data
      const R = 4.2;
      mk(cyl(4.15, 4.15, 0.12, 36), dark, 0, 0.06, 0, g, false);
      mk(new TorusGeometry(R, 0.1, 8, 40), glow, 0, 0.15, 0, g, false).rotation.x = Math.PI / 2;
      const dome = mk(half(R), glass, 0, 0.1, 0, g, false); dome.renderOrder = 2;
      for (let k = 0; k < 6; k++) { const rib = mk(new TorusGeometry(R + 0.02, 0.05, 6, 28, Math.PI), hull, 0, 0.1, 0, g, false); rib.rotation.y = k * Math.PI / 6; }
      mk(new TorusGeometry(Math.sqrt(R * R - 2.5 * 2.5), 0.04, 6, 36), hull, 0, 2.6, 0, g, false).rotation.x = Math.PI / 2;
      mk(box(1.5, 1.5, 1.1), hull, 0, 0.85, 3.95, g); mk(box(0.8, 1.1, 0.05), win, 0, 0.75, 4.5, g, false); mk(box(1.2, 0.08, 0.05), glow, 0, 1.55, 4.5, g, false);
      const bz = [-1.9, 0, 1.9], plants = [];
      for (const z of bz) { mk(box(z === 0 ? 6.4 : 6.0, 0.45, 1.0), soil, 0, 0.35, z, g, false); mk(box(6.0, 0.05, 0.07), hull, 0, 0.58, z - 0.5, g, false); }
      for (const z of bz) for (const dz of [-0.24, 0.24]) for (let i = 0; i < 9; i++) plants.push([-2.8 + i * 0.7 + (dz > 0 ? 0.2 : 0), z + dz]);
      const leaf = new InstancedMesh(ball(0.3, 8, 6), leafMat, plants.length), fruit = new InstancedMesh(ball(0.09, 6, 5), fruitMat, plants.length), seed = new InstancedMesh(new ConeGeometry(0.12, 0.34, 6), seedMat, plants.length);
      const m = new Matrix4(), q = new Quaternion(), e = new Euler(), sc = new Vector3(), p = new Vector3(), c = new Color();
      plants.forEach(([x, z], i) => {
        const j = ((i * 37) % 11) / 11; q.setFromEuler(e.set(0, j * 6.28, 0));
        sc.set(1, 1.15 + j * 0.5, 1); p.set(x, 0.58 + 0.3 * (1.15 + j * 0.5), z); leaf.setMatrixAt(i, m.compose(p, q, sc)); leaf.setColorAt(i, c.setRGB(0.55 + 0.45 * (1 - j), 0.7 + 0.3 * j, 0.45));
        sc.set(1, 1, 1); p.set(x + 0.14, 0.58 + 0.4, z + 0.12); fruit.setMatrixAt(i, m.compose(p, q, sc));
        p.set(x, 0.58 + 0.17, z); seed.setMatrixAt(i, m.compose(p, q, sc));
      });
      leaf.castShadow = fruit.castShadow = seed.castShadow = false; leaf.frustumCulled = fruit.frustumCulled = seed.frustumCulled = false;
      const grown = new Group(), seedlings = new Group(); grown.add(leaf, fruit); seedlings.add(seed); g.add(grown, seedlings);
      const lights = [];
      for (const z of bz) { lights.push(mk(box(5.0, 0.06, 0.25), growMat, 0, 1.9, z, g, false)); for (const sx of [-2.5, 2.5]) mk(cyl(0.04, 0.04, 1.9, 6), dark, sx, 0.95, z, g, false); }
      for (const z of [-0.95, 0.95]) mk(cyl(0.05, 0.05, 6.0, 8), pipe, 0, 0.85, z, g, false).rotation.z = Math.PI / 2;
      mk(box(0.5, 0.6, 0.5), dark, 3.3, 0.35, 0, g, false); beacon(g, 0, 4.45, 0);
      return { grown, seedlings, lights };
    },
  };

  // ---- units: one per slot, built lazily the first time a slot is shown ----
  for (const type of TYPES) SLOTS[type].forEach(([x, z], index) => {
    let base = heightAt(x, z); const R = FOOTPRINT[type];
    for (let k = 0; k < 8; k++) base = Math.max(base, heightAt(x + Math.cos(k * Math.PI / 4) * R, z + Math.sin(k * Math.PI / 4) * R)); // the slab sits on the highest ground under the footprint
    const y = base + SLAB_TOP, cd = COLLIDER[type];
    units.push({ type, index, x, z, y, R, rot: Math.atan2(FACE.x - x, FACE.z - z), group: null, shown: false, pop: 1, collider: { x, z, r: cd.r, top: y + cd.h }, collided: false, extra: null });
  });
  const build = u => {
    const g = new Group(); g.position.set(u.x, u.y, u.z); g.rotation.y = u.rot; g.name = `${u.type}#${u.index}`; group.add(g);
    mk(cyl(u.R - 0.25, u.R - 0.1, 0.5, 40), slabMat, 0, -0.25, 0, g).name = 'slab'; // plinth: hides any small ground variation and gives every unit a solid base
    const ring = new Mesh(new RingGeometry(u.R - 0.7, u.R - 0.45, 48), ringMat); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.02; g.add(ring);
    u.extra = MODEL[u.type](g) ?? null; u.group = g;
  };
  const starters = units.filter(u => u.index === 0);
  for (const u of starters) { build(u); u.shown = true; u.collided = true; colliders.push(u.collider); }

  let sig = '', primed = false, lush = null;
  const counts = c => ({ habitat: builtCount(c, 'habitat'), power: builtCount(c, 'power'), lab: builtCount(c, 'lab'), utility: builtCount(c, UTILITY_ID[world]), greenhouse: 0 });
  const lushNow = c => !!(c.mod?.greenhouse?.built && c.mod.greenhouse.on !== false && c.mod.greenhouse.cond > 10); // crops thrive only while the colony greenhouse module is built, powered on and working

  return {
    group, colliders, units, starters: starters.length,
    visibleCount: () => units.filter(u => u.shown).length,
    isLush: () => lush,
    // Shows slot 0 plus one slot per constructed unit. Safe to call every frame: it returns at once when nothing changed.
    sync(colony, physics, body) {
      const cnt = counts(colony), on = lushNow(colony), s = `${cnt.habitat}.${cnt.power}.${cnt.lab}.${cnt.utility}.${on ? 1 : 0}`;
      if (s === sig) return; sig = s; const instant = !primed; primed = true;
      for (const u of units) {
        const want = u.index <= cnt[u.type];
        if (want && !u.shown) {
          if (!u.group) build(u);
          u.group.visible = true; u.shown = true;
          if (!instant) { u.pop = 0; u.group.scale.setScalar(0.001); } // rise out of the pad when built during play
          if (!u.collided) { u.collided = true; physics?.add(u.collider); }
          if (body) { // never appear on top of the astronaut
            let dx = body.x - u.x, dz = body.z - u.z, d = Math.hypot(dx, dz); const min = u.collider.r + (body.radius ?? 0.4) + 0.3;
            if (d < min) { if (d < 1e-4) { dx = 0; dz = 1; d = 1; } body.x = u.x + dx / d * min; body.z = u.z + dz / d * min; }
          }
        } else if (!want && u.shown && u.index > 0) { u.group.visible = false; u.shown = false; } // construction counts only fall on a colony reset, which rebuilds the world
      }
      const gh = units.find(u => u.type === 'greenhouse')?.extra; lush = on;
      if (gh) { gh.grown.visible = on; gh.seedlings.visible = !on; for (const l of gh.lights) l.material = on ? growMat : dimGrow(); }
    },
    update(dt, t) {
      for (const u of units) if (u.shown && u.pop < 1) { u.pop = Math.min(1, u.pop + dt / 1.1); const k = u.pop - 1, s = 1 + 2.7 * k * k * k + 1.7 * k * k; u.group.scale.setScalar(u.pop >= 1 ? 1 : Math.max(0.001, s)); } // ease-out-back pop
      growMat.emissiveIntensity = 1.3 + 0.25 * Math.sin(t * 2);
    },
  };

  function dimGrow() { return dimGrow.m ??= mat(0x555566, { emissive: 0x222233, emissiveIntensity: 0.4 }); }
}
