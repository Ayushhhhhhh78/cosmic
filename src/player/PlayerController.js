import { Physics } from '../physics/Physics.js';
// Gameplay tuning (simplified, not suit-accurate): speeds in m/s, jump launch speed in m/s.
export const MOVE = { walk: 3.0, run: 6.0, jumpV: 2.6 };

export class PlayerController {
  constructor(physics, gravity, spawn) {
    this.physics = physics; this.gravity = gravity;
    this.body = { x: spawn.x, y: physics.groundAt(spawn.x, spawn.z, 1e3), z: spawn.z, vx: 0, vy: 0, vz: 0, grounded: true, coyote: 0, radius: 0.4 };
    this.heading = 0; this.speed = 0;
  }
  // mx: strafe (-1..1), mz: forward (-1..1), yaw: camera yaw. Returns true when a jump started.
  update(dt, mx, mz, run, jump, yaw) {
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw), rx = Math.cos(yaw), rz = -Math.sin(yaw);
    let wx = fx * mz + rx * mx, wz = fz * mz + rz * mx; const len = Math.hypot(wx, wz), has = len > 1e-4;
    if (has) { const v = run ? MOVE.run : MOVE.walk; wx = wx / len * v; wz = wz / len * v; } else { wx = 0; wz = 0; }
    const jumped = this.physics.step(this.body, dt, wx, wz, has, jump, this.gravity, MOVE.jumpV);
    this.speed = Math.hypot(this.body.vx, this.body.vz);
    if (has) { // turn toward travel direction by the shortest arc
      const target = Math.atan2(wx, wz); let d = target - this.heading;
      d = Math.atan2(Math.sin(d), Math.cos(d)); this.heading += d * Math.min(1, dt * 12);
    }
    return jumped;
  }
}
