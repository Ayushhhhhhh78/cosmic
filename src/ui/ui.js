import '../ui/styles.css';
import { WORLDS, WORLD_IDS } from '../data/worlds.js';
import { saves } from '../utils/storage.js';
import { overviewHtml } from './colonyOverview.js';
import { summarizeSave } from '../systems/ColonySummary.js';
import { DISCOVERIES } from '../data/discoveries.js';

const ui = document.getElementById('ui');
export const h = (html) => { const d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; };
let layer = null;
export const mount = (el) => { layer?.remove(); layer = el; ui.append(el); return el; };
export function toast(msg) { const t = h(`<div class="toast" role="status">${msg}</div>`); ui.append(t); setTimeout(() => t.remove(), 2600); }
function panel(title, body, onClose) {
  const p = h(`<section class="panel" aria-label="${title}"><button class="back">Back</button><h2>${title}</h2><div class="body">${body}</div></section>`);
  p.querySelector('.back').onclick = () => { p.remove(); onClose?.(); };
  ui.append(p); return p;
}
const fmt = (ts) => new Date(ts).toLocaleString();

export function showMenu(app) {
  const el = mount(h(`<div class="screen"><h1 class="logo">COSMIX</h1><p class="sub">Explore the Moon and Mars. Build, survive and learn like an astronaut.</p>
    <nav class="nav"><button data-a="start">Start Exploration</button><button data-a="continue">Continue Mission</button><button data-a="worlds">World Selection</button>
    <button data-a="colonies">Colony Management</button><button data-a="lab">Learning Lab</button><button data-a="db">Discovery Database</button><button data-a="settings">Settings</button><button data-a="credits">Credits</button></nav></div>`));
  const act = {
    start: () => app.goTo('select'), worlds: () => app.goTo('select'),
    async continue() {
      const all = (await Promise.all(WORLD_IDS.map(saves.load))).filter(Boolean).sort((a, b) => b.updatedAt - a.updatedAt);
      all[0] ? app.goTo('world', { world: all[0].world }) : toast('No saved mission yet. Start exploration first.');
    },
    async colonies() { // Stage 6A: both colonies from their saves. Stage 6G: each visited colony can be reset (two clicks), the other world is never touched
      const p = panel('Colony Management', ''), body = p.querySelector('.body'); body.classList.add('wide');
      const NOTE = 'Shows each colony as last saved. Enter a world to build, supply and service it. Resetting a colony clears its supplies, buildings, colony missions and storm progress; exploration, samples and discoveries are kept.';
      let armed = null, timer = 0;
      const render = async () => { const list = await Promise.all(WORLD_IDS.map(async id => summarizeSave(id, await saves.load(id)))); body.innerHTML = overviewHtml(list, null, NOTE, true); };
      body.onclick = async e => {
        const b = e.target.closest('[data-reset]'); if (!b) return; const id = b.dataset.reset; clearTimeout(timer);
        if (armed !== id) { armed = id; b.textContent = `Click again to reset ${WORLDS[id].colonyName}`; b.dataset.armed = '1'; timer = setTimeout(() => { armed = null; render(); }, 5000); return; }
        armed = null; const ok = await saves.resetColony(id); toast(ok ? `${WORLDS[id].colonyName} reset` : 'Nothing to reset'); render();
      };
      await render();
    },
    lab: () => app.goTo('lab'),
    async db() {
      const found = (await Promise.all(WORLD_IDS.map(saves.load))).filter(Boolean).flatMap(s => s.discoveries ?? []).filter(id => DISCOVERIES[id]);
      panel('Discovery Database', found.length
        ? found.map(id => { const d = DISCOVERIES[id]; return `<div class="row"><span><strong>${d.title}</strong> <small>${WORLDS[d.world].name} \u00b7 ${d.category} \u00b7 ${d.kind === 'real' ? 'real science' : 'real science, simplified in the game'}</small><br>${d.body}</span></div>`; }).join('')
        : '<p>No discoveries yet. Scan features and collect samples in a world to unlock entries.</p>');
    },
    settings() {
      const p = panel('Settings', `<div class="row"><label for="q">Graphics quality</label><select id="q"><option>low</option><option>medium</option><option>high</option></select></div>
        <div class="row"><label for="rm">Reduce motion</label><input id="rm" type="checkbox"></div><p><small>Settings stay on this device.</small></p>`);
      const q = p.querySelector('#q'), rm = p.querySelector('#rm'); q.value = app.settings.quality; rm.checked = app.settings.reducedMotion;
      q.onchange = () => app.updateSettings({ quality: q.value }); rm.onchange = () => app.updateSettings({ reducedMotion: rm.checked });
    },
    credits: () => panel('Credits', `<p>Built with Three.js, GSAP and Vite. Planet textures are generated in code and are stylised, not survey imagery.</p><p>Gravity values: Moon 1.62 m/s\u00b2, Mars 3.71 m/s\u00b2. NASA content and attributions are added in Stage 9.</p>`),
  };
  el.onclick = (e) => { const a = e.target.closest('[data-a]')?.dataset.a; if (a) act[a](); };
}

export function showSelect(app) {
  const el = mount(h(`<div class="screen"><button class="back">Main menu</button><p class="hint">Select a world. Each keeps its own save.</p><div class="card" hidden></div></div>`));
  el.querySelector('.back').onclick = () => app.goTo('menu');
  const card = el.querySelector('.card');
  return app.bus.on('worldFocus', async (id) => {
    if (!id) { card.hidden = true; return; }
    const w = WORLDS[id], s = await saves.load(id);
    card.hidden = false;
    card.innerHTML = `<h2>${w.name.toUpperCase()}</h2><p>${w.mission}. ${w.tagline}</p><p>${w.facts[0]}</p><p><small>${s ? `Last played ${fmt(s.updatedAt)}` : 'No save yet'}</small></p><button class="solid">${s ? 'Resume' : 'Enter'} ${w.name}</button>`;
    card.querySelector('button').onclick = () => app.goTo('world', { world: id });
  });
}

export function showWorldStub(app, world) {
  const w = WORLDS[world];
  const el = mount(h(`<div class="screen"><div class="hud"><button data-a="save">Save</button><button data-a="back">World selection</button></div>
    <div class="stub"><h2>${w.mission}</h2><p>This is a Stage 1 placeholder. Terrain, astronaut and missions arrive in Stages 2 to 5. Saving here only records that this world was visited.</p></div></div>`));
  saves.write(world).then(() => {});
  el.onclick = async (e) => { const a = e.target.dataset?.a; if (a === 'save') { await saves.write(world); toast(`${w.name} saved`); } if (a === 'back') app.goTo('select'); };
}
