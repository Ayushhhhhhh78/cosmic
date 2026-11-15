// Dedicated 3D Background Scene for the Learning Lab.
import { Scene, PerspectiveCamera, DirectionalLight, AmbientLight, Group, Mesh, MeshStandardMaterial, TorusGeometry, SphereGeometry, RingGeometry, PointLight } from 'three';
import { starfield } from '../scenes/common.js';

export class LearningLabScene {
  scene = new Scene();
  camera = new PerspectiveCamera(45, 1, 0.1, 500);

  constructor() {
    this.stars = starfield();
    this.scene.add(this.stars);

    // Holographic Orbital Science Station
    this.station = new Group();
    const stationMat = new MeshStandardMaterial({ color: 0x4a5d8a, roughness: 0.4, metalness: 0.8 });
    const ringMat = new MeshStandardMaterial({ color: 0x5b8cff, roughness: 0.2, metalness: 0.9, emissive: 0x1b3c8f, emissiveIntensity: 0.8 });
    const coreMat = new MeshStandardMaterial({ color: 0xc9a24a, roughness: 0.3, metalness: 0.9, emissive: 0x5a4212, emissiveIntensity: 0.5 });

    // Central hub
    const core = new Mesh(new SphereGeometry(1.6, 24, 16), coreMat);
    this.station.add(core);

    // Rotating habitat toruses
    this.ring1 = new Mesh(new TorusGeometry(4.8, 0.18, 16, 64), ringMat);
    this.ring1.rotation.x = Math.PI / 3;
    this.station.add(this.ring1);

    this.ring2 = new Mesh(new TorusGeometry(6.2, 0.12, 16, 64), stationMat);
    this.ring2.rotation.x = -Math.PI / 4;
    this.ring2.rotation.y = Math.PI / 6;
    this.station.add(this.ring2);

    this.station.position.set(4.5, -0.5, -4);
    this.scene.add(this.station);

    // Illumination
    const sun = new DirectionalLight(0xffffff, 2.5);
    sun.position.set(-6, 6, 8);
    const stationLight = new PointLight(0x5b8cff, 2, 20);
    stationLight.position.set(4, 2, -2);
    this.scene.add(sun, stationLight, new AmbientLight(0x10162b, 0.8));

    this.camera.position.set(0, 0, 10);
  }

  enter() {
    this.camera.position.set(0, 0, 10);
    this.camera.lookAt(1.5, 0, -2);
  }

  exit() {}

  resize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  update(dt, t) {
    this.stars.rotation.y += dt * 0.003;
    this.ring1.rotation.z += dt * 0.12;
    this.ring2.rotation.z -= dt * 0.08;
    this.station.rotation.y += dt * 0.04;
    this.camera.position.x = Math.sin(t * 0.08) * 0.5;
    this.camera.lookAt(1.5, 0, -2);
  }
}
