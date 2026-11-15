import { Group, Mesh, MeshStandardMaterial, CylinderGeometry, BoxGeometry, SphereGeometry, CircleGeometry, RingGeometry, Vector3, Quaternion, DoubleSide, MeshBasicMaterial } from 'three';
import { EARTH_DIR } from './sky.js';
import { UNLOCKS } from '../data/discoveries.js';

const Y = new Vector3(0, 1, 0);
// Builds the research outpost and rover on the flat pad (terrain height is exactly 0 there).
export function createOutpost(world, accent) {
  const group = new Group(), colliders = [], interactables = [], scannables = [], U = UNLOCKS[world];
  const hull = new MeshStandardMaterial({ color: 0xe6e8ee, roughness: 0.55, metalness: 0.15 });
  const dark = new MeshStandardMaterial({ color: 0x3a3f4a, roughness: 0.7, metalness: 0.3 });
  const panel = new MeshStandardMaterial({ color: 0x1b2a56, roughness: 0.3, metalness: 0.6, emissive: 0x070d22 });
  const glow = new MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 1.2 });
  const win = new MeshStandardMaterial({ color: 0xbfe8ff, emissive: 0x8fd4ff, emissiveIntensity: 0.8 });
  const put = (geo, mat, x, y, z, parent = group) => { const m = new Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; parent.add(m); return m; };
  const circle = (x, z, r, top) => colliders.push({ x, z, r, top });

  const habitat = (len, r, x, z, rotY) => { // pressurised module lying on the pad
    const g = new Group(); g.position.set(x, r + 0.25, z); g.rotation.y = rotY; group.add(g);
    const body = put(new CylinderGeometry(r, r, len, 28), hull, 0, 0, 0, g); body.rotation.z = Math.PI / 2;
    for (let i = -1; i <= 1; i += 2) put(new BoxGeometry(0.5, 0.4, 0.06), win, i * len * 0.22, r * 0.25, r - 0.02, g);
    put(new BoxGeometry(len * 0.8, 0.12, 0.05), glow, 0, -r * 0.2, r - 0.01, g);
    put(new CylinderGeometry(r * 0.75, r * 0.75, 0.5, 20), dark, 0, 0, 0, g).rotation.z = Math.PI / 2; // equipment collar
    const ax = new Vector3(1, 0, 0).applyAxisAngle(Y, rotY);
    for (let o = -len / 2 + r; o <= len / 2 - r + 0.01; o += r * 1.5) circle(x + ax.x * o, z + ax.z * o, r + 0.15, r * 2 + 0.25);
    return g;
  };
  const main = habitat(10, 2.2, 0, -10, 0); habitat(10, 2.2, 9, -5, Math.PI / 2);
  const tunnel = put(new CylinderGeometry(1, 1, 4, 16), dark, 7, 1.2, -10); tunnel.rotation.z = Math.PI / 2; circle(7, -10, 1.2, 2.2);
  if (world === 'mars') { // shielded dome
    put(new SphereGeometry(4, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), hull, -11, 0.05, -5); put(new CylinderGeometry(4.05, 4.05, 0.3, 28), dark, -11, 0.15, -5); circle(-11, -5, 4.2, 4);
  } else { // propellant / water tanks
    for (const z of [-8, -12]) { put(new CylinderGeometry(1.4, 1.4, 3.4, 20), hull, -9, 1.9, z); circle(-9, z, 1.5, 3.7); }
  }
  put(new SphereGeometry(0.22, 12, 8), glow, 0, 4.9, -10); // beacon

  for (let i = 0; i < 4; i++) { // solar array
    const x = -16 + i * 4.2, pivot = new Group(); pivot.position.set(x, 1.75, 6); pivot.rotation.x = -0.55; group.add(pivot);
    put(new BoxGeometry(3.8, 0.1, 2.4), panel, 0, 0, 0, pivot); put(new BoxGeometry(3.8, 0.02, 0.06), dark, 0, 0.06, 0, pivot);
    put(new CylinderGeometry(0.09, 0.09, 1.7, 8), dark, x, 0.85, 6.3); circle(x, 6.3, 0.3, 1.7);
  }
  scannables.push({ id: `${world}.solar`, kind: 'solar', name: 'Solar array', discovery: U.solar, pos: new Vector3(-10, 1.8, 6), range: 18, scanned: false });

  const mast = put(new CylinderGeometry(0.15, 0.2, 3, 10), dark, 14, 1.5, -6); circle(14, -6, 0.5, 3);
  const pivot = new Group(); pivot.position.set(14, 3.3, -6); group.add(pivot);
  const dishDir = world === 'moon' ? EARTH_DIR : new Vector3(-0.3, 0.8, -0.5).normalize();
  pivot.quaternion.copy(new Quaternion().setFromUnitVectors(Y, dishDir));
  const dish = put(new SphereGeometry(1.9, 28, 10, 0, Math.PI * 2, 0, 0.95), new MeshStandardMaterial({ color: 0xf2f3f6, roughness: 0.4, metalness: 0.3, side: DoubleSide }), 0, 0, 0, pivot); dish.rotation.x = Math.PI; dish.position.y = 1.9;
  put(new CylinderGeometry(0.05, 0.05, 1.6, 6), dark, 0, 0.9, 0, pivot); put(new SphereGeometry(0.14, 8, 6), glow, 0, 1.75, 0, pivot);
  scannables.push({ id: `${world}.dish`, kind: 'dish', name: 'Communications dish', discovery: U.dish, pos: new Vector3(14, 3.5, -6), range: 20, scanned: false });
  scannables.push({ id: `${world}.habitat`, kind: 'habitat', name: 'Habitat module', discovery: U.habitat, pos: new Vector3(0, 2.4, -10), range: 18, scanned: false });

  const pad = new Mesh(new CircleGeometry(9, 40), new MeshStandardMaterial({ color: 0x4a4e58, roughness: 0.9 })); pad.rotation.x = -Math.PI / 2; pad.position.set(0, 0.03, 22); pad.receiveShadow = true; group.add(pad);
  const ring = new Mesh(new RingGeometry(7.4, 8, 48), new MeshBasicMaterial({ color: accent })); ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.05, 22); group.add(ring);

  const term = new Group(); term.position.set(3, 0, -6.4); group.add(term);
  put(new BoxGeometry(0.9, 1.1, 0.5), dark, 0, 0.55, 0, term); put(new BoxGeometry(0.7, 0.45, 0.04), win, 0, 0.85, 0.27, term); circle(3, -6.4, 0.6, 1.1);
  interactables.push({ id: 'terminal', kind: 'terminal', pos: { x: 3, y: 0, z: -6.4 }, range: 3, active: true, prompt: 'Read environment console', discoveries: U.terminal });

  // Rover
  const rover = new Group(), rx = 14, rz = 7, rot = 0.6; rover.position.set(rx, 0, rz); rover.rotation.y = rot; group.add(rover);
  put(new BoxGeometry(3.4, 0.7, 2), hull, 0, 1.05, 0, rover); put(new BoxGeometry(1.6, 0.5, 1.4), dark, -0.3, 1.65, 0, rover);
  put(new BoxGeometry(1.5, 0.06, 1.2), panel, 0.9, 1.43, 0, rover).position.y = 1.43; put(new BoxGeometry(3.4, 0.08, 0.05), glow, 0, 0.95, 1.01, rover);
  const wheel = new CylinderGeometry(0.5, 0.5, 0.34, 20);
  for (const wx of [-1.3, 0, 1.3]) for (const wz of [-1.2, 1.2]) put(wheel, dark, wx, 0.5, wz, rover).rotation.x = Math.PI / 2;
  put(new CylinderGeometry(0.05, 0.05, 1.3, 6), dark, 1.2, 2.1, 0.6, rover); put(new BoxGeometry(0.4, 0.25, 0.3), hull, 1.2, 2.8, 0.6, rover);
  const rax = new Vector3(1, 0, 0).applyAxisAngle(Y, rot);
  for (const o of [-1.1, 1.1]) circle(rx + rax.x * o, rz + rax.z * o, 1.4, 1.7);
  interactables.push({ id: 'rover', kind: 'rover', pos: { x: rx, y: 0, z: rz }, range: 4.6, active: true, prompt: 'Inspect rover', discoveries: [U.rover] });

  return { group, colliders, interactables, scannables };
}
