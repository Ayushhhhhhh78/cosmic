// Proximity interaction (E) and hold-to-scan (F). Pure data in, state out; the scene wires visuals.
export const SCAN_TIME = 1.4, SCAN_CONE = 0.6;

export class Interaction {
  constructor({ interactables, scannables, onInteract, onScanned }) {
    Object.assign(this, { interactables, scannables, onInteract, onScanned });
    this.target = null; this.scanTarget = null; this.progress = 0;
  }
  // pos: player {x,y,z}; fwd: camera forward {x,y,z} (unit); scanHeld: is F down
  update(dt, pos, fwd, scanHeld) {
    let best = null, bd = Infinity;
    for (const it of this.interactables) {
      if (!it.active) continue;
      const d = Math.hypot(it.pos.x - pos.x, it.pos.z - pos.z);
      if (d < it.range && Math.abs(it.pos.y - pos.y) < 4 && d < bd) { best = it; bd = d; }
    }
    this.target = best;

    const ex = pos.x, ey = pos.y + 1.4, ez = pos.z; let scan = null; bd = Infinity;
    for (const s of this.scannables) {
      if (s.scanned) continue;
      const dx = s.pos.x - ex, dy = s.pos.y - ey, dz = s.pos.z - ez, d = Math.hypot(dx, dy, dz);
      if (d > s.range || d < 1e-3) continue;
      if ((dx * fwd.x + dy * fwd.y + dz * fwd.z) / d < SCAN_CONE) continue;
      if (d < bd) { scan = s; bd = d; }
    }
    if (scan !== this.scanTarget) { this.scanTarget = scan; this.progress = 0; }
    if (scan && scanHeld) {
      this.progress += dt / SCAN_TIME;
      if (this.progress >= 1) { scan.scanned = true; this.progress = 0; this.scanTarget = null; this.onScanned(scan); }
    } else this.progress = 0;
    return { interact: this.target, scan: this.scanTarget, progress: this.progress };
  }
  interact() { if (this.target) this.onInteract(this.target); }
}
