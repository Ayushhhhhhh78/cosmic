import { Group, Mesh, MeshStandardMaterial, BoxGeometry, CylinderGeometry, SphereGeometry } from 'three';

// Procedural suited astronaut, ~2 m tall with the model facing +z. Feet at y = 0.
export class Astronaut {
  group = new Group(); #t = 0;
  constructor(accent = 0x5b8cff) {
    const suit = new MeshStandardMaterial({ color: 0xf1f2f6, roughness: 0.6 }), grey = new MeshStandardMaterial({ color: 0x8a8f9c, roughness: 0.7 });
    const visor = new MeshStandardMaterial({ color: 0xc9a24a, metalness: 0.9, roughness: 0.18 }), tint = new MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 0.6 });
    const mk = (geo, mat, x, y, z, parent = this.group) => { const m = new Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m; };
    mk(new CylinderGeometry(0.3, 0.27, 0.62, 16), suit, 0, 1.2, 0); mk(new BoxGeometry(0.5, 0.66, 0.28), grey, 0, 1.25, -0.31); mk(new BoxGeometry(0.22, 0.12, 0.04), tint, 0, 1.3, 0.28);
    mk(new SphereGeometry(0.28, 20, 14), suit, 0, 1.72, 0); const v = mk(new SphereGeometry(0.2, 16, 12), visor, 0, 1.72, 0.12); v.scale.set(1.15, 0.85, 0.7);
    const limb = (len, r, x, y, mat) => { const p = new Group(); p.position.set(x, y, 0); this.group.add(p); mk(new CylinderGeometry(r, r * 0.9, len, 10), mat, 0, -len / 2, 0, p); return p; };
    this.legL = limb(0.92, 0.11, -0.14, 0.92, suit); this.legR = limb(0.92, 0.11, 0.14, 0.92, suit);
    for (const l of [this.legL, this.legR]) mk(new BoxGeometry(0.2, 0.14, 0.34), grey, 0, -0.9, 0.06, l);
    this.armL = limb(0.6, 0.085, -0.4, 1.45, suit); this.armR = limb(0.6, 0.085, 0.4, 1.45, suit);
  }
  animate(dt, speed, grounded, vy) {
    this.#t += dt * (2 + speed * 1.6); const k = Math.min(1, speed / 3), s = Math.sin(this.#t);
    if (grounded) { this.legL.rotation.x = s * 0.75 * k; this.legR.rotation.x = -s * 0.75 * k; this.armL.rotation.x = -s * 0.6 * k; this.armR.rotation.x = s * 0.6 * k; }
    else { const a = Math.max(-0.4, Math.min(0.5, vy * 0.12)); this.legL.rotation.x = 0.35 + a; this.legR.rotation.x = -0.25 - a * 0.5; this.armL.rotation.x = -0.9; this.armR.rotation.x = -0.9; }
    this.group.children[0].position.y = 1.2 + (grounded ? Math.abs(s) * 0.02 * k : 0);
  }
}
