// Mission definitions per world. Objectives read live colony/gameplay state (see systems/Missions.js); none can be ticked by a button.
// get(c) returns a number; the objective is done when get(c) >= (target ?? 1). c = { res, mod, stats, crew, explore, world, storm }.
const O = (id, text, get, target = 1) => ({ id, text, get, target });
const built = id => c => (c.mod[id]?.built ? 1 : 0);
const reached = c => (c.explore.reached ? 1 : 0), rover = c => (c.explore.rover ? 1 : 0);
const featureScans = c => c.explore.scannedIds.filter(i => !i.includes('.ice#')).length;
const sampleTypes = c => new Set(c.explore.collectedIds.map(i => Number(i.split('#')[1]) % 3)).size;
const linked = c => (c.stats.linked ? 1 : 0);

const MOON = [
  { id: 'landing', title: 'First Landing', brief: 'Your landing team is down. Find the outpost, check the rover and open a link to Earth.',
    objectives: [O('reach', 'Walk to the research outpost', reached), O('rover', 'Inspect the rover', rover), O('scan', 'Scan 3 features', featureScans, 3), O('link', 'Establish the Earth link at the comms mast', linked)],
    reward: { materials: 25 }, done: 'Landing confirmed. Mission Control has released a supply allocation.' },
  { id: 'power', title: 'Restore Power', brief: 'The solar array is damaged and the habitat is on a small reserve cell. Repair it and store energy.',
    objectives: [O('repair', 'Repair the solar array', built('solar')), O('battery', 'Build a battery bank', built('battery')), O('charge', 'Charge the batteries to 60%', c => c.battPct, 0.6)],
    reward: { materials: 25 }, done: 'Power restored. The outpost can now run life support from stored energy.' },
  { id: 'life', title: 'Life Support and Food', brief: 'Close the loop: mine ice, process water, make oxygen and grow food.',
    objectives: [O('water', 'Build a water processor', built('water')), O('ice', 'Load 20 ice into the processor', c => c.stats.iceLoaded, 20), O('oxygen', 'Build an oxygen generator', built('oxygen')), O('o2', 'Produce 20 oxygen', c => c.stats.o2Produced, 20), O('gh', 'Build a greenhouse', built('greenhouse')), O('food', 'Grow 15 food', c => c.stats.foodProduced, 15)],
    reward: { materials: 30, food: 20 }, done: 'The life-support loop is running.' },
  { id: 'samples', title: 'Lunar Sample Collection', brief: 'Collect rock samples from the surface and analyse them in the outpost lab (uses battery power).',
    objectives: [O('collect', 'Collect 4 samples', c => c.explore.collectedIds.length, 4), O('types', 'Collect 3 different sample types', sampleTypes, 3), O('analyse', 'Analyse 3 samples in the lab', c => c.stats.analyzed, 3)],
    reward: { materials: 35 }, done: 'Samples catalogued. Results are queued for transmission to Earth.' },
  { id: 'expand', title: 'Expand the Research Outpost', brief: 'Add power and a second habitat, then keep a larger crew alive.',
    objectives: [O('solar2', 'Build a second solar array', built('solar2')), O('hab2', 'Build a second habitat module', built('hab2')), O('maint', 'Perform maintenance 3 times', c => c.stats.maintenance, 3), O('stable', 'Keep the crew of 4 supplied for 60 s', c => (c.mod.hab2.built ? c.stats.stableSeconds : 0), 60)],
    reward: { materials: 50 }, done: 'The research outpost is expanded. Sandbox play continues.' },
];

