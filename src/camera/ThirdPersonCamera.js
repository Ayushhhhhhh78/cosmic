import { Vector3 } from 'three';
import { clamp } from '../utils/noise.js';

export class ThirdPersonCamera {
  yaw = 0; pitch = 0.28; dist = 5.5; #target = new Vector3(); #want = new Vector3(); #init = false;
  constructor(camera, heightAt, near = null) { this.camera = camera; this.heightAt = heightAt; this.near = near; } // near(x, z): colliders { x, z, r, top } around a point (optional)
  look(dx, dy, wheel) {
    this.yaw -= dx * 0.0022; this.pitch = clamp(this.pitch + dy * 0.0022, -0.25, 1.25);
    this.dist = clamp(this.dist + wheel * 0.004, 2.5, 10);
  }
  update(dt, p) {
    const tx = p.x, ty = p.y + 1.5, tz = p.z;
    const first = !this.#init;
    if (first) { this.#target.set(tx, ty, tz); this.#init = true; }
    else this.#target.lerp(this.#want.set(tx, ty, tz), 1 - Math.exp(-14 * dt));
    const cp = Math.cos(this.pitch);
    this.#want.set(this.#target.x + Math.sin(this.yaw) * cp * this.dist, this.#target.y + Math.sin(this.pitch) * this.dist, this.#target.z + Math.cos(this.yaw) * cp * this.dist);
    const floor = this.heightAt(this.#want.x, this.#want.z) + 0.6; if (this.#want.y < floor) this.#want.y = floor; // keep the camera out of the ground
    if (this.near) for (let pass = 0; pass < 2; pass++) for (const c of this.near(this.#want.x, this.#want.z)) { // and out of buildings and rocks, so walls never swallow the view
      if (c.r < 0.9 || this.#want.y > c.top + 0.4) continue; // small rocks are ignored; a camera above the roof is fine
      let dx = this.#want.x - c.x, dz = this.#want.z - c.z, d = Math.hypot(dx, dz); const min = c.r + 0.5;
      if (d >= min) continue; if (d < 1e-3) { dx = this.#target.x - c.x; dz = this.#target.z - c.z; d = Math.hypot(dx, dz) || 1; }
      this.#want.x = c.x + dx / d * min; this.#want.z = c.z + dz / d * min;
    }
    if (first) this.camera.position.copy(this.#want); else this.camera.position.lerp(this.#want, 1 - Math.exp(-20 * dt));
    this.camera.lookAt(this.#target);
  }
  snap() { this.#init = false; }
}
