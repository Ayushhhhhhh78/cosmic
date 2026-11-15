import { Scene, PerspectiveCamera, DirectionalLight, AmbientLight } from 'three';
import { starfield, planet } from './common.js';

export class MenuScene {
  scene = new Scene();
  camera = new PerspectiveCamera(45, 1, 0.1, 400);
  constructor() {
    this.stars = starfield(); this.scene.add(this.stars);
    this.moon = planet('moon', 4); this.moon.position.set(6.5, -1.5, -6); this.scene.add(this.moon);
    const sun = new DirectionalLight(0xffffff, 3); sun.position.set(-8, 4, 6); this.scene.add(sun, new AmbientLight(0x1a2040, 0.6));
    this.camera.position.set(0, 0, 8);
  }
  enter() {}
  resize(w, h) { this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }
  update(dt, t) {
    this.moon.rotation.y += dt * 0.03; this.stars.rotation.y += dt * 0.004;
    this.camera.position.x = Math.sin(t * 0.07) * 0.6; this.camera.lookAt(2, -0.5, -4);
  }
}
