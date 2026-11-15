import { Group, Mesh, OctahedronGeometry, MeshBasicMaterial, Vector3 } from 'three';
import { createHeightField, craterList, HALF } from './heightfield.js';
import { createTerrain } from './terrain.js';
import { scatterRocks, createSamples } from './props.js';
import { createOutpost } from './outpost.js';
import { createColonyProps } from './colonyProps.js';
import { createColonyStructures } from './colonyStructures.js';
import { createSky } from './sky.js';
import { createStormBeacon } from './stormBeacon.js';
import { WORLDS } from '../data/worlds.js';
import { UNLOCKS } from '../data/discoveries.js';

// Assembles one world's scene content and returns everything gameplay needs (height function, colliders, targets).
export function buildWorld(worldId, scene, quality) {
  const def = WORLDS[worldId], heightAt = createHeightField(worldId), root = new Group(); scene.add(root);
  const sky = createSky(worldId, scene, quality), terrain = createTerrain(worldId, heightAt, quality);
  const rocks = scatterRocks(worldId, heightAt, quality), outpost = createOutpost(worldId, def.accent), samples = createSamples(worldId, heightAt);
  const colony = createColonyProps(worldId, heightAt, def.accent);
  const structures = createColonyStructures(worldId, heightAt, def.accent); // Stage 6H: starter outpost + constructed buildings, driven by colony data
  root.add(terrain, rocks.mesh, outpost.group, samples.group, colony.group, structures.group);
  const beacon = worldId === 'mars' ? createStormBeacon(heightAt) : null; if (beacon) root.add(beacon.group); // Stage 6F safe-zone marker (Mars only)

  const scannables = [...outpost.scannables, ...colony.scannables], U = UNLOCKS[worldId];
  const craters = craterList(worldId).filter(c => Math.hypot(c.x, c.z) < 150).sort((a, b) => b.r - a.r).slice(0, 2);
  craters.forEach((c, i) => { // scan point on the near rim; the range lets you scan from the rim or a little outside it
    const d = Math.hypot(c.x, c.z), x = c.x - c.x / d * c.r, z = c.z - c.z / d * c.r;
    scannables.push({ id: `${worldId}.crater#${i}`, kind: 'crater', name: 'Impact crater', discovery: U.crater, pos: new Vector3(x, heightAt(x, z) + 1.5, z), range: 28, scanned: false });
  });
  if (U.dunes) { // highest dune crest in the mid-field
    let best = { h: -1e9, x: 0, z: 0 };
    for (let x = -140; x <= 140; x += 8) for (let z = -140; z <= 140; z += 8) { const d = Math.hypot(x, z), h = heightAt(x, z); if (d > 60 && d < 140 && h > best.h) best = { h, x, z }; }
    scannables.push({ id: 'mars.dunes', kind: 'dunes', name: 'Dune field', discovery: U.dunes, pos: new Vector3(best.x, best.h + 1.5, best.z), range: 26, scanned: false });
  }
  const mGeo = new OctahedronGeometry(0.35), mMat = new MeshBasicMaterial({ color: def.accent, transparent: true, opacity: 0.85 });
  for (const s of scannables) { s.marker = new Mesh(mGeo, mMat); s.marker.position.copy(s.pos).y += s.kind === 'crater' || s.kind === 'dunes' ? 2.5 : 1.8; s.baseY = s.marker.position.y; root.add(s.marker); }

  return {
    def, heightAt, root, sky, beacon, scannables, colony, structures, interactables: [...outpost.interactables, ...samples.items, ...colony.interactables], samples: samples.items,
    colliders: [...rocks.colliders, ...outpost.colliders, ...colony.colliders, ...structures.colliders], spawn: { x: 0, z: 30 }, half: HALF - 2,
    dispose() {
      sky.dispose(); scene.remove(root);
      root.traverse(o => { o.geometry?.dispose?.(); const m = o.material; (Array.isArray(m) ? m : m ? [m] : []).forEach(x => { x.map?.dispose?.(); x.dispose(); }); });
    },
  };
}
