import { PlaneGeometry, Float32BufferAttribute, Mesh, MeshStandardMaterial, CanvasTexture, RepeatWrapping, SRGBColorSpace } from 'three';
import { WORLD_SIZE } from './heightfield.js';
import { fbm, rng, clamp } from '../utils/noise.js';

const PAL = { moon: { a: [0.66, 0.66, 0.68], b: [0.3, 0.3, 0.33], seed: 5 }, mars: { a: [0.78, 0.42, 0.24], b: [0.34, 0.17, 0.12], seed: 8 } };
const SEGS = { low: 192, medium: 256, high: 320 };

function grainTexture() { // tiling speckle for close-up surface detail
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d'), r = rng(4); g.fillStyle = '#bdbdbd'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 5000; i++) { const s = 1 + r() * 2.5; g.fillStyle = r() < 0.5 ? 'rgba(0,0,0,.16)' : 'rgba(255,255,255,.14)'; g.fillRect(r() * 256, r() * 256, s, s); }
  const t = new CanvasTexture(c); t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(WORLD_SIZE / 3, WORLD_SIZE / 3); t.colorSpace = SRGBColorSpace; t.anisotropy = 4; return t;
}

export function createTerrain(world, heightAt, quality = 'medium') {
  const n = SEGS[quality] ?? 256, geo = new PlaneGeometry(WORLD_SIZE, WORLD_SIZE, n, n); geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) pos.setY(i, heightAt(pos.getX(i), pos.getZ(i)));
  geo.computeVertexNormals();
  const nor = geo.attributes.normal, col = new Float32Array(pos.count * 3), p = PAL[world];
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), t = clamp((1 - nor.getY(i)) * 4.5, 0, 1), v = 0.78 + 0.44 * fbm(x * 0.045, z * 0.045, p.seed, 3);
    for (let k = 0; k < 3; k++) col[i * 3 + k] = (p.a[k] + (p.b[k] - p.a[k]) * t) * v;
  }
  geo.setAttribute('color', new Float32BufferAttribute(col, 3));
  const tex = grainTexture();
  const mesh = new Mesh(geo, new MeshStandardMaterial({ vertexColors: true, map: tex, bumpMap: tex, bumpScale: 1, roughness: 1, metalness: 0 }));
  mesh.receiveShadow = true; mesh.frustumCulled = false; mesh.name = 'terrain';
  return mesh;
}
