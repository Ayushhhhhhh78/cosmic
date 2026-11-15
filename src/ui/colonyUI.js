// Colony management panel (Tab = resources, M = missions). Built once per open and updated in place so buttons never vanish mid-click.
import { h } from './ui.js';
import { overviewHtml } from './colonyOverview.js';

const N = (v, d = 0) => Number(v).toFixed(d), pct = (v, cap) => Math.max(0, Math.min(100, (v / cap) * 100));
const rate = r => { const net = (r.prod - r.cons) * 60; return `<span class="up">+${N(r.prod * 60, 1)}</span> <span class="dn">\u2212${N(r.cons * 60, 1)}</span> /min`; };
const RES = [['oxygen', 'Oxygen'], ['water', 'Water'], ['food', 'Food'], ['materials', 'Construction materials'], ['ice', 'Ice in processor']];

export function createColonyUI(app, ws) {
  const root = h('<section class="mgmt" hidden aria-label="Colony management"></section>');
  let open = false, tab = 'resources', missKey = '', ovKey = '', last = null;
  const $ = s => root.querySelector(s), $$ = s => [...root.querySelectorAll(s)];

  function skeleton(s) {
    root.innerHTML = `<header><div><h2>${s.world.name.toUpperCase()} COLONY</h2><p class="sub2">${s.missionTitle}</p></div>
      <nav><button data-t="resources">Resources</button><button data-t="missions">Missions</button><button data-t="colonies">Colonies</button>${s.construction ? '<button data-t="construct">Construction</button>' : ''}<button data-a="close">Close</button></nav></header>
      <div class="pane" data-p="resources">
        <div class="cols">
          <div class="col"><h3>Supplies</h3>${RES.map(([k, n]) => `<div class="res" data-r="${k}"><div class="rl"><span>${n}</span><b data-v></b></div><div class="bar"><i></i></div><small data-rate></small></div>`).join('')}</div>
          <div class="col"><h3>Electricity</h3>
            <div class="res" data-r="power"><div class="rl"><span>Solar generation</span><b data-gen></b></div><div class="bar"><i data-genbar></i></div><small data-dem></small></div>
            <div class="res" data-r="batt"><div class="rl"><span>Battery storage</span><b data-bv></b></div><div class="bar"><i data-bbar></i></div><small data-bnet></small></div>
            <h3>Crew</h3><div class="res" data-r="crew"><div class="rl"><span data-crew></span><b data-hp></b></div><div class="bar"><i data-hbar></i></div><small data-carry></small></div>
            <h3>Warnings</h3><ul class="warns" data-warns></ul></div>
          <div class="col"><h3>Equipment</h3><div data-mods></div><p class="hintline">Walk up to a module and press E to build or service it, or R to service the nearest one (2 materials, restores 35%).</p></div>
        </div></div>
      <div class="pane" data-p="missions" hidden><div data-miss></div></div>
      <div class="pane" data-p="colonies" hidden><div data-ov></div></div>
      ${s.construction ? `<div class="pane" data-p="construct" hidden>
        <p class="hintline top">Build new structures for ${s.construction.colonyName}. Costs are paid from the colony's stored resources. Gather construction materials at supply caches and store them at the depot.</p>
        <div class="bld-grid" data-bld></div><h3>Completed buildings</h3><ul class="ov-bl" data-done></ul></div>` : ''}`;
    $$('[data-t]').forEach(b => b.onclick = () => ws.setPanelTab(b.dataset.t));
    $('[data-a=close]').onclick = () => ws.closePanel();
    root.onclick = e => { const b = e.target.closest('[data-tog]'), c = e.target.closest('[data-build]'); if (b) ws.colonyAction({ type: 'toggle', id: b.dataset.tog }); else if (c) ws.colonyAction({ type: 'construct', id: c.dataset.build }); };
    modsBuilt = false; bldBuilt = false; doneKey = '';
  }
  let modsBuilt = false, bldBuilt = false, doneKey = '';
  function modules(c) {
    const box = $('[data-mods]');
    if (!modsBuilt) { box.innerHTML = c.modules.map(m => `<div class="mod" data-m="${m.id}"><div class="rl"><span>${m.name}</span><b data-st></b></div><div class="bar"><i></i></div><div class="rl2"><small data-info></small><button class="mini" data-tog="${m.id}" hidden></button></div></div>`).join(''); modsBuilt = true; }
    for (const m of c.modules) {
      const el = box.querySelector(`[data-m="${m.id}"]`), st = el.querySelector('[data-st]'), bar = el.querySelector('.bar i'), info = el.querySelector('[data-info]'), tg = el.querySelector('[data-tog]');
      const cost = Object.entries(m.cost).map(([k, v]) => `${v} ${k}`).join(', ');
      if (!m.built) { st.textContent = m.gated ? 'Not built' : 'Locked'; bar.style.width = '0%'; info.textContent = m.gated ? `Build at the site: ${cost}` : 'Unlocks with a later mission'; tg.hidden = true; el.dataset.s = m.gated ? 'idle' : 'locked'; continue; }
      const state = m.cond <= 10 ? 'FAILED' : m.toggle && !m.on ? 'Disabled' : m.toggle && m.load == null ? 'Idle' : m.toggle && m.load < 0.99 ? `Low power ${Math.round(m.load * 100)}%` : m.cond < 60 ? 'Degraded' : 'Online';
      st.textContent = state; bar.style.width = `${m.cond}%`; el.dataset.s = m.cond <= 10 ? 'bad' : m.cond < 40 ? 'warn' : m.on ? 'ok' : 'idle';
      info.textContent = `Condition ${Math.round(m.cond)}%${m.dust > 0.02 ? ` \u00b7 dust ${Math.round(m.dust * 100)}%` : ''}`;
      tg.hidden = !m.toggle; if (m.toggle) tg.textContent = m.on ? 'Switch off' : 'Switch on';
    }
  }
  function values(s) {
    const c = s.colony;
    for (const [k] of RES) { const el = $(`[data-r=${k}]`); el.querySelector('[data-v]').textContent = `${N(c.res[k])} / ${c.cap[k]}`; el.querySelector('.bar i').style.width = pct(c.res[k], c.cap[k]) + '%'; el.dataset.low = c.res[k] < c.cap[k] * 0.15 && k !== 'materials' && k !== 'ice' ? '1' : '0'; el.querySelector('[data-rate]').innerHTML = k === 'materials' ? `Carrying ${N(c.carried.materials)} to deliver` : k === 'ice' ? `Carrying ${N(c.carried.ice)} ice to load` : rate(c.rates[k]); }
    $('[data-gen]').textContent = `${N(c.power.gen, 1)} kW`; $('[data-genbar]').style.width = pct(c.power.gen, Math.max(c.power.demand, c.power.gen, 1)) + '%';
    $('[data-dem]').innerHTML = `Demand ${N(c.power.demand, 1)} kW \u00b7 ${c.power.used + 0.01 < c.power.demand ? '<span class="dn">loads shed</span>' : c.power.curtailed > 0.05 ? 'battery full, surplus wasted' : 'supplied'}`;
    $('[data-bv]').textContent = `${N(c.batt.kwh, 1)} / ${N(c.batt.cap, 0)} kWh`; $('[data-bbar]').style.width = pct(c.batt.kwh, c.batt.cap) + '%'; $('[data-r=batt]').dataset.low = c.batt.kwh / c.batt.cap < 0.15 ? '1' : '0';
    $('[data-bnet]').innerHTML = c.batt.net > 0.01 ? `<span class="up">Charging ${N(c.batt.net, 1)} kW</span>` : c.batt.net < -0.01 ? `<span class="dn">Discharging ${N(-c.batt.net, 1)} kW</span>` : 'Steady';
    $('[data-crew]').textContent = `Crew of ${c.crew.size}`; $('[data-hp]').textContent = `Health ${N(c.crew.health)}%`; $('[data-hbar]').style.width = c.crew.health + '%'; $('[data-r=crew]').dataset.low = c.crew.health < 60 ? '1' : '0';
    $('[data-carry]').textContent = `Carrying ${N(c.carried.materials)} materials, ${N(c.carried.ice)} ice`;
    $('[data-warns]').innerHTML = c.alerts.length ? c.alerts.map(a => `<li class="${a.level}">${a.text}</li>`).join('') : '<li class="ok">All systems nominal.</li>';
    modules(c);
  }
  function missions(list) {
    const key = JSON.stringify(list); if (key === missKey) return; missKey = key;
    const pb = (p, t) => (t === 1 ? '' : t < 1 ? ` ${Math.round(p * 100)}/${Math.round(t * 100)}%` : ` ${Math.floor(p)}/${t}`);
    $('[data-miss]').innerHTML = list.map((m, i) => `<article class="mis ${m.status}"><div class="mh"><span class="mn">${String(i + 1).padStart(2, '0')}</span><h3>${m.title}</h3><em>${m.status === 'done' ? 'Complete' : m.status === 'active' ? 'Active' : 'Locked'}</em></div>
      ${m.status === 'locked' ? `<p class="dim">Unlocks when you complete: ${m.requires}.</p>` : `<p>${m.brief}</p><ul>${m.objectives.map(o => `<li class="${o.done ? 'done' : ''}">${o.text}${pb(o.progress, o.target)}${o.target !== 1 && !o.done ? `<div class="bar"><i style="width:${pct(o.progress, o.target)}%"></i></div>` : ''}</li>`).join('')}</ul>`}
      <p class="dim">Reward: ${m.reward}${m.status === 'done' ? ` \u00b7 ${m.completion}` : ''}</p></article>`).join('');
  }
  function construct(k) { // Stage 6B/6C: Moon and Mars outpost construction. Cards are built once and updated in place so the Build buttons never vanish mid-click.
    const box = $('[data-bld]');
    if (!bldBuilt) {
      box.innerHTML = k.structures.map(b => `<article class="bld" data-b="${b.id}"><div class="rl"><h4>${b.name}</h4><b data-n></b></div><p class="bld-blurb">${b.blurb}</p>
        <ul class="bld-cost">${b.cost.map(c => `<li data-k="${c.key}"><span>${c.need} ${c.label}</span><b data-have></b></li>`).join('')}</ul>
        <div class="rl2"><small data-why></small><button class="mini" data-build="${b.id}">Build</button></div></article>`).join(''); bldBuilt = true;
    }
    for (const b of k.structures) {
      const el = box.querySelector(`[data-b="${b.id}"]`); el.dataset.ok = b.canBuild ? '1' : '0';
      el.querySelector('[data-n]').textContent = `Built ${b.count} / ${b.max}`; el.querySelector('[data-why]').textContent = b.reason; el.querySelector('[data-build]').disabled = !b.canBuild;
      for (const c of b.cost) { const li = el.querySelector(`[data-k="${c.key}"]`); li.dataset.ok = c.ok ? '1' : '0'; li.querySelector('[data-have]').textContent = `have ${N(c.have, c.key === 'battery' ? 1 : 0)}`; }
    }
    const key = JSON.stringify(k.done); if (key === doneKey) return; doneKey = key;
    $('[data-done]').innerHTML = k.done.length ? k.done.map(d => `<li class="ov-b" data-s="ok"><span>${d.name}</span><em>\u00d7${d.count}</em></li>`).join('') : '<li class="ov-b" data-s="idle"><span>Nothing built yet</span><em>\u2014</em></li>';
  }
  function overview(o) { // Stage 6A: Moon and Mars colony sections
    const key = JSON.stringify(o); if (key === ovKey) return; ovKey = key;
    const waiting = o.list.length < 2 ? 'Loading the other colony from its save\u2026' : 'The colony you are not in shows its last saved state.';
    $('[data-ov]').innerHTML = overviewHtml(o.list, o.current, waiting);
  }
  return {
    el: root,
    update(s) {
      if (!s.managing) { if (open) { open = false; root.hidden = true; } return; }
      if (!open) { open = true; root.hidden = false; skeleton(s); missKey = ''; ovKey = ''; }
      tab = s.panelTab; last = s;
      $$('[data-p]').forEach(p => (p.hidden = p.dataset.p !== tab)); $$('[data-t]').forEach(b => b.classList.toggle('on', b.dataset.t === tab));
      if (tab === 'resources') values(s); else if (tab === 'missions') { if (s.missions) missions(s.missions); } else if (tab === 'construct') { if (s.construction) construct(s.construction); } else if (s.overview) overview(s.overview);
    },
  };
}
