import { mount, h, toast } from './ui.js';
import { createColonyUI } from './colonyUI.js';

const CONTROLS = 'WASD move \u00b7 Shift run \u00b7 Space jump \u00b7 Mouse look \u00b7 Wheel zoom \u00b7 E interact \u00b7 hold F scan \u00b7 R service \u00b7 Tab colony \u00b7 C colonies \u00b7 B build \u00b7 M missions \u00b7 Esc pause';

export function showWorldHud(app, ws) {
  const el = mount(h(`<div class="play">
    <div class="obj" hidden><h3></h3><p class="brief"></p><ul></ul></div><div class="alerts" hidden></div>
    <div class="cstrip" hidden></div>
    <div class="stormveil" hidden></div><div class="storm" hidden><b></b><span class="st-txt"></span><span class="st-nav" hidden><i class="st-arrow">\u25b2</i><em></em></span></div>
    <div class="stats" hidden><span data-k="g"></span><span data-k="s"></span><span data-k="d"></span></div>
    <div class="cross" hidden></div><div class="scanbar" hidden><i></i><span></span></div><div class="prompt" hidden></div>
    <div class="veil"><div class="veil-box"><h2></h2><p class="msg">Loading\u2026</p><p class="keys">${CONTROLS}</p>
      <div class="veil-actions" hidden><button class="solid" data-a="resume">Resume</button><button data-a="save">Save</button><button data-a="select">World selection</button><button data-a="menu">Main menu</button></div></div></div>
  </div>`));
  const $ = s => el.querySelector(s), veil = $('.veil'), actions = $('.veil-actions'), msg = $('.msg'), title = $('.veil-box h2');
  const cui = createColonyUI(app, ws); el.append(cui.el);
  let lastObj = '', lastStrip = '', started = false;
  const offHud = app.bus.on('hud', s => {
    if (s.world) title.textContent = s.world.mission;
    if (s.loading) { msg.textContent = 'Preparing terrain\u2026'; actions.hidden = true; veil.hidden = false; return; }
    if (s.error) { msg.textContent = s.error; actions.hidden = false; $('[data-a=resume]').hidden = true; return; }
    if (s.playing !== undefined) {
      if (s.playing) started = true;
      veil.hidden = s.playing || s.managing; actions.hidden = false; $('[data-a=resume]').hidden = false;
      $('[data-a=resume]').textContent = started ? 'Resume' : 'Start exploring';
      msg.textContent = s.fallback ? 'Mouse lock is unavailable here. Hold the mouse button and drag to look. Esc or P pauses.' : started ? 'Paused' : 'Click to capture the mouse and begin.';
    }
    if (!s.objectives) return;
    for (const k of ['.obj', '.stats', '.cross']) $(k).hidden = false;
    const key = JSON.stringify([s.objectives, s.missionTitle]), prog = o => (o.target === 1 ? '' : o.target < 1 ? ` (${Math.round(o.progress * 100)}/${Math.round(o.target * 100)}%)` : ` (${Math.floor(o.progress)}/${o.target})`);
    if (key !== lastObj) { lastObj = key; $('.obj h3').textContent = s.missionTitle; $('.brief').textContent = s.missionBrief; $('.obj ul').innerHTML = s.objectives.map(o => `<li class="${o.done ? 'done' : ''}">${o.text}${prog(o)}</li>`).join(''); }
    if (s.colony) { cui.update(s); strip(s.colony); }
    stormBanner(s.hazard ?? null);
    $('[data-k=g]').textContent = `Gravity ${s.world.gravity} m/s\u00b2`; $('[data-k=s]').textContent = `Samples ${s.samples}`; $('[data-k=d]').textContent = `Discoveries ${s.discoveries}`;
    const bar = $('.scanbar'), pr = $('.prompt');
    bar.hidden = !s.scan; if (s.scan) { bar.querySelector('i').style.width = `${Math.round(s.scan.progress * 100)}%`; bar.querySelector('span').textContent = s.scan.progress > 0 ? `Scanning ${s.scan.name}` : `Hold F to scan ${s.scan.name}`; }
    const text = s.interact ? `E  ${s.interact}` : ''; pr.hidden = !text; pr.textContent = text;
  });
  function strip(c) {
    const bars = [['O\u2082', c.res.oxygen, c.cap.oxygen], ['H\u2082O', c.res.water, c.cap.water], ['Food', c.res.food, c.cap.food], ['Power', c.batt.kwh, c.batt.cap]];
    const html = bars.map(([n, v, cap]) => `<div class="cs ${v / cap < 0.15 ? 'low' : ''}"><span>${n}</span><i><b style="width:${Math.min(100, v / cap * 100).toFixed(0)}%"></b></i></div>`).join('') +
      `<div class="cs2">${c.power.gen.toFixed(1)} kW in \u00b7 ${c.power.used.toFixed(1)} kW used</div>` + (c.carried.ice >= 1 || c.carried.materials >= 1 ? `<div class="cs2">Carrying ${Math.floor(c.carried.materials)} materials \u00b7 ${Math.floor(c.carried.ice)} ice</div>` : '');
    const al = c.alerts.filter(a => a.level === 'crit').concat(c.alerts.filter(a => a.level === 'warn')).slice(0, 3), ak = html + JSON.stringify(al);
    if (ak === lastStrip) return; lastStrip = ak;
    const st = $('.cstrip'); st.hidden = false; st.innerHTML = html;
    const a = $('.alerts'); a.hidden = !al.length; a.innerHTML = al.map(x => `<div class="${x.level}">${x.text}</div>`).join('');
  }
  function stormBanner(hz) { // Stage 6F: dust storm warning, objective, direction to the safe zone, final message
    const bar = $('.storm'), dim = $('.stormveil');
    if (!hz) { bar.hidden = dim.hidden = true; return; }
    bar.hidden = false; bar.className = `storm ${hz.tone}`; dim.hidden = hz.level <= 0; dim.style.opacity = (hz.level * 0.45).toFixed(2);
    bar.querySelector('b').textContent = hz.title; bar.querySelector('.st-txt').textContent = hz.text;
    const nav = bar.querySelector('.st-nav'); nav.hidden = !hz.nav;
    if (hz.nav) { nav.querySelector('i').style.transform = `rotate(${hz.angle.toFixed(2)}rad)`; nav.querySelector('em').textContent = hz.dist > 0 ? `Safe zone ${hz.dist} m` : 'Safe zone reached'; }
  }
  const offToast = app.bus.on('toast', toast);
  el.addEventListener('click', async e => {
    const a = e.target.closest('[data-a]')?.dataset.a;
    if (a === 'resume') ws.resume();
    if (a === 'save') toast((await ws.saveNow()) ? 'Progress saved' : 'Nothing to save yet');
    if (a === 'select' || a === 'menu') app.goTo(a === 'menu' ? 'menu' : 'select');
  });
  return () => { offHud(); offToast(); };
}
