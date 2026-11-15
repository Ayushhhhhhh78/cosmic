// Single registry of playable worlds. Adding a world = adding an entry here + a worlds/<id>/ module.
// Gravity values are real; anything tuned for fun is marked as simulation in DEVELOPMENT_STATUS.md.
export const WORLDS = {
  moon: {
    id: 'moon', name: 'Moon', colonyName: 'Selene Outpost', mission: 'Lunar Frontier',
    tagline: 'Airless, silent and bright. Restore the outpost before the lunar night.',
    gravity: 1.62, accent: 0x8fb4ff, atmosphere: null,
    missions: ['First Landing', 'Restore Power', 'Life Support and Food', 'Lunar Sample Collection', 'Expand the Research Outpost'],
    facts: ['Surface gravity is about one sixth of Earth\u2019s.', 'A lunar day lasts about 29.5 Earth days.'],
  },
  mars: {
    id: 'mars', name: 'Mars', colonyName: 'Ares Base', mission: 'Mars Frontier',
    tagline: 'Thin air, red dust and buried ice. Build a colony that survives the storms.',
    gravity: 3.71, accent: 0xff8a5c, atmosphere: 0xd9694a,
    missions: ['Arrival and Communications', 'Restore Power', 'Locate Water Ice', 'Extract and Process Water', 'Oxygen Production', 'Greenhouse Operations', 'Dust Storm Protection', 'Colony Expansion'],
    facts: ['Surface gravity is about 38% of Earth\u2019s.', 'A Martian day (sol) lasts about 24 h 37 min.'],
  },
};
export const WORLD_IDS = Object.keys(WORLDS);
