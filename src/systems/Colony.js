// Per-world colony simulation: electricity, battery, oxygen, water, food, materials and equipment condition.
// Pure logic (no Three.js). One state object per world; Moon and Mars never share one.
import { MODULE_GATE } from '../data/missions.js';
import { def as structDef, STRUCTURE_IDS, blankOutpost } from './Construction.js';

export const CAP = { oxygen: 300, water: 300, food: 200, materials: 200, ice: 80 };
export const CARRY = { ice: 45, materials: 36 };
export const RESERVE_KWH = 6, BANK_KWH = 15, MAX_DISCHARGE_KW = 8;
export const ENV = {
  moon: { solarKW: 1.4, dustRate: 0.0004, storms: false, linkDelay: 4 },   // 1.4 kW per panel: no atmosphere (day/night cycle not simulated yet)
  mars: { solarKW: 0.8, dustRate: 0.0012, storms: true, linkDelay: 14 },   // weaker sunlight, dust settles on panels, storms
};
export const MODULES = {
  solar: { name: 'Solar array', cost: { materials: 8 }, verb: 'Repair', panels: 4 },
  battery: { name: 'Battery bank', cost: { materials: 14 } },
  water: { name: 'Water processor', cost: { materials: 16 }, load: 1.2, toggle: true },
  oxygen: { name: 'Oxygen generator', cost: { materials: 18 }, load: 1.5, toggle: true },
  greenhouse: { name: 'Greenhouse', cost: { materials: 22 }, load: 1.0, toggle: true },
  shield: { name: 'Dust shield', cost: { materials: 15 } },
  solar2: { name: 'Solar array II', cost: { materials: 20 }, panels: 4 },
  hab2: { name: 'Habitat module II', cost: { materials: 30 } },
};
export const WORLD_MODULES = { moon: ['solar', 'battery', 'water', 'oxygen', 'greenhouse', 'solar2', 'hab2'], mars: ['solar', 'battery', 'water', 'oxygen', 'greenhouse', 'shield', 'solar2', 'hab2'] };
const WEAR = { solar: 0.012, solar2: 0.012, battery: 0.01, water: 0.03, oxygen: 0.03, greenhouse: 0.03, shield: 0.005, hab2: 0.008 };
const START = { moon: { oxygen: 240, water: 130, food: 110, battery: 5, materials: 40 }, mars: { oxygen: 260, water: 140, food: 120, battery: 5, materials: 40 } };
export const NODE_CHARGES = 4, NODE_REGEN = 50, MINE_YIELD = { ice: 15, materials: 12 };

export const eff = cond => (cond >= 60 ? 1 : cond <= 10 ? 0 : (cond - 10) / 50); // equipment condition -> output multiplier
export const online = m => !!m && m.built && m.cond > 10;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

