import { Scene, PerspectiveCamera, DirectionalLight, AmbientLight, Raycaster, Vector2, Vector3 } from 'three';
import gsap from 'gsap';
import { starfield, planet } from './common.js';
import { WORLDS } from '../data/worlds.js';

const POS = { moon: new Vector3(-3.4, 0, 0), mars: new Vector3(3.4, 0, 0) };

export class WorldSelectScene {
  scene = new Scene();
  camera = new PerspectiveCamera(45, 1, 0.1, 400);
  #ray = new Raycaster(); #mouse = new Vector2(-2, -2); #look = new Vector3(0, 0, 0); #hover = null;
  constructor(app, onPick) {
    this.app = app; this.onPick = onPick;
    this.scene.add(starfield());
    this.bodies = { moon: planet('moon', 2.2), mars: planet('mars', 1.9, WORLDS.mars.atmosphere) };
    for (const id in this.bodies) { this.bodies[id].position.copy(POS[id]); this.bodies[id].userData.world = id; this.scene.add(this.bodies[id]); }
    const sun = new DirectionalLight(0xffffff, 3); sun.position.set(0, 4, 8); this.scene.add(sun, new AmbientLight(0x1a2040, 0.7));
    this.camera.position.set(0, 0, 14);
    addEventListener('pointermove', e => { this.#mouse.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); });
    app.renderer.domElement.addEventListener('click', () => { if (this.app.current === this && this.#hover) this.focus(this.#hover, true); });
  }
  enter() { this.selected = null; this.camera.position.set(0, 0, 14); this.#look.set(0, 0, 0); document.body.style.cursor = ''; this.app.bus.emit('worldFocus', null); }
  exit() { document.body.style.cursor = ''; gsap.killTweensOf(this.camera.position); }
  focus(id, announce) {
    this.selected = id;
    const p = POS[id], r = this.app.settings.reducedMotion ? 0 : 1.1;
    gsap.to(this.camera.position, { x: p.x * 0.6, y: 0, z: 8, duration: r, ease: 'power2.inOut' });
    gsap.to(this.#look, { x: p.x, y: 0, z: 0, duration: r, ease: 'power2.inOut' });
    if (announce) this.app.bus.emit('worldFocus', id);
  }
  resize(w, h) { this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }
  update(dt) {
    this.#ray.setFromCamera(this.#mouse, this.camera);
    const hit = this.#ray.intersectObjects(Object.values(this.bodies), false)[0];
    this.#hover = hit ? hit.object.userData.world : null;
    document.body.style.cursor = this.#hover ? 'pointer' : '';
    for (const id in this.bodies) {
      const b = this.bodies[id]; b.rotation.y += dt * (id === this.selected || id === this.#hover ? 0.18 : 0.06);
      b.scale.setScalar(b.scale.x + ((id === this.#hover || id === this.selected ? 1.05 : 1) - b.scale.x) * Math.min(1, dt * 6));
    }
    this.camera.lookAt(this.#look);
  }
}
