export class EventBus {
  #h = new Map();
  on(type, fn) { (this.#h.get(type) ?? this.#h.set(type, new Set()).get(type)).add(fn); return () => this.off(type, fn); }
  off(type, fn) { this.#h.get(type)?.delete(fn); }
  emit(type, payload) { this.#h.get(type)?.forEach(fn => fn(payload)); }
}