export function createColony(world) {
  const mod = {}; for (const id of Object.keys(MODULES)) mod[id] = { built: false, cond: 100, on: true, dust: 0 };
  return {
    v: 1, world, res: { ...START[world], ice: 0 }, carried: { ice: 0, materials: 0 }, mod, outpost: blankOutpost(), nodes: {}, crew: { health: 100 },
    stats: { linked: 0, linkStart: 0, linkProg: 0, iceMined: 0, iceLoaded: 0, waterProduced: 0, o2Produced: 0, foodProduced: 0, matsMined: 0, maintenance: 0, analyzed: 0, stableSeconds: 0, stormsSurvived: 0, stormsFailed: 0, incidents: 0 },
    storm: { phase: 'none', t: 0, next: 0, failed: false, armed: false }, missions: { done: [], obj: {} },
    rates: blankRates(), flags: { lifeOff: 0 },
  };
}
export function loadColony(world, saved) { // tolerate older/partial saves; never reads another world's data
  const c = createColony(world); if (!saved || typeof saved !== 'object' || (saved.world && saved.world !== world)) return c; // Stage 6G: a colony saved for the other world is ignored
  const num = (v, d) => (Number.isFinite(v) ? v : d);
  for (const k of Object.keys(c.res)) c.res[k] = clamp(num(saved.res?.[k], c.res[k]), 0, k === 'battery' ? 1e3 : CAP[k] ?? 1e3);
  for (const k of ['ice', 'materials']) c.carried[k] = clamp(num(saved.carried?.[k], 0), 0, CARRY[k]);
  for (const id of Object.keys(c.mod)) { const s = saved.mod?.[id]; if (s) c.mod[id] = { built: !!s.built, cond: clamp(num(s.cond, 100), 0, 100), on: s.on !== false, dust: clamp(num(s.dust, 0), 0, 1) }; }
  for (const k of Object.keys(c.stats)) c.stats[k] = num(saved.stats?.[k], 0);
  if (saved.nodes && typeof saved.nodes === 'object') for (const [id, n] of Object.entries(saved.nodes)) c.nodes[id] = { charges: clamp(num(n.charges, NODE_CHARGES), 0, NODE_CHARGES), t: num(n.t, 0) };
  for (const id of STRUCTURE_IDS) { const d = structDef(world, id); if (d) c.outpost[id] = clamp(Math.floor(num(saved.outpost?.[id], 0)), 0, d.max); } // Stage 6B/6C: only this world's structures
  c.crew.health = clamp(num(saved.crew?.health, 100), 1, 100);
  if (saved.storm) { const s = saved.storm; c.storm = { phase: ['none', 'forecast', 'active'].includes(s.phase) ? s.phase : 'none', t: num(s.t, 0), next: num(s.next, 0), failed: !!s.failed, armed: !!s.armed }; }
  if (Array.isArray(saved.missions?.done)) c.missions.done = saved.missions.done.filter(x => typeof x === 'string');
  if (saved.missions?.obj && typeof saved.missions.obj === 'object') c.missions.obj = saved.missions.obj;
  return c;
}
export const serialize = c => ({ v: c.v, world: c.world, res: c.res, carried: c.carried, mod: c.mod, outpost: c.outpost, nodes: c.nodes, crew: c.crew, stats: c.stats, storm: c.storm, missions: c.missions });

export const battCap = c => RESERVE_KWH + (c.mod.battery.built ? BANK_KWH * Math.max(0.3, eff(c.mod.battery.cond)) : 0);
export const crewSize = c => (c.mod.hab2.built ? 4 : 2);
function blankRates() { const z = () => ({ prod: 0, cons: 0 }); return { gen: 0, demand: 0, used: 0, curtailed: 0, battNet: 0, oxygen: z(), water: z(), food: z(), ice: z(), loads: {}, health: 0 }; }
export function gated(c, id, activeId) { // module buildable when its gate mission is active or done
  const g = MODULE_GATE[c.world][id]; if (g == null) return true;
  return c.missions.done.includes(g) || activeId === g;
}

function stormUpdate(c, dt, activeId, ev) {
  const S = c.storm; if (!ENV[c.world].storms) return;
  if (!S.armed && ((activeId === 'storm' && c.mod.shield.built) || c.missions.done.includes('storm'))) // storms begin once the shield is up (or the mission is done)
    { S.armed = true; S.phase = 'none'; S.next = 25; }
  if (!S.armed) return;
  if (S.phase === 'none') { S.next -= dt; if (S.next <= 0) { S.phase = 'forecast'; S.t = 45; S.failed = false; ev.push({ type: 'storm-forecast' }); } }
  else if (S.phase === 'forecast') { S.t -= dt; if (S.t <= 0) { S.phase = 'active'; S.t = 90; ev.push({ type: 'storm-start' }); } }
  else { S.t -= dt; if (S.t <= 0) { S.phase = 'none'; S.next = S.failed ? 60 : 540; if (S.failed) c.stats.stormsFailed++; else c.stats.stormsSurvived++; ev.push({ type: 'storm-end', survived: !S.failed }); } }
}

