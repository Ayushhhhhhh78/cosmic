// Stage 6B/6C: outpost construction for the Moon and Mars. Pure logic (no Three.js). Costs are paid from the colony's existing resources
// (colony.res), and built counts live in colony.outpost, so they save and load with the rest of the colony.
// Each structure lists the worlds it can be built on; `mars` overrides the base (Moon) name, blurb, cost and limit for Mars.
export const STRUCTURES = {
  habitat: { worlds: ['moon', 'mars'], name: 'Lunar Habitat', blurb: 'Pressurised living quarters for the outpost crew.', cost: { materials: 45 }, max: 3,
    mars: { name: 'Mars Habitat', blurb: 'Pressurised, radiation-shielded living quarters for the Mars crew.', cost: { materials: 50 } } },
  power: { worlds: ['moon', 'mars'], name: 'Solar Power Station', blurb: 'A field of panels that collects sunlight for the outpost.', cost: { materials: 30 }, max: 4,
    mars: { blurb: 'A field of panels for the outpost. Sunlight is weaker at Mars, so the field is larger.', cost: { materials: 35 } } },
  lab: { worlds: ['moon', 'mars'], name: 'Research Lab', blurb: 'A sealed laboratory for studying lunar samples.', cost: { materials: 35, battery: 3 }, max: 2,
    mars: { blurb: 'A sealed laboratory for studying Martian rock, soil and ice.', cost: { materials: 40, battery: 3 } } },
  storage: { worlds: ['moon'], name: 'Storage Unit', blurb: 'A sealed container for tools and spare parts.', cost: { materials: 20 }, max: 4 },
  extractor: { worlds: ['mars'], name: 'Water Extraction Unit', blurb: 'Drills and heats subsurface ice to pull water out of the Martian ground.', cost: { materials: 30, battery: 2 }, max: 3 },
};
export const STRUCTURE_IDS = Object.keys(STRUCTURES);
export const COST_LABEL = { materials: 'construction materials', battery: 'kWh battery power' };

export const available = world => world === 'moon' || world === 'mars';
export const idsFor = world => (available(world) ? STRUCTURE_IDS.filter(id => STRUCTURES[id].worlds.includes(world)) : []);
export const def = (world, id) => { const d = STRUCTURES[id]; return d && d.worlds.includes(world) ? { ...d, ...(d[world] ?? {}) } : null; }; // this world's version, or null
export const blankOutpost = () => Object.fromEntries(STRUCTURE_IDS.map(id => [id, 0]));
export const count = (c, id) => c.outpost?.[id] ?? 0;

const EPS = 1e-9;
const fail = msg => ({ ok: false, msg }), good = msg => ({ ok: true, msg });
const missing = (c, id) => Object.entries(def(c.world, id).cost).filter(([k, v]) => (c.res[k] ?? 0) + EPS < v);

// Builds one structure if the colony can afford it. Deducts the cost only on success. Returns { ok, msg }.
export function construct(c, id) {
  if (!available(c.world)) return fail('Construction is not available here.');
  const d = def(c.world, id); if (!d) return fail(STRUCTURES[id] ? `${STRUCTURES[id].name} cannot be built on ${c.world === 'moon' ? 'the Moon' : 'Mars'}.` : 'Unknown structure.');
  if (count(c, id) >= d.max) return fail(`${d.name}: the outpost already has the maximum of ${d.max}.`);
  const short = missing(c, id);
  if (short.length) return fail(`Not enough resources for ${d.name}. Need ${short.map(([k, v]) => `${v} ${COST_LABEL[k]} (have ${Math.floor(c.res[k])})`).join(', ')}.`);
  for (const [k, v] of Object.entries(d.cost)) c.res[k] = Math.max(0, c.res[k] - v);
  c.outpost[id] = count(c, id) + 1;
  return good(`${d.name} built (${c.outpost[id]} of ${d.max}).`);
}

// Everything the construction screen needs, one entry per structure. Read-only.
export function view(c) {
  return idsFor(c.world).map(id => {
    const d = def(c.world, id), n = count(c, id), maxed = n >= d.max, short = missing(c, id);
    return {
      id, name: d.name, blurb: d.blurb, count: n, max: d.max,
      cost: Object.entries(d.cost).map(([key, need]) => ({ key, label: COST_LABEL[key], need, have: c.res[key] ?? 0, ok: (c.res[key] ?? 0) + EPS >= need })),
      canBuild: !maxed && !short.length, reason: maxed ? 'Maximum built' : short.length ? 'Not enough resources' : '',
    };
  });
}

// Completed structures only (for the colony overview). Read-only.
export const completed = c => idsFor(c.world).filter(id => count(c, id) > 0).map(id => ({ id, name: def(c.world, id).name, count: count(c, id) }));