const MARS = [
  { id: 'arrival', title: 'Arrival and Communications', brief: 'Find the outpost and call home. Signals take minutes each way, so the link takes time to settle.',
    objectives: [O('reach', 'Walk to the research outpost', reached), O('rover', 'Inspect the rover', rover), O('dish', 'Scan the communications dish', c => (c.explore.scannedIds.includes('mars.dish') ? 1 : 0)), O('link', 'Establish the Earth link', linked)],
    reward: { materials: 25 }, done: 'Link established. Earth acknowledges your arrival.' },
  { id: 'power', title: 'Restore Power', brief: 'Sunlight is weak and dust covers the panels. Repair the array and store energy.',
    objectives: [O('repair', 'Repair the solar array', built('solar')), O('battery', 'Build a battery bank', built('battery')), O('charge', 'Charge the batteries to 60%', c => c.battPct, 0.6)],
    reward: { materials: 25 }, done: 'Power restored.' },
  { id: 'ice', title: 'Locate Water Ice', brief: 'Survey the surface for subsurface ice, then confirm it by extracting some.',
    objectives: [O('survey', 'Scan 2 ice anomalies', c => c.explore.scannedIds.filter(i => i.includes('.ice#')).length, 2), O('mine', 'Extract 20 ice', c => c.stats.iceMined, 20)],
    reward: { materials: 25 }, done: 'Ice confirmed. Water processing is now possible.' },
  { id: 'water', title: 'Extract and Process Water', brief: 'Build a water processor, load it with ice and make usable water.',
    objectives: [O('water', 'Build a water processor', built('water')), O('load', 'Load 30 ice into the processor', c => c.stats.iceLoaded, 30), O('made', 'Produce 20 water', c => c.stats.waterProduced, 20)],
    reward: { materials: 30 }, done: 'Water supply online.' },
  { id: 'oxygen', title: 'Oxygen Production', brief: 'Split water into oxygen. The generator needs both water and electricity.',
    objectives: [O('gen', 'Build an oxygen generator', built('oxygen')), O('o2', 'Produce 30 oxygen', c => c.stats.o2Produced, 30), O('reserve', 'Hold 150 oxygen in reserve', c => c.res.oxygen, 150)],
    reward: { materials: 30 }, done: 'Oxygen production is running.' },
  { id: 'greenhouse', title: 'Greenhouse Operations', brief: 'Grow food. The greenhouse uses water and lighting power.',
    objectives: [O('gh', 'Build a greenhouse', built('greenhouse')), O('food', 'Grow 20 food', c => c.stats.foodProduced, 20), O('stock', 'Hold 100 food in reserve', c => c.res.food, 100)],
    reward: { materials: 35 }, done: 'Fresh food is now part of the supply loop.' },
  { id: 'storm', title: 'Dust Storm Protection', brief: 'A dust storm is forecast. Protect the panels, fill the batteries and keep life support alive through it.',
    objectives: [O('shield', 'Build a dust shield', built('shield')), O('charge', 'Charge the batteries to 80%', c => c.battPct, 0.8), O('survive', 'Survive a dust storm', c => c.stats.stormsSurvived)],
    reward: { materials: 40 }, done: 'The storm has passed. Storms will recur, so keep reserves up.' },
  { id: 'colony', title: 'Colony Expansion', brief: 'Grow the colony to a crew of four and keep them supplied.',
    objectives: [O('solar2', 'Build a second solar array', built('solar2')), O('hab2', 'Build a second habitat module', built('hab2')), O('stable', 'Keep the crew of 4 supplied for 90 s', c => (c.mod.hab2.built ? c.stats.stableSeconds : 0), 90)],
    reward: { materials: 60 }, done: 'The colony is established. Sandbox play continues.' },
];
export const MISSIONS = { moon: MOON, mars: MARS };
// Module build gates: the mission id at which a module becomes buildable (it stays buildable afterwards).
export const MODULE_GATE = {
  moon: { solar: null, battery: 'power', water: 'life', oxygen: 'life', greenhouse: 'life', solar2: 'expand', hab2: 'expand' },
  mars: { solar: null, battery: 'power', water: 'water', oxygen: 'oxygen', greenhouse: 'greenhouse', shield: 'storm', solar2: 'colony', hab2: 'colony' },
};
