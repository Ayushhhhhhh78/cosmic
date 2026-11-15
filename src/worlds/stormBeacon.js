import { Group, Mesh, CylinderGeometry, RingGeometry, MeshBasicMaterial, AdditiveBlending, DoubleSide } from 'three';
import { SAFE } from '../systems/DustStorm.js';

// Stage 6F: green light column and ground ring marking the outpost safe zone. Hidden until a dust storm is on.
// fog:false keeps it visible through the dust, which is the player's guide home.
export function createStormBeacon(heightAt) {
  const group = new Group(), y = heightAt(SAFE.x, SAFE.z);
  const mat = o => new MeshBasicMaterial({ color: 0x7dffb0, transparent: true, opacity: o, blending: AdditiveBlending, depthWrite: false, fog: false, side: DoubleSide });
  const beam = new Mesh(new CylinderGeometry(1.5, 1.5, 90, 16, 1, true), mat(0.4)); beam.position.set(SAFE.x, y + 45, SAFE.z);
  const ring = new Mesh(new RingGeometry(SAFE.r - 0.6, SAFE.r, 64), mat(0.5)); ring.rotation.x = -Math.PI / 2; ring.position.set(SAFE.x, y + 0.08, SAFE.z);
  group.add(beam, ring); group.visible = false;
  return { group, set(on, t = 0) { group.visible = on; if (on) beam.material.opacity = 0.34 + 0.12 * Math.sin(t * 4); } };
}
