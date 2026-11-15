// Offline planet textures from seeded value noise. Stylised, not survey data.
import { CanvasTexture, SRGBColorSpace } from 'three';
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
function noiseField(seed) {
  const r = rng(seed), g = 64, grid = Array.from({ length: g * g }, r);
  const at = (x, y) => grid[((y % g + g) % g) * g + ((x % g + g) % g)];
  const sm = t => t * t * (3 - 2 * t);
  return (u, v) => {
    let a = 0, amp = 0.5, f = 4;
    for (let o = 0; o < 5; o++, amp /= 2, f *= 2) {
      const x = u * f, y = v * f * 0.5, xi = Math.floor(x), yi = Math.floor(y), tx = sm(x - xi), ty = sm(y - yi);
      const p = at(xi, yi) * (1 - tx) + at(xi + 1, yi) * tx, q = at(xi, yi + 1) * (1 - tx) + at(xi + 1, yi + 1) * tx;
      a += amp * (p * (1 - ty) + q * ty);
    }
    return a;
  };
}
export function planetTexture(kind, size = 512) {
  const w = size * 2, h = size, c = document.createElement('canvas'); c.width = w; c.height = h;
  const ctx = c.getContext('2d'), img = ctx.createImageData(w, h), n = noiseField(kind === 'moon' ? 7 : 21);
  const base = kind === 'moon' ? [150, 150, 154] : [176, 84, 52], dark = kind === 'moon' ? [60, 60, 66] : [92, 42, 30];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const t = Math.min(1, Math.max(0, (n(x / w, y / h) - 0.25) * 1.8)), i = (y * w + x) * 4;
    for (let k = 0; k < 3; k++) img.data[i + k] = dark[k] + (base[k] - dark[k]) * t;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const r = rng(99);
  for (let i = 0; i < (kind === 'moon' ? 160 : 60); i++) {
    const x = r() * w, y = r() * h, rad = 2 + r() * r() * 26;
    ctx.beginPath(); ctx.arc(x, y, rad, 0, 6.2832);
    ctx.fillStyle = 'rgba(0,0,0,0.22)'; ctx.fill();
    ctx.lineWidth = Math.max(1, rad / 6); ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.stroke();
  }
  const tex = new CanvasTexture(c); tex.colorSpace = SRGBColorSpace; tex.anisotropy = 4; return tex;
}