// Advances the simulation by dt real seconds (1 s of play = 1 simulated minute of electrical energy). Returns events.
export function tick(c, dt, activeId) {
  if (!(dt > 0)) return [];
  const ev = [], E = ENV[c.world], R = c.res, M = c.mod, S = c.stats, rt = c.rates = blankRates();
  stormUpdate(c, dt, activeId, ev);
  const storm = c.storm.phase === 'active', sh = online(M.shield);
  const solarMult = storm ? (sh ? 0.4 : 0.12) : 1, dustMult = storm ? (sh ? 2.5 : 8) : (sh ? 0.5 : 1), wearMult = storm ? (sh ? 1.2 : 2) : 1;

  let gen = 0; // generation
  for (const id of ['solar', 'solar2']) {
    const m = M[id]; if (!m.built) continue;
    m.dust = Math.min(1, m.dust + E.dustRate * dustMult * dt);
    gen += MODULES[id].panels * E.solarKW * eff(m.cond) * (1 - 0.6 * m.dust) * solarMult;
  }
  const crew = crewSize(c), loads = [{ id: 'life', demand: 0.8 + (M.hab2.built ? 0.5 : 0), pri: 0 }];
  const wants = {
    oxygen: online(M.oxygen) && M.oxygen.on && R.oxygen < CAP.oxygen * 0.98 && R.water > 0.05,
    water: online(M.water) && M.water.on && R.ice > 0.05 && R.water < CAP.water * 0.98,
    greenhouse: online(M.greenhouse) && M.greenhouse.on && R.food < CAP.food * 0.98 && R.water > 0.05,
  };
  for (const id of ['oxygen', 'water', 'greenhouse']) if (wants[id]) loads.push({ id, demand: MODULES[id].load, pri: loads.length });
  let avail = gen + Math.min(MAX_DISCHARGE_KW, R.battery * 60 / dt), used = 0;
  for (const l of loads) { l.granted = Math.max(0, Math.min(l.demand, avail - used)); used += l.granted; l.f = l.granted / l.demand; rt.loads[l.id] = l.f; }
  const cap = battCap(c), before = R.battery;
  R.battery = clamp(R.battery - Math.max(0, used - gen) * dt / 60, 0, cap);
  const surplus = Math.max(0, gen - used); R.battery = Math.min(cap, R.battery + surplus * dt / 60 * 0.95);
  rt.gen = gen; rt.demand = loads.reduce((s, l) => s + l.demand, 0); rt.used = used; rt.curtailed = R.battery >= cap - 1e-6 ? surplus : 0; rt.battNet = (R.battery - before) * 60 / dt;
  const f = id => loads.find(l => l.id === id)?.f ?? 0;

  const lifeF = f('life'); c.flags.lifeOff = lifeF < 0.99 ? c.flags.lifeOff + dt : 0;
  // production (each limited by inputs and by storage room)
  if (f('oxygen') > 0) {
    let e = eff(M.oxygen.cond) * f('oxygen'); const w = 0.06 * e * dt; if (w > R.water) e *= R.water / w;
    const out = Math.min(0.3 * e * dt, CAP.oxygen - R.oxygen); R.oxygen += out; S.o2Produced += out; R.water -= 0.06 * e * dt; rt.oxygen.prod += out / dt; rt.water.cons += 0.06 * e;
  }
  if (f('water') > 0) {
    const e = eff(M.water.cond) * f('water'), iceIn = Math.min(0.2 * e * dt, R.ice, (CAP.water - R.water) / 0.9), out = iceIn * 0.9;
    R.ice -= iceIn; R.water += out; S.waterProduced += out; rt.water.prod += out / dt; rt.ice.cons += iceIn / dt;
  }
  if (f('greenhouse') > 0) {
    let e = eff(M.greenhouse.cond) * f('greenhouse'); const w = 0.04 * e * dt; if (w > R.water) e *= R.water / w;
    const out = Math.min(0.12 * e * dt, CAP.food - R.food); R.food += out; S.foodProduced += out; R.water -= 0.04 * e * dt; rt.food.prod += out / dt; rt.water.cons += 0.04 * e;
  }
  // habitat life support
  const scrub = lifeF >= 0.99 ? 1 : 1.6, leak = M.hab2.built ? 0.03 * (1 - eff(M.hab2.cond)) : 0;
  const cO2 = crew * 0.05 * scrub + leak, cW = crew * 0.025, cF = crew * 0.02;
  R.oxygen = Math.max(0, R.oxygen - cO2 * dt); R.water = Math.max(0, R.water - cW * dt); R.food = Math.max(0, R.food - cF * dt);
  rt.oxygen.cons += cO2; rt.water.cons += cW; rt.food.cons += cF;

  // equipment wear
  for (const id of Object.keys(M)) { const m = M[id]; if (!m.built) continue; const running = loads.some(l => l.id === id && l.f > 0); m.cond = Math.max(0, m.cond - WEAR[id] * (MODULES[id].toggle ? (running ? 1 : 0.1) : 1) * wearMult * dt); }

  // crew health: shortages hurt
  const short = { oxygen: R.oxygen <= 1e-4, water: R.water <= 1e-4, food: R.food <= 1e-4 };
  const dmg = (short.oxygen ? 1.6 : 0) + (short.water ? 0.35 : 0) + (short.food ? 0.15 : 0);
  if (dmg) c.crew.health -= dmg * dt; else if (c.crew.health < 100) c.crew.health = Math.min(100, c.crew.health + 0.6 * dt);
  rt.health = -dmg;
  if (c.crew.health <= 0) { // emergency evacuation to the shelter: partial losses, then the crew recovers
    c.crew.health = 40; S.incidents++; c.storm.failed = true; S.stableSeconds = 0;
    R.materials = Math.floor(R.materials * 0.8); R.oxygen += 40; R.water += 15; R.food += 10;
    for (const m of Object.values(M)) if (m.built) m.cond = Math.max(5, m.cond - 15);
    ev.push({ type: 'incident' });
  }
  const supplied = !short.oxygen && !short.water && !short.food && lifeF >= 0.99;
  if (storm && (!supplied || c.crew.health < 50)) c.storm.failed = true;
  if (M.hab2.built) S.stableSeconds = supplied ? S.stableSeconds + dt : 0;

  // supply nodes regrow
  for (const n of Object.values(c.nodes)) if (n.charges < NODE_CHARGES) { n.t += dt; if (n.t >= NODE_REGEN) { n.t = 0; n.charges++; } }
  // Earth link settles after the signal delay
  if (S.linkStart && !S.linked) { S.linkProg = Math.min(1, S.linkProg + dt / E.linkDelay); if (S.linkProg >= 1) { S.linked = 1; ev.push({ type: 'linked' }); } }
  return ev;
}

