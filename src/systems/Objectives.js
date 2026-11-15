// Basic exploration objectives (Stage 3). The full mission system arrives in Stage 5.
export const OUTPOST_RADIUS = 16, SCANS_NEEDED = 3, SAMPLES_NEEDED = 3;
export const defaultExplore = () => ({ reached: false, rover: false, returned: false, scannedIds: [], collectedIds: [] });

export function list(ex) {
  return [
    { id: 'outpost', text: 'Walk to the research outpost', done: ex.reached },
    { id: 'rover', text: 'Inspect the rover', done: ex.rover },
    { id: 'scan', text: `Scan ${SCANS_NEEDED} features`, progress: Math.min(ex.scannedIds.length, SCANS_NEEDED), target: SCANS_NEEDED, done: ex.scannedIds.length >= SCANS_NEEDED },
    { id: 'samples', text: `Collect ${SAMPLES_NEEDED} samples`, progress: Math.min(ex.collectedIds.length, SAMPLES_NEEDED), target: SAMPLES_NEEDED, done: ex.collectedIds.length >= SAMPLES_NEEDED },
    { id: 'return', text: 'Return to the outpost with your findings', done: ex.returned },
  ];
}
// Updates flags from player position; returns the objectives completed since `before`.
export function tick(ex, x, z, before) {
  const near = Math.hypot(x, z) < OUTPOST_RADIUS;
  if (near) ex.reached = true;
  if (near && ex.rover && ex.scannedIds.length >= SCANS_NEEDED && ex.collectedIds.length >= SAMPLES_NEEDED) ex.returned = true;
  const prev = new Set(before.filter(o => o.done).map(o => o.id));
  return list(ex).filter(o => o.done && !prev.has(o.id));
}
