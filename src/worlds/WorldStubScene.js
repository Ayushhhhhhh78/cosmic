// Stage 1 stand-in for a playable world: proves per-world saves and navigation. Replaced by real terrain in Stage 2.
import { Scene, PerspectiveCamera, PlaneGeometry, Mesh, MeshStandardMaterial, DirectionalLight, AmbientLight, Color, Fog } from 'three';
import { WORLDS } from '../data/worlds.js';
import { starfield } from '../scenes/common.js';

export class WorldStubScene {
  scene = new Scene();
  camera = new PerspectiveCamera(60, 1, 0.1, 500);
  constructor() {
    this.ground = new Mesh(new PlaneGeometry(400, 400), new MeshStandardMaterial({ roughness: 1 }));
    this.ground.rotation.x = -Math.PI / 2; this.scene.add(this.ground, starfield(900, 300));
    const sun = new DirectionalLight(0xffffff, 2.5); sun.position.set(30, 40, 20);
    this.scene.add(sun, new AmbientLight(0x303850, 0.8));
  }
  enter({ world }) {
    const w = WORLDS[world];
    this.ground.material.color.set(world === 'moon' ? 0x8d8d92 : 0x9b4a2f);
    this.scene.background = new Color(world === 'moon' ? 0x000000 : 0x2a1410);
    this.scene.fog = world === 'mars' ? new Fog(0x4a2218, 30, 220) : null;
    this.camera.position.set(0, 3, 14); this.camera.lookAt(0, 1, 0); this.world = w;
  }
  resize(w, h) { this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); }
  update(dt, t) { this.camera.position.x = Math.sin(t * 0.1) * 6; this.camera.lookAt(0, 1, 0); }
}
