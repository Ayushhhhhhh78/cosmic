// Local-only persistence. IndexedDB first, localStorage fallback. No accounts, no network.
const DB = 'cosmix', STORE = 'kv';
let dbp;
function open() {
  if (!('indexedDB' in globalThis)) return Promise.resolve(null);
  return (dbp ??= new Promise(res => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => res(r.result);
    r.onerror = () => res(null);
  }));
}
const tx = (db, mode, fn) => new Promise((res, rej) => {
  const req = fn(db.transaction(STORE, mode).objectStore(STORE));
  req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error);
});
export async function get(key, fallback = null) {
  try { const db = await open(); if (db) return (await tx(db, 'readonly', s => s.get(key))) ?? fallback; } catch {}
  try { const v = localStorage.getItem('cosmix:' + key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
export async function set(key, value) {
  try { const db = await open(); if (db) { await tx(db, 'readwrite', s => s.put(value, key)); return true; } } catch {}
  try { localStorage.setItem('cosmix:' + key, JSON.stringify(value)); return true; } catch { return false; }
}
export const saves = {
  load: id => get('save:' + id),
  async write(id, patch = {}) {
    const now = Date.now(), prev = (await get('save:' + id)) ?? { world: id, createdAt: now, version: 1, mission: 0, discoveries: [] };
    const next = { ...prev, ...patch, updatedAt: now };
    await set('save:' + id, next); return next;
  },
  // Stage 6G: clears one world's colony progress (resources, buildings, colony missions, storm and hazard progress). Position, inventory,
  // discoveries and exploration are kept, and the other world's save is never touched. Returns false when there was nothing to reset.
  async resetColony(id) {
    const prev = await get('save:' + id); if (!prev) return false;
    const { colony, dustStorm, ...rest } = prev; return set('save:' + id, rest);
  },
};
export const DEFAULT_SETTINGS = { quality: 'medium', reducedMotion: false };
export const settings = {
  async load() { return { ...DEFAULT_SETTINGS, ...(await get('settings', {})) }; },
  save: s => set('settings', s),
};
