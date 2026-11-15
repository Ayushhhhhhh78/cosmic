// Stage 6F: one Martian dust storm hazard. Pure logic, no Three.js, unit-tested in scripts/test-sim.mjs.
// Flow: idle -> warning -> active -> clearing -> done (reached shelter, saved) or over (caught in the open, may recur next visit).
// The scene reads `level` (0 clear .. 1 full storm) to set visibility, and `view()` for the HUD banner.
export const SAFE = { x: 0, z: -6, r: 14 }; // the outpost pad: habitats, dome, depot and lab all sit inside this circle
export const CFG = {
  minPlay: 60,   // seconds of exploring before a storm can form
  minDist: 45,   // storm only forms when the player is at least this far (m) from the safe-zone centre
  warn: 12,      // seconds of warning before the front arrives
  clear: 12,     // seconds the storm takes to die away once it ends
  card: 6,       // seconds the final message stays on screen after the storm has cleared
  haze: 0.2,     // visibility loss during the warning
  up: 0.15, down: 0.1, // level change per second (about 5 s to close in from the haze, 10 s to clear)
};

export const available = world => world === 'mars';
export const create = saved => ({ phase: saved?.done ? 'done' : 'idle', done: !!saved?.done, play: 0, t: 0, total: 0, level: 0, outcome: null, card: 0 });
export const serialize = s => ({ done: !!s.done });
export const inSafe = (x, z) => Math.hypot(x - SAFE.x, z - SAFE.z) <= SAFE.r;
export const distance = (x, z) => Math.max(0, Math.hypot(x - SAFE.x, z - SAFE.z) - SAFE.r); // metres to the edge of the safe zone
export const stormSeconds = d => Math.round(Math.min(150, Math.max(75, 45 + d / 3))); // always reachable on foot (walk 3 m/s)

// ctx: { x, z, busy }. busy = the colony's own storm is forecast or active, so the hazard waits. Returns events.
export function tick(s, dt, ctx) {
  const ev = [], far = Math.hypot(ctx.x - SAFE.x, ctx.z - SAFE.z);
  if (s.card > 0) s.card = Math.max(0, s.card - dt);
  const shelter = () => { s.phase = 'clearing'; s.outcome = 'safe'; s.done = true; s.t = CFG.clear; s.card = CFG.clear + CFG.card; ev.push({ type: 'safe' }); };
  if (s.phase === 'idle') {
    s.play += dt;
    if (s.play >= CFG.minPlay && !ctx.busy && far >= CFG.minDist) { s.phase = 'warning'; s.t = CFG.warn; ev.push({ type: 'warning', seconds: CFG.warn }); }
  } else if (s.phase === 'warning') {
    s.t -= dt;
    if (inSafe(ctx.x, ctx.z)) shelter();
    else if (s.t <= 0) { s.phase = 'active'; s.total = s.t = stormSeconds(distance(ctx.x, ctx.z)); ev.push({ type: 'start', seconds: s.total }); }
  } else if (s.phase === 'active') {
    s.t -= dt;
    if (inSafe(ctx.x, ctx.z)) shelter();
    else if (s.t <= 0) { s.phase = 'clearing'; s.outcome = 'exposed'; s.t = CFG.clear; s.card = CFG.clear + CFG.card; ev.push({ type: 'expired' }); }
  } else if (s.phase === 'clearing') {
    s.t -= dt;
    if (s.t <= 0) { s.phase = s.outcome === 'safe' ? 'done' : 'over'; ev.push({ type: 'end', outcome: s.outcome }); }
  }
  const target = s.phase === 'warning' ? CFG.haze : s.phase === 'active' ? 1 : 0;
  s.level = Math.min(1, Math.max(0, s.level + Math.min(CFG.up * dt, Math.max(-CFG.down * dt, target - s.level))));
  return ev;
}

// HUD banner data, or null when nothing should show. `nav` = show the direction/distance to the safe zone.
export function view(s, x, z) {
  const secs = Math.ceil(Math.max(0, s.t)), dist = Math.round(distance(x, z));
  if (s.phase === 'warning') return { phase: s.phase, level: s.level, tone: 'warn', nav: true, dist, title: 'DUST STORM WARNING', text: `Storm front arriving in ${secs} s. Head for the outpost safe zone.` };
  if (s.phase === 'active') return { phase: s.phase, level: s.level, tone: 'crit', nav: true, dist, title: 'DUST STORM', text: `Visibility is low. Reach the outpost safe zone. ${secs} s until it passes.` };
  if (s.card <= 0 && s.level <= 0) return null;
  if (s.outcome === 'safe') return { phase: s.phase, level: s.level, tone: 'ok', nav: false, dist, title: 'MISSION COMPLETE', text: s.phase === 'clearing' ? 'You reached the outpost shelter. The storm is passing.' : 'Dust storm survived. Visibility restored.' };
  if (s.outcome === 'exposed') return { phase: s.phase, level: s.level, tone: 'warn', nav: false, dist, title: s.phase === 'clearing' ? 'STORM PASSING' : 'STORM PASSED', text: s.phase === 'clearing' ? 'You were caught in the open. Visibility is returning.' : 'Visibility restored. The outpost is your shelter if another storm forms.' };
  return null;
}
