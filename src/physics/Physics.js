// Lightweight kinematic character physics: heightfield ground + static circle colliders (rocks, modules).
// Chosen over Rapier for Stage 3: no WASM load, deterministic, and unit-testable offline. See DEVELOPMENT_STATUS.md.
export const STEP = 0.4; // max ledge height the astronaut steps onto
const EMPTY = [];

export class Physics {
  constructor({ heightAt, colliders = [], half = 238, cell = 16 }) {
    this.heightAt = heightAt; this.half = half; this.cell = cell; this.grid = new Map();
    colliders.forEach(c => this.add(c));
  }
  add(c) { // collider: { x, z, r, top } with absolute top height
    const k = this.cell, R = c.r + 0.6;
    for (let i = Math.floor((c.x - R) / k); i <= Math.floor((c.x + R) / k); i++)
      for (let j = Math.floor((c.z - R) / k); j <= Math.floor((c.z + R) / k); j++) {
        const key = i + ',' + j; (this.grid.get(key) ?? this.grid.set(key, []).get(key)).push(c);
      }
  }
  near(x, z) { return this.grid.get(Math.floor(x / this.cell) + ',' + Math.floor(z / this.cell)) ?? EMPTY; }
  groundAt(x, z, feetY) {
    let g = this.heightAt(x, z);
    for (const c of this.near(x, z)) {
      const dx = x - c.x, dz = z - c.z;
      if (dx * dx + dz * dz < c.r * c.r && c.top <= feetY + STEP && c.top > g) g = c.top;
    }
    return g;
  }
  #terrainOk(b, px, pz) {
    const rise = this.heightAt(px, pz) - b.y;
    if (b.grounded) return rise <= 0 || rise <= Math.hypot(px - b.x, pz - b.z) * 1.15 + 1e-4; // ~49 degree slope limit
    return rise <= 0.35;
  }
  // body: { x,y,z,vx,vy,vz,grounded,coyote,radius }. Returns true if a jump started this step.
  step(b, dt, wishX, wishZ, hasInput, jump, gravity, jumpV) {
    if (b.grounded || hasInput) {
      const ax = wishX - b.vx, az = wishZ - b.vz, len = Math.hypot(ax, az), max = (b.grounded ? 24 : 4) * dt;
      if (len > max) { b.vx += ax / len * max; b.vz += az / len * max; } else { b.vx = wishX; b.vz = wishZ; }
    }
    let jumped = false;
    if (jump && (b.grounded || b.coyote > 0)) { b.vy = jumpV; b.grounded = false; b.coyote = 0; jumped = true; }
    const wasGrounded = b.grounded;
    if (!b.grounded) b.vy -= gravity * dt;

    const lim = this.half, nx = Math.max(-lim, Math.min(lim, b.x + b.vx * dt)), nz = Math.max(-lim, Math.min(lim, b.z + b.vz * dt));
    if (this.#terrainOk(b, nx, nz)) { b.x = nx; b.z = nz; }
    else if (this.#terrainOk(b, nx, b.z)) { b.x = nx; b.vz = 0; }
    else if (this.#terrainOk(b, b.x, nz)) { b.z = nz; b.vx = 0; }
    else { b.vx = 0; b.vz = 0; }

    for (const c of this.near(b.x, b.z)) { // push out of solid colliders
      if (c.top <= b.y + STEP) continue;
      let dx = b.x - c.x, dz = b.z - c.z, d = Math.hypot(dx, dz); const min = c.r + b.radius;
      if (d < min) { if (d < 1e-4) { dx = 1; dz = 0; d = 1; } b.x = c.x + dx / d * min; b.z = c.z + dz / d * min; }
    }

    const prevY = b.y; b.y += b.vy * dt;
    const gy = this.groundAt(b.x, b.z, prevY);
    if (b.vy <= 0 && b.y <= gy) { b.y = gy; b.vy = 0; b.grounded = true; b.coyote = 0.12; }
    else if (wasGrounded && !jumped && prevY - gy <= 0.45) { b.y = gy; b.vy = 0; b.grounded = true; b.coyote = 0.12; }
    else { b.grounded = false; b.coyote = Math.max(0, b.coyote - dt); }
    return jumped;
  }
}
