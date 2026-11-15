// Keyboard, wheel and mouse-look. Pointer lock first; drag-to-look fallback if the browser refuses the lock.
export class Input {
  down = new Set(); hit = new Set(); mdx = 0; mdy = 0; wheelY = 0; locked = false; fallback = false; dragging = false;
  onLockChange = () => {}; onKey = () => {};
  constructor(el) {
    this.el = el;
    this.h = {
      kd: e => { if (['Space', 'ArrowUp', 'ArrowDown', 'Tab'].includes(e.code)) e.preventDefault(); if (e.repeat) return; this.down.add(e.code); this.hit.add(e.code); this.onKey(e.code); },
      ku: e => this.down.delete(e.code), blur: () => this.down.clear(),
      mm: e => { if ((this.locked || (this.fallback && this.dragging)) && Math.abs(e.movementX) < 300 && Math.abs(e.movementY) < 300) { this.mdx += e.movementX; this.mdy += e.movementY; } },
      md: e => { if (e.target === this.el) this.dragging = true; }, mu: () => { this.dragging = false; },
      wh: e => { this.wheelY += e.deltaY; },
      pl: () => { this.locked = document.pointerLockElement === this.el; this.onLockChange(this.locked); },
      pe: () => { this.#failed(); },
    };
  }
  attach() { const h = this.h; addEventListener('keydown', h.kd); addEventListener('keyup', h.ku); addEventListener('blur', h.blur); addEventListener('mousemove', h.mm); addEventListener('mousedown', h.md); addEventListener('mouseup', h.mu); addEventListener('wheel', h.wh, { passive: true }); document.addEventListener('pointerlockchange', h.pl); document.addEventListener('pointerlockerror', h.pe); }
  detach() { const h = this.h; removeEventListener('keydown', h.kd); removeEventListener('keyup', h.ku); removeEventListener('blur', h.blur); removeEventListener('mousemove', h.mm); removeEventListener('mousedown', h.md); removeEventListener('mouseup', h.mu); removeEventListener('wheel', h.wh); document.removeEventListener('pointerlockchange', h.pl); document.removeEventListener('pointerlockerror', h.pe); if (document.pointerLockElement === this.el) document.exitPointerLock(); }
  isDown(c) { return this.down.has(c); }
  pressed(c) { return this.hit.has(c); }
  endFrame() { this.hit.clear(); }
  look() { const r = [this.mdx, this.mdy]; this.mdx = this.mdy = 0; return r; }
  takeWheel() { const w = this.wheelY; this.wheelY = 0; return w; }
  requestLock(retry = true) {
    this.#retry = retry;
    try { const p = this.el.requestPointerLock?.(); p?.catch?.(() => this.#failed()); if (!this.el.requestPointerLock) this.#failed(); } catch { this.#failed(); }
  }
  #retry = true; #failing = false;
  #failed() { // Browsers refuse a re-lock for ~1 s after Esc, so retry once before falling back to drag-to-look.
    if (this.#failing) return; this.#failing = true; // promise rejection and the error event both fire; handle once
    if (this.#retry) { this.#retry = false; setTimeout(() => { this.#failing = false; this.requestLock(false); }, 1300); }
    else { this.#failing = false; this.fallback = true; this.onLockChange(false); }
  }
}
