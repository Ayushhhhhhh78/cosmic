import { IcosahedronGeometry, InstancedMesh, MeshStandardMaterial, Matrix4, Quaternion, Euler, Vector3, Color, Group, Mesh, DodecahedronGeometry, CylinderGeometry, MeshBasicMaterial, AdditiveBlending } from 'three';
import { rng, hash2 } from '../utils/noise.js';
import { SAMPLE_TYPES } from '../data/discoveries.js';

export function scatterRocks(world, heightAt, quality = 'medium') {
  const base = world === 'moon' ? 1100 : 900, count = Math.round(base * (quality === 'low' ? 0.6 : 1));
  const geo = new IcosahedronGeometry(1, 1), pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) { // shared corners get the same jitter so the rock stays closed
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i), f = 0.75 + 0.5 * hash2(Math.round(x * 50) + Math.round(z * 50) * 7919, Math.round(y * 50), 3);
    pos.setXYZ(i, x * f, y * f, z * f);
  }
  geo.computeVertexNormals();
  const mesh = new InstancedMesh(geo, new MeshStandardMaterial({ roughness: 1, flatShading: true }), count);
  mesh.castShadow = mesh.receiveShadow = true; mesh.frustumCulled = false;
  const r = rng(world === 'moon' ? 101 : 202), m = new Matrix4(), q = new Quaternion(), e = new Euler(), sc = new Vector3(), p = new Vector3(), c = new Color(), colliders = [];
  for (let i = 0; i < count; i++) {
    let x, z; do { x = (r() * 2 - 1) * 225; z = (r() * 2 - 1) * 225; } while (Math.hypot(x, z) < 38);
    const s = 0.25 + 3.2 * Math.pow(r(), 3.5), sy = 0.55 + 0.3 * r(), y = heightAt(x, z);
    e.set((r() - 0.5) * 0.3, r() * 6.28, (r() - 0.5) * 0.3); q.setFromEuler(e);
    p.set(x, y + s * sy * 0.25, z); sc.set(s * (0.8 + 0.4 * r()), s * sy, s * (0.8 + 0.4 * r()));
    mesh.setMatrixAt(i, m.compose(p, q, sc));
    const v = 0.3 + 0.3 * r(); world === 'moon' ? c.setRGB(v, v, v * 1.03) : c.setRGB(v * 1.5, v * 0.7, v * 0.5);
    mesh.setColorAt(i, c);
    if (s >= 0.5) colliders.push({ x, z, r: s * 0.85, top: y + s * sy * 0.9 });
  }
  return { mesh, colliders };
}

// Collectible samples: two of each type, placed on reachable ground away from the outpost.
export function createSamples(world, heightAt) {
  const group = new Group(), items = [], r = rng(world === 'moon' ? 303 : 404), types = SAMPLE_TYPES[world];
  const rock = new DodecahedronGeometry(0.28, 0), beam = new CylinderGeometry(0.04, 0.04, 9, 6);
  for (let i = 0; i < types.length * 2; i++) {
    const type = types[i % types.length]; let x, z, y, tries = 0;
    do { const a = r() * 6.283, d = 45 + r() * 105; x = Math.cos(a) * d; z = Math.sin(a) * d; y = heightAt(x, z); } while (y > 10 && ++tries < 30);
    const g = new Group(); g.position.set(x, y + 0.3, z);
    g.add(new Mesh(rock, new MeshStandardMaterial({ color: type.color, emissive: type.color, emissiveIntensity: 0.9, roughness: 0.4 })));
    const b = new Mesh(beam, new MeshBasicMaterial({ color: type.color, transparent: true, opacity: 0.35, blending: AdditiveBlending, depthWrite: false })); b.position.y = 4.5; g.add(b);
    group.add(g);
    items.push({ id: `${world}.sample#${i}`, kind: 'sample', type: type.key, label: type.label, discovery: `${world}.sample.${type.key}`, pos: { x, y, z }, range: 2.6, active: true, group: g, beam: b, baseY: y + 0.3, prompt: `Collect ${type.label}` });
  }
  return { group, items };
}
