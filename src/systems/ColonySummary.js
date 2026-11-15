// Stage 6A: read-only summary of a colony for the Colony Management overview. Pure logic, no Three.js, never changes colony state.
import { WORLDS } from '../data/worlds.js';
import * as Colony from './Colony.js';
import * as Construction from './Construction.js';

const RESOURCES = [['oxygen', 'Oxygen'], ['water', 'Water'], ['food', 'Food'], ['materials', 'Construction materials'], ['ice', 'Ice in processor']];
const BASE_HABITATS = 2; // the landed outpost always has two habitat modules (see worlds/outpost.js)

const stateOf = (m, toggle) => (!m.built ? 'Not built' : m.cond <= 10 ? 'Failed' : toggle && !m.on ? 'Switched off' : m.cond < 60 ? 'Degraded' : 'Online');

// colony: a state object from Colony.createColony/loadColony. visited: whether this world has a save.
export function summarize(worldId, colony, visited = true) {
  const w = WORLDS[worldId], c = colony, cap = Colony.battCap(c);
  const resources = RESOURCES.map(([k, name]) => ({ key: k, name, value: c.res[k], cap: Colony.CAP[k] }));
  resources.push({ key: 'power', name: 'Battery power', value: c.res.battery, cap, unit: 'kWh' });
  const buildings = [{ id: 'habitat', name: 'Habitat modules', state: 'Online', count: BASE_HABITATS, cond: 100 }];
  for (const id of Colony.WORLD_MODULES[worldId]) {
    const m = c.mod[id], d = Colony.MODULES[id];
    buildings.push({ id, name: d.name, state: stateOf(m, !!d.toggle), cond: m.built ? m.cond : 0, built: m.built, on: m.on, toggle: !!d.toggle, count: id === 'hab2' && m.built ? 1 : 0 });
  }
  const built = buildings.filter(b => b.state !== 'Not built').length;
  return {
    world: worldId, worldName: w.name, colonyName: w.colonyName, visited, mission: w.mission,
    status: !visited ? 'No landing recorded' : c.crew.health < 60 ? 'Crew in danger' : 'Operating',
    population: { crew: Colony.crewSize(c), health: c.crew.health, housing: Colony.crewSize(c), more: c.mod.hab2.built ? 0 : 2 },
    resources, buildings, builtCount: built, totalCount: buildings.length,
    structures: Construction.available(worldId) ? Construction.idsFor(worldId).map(id => { const d = Construction.def(worldId, id); return { id, name: d.name, count: Construction.count(c, id), max: d.max }; }) : null, // Stage 6B/6C (Moon and Mars)
    missionsDone: c.missions.done.length, missionsTotal: w.missions.length,
  };
}

// Convenience for a saved world record (or none).
export const summarizeSave = (worldId, save) => summarize(worldId, Colony.loadColony(worldId, save?.colony), !!save);
