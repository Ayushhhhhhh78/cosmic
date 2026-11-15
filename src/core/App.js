import { WebGLRenderer, Clock } from 'three';
import { EventBus } from './EventBus.js';
import { settings as settingsStore } from '../utils/storage.js';

const DPR = { low: 1, medium: 1.5, high: 2 };

// Scene contract: { scene, camera, enter(params), exit(), update(dt, t), resize(w, h) }
export class App {
  bus = new EventBus();
  scenes = new Map();
  current = null;
  settings = null;
  #clock = new Clock();

  async init(canvas) {
    this.settings = await settingsStore.load();
    this.renderer = new WebGLRenderer({ canvas, antialias: this.settings.quality !== 'low', powerPreference: 'high-performance' });
    this.applyQuality();
    addEventListener('resize', () => this.#resize());
    this.#resize();
    this.renderer.setAnimationLoop(() => this.#frame());
  }
  applyQuality() { this.renderer.setPixelRatio(Math.min(devicePixelRatio, DPR[this.settings.quality] ?? 1.5)); this.#resize(); }
  async updateSettings(patch) { this.settings = { ...this.settings, ...patch }; await settingsStore.save(this.settings); this.applyQuality(); }
  register(name, scene) { this.scenes.set(name, scene); }
  goTo(name, params = {}) {
    this.current?.exit?.();
    this.current = this.scenes.get(name);
    this.current.enter?.(params); this.#resize();
    this.bus.emit('scene', { name, params });
  }
  #resize() {
    const w = innerWidth, h = innerHeight; this.renderer?.setSize(w, h, false);
    this.scenes.forEach(s => s.resize?.(w, h));
  }
  #frame() {
    const dt = Math.min(this.#clock.getDelta(), 0.1), t = this.#clock.elapsedTime;
    if (!this.current) return;
    this.current.update?.(dt, t);
    this.renderer.render(this.current.scene, this.current.camera);
  }
}
