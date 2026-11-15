// Colony gameplay objects placed on the flat pad: build sites, depot, lab, comms uplink, repair point, supply caches and ice deposits.
import { Group, Mesh, MeshStandardMaterial, MeshBasicMaterial, BoxGeometry, CylinderGeometry, SphereGeometry, DodecahedronGeometry, AdditiveBlending, Vector3 } from 'three';
import { rng } from '../utils/noise.js';
import { MODULES, WORLD_MODULES } from '../systems/Colony.js';

// Build sites on the flat pad (terrain is exactly 0 within r = 34). r = collider radius when built (0 = not solid).
const SITES = {
  solar: { x: -8.5, z: 8.4, r: 0 }, battery: { x: -6, z: 1, r: 1.6, top: 1.6 }, water: { x: -18, z: -3, r: 2, top: 2.6 }, oxygen: { x: -18, z: -10, r: 1.6, top: 3.4 },
  greenhouse: { x: -24, z: -5, r: 4, top: 3 }, shield: { x: -9, z: 13, r: 0 }, solar2: { x: 24, z: 2, r: 0 }, hab2: { x: 0, z: -21, r: 5, top: 4.6 },
};
const ID = id => `site:${id}`;

export function createColonyProps(world, heightAt, accent) {
  const group = new Group(), interactables = [], scannables = [], colliders = [], sites = {}, nodes = [];
  const mat = (c, o = {}) => new MeshStandardMaterial({ color: c, roughness: 0.6, metalness: 0.2, ...o });
  const hull = mat(0xe6e8ee), dark = mat(0x3a3f4a, { roughness: 0.7, metalness: 0.3 }), panel = mat(0x1b2a56, { metalness: 0.6, roughness: 0.3, emissive: 0x070d22 });
  const glass = mat(0x9fe8c0, { transparent: true, opacity: 0.45, roughness: 0.1, emissive: 0x1c5a38 }), glow = mat(accent, { emissive: accent, emissiveIntensity: 1.1 });
  const put = (geo, m, x, y, z, parent) => { const o = new Mesh(geo, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; parent.add(o); return o; };
  const lampGeo = new SphereGeometry(0.16, 10, 8);

  const visuals = {
    battery: g => { for (let i = -1; i <= 1; i++) { put(new BoxGeometry(0.9, 1.5, 1.2), hull, i * 1, 0.75, 0, g); put(new BoxGeometry(0.6, 0.12, 0.05), glow, i * 1, 1.0, 0.63, g); } },
    water: g => { put(new CylinderGeometry(1.3, 1.3, 2.2, 20), hull, 0, 1.1, 0, g); put(new BoxGeometry(1.6, 1.0, 1.2), dark, 1.9, 0.5, 0, g); put(new CylinderGeometry(0.12, 0.12, 2.4, 8), dark, 1, 1.6, 0, g).rotation.z = Math.PI / 2; },
    oxygen: g => { put(new CylinderGeometry(1, 1.2, 2.6, 20), hull, 0, 1.3, 0, g); put(new CylinderGeometry(0.5, 0.5, 1.2, 16), dark, 0, 3, 0, g); put(new SphereGeometry(0.22, 10, 8), glow, 0, 3.7, 0, g); },
    greenhouse: g => { const d = put(new SphereGeometry(3.6, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), glass, 0, 0, 0, g); d.castShadow = false; put(new CylinderGeometry(3.7, 3.7, 0.25, 24), dark, 0, 0.1, 0, g); for (let i = -1; i <= 1; i++) put(new BoxGeometry(0.9, 0.3, 4.2), mat(0x3f8a4f, { emissive: 0x1a5a2a, emissiveIntensity: 0.5 }), i * 1.2, 0.45, 0, g); },
    shield: g => { for (let i = -3; i <= 3; i++) { const s = put(new BoxGeometry(1.6, 2.8, 0.18), mat(0x6a5a52, { roughness: 0.9 }), i * 1.8, 1.4, 0, g); s.rotation.x = -0.12; } },
    solar2: g => { for (let i = 0; i < 3; i++) { const p = new Group(); p.position.set(-4.2 + i * 4.2, 1.6, 0); p.rotation.x = -0.55; g.add(p); put(new BoxGeometry(3.8, 0.1, 2.4), panel, 0, 0, 0, p); put(new CylinderGeometry(0.09, 0.09, 1.6, 8), dark, -4.2 + i * 4.2, 0.8, 0.3, g); } },
    hab2: g => { const b = put(new CylinderGeometry(2.3, 2.3, 8, 28), hull, 0, 2.55, 0, g); b.rotation.z = Math.PI / 2; for (let i = -1; i <= 1; i += 2) put(new BoxGeometry(0.5, 0.4, 0.06), mat(0xbfe8ff, { emissive: 0x8fd4ff, emissiveIntensity: 0.8 }), i * 1.8, 2.9, 2.3, g); put(new BoxGeometry(6, 0.12, 0.05), glow, 0, 2.1, 2.29, g); },
  };

  for (const id of WORLD_MODULES[world]) { // ghost (not built) + built visual + status lamp per module
    const s = SITES[id], root = new Group(); root.position.set(s.x, 0, s.z); group.add(root);
    const ghost = new Mesh(new BoxGeometry(id === 'solar2' || id === 'shield' ? 12 : id === 'greenhouse' ? 7 : id === 'hab2' ? 8 : 3.6, 0.12, id === 'solar2' ? 3 : id === 'greenhouse' ? 7 : id === 'hab2' ? 4.6 : 3.2), new MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.35, blending: AdditiveBlending, depthWrite: false }));
    ghost.position.y = 0.08; root.add(ghost);
    const body = new Group(); root.add(body); (visuals[id] ?? (() => {}))(body); body.visible = false;
    const lampMat = new MeshBasicMaterial({ color: 0xff4a4a }), lamp = new Mesh(lampGeo, lampMat); lamp.position.set(0, id === 'greenhouse' ? 3.9 : id === 'hab2' ? 5.2 : id === 'shield' ? 3.2 : id === 'solar' ? 2.2 : 3.2, 0); root.add(lamp);
    if (id === 'solar') { root.position.set(-8.5, 0, 6.6); ghost.scale.set(4.2, 1, 0.8); lamp.position.set(0, 2.2, -0.5); }
    const site = sites[id] = { id, def: MODULES[id], root, ghost, body, lamp, lampMat, built: false, pos: { x: s.x, y: 0, z: id === 'solar' ? 8.4 : s.z } };
    site.interact = { id: ID(id), kind: 'site', site: id, pos: site.pos, range: id === 'greenhouse' || id === 'hab2' || id === 'solar2' ? 6.5 : 4.2, active: true, get prompt() { return site.prompt ?? ''; } };
    interactables.push(site.interact);
  }
  const addCollider = id => { const s = SITES[id]; if (s.r) { const c = { x: s.x, z: s.z, r: s.r, top: s.top }; colliders.push(c); return c; } return null; };

  const point = (id, x, z, build, prompt) => { // single-purpose consoles
    const g = new Group(); g.position.set(x, 0, z); group.add(g); build(g); const it = { id, kind: id, pos: { x, y: 0, z }, range: 3, active: true, get prompt() { return it.p ?? prompt; } }; interactables.push(it); return it;
  };
  const depot = point('depot', 3, -1.5, g => { put(new BoxGeometry(1.8, 1.0, 1.2), dark, 0, 0.5, 0, g); put(new BoxGeometry(1.5, 0.12, 0.9), glow, 0, 1.06, 0, g); for (const [x, y] of [[-0.4, 1.4], [0.4, 1.4]]) put(new BoxGeometry(0.6, 0.5, 0.6), mat(0xc9a24a), x, y, 0, g); }, 'Supply depot');
  const lab = point('lab', -4, -3.5, g => { put(new BoxGeometry(1.2, 1.1, 0.8), dark, 0, 0.55, 0, g); put(new SphereGeometry(0.28, 12, 8), mat(0xbfe8ff, { emissive: 0x8fd4ff, emissiveIntensity: 0.9 }), 0, 1.35, 0, g); }, 'Sample analysis lab');
  const uplink = point('uplink', 12.2, -3.5, g => { put(new BoxGeometry(0.9, 1.2, 0.6), dark, 0, 0.6, 0, g); put(new BoxGeometry(0.7, 0.4, 0.04), glow, 0, 0.9, 0.32, g); put(new CylinderGeometry(0.04, 0.04, 1.2, 6), dark, 0.3, 1.8, 0, g); }, 'Earth uplink');
  colliders.push({ x: 3, z: -1.5, r: 1.1, top: 1.0 }, { x: -4, z: -3.5, r: 0.8, top: 1.1 }, { x: 12.2, z: -3.5, r: 0.6, top: 1.2 });

  // Supply caches (construction materials) and ice deposits, placed on gentle ground
  const r = rng(world === 'moon' ? 707 : 808), ground = (lo, hi, n) => { const out = []; for (let i = 0; i < n; i++) { let x, z, t = 0; do { const a = r() * 6.283, d = lo + r() * (hi - lo); x = Math.cos(a) * d; z = Math.sin(a) * d; } while (Math.abs(heightAt(x, z) - heightAt(x + 3, z + 3)) > 0.9 && ++t < 40); out.push({ x, z, y: heightAt(x, z) }); } return out; };
  const crate = new BoxGeometry(0.8, 0.8, 0.8), beam = new CylinderGeometry(0.05, 0.05, 8, 6), ice = new DodecahedronGeometry(0.7, 0);
  ground(38, 60, 3).forEach((p, i) => {
    const g = new Group(); g.position.set(p.x, p.y, p.z); group.add(g);
    put(crate, mat(0xc9a24a), 0, 0.4, 0, g); put(crate, mat(0xb08a35), 0.9, 0.4, 0.3, g).rotation.y = 0.5; put(crate, mat(0xc9a24a), 0.4, 1.15, 0.1, g).rotation.y = 0.2;
    const b = new Mesh(beam, new MeshBasicMaterial({ color: 0xffc766, transparent: true, opacity: 0.3, blending: AdditiveBlending, depthWrite: false })); b.position.y = 4; g.add(b);
    const n = { id: `${world}.cache#${i}`, kind: 'cache', pos: { x: p.x, y: p.y, z: p.z }, range: 3.2, active: true, get prompt() { return n.p ?? 'Salvage construction materials'; } };
    interactables.push(n); nodes.push(n);
  });
  const iceDefs = ground(62, 125, 3);
  iceDefs.forEach((p, i) => {
    const g = new Group(); g.position.set(p.x, p.y, p.z); group.add(g);
    const body = new MeshStandardMaterial({ color: 0xcfeeff, emissive: 0x4aa8ff, emissiveIntensity: 0.7, roughness: 0.25, transparent: true, opacity: 0.9 });
    put(ice, body, 0, 0.5, 0, g); put(ice, body, 0.8, 0.3, 0.4, g).scale.setScalar(0.6); put(ice, body, -0.6, 0.25, -0.5, g).scale.setScalar(0.5);
    const b = new Mesh(beam, new MeshBasicMaterial({ color: 0x7fd0ff, transparent: true, opacity: 0.35, blending: AdditiveBlending, depthWrite: false })); b.position.y = 4; g.add(b);
    const scanId = `${world}.ice#${i}`, n = { id: scanId, kind: 'ice', pos: { x: p.x, y: p.y, z: p.z }, range: 3.2, active: false, group: g, get prompt() { return n.p ?? 'Extract water ice'; } };
    interactables.push(n); nodes.push(n);
    if (world === 'mars') { // Mars: ice must be located with a hold-F survey scan. Moon: ice in shadowed ground is known from orbital data (pre-located).
      g.visible = false; scannables.push({ id: scanId, kind: 'ice', name: 'Subsurface ice anomaly', discovery: `${world}.ice`, pos: new Vector3(p.x, p.y + 1.5, p.z), range: 30, scanned: false });
    } else n.active = true;
  });
  return { group, interactables, scannables, colliders, sites, nodes, depot, lab, uplink, addCollider };
}
