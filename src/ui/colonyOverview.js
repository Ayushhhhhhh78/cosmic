// Stage 6A: Colony Management overview. One section per world (Moon, Mars) built from ColonySummary data.
const N = v => Math.floor(v + 1e-6), pct = (v, cap) => Math.max(0, Math.min(100, (v / cap) * 100));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const tone = st => (st === 'Online' ? 'ok' : st === 'Not built' || st === 'Switched off' ? 'idle' : st === 'Degraded' ? 'warn' : 'bad');

function structures(s) { // Stage 6B: outpost structures (Moon and Mars)
  if (!s.structures) return '';
  const n = s.structures.reduce((a, b) => a + b.count, 0);
  return `<h4>Outpost structures <span class="ov-count">${n} built</span></h4><ul class="ov-bl">${s.structures.map(b => `<li class="ov-b" data-s="${b.count ? 'ok' : 'idle'}"><span>${esc(b.name)}</span><em>${b.count ? `\u00d7${b.count}` : 'Not built'}</em></li>`).join('')}</ul>`;
}

function section(s, current, canReset = false) {
  const res = s.resources.map(r => `<div class="ov-res" data-low="${r.cap && r.value < r.cap * 0.15 && r.key !== 'materials' && r.key !== 'ice' ? 1 : 0}"><div class="rl"><span>${r.name}</span><b>${N(r.value)} / ${N(r.cap)}${r.unit ? ' ' + r.unit : ''}</b></div><div class="bar"><i style="width:${pct(r.value, r.cap).toFixed(0)}%"></i></div></div>`).join('');
  const blds = s.buildings.map(b => `<li class="ov-b" data-s="${tone(b.state)}"><span>${esc(b.name)}${b.id === 'habitat' ? ` \u00d7${b.count}` : ''}</span><em>${b.state}${b.built && b.state !== 'Failed' ? ` \u00b7 ${N(b.cond)}%` : ''}</em></li>`).join('');
  const p = s.population;
  return `<article class="ov-world" data-w="${s.world}">
    <header class="ov-head"><div><small class="ov-tag">${esc(s.worldName.toUpperCase())}${current ? ' \u00b7 you are here' : ''}</small><h3 class="ov-name">${esc(s.colonyName)}</h3></div><div class="ov-side"><em class="ov-status" data-s="${s.visited ? (p.health < 60 ? 'bad' : 'ok') : 'idle'}">${s.status}</em>${canReset && s.visited ? `<button class="mini ov-reset" data-reset="${s.world}">Reset colony progress</button>` : ''}</div></header>
    <h4>Population</h4>
    <div class="ov-pop"><div><b>${p.crew}</b><small>Crew</small></div><div><b>${N(p.health)}%</b><small>Health</small></div><div><b>${p.housing}</b><small>Housing</small></div></div>
    ${p.more ? `<p class="hintline">Habitat module II would house ${p.more} more crew.</p>` : ''}
    <h4>Resources</h4>${res}
    <h4>Buildings <span class="ov-count">${s.builtCount} of ${s.totalCount} built</span></h4><ul class="ov-bl">${blds}</ul>${structures(s)}
    <p class="hintline">${esc(s.mission)} \u00b7 ${s.missionsDone} of ${s.missionsTotal} missions complete</p></article>`;
}

// summaries: array of ColonySummary objects, one per world. currentId marks the world the player is standing in.
export const overviewHtml = (summaries, currentId = null, note = '', canReset = false) => // canReset (Stage 6G): main menu only, adds a reset button per visited colony
  `<div class="ov">${summaries.map(s => section(s, s.world === currentId, canReset)).join('')}</div>${note ? `<p class="hintline">${note}</p>` : ''}`;