// ---- Player actions. Each returns { ok, msg } ----
const fail = msg => ({ ok: false, msg }), good = msg => ({ ok: true, msg });
export function build(c, id, activeId) {
  const d = MODULES[id], m = c.mod[id]; if (!d || !m) return fail('Unknown module.');
  if (m.built) return fail(`${d.name} is already ${id === 'solar' ? 'repaired' : 'built'}.`);
  if (!gated(c, id, activeId)) return fail(`${d.name} is not available yet. Progress your missions.`);
  for (const [k, v] of Object.entries(d.cost)) if (c.res[k] < v) return fail(`Need ${v} ${k}. Stored: ${Math.floor(c.res[k])}. Mine more at supply caches and deliver to the depot.`);
  for (const [k, v] of Object.entries(d.cost)) c.res[k] -= v;
  m.built = true; m.cond = 100; m.dust = 0; return good(id === 'solar' ? 'Solar array repaired.' : `${d.name} built.`);
}
export function maintain(c, id) {
  const m = c.mod[id], d = MODULES[id]; if (!m?.built) return fail('Nothing to maintain here yet.');
  if (m.cond >= 95 && m.dust < 0.05) return fail(`${d.name} is in good condition.`);
  if (c.res.materials < 2) return fail('Maintenance needs 2 construction materials.');
  c.res.materials -= 2; m.cond = Math.min(100, m.cond + 35); m.dust = 0; c.stats.maintenance++;
  return good(`${d.name} serviced. Condition ${Math.round(m.cond)}%.`);
}
export function mine(c, nodeId, kind) { // kind: 'ice' | 'materials'
  const n = (c.nodes[nodeId] ??= { charges: NODE_CHARGES, t: 0 });
  if (n.charges <= 0) return fail('Deposit exhausted for now. It slowly replenishes.');
  const room = CARRY[kind] - c.carried[kind]; if (room < 1) return fail(`Carrying capacity full (${CARRY[kind]}).`);
  const got = Math.min(MINE_YIELD[kind], room); n.charges--; c.carried[kind] += got;
  if (kind === 'ice') c.stats.iceMined += got; else c.stats.matsMined += got;
  return good(`Extracted ${Math.round(got)} ${kind}. Carrying ${Math.round(c.carried[kind])}.`);
}
export function deposit(c) {
  const q = Math.min(c.carried.materials, CAP.materials - c.res.materials); if (q < 1) return fail(c.carried.materials ? 'Storage is full.' : 'You are carrying no materials.');
  c.carried.materials -= q; c.res.materials += q; return good(`Stored ${Math.round(q)} construction materials.`);
}
export function loadIce(c) {
  if (!c.mod.water.built) return fail('Build a water processor first.');
  const q = Math.min(c.carried.ice, CAP.ice - c.res.ice); if (q < 1) return fail(c.carried.ice ? 'Processor buffer is full.' : 'You are carrying no ice.');
  c.carried.ice -= q; c.res.ice += q; c.stats.iceLoaded += q; return good(`Loaded ${Math.round(q)} ice into the processor.`);
}
export function analyze(c) {
  if (c.res.battery < 0.6) return fail('The lab needs 0.6 kWh of stored energy.');
  c.res.battery -= 0.6; c.stats.analyzed++; return good('Sample analysed.');
}
export function startLink(c) { if (c.stats.linked) return fail('Earth link is already established.'); if (c.stats.linkStart) return fail('Handshake in progress.'); c.stats.linkStart = 1; return good('Uplink started. Waiting for the signal to settle.'); }
export function toggle(c, id) { const m = c.mod[id]; if (!m?.built || !MODULES[id].toggle) return fail('Cannot switch this module.'); m.on = !m.on; return good(`${MODULES[id].name} ${m.on ? 'enabled' : 'disabled'}.`); }

