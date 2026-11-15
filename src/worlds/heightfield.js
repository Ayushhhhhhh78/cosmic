// Pure terrain height function per world (no Three.js). The mesh, rocks, outpost and physics all sample this one function.
import { fbm, rng, smoothstep } from '../utils/noise.js';

export const WORLD_SIZE = 520, HALF = 240, PAD_R = 34, PAD_BLEND = 62;
const CFG = {
  moon: { seed: 11, rolling: 2.2, rollFreq: 0.012, mountains: 38, craters: 46, crMin: 5, crMax: 34, dunes: 0 },
  mars: { seed: 23, rolling: 3.0, rollFreq: 0.010, mountains: 46, craters: 22, crMin: 5, crMax: 28, dunes: 3.2 },
};
const cache = {};

export function craterList(world) {
  if (cache[world]) return cache[world];
  const c = CFG[world], r = rng(c.seed * 31 + 5), out = [];
  for (let i = 0; i < c.craters; i++) {
    const a = r() * Math.PI * 2, dist = 85 + r() * 135;
    let rad = c.crMin + (c.crMax - c.crMin) * Math.pow(r(), 2.2);
    rad = Math.min(rad, (dist - PAD_BLEND) / 1.6);
    if (rad < c.crMin) continue;
    out.push({ x: Math.cos(a) * dist, z: Math.sin(a) * dist, r: rad, depth: rad * 0.28, rim: rad * 0.08 });
  }
  return (cache[world] = out);
}

export function createHeightField(world) {
  const c = CFG[world], craters = craterList(world), s = c.seed;
  return function heightAt(x, z) {
    const d = Math.hypot(x, z);
    let h = (fbm(x * c.rollFreq, z * c.rollFreq, s, 4) - 0.45) * c.rolling * 2;
    h += (fbm(x * 0.08, z * 0.08, s + 3, 3) - 0.4) * 0.8;
    const edge = smoothstep(150, 245, d);
    if (edge > 0) { const rg = 1 - Math.abs(fbm(x * 0.015, z * 0.015, s + 7, 5) * 2 - 0.95); h += edge * (8 + rg * rg * c.mountains); }
    const hill = smoothstep(0.55, 0.8, fbm(x * 0.006 + 50, z * 0.006, s + 9, 3));
    if (hill > 0) h += hill * c.mountains * 0.6 * smoothstep(80, 140, d);
    if (c.dunes) {
      const mask = smoothstep(0.45, 0.65, fbm(x * 0.01 + 200, z * 0.01, s + 11, 2));
      if (mask > 0) {
        const phase = (x * 0.8 + z * 0.6) * 0.07 + fbm(x * 0.02, z * 0.02, s + 13, 2) * 6;
        h += mask * Math.pow(1 - Math.abs(Math.sin(phase)), 1.6) * c.dunes;
      }
    }
    for (const cr of craters) {
      const dx = x - cr.x, dz = z - cr.z, q = dx * dx + dz * dz, lim = cr.r * 2;
      if (q > lim * lim) continue;
      const dd = Math.sqrt(q) / cr.r;
      if (dd < 1) h -= cr.depth * (1 - dd * dd);
      h += cr.rim * Math.exp(-((dd - 1) * (dd - 1)) / 0.04);
    }
    return h * smoothstep(PAD_R, PAD_BLEND, d);
  };
}
