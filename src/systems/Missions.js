// Mission progression. Objectives read live colony/gameplay state; completion is latched per objective and rewards are applied once.
import { MISSIONS } from '../data/missions.js';
import { CAP, battCap } from './Colony.js';

export const list = c => MISSIONS[c.world];
export function activeMission(c) { return list(c).find(m => !c.missions.done.includes(m.id)) ?? null; }
export const context = (c, explore) => ({ res: c.res, mod: c.mod, stats: c.stats, crew: c.crew, storm: c.storm, world: c.world, explore, battPct: c.res.battery / battCap(c) });

function objState(c, m, o, ctx) {
  const latched = !!c.missions.obj[m.id]?.[o.id], v = o.get(ctx), done = latched || v >= o.target;
  return { id: o.id, text: o.text, target: o.target, progress: done ? o.target : Math.max(0, Math.min(o.target, v)), done, latch: !latched && done };
}
// Evaluates the active mission (chaining if several complete at once). Returns events for toasts and the EventBus.
export function evaluate(c, explore) {
  const ev = [], ctx = context(c, explore);
  for (let guard = 0; guard < 10; guard++) {
    const m = activeMission(c); if (!m) break;
    const objs = m.objectives.map(o => objState(c, m, o, ctx));
    for (const o of objs) if (o.latch) { (c.missions.obj[m.id] ??= {})[o.id] = true; ev.push({ type: 'objective', mission: m.id, title: m.title, text: o.text }); }
    if (!objs.every(o => o.done)) break;
    c.missions.done.push(m.id);
    for (const [k, v] of Object.entries(m.reward)) c.res[k] = Math.min(CAP[k] ?? 1e3, c.res[k] + v);
    const next = activeMission(c);
    ev.push({ type: 'mission', mission: m.id, title: m.title, done: m.done, reward: rewardText(m.reward), next: next?.title ?? null });
  }
  return ev;
}
export const rewardText = r => Object.entries(r).map(([k, v]) => `+${v} ${k}`).join(', ');

// Snapshot for the UI: every mission with status, objective progress, reward and unlock condition.
export function view(c, explore) {
  const ctx = context(c, explore), act = activeMission(c), L = list(c);
  return L.map((m, i) => {
    const done = c.missions.done.includes(m.id), status = done ? 'done' : act?.id === m.id ? 'active' : 'locked';
    return { id: m.id, title: m.title, brief: m.brief, status, reward: rewardText(m.reward), requires: i ? L[i - 1].title : null, completion: m.done,
      objectives: status === 'locked' ? m.objectives.map(o => ({ text: o.text, target: o.target, progress: 0, done: false })) : m.objectives.map(o => objState(c, m, o, ctx)) };
  });
}