// Warnings for the HUD and management panel.
export function alerts(c) {
  const a = [], R = c.res, rt = c.rates, cap = battCap(c), crit = (text) => a.push({ level: 'crit', text }), warn = (text) => a.push({ level: 'warn', text });
  const left = (k) => { const net = rt[k].prod - rt[k].cons; return net < -1e-4 ? R[k] / -net : Infinity; };
  const T = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  for (const [k, n] of [['oxygen', 'Oxygen'], ['water', 'Water'], ['food', 'Food']]) {
    if (R[k] <= 1e-3) crit(`${n} depleted. Crew is taking damage.`); else if (left(k) < 150 || R[k] < CAP[k] * 0.15) (left(k) < 60 ? crit : warn)(`${n} low${left(k) < Infinity ? `, runs out in ${T(left(k))}` : ''}.`);
  }
  if (rt.demand > rt.gen + 0.01 && R.battery < 0.5) crit('Power shortage. Loads are being shed.'); else if (rt.demand > rt.gen + 0.01 && R.battery / cap < 0.25) warn('Battery draining below 25%.');
  if (c.flags.lifeOff > 0) crit('Life support unpowered. Oxygen use is up 60%.');
  for (const id of Object.keys(c.mod)) { const m = c.mod[id]; if (m.built && m.cond <= 10) crit(`${MODULES[id].name} has failed. Service it (R).`); else if (m.built && m.cond < 40) warn(`${MODULES[id].name} condition ${Math.round(m.cond)}%.`); }
  if (c.storm.phase === 'forecast') warn(`Dust storm forecast in ${Math.ceil(c.storm.t)} s. Charge batteries.`); if (c.storm.phase === 'active') crit(`Dust storm. Solar output cut. ${Math.ceil(c.storm.t)} s left.`);
  if (c.crew.health < 60) warn(`Crew health ${Math.round(c.crew.health)}%.`);
  return a;
}
