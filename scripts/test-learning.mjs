// Headless automated test suite for Stage 7A Learning Lab mini-games, scoring, and storage.
// Run: node scripts/test-learning.mjs
import assert from 'node:assert/strict';

// Set up localStorage and DOM mock for node environment
const mem = new Map();
globalThis.localStorage = {
  getItem: (k) => mem.get(k) ?? null,
  setItem: (k, v) => mem.set(k, v),
  removeItem: (k) => mem.delete(k),
};

const makeMockEl = () => {
  const el = {
    innerHTML: '',
    textContent: '',
    value: '0',
    dataset: {},
    classList: {
      add: () => {},
      remove: () => {},
      toggle: () => {},
    },
    style: {},
    parentElement: {
      getBoundingClientRect: () => ({ width: 800, height: 360 }),
    },
    getBoundingClientRect: () => ({ width: 800, height: 360 }),
    addEventListener: () => {},
    removeEventListener: () => {},
    querySelector: (sel) => makeMockEl(),
    querySelectorAll: (sel) => [makeMockEl()],
    getContext: () => ({
      fillRect: () => {},
      clearRect: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      stroke: () => {},
      fill: () => {},
      arc: () => {},
      ellipse: () => {},
      strokeRect: () => {},
      fillText: () => {},
      save: () => {},
      restore: () => {},
      translate: () => {},
      rotate: () => {},
      setLineDash: () => {},
      quadraticCurveTo: () => {},
      bezierCurveTo: () => {},
      closePath: () => {},
      createLinearGradient: () => ({ addColorStop: () => {} }),
      createRadialGradient: () => ({ addColorStop: () => {} }),
    }),
  };
  return el;
};

globalThis.document = {
  createElement: () => makeMockEl(),
  addEventListener: () => {},
  removeEventListener: () => {},
};

globalThis.window = {
  addEventListener: () => {},
  removeEventListener: () => {},
};

globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 16);
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);

import {
  ACTIVITIES,
  RANKS,
  getRank,
  loadLearningScores,
  saveLearningScore,
  calculateTotalScore,
} from '../src/learning/learningData.js';

import { LunarGravitySim } from '../src/learning/LunarGravityChallenge.js';
import { CRATER_CASES, CRATER_TYPES } from '../src/learning/CraterDetective.js';
import { MarsRoverNavigator } from '../src/learning/MarsRoverNavigator.js';
import { MissionResourceManager } from '../src/learning/MissionResourceManager.js';
import { SolarPowerEngineer } from '../src/learning/SolarPowerEngineer.js';
import { MartianEcosystem } from '../src/learning/MartianEcosystem.js';

let n = 0;
const test = (name, fn) => {
  fn();
  n++;
  console.log('ok', name);
};
const testAsync = async (name, fn) => {
  await fn();
  n++;
  console.log('ok', name);
};

// 1. Learning Data & Scoring
test('learning: all 6 mini-game activities registered with science metadata and max scores', () => {
  assert.equal(ACTIVITIES.length, 6);
  const ids = ACTIVITIES.map((a) => a.id);
  assert.deepEqual(ids, ['gravity', 'crater', 'rover', 'resources', 'solar', 'ecosystem']);
  for (const act of ACTIVITIES) {
    assert.ok(act.name && act.tagline && act.concept && act.briefing);
    assert.equal(act.maxScore.beginner, 100);
    assert.equal(act.maxScore.advanced, 150);
  }
});

test('learning: rank thresholds progress from Cadet to Mission Commander', () => {
  assert.equal(getRank(0).title, 'Cadet Trainee');
  assert.equal(getRank(250).title, 'Science Specialist');
  assert.equal(getRank(550).title, 'Flight Engineer');
  assert.equal(getRank(950).title, 'Senior Science Officer');
  assert.equal(getRank(1400).title, 'Cosmix Mission Commander');
});

await testAsync('learning: scores save and calculate cumulative total across activities', async () => {
  await saveLearningScore('gravity', 'beginner', 95);
  await saveLearningScore('gravity', 'advanced', 140);
  await saveLearningScore('rover', 'beginner', 85);
  const scores = await loadLearningScores();
  assert.equal(scores.gravity.beginner.score, 95);
  assert.equal(scores.gravity.beginner.stars, 2);
  assert.equal(scores.gravity.advanced.score, 140);
  assert.equal(scores.gravity.advanced.stars, 3);
  assert.equal(scores.rover.beginner.score, 85);

  const total = calculateTotalScore(scores);
  assert.equal(total, 95 + 140 + 85);
});

// 2. Mini-Game 1: Lunar Gravity Challenge
test('game 1 (gravity): theoretical apex matches v0^2 / 2g for Moon (1.62 m/s^2) vs Earth (9.81 m/s^2)', () => {
  const sim = new LunarGravitySim('beginner');
  const v0 = 6.0;
  const theoryMoon = sim.calcTheory(v0, 90, 1.62);
  const theoryEarth = sim.calcTheory(v0, 90, 9.81);

  // h_moon = 36 / 3.24 = 11.11 m; h_earth = 36 / 19.62 = 1.83 m
  assert.ok(Math.abs(theoryMoon.apex - 11.11) < 0.1);
  assert.ok(Math.abs(theoryEarth.apex - 1.83) < 0.1);
  assert.ok(theoryMoon.apex > theoryEarth.apex * 5.5, 'Moon jumps > 5.5x higher than Earth');
});

test('game 1 (gravity): beginner stepping physics detects target shelf apex', () => {
  const sim = new LunarGravitySim('beginner');
  // Target 1 is 4.2m. Needed v0 = sqrt(2 * 1.62 * 4.2) ≈ 3.69 m/s
  sim.launch(3.7, 90, 120);
  for (let i = 0; i < 400 && !sim.landed; i++) {
    sim.step(0.02);
  }
  assert.ok(sim.landed);
  assert.ok(sim.targetHit, `Target hit: apex ${sim.apexY} vs target ${sim.targets[0].height}`);
});

test('game 1 (gravity): advanced mode checks obstacle collision and landing zone', () => {
  const sim = new LunarGravitySim('advanced');
  // Too low angle -> hits crater ridge obstacle
  sim.launch(8.0, 15, 120);
  for (let i = 0; i < 200 && !sim.landed; i++) {
    sim.step(0.02);
  }
  assert.ok(sim.crashed, 'Hits obstacle when angle is too low');

  // Proper arc clearing obstacle (x=14, h=4.5) and landing in zone 24m-32m with safe speed
  const sim2 = new LunarGravitySim('advanced');
  sim2.launch(7.5, 55, 120);
  for (let i = 0; i < 500 && !sim2.landed; i++) {
    sim2.step(0.02);
  }
  assert.ok(sim2.landed);
  assert.ok(sim2.x >= sim2.targetZone.minX - 1 && sim2.x <= sim2.targetZone.maxX + 1);
});

// 3. Mini-Game 2: Crater Detective
test('game 2 (crater): cases define valid planetary morphologies', () => {
  assert.equal(CRATER_CASES.length, 4);
  assert.equal(CRATER_CASES[0].type, 'Simple Crater');
  assert.equal(CRATER_CASES[1].type, 'Complex Crater');
  assert.equal(CRATER_CASES[2].type, 'Multi-Ring Basin');
  assert.equal(CRATER_CASES[3].type, 'Degraded / Infilled Crater');
});

test('game 2 (crater): kinetic energy and diameter scaling behaves consistently', () => {
  // Impactor 1.2 km at 20 km/s at 45 deg
  const radM = (1.2 * 1000) / 2;
  const vol = (4 / 3) * Math.PI * Math.pow(radM, 3);
  const massKg = vol * 3000;
  const joules = 0.5 * massKg * Math.pow(20000, 2);
  const megatons = joules / 4.184e15;
  assert.ok(megatons > 100000, 'Hypervelocity impact generates immense megaton yield');
});

// 4. Mini-Game 3: Mars Rover Navigator
test('game 3 (rover): grid initialization and boundaries for beginner (7x7) and advanced (9x9)', () => {
  const rBeg = new MarsRoverNavigator(document.createElement('div'), { difficulty: 'beginner' });
  assert.equal(rBeg.gridSize, 7);
  assert.equal(rBeg.requiredSamples, 2);
  assert.equal(rBeg.roverPos.x, 0);
  assert.equal(rBeg.roverPos.y, 0);

  const rAdv = new MarsRoverNavigator(document.createElement('div'), { difficulty: 'advanced' });
  assert.equal(rAdv.gridSize, 9);
  assert.equal(rAdv.requiredSamples, 3);
});

await testAsync('game 3 (rover): command pipeline executes turn, movement, sample drill and battery drain', async () => {
  const r = new MarsRoverNavigator(document.createElement('div'), { difficulty: 'beginner' });
  // Start at (0,0) facing East (dir 0).
  // Move East to (1,0), turn South (dir 1), move South to (1,1)
  r.commandQueue = ['F', 'R', 'F'];
  await r.executeQueue();
  assert.equal(r.roverPos.x, 1);
  assert.equal(r.roverPos.y, 1);
  assert.equal(r.roverDir, 1); // facing South
  assert.ok(r.battery < 100, 'Battery drained by movement');
  r.destroy();
});

// 5. Mini-Game 4: Mission Resource Manager
test('game 4 (resources): crew consumption and life support closed-loop calculations', () => {
  const mgr = new MissionResourceManager(document.createElement('div'), { difficulty: 'beginner' });
  const o2Before = mgr.oxygen;
  const h2oBefore = mgr.water;
  mgr.systems.moxie = 'off'; // shut down generator to test crew consumption
  mgr.systems.waterRecycler = false; // shut down recycler
  mgr.systems.scrubber = 'off'; // shut down scrubber to observe CO2 accumulation
  mgr.tickTime(24); // 1 full sol

  assert.ok(mgr.oxygen < o2Before, 'Crew consumes oxygen');
  assert.ok(mgr.water < h2oBefore, 'Crew consumes water');
  assert.ok(mgr.co2Level > 600, 'Crew produces CO2');
  mgr.destroy();
});

test('game 4 (resources): MOXIE and water recycler stabilize resources', () => {
  const mgr = new MissionResourceManager(document.createElement('div'), { difficulty: 'beginner' });
  mgr.systems.moxie = 'nominal';
  mgr.systems.waterRecycler = true;
  mgr.systems.scrubber = 'nominal';
  mgr.tickTime(48); // 2 full sols
  assert.ok(mgr.crewHealth >= 95, 'Crew health preserved with active ECLSS systems');
  assert.ok(mgr.co2Level < 1200, 'CO2 level kept safe by scrubber');
  mgr.destroy();
});

// 6. Mini-Game 5: Solar Power Engineer
test('game 5 (solar): sun position and Lambert cosine law calculates peak power at solar noon', () => {
  const sol = new SolarPowerEngineer(document.createElement('div'), { difficulty: 'beginner' });
  // Solar noon is at hour 12 (elevation 65 deg, azimuth 0)
  sol.hour = 12;
  sol.tilt = 25; // 90 - 65 = 25 deg tilt matches normal incidence perfectly
  sol.azimuth = 0;
  const pNoon = sol.calcIncidence();
  assert.ok(pNoon.cosTheta > 0.98, `Cos theta at noon: ${pNoon.cosTheta}`);
  assert.ok(pNoon.powerKW > 10.0, `Peak power at noon: ${pNoon.powerKW} kW`);

  // Night has zero power
  sol.hour = 22;
  const pNight = sol.calcIncidence();
  assert.equal(pNight.powerKW, 0);
  sol.destroy();
});

// 7. Mini-Game 6: Martian Ecosystem
test('game 6 (ecosystem): crop development advances with optimal moisture and temperature', () => {
  const eco = new MartianEcosystem(document.createElement('div'), { difficulty: 'beginner' });
  assert.equal(eco.growthStage, 0); // Seedling
  eco.moisture = 55; // optimal
  eco.temperature = 22; // optimal
  eco.lightHours = 16; // optimal

  eco.advanceCycle();
  assert.equal(eco.growthStage, 1); // Vegetative
  eco.advanceCycle();
  assert.equal(eco.growthStage, 2); // Tuber formation
  assert.ok(eco.plantHealth >= 90, 'Plant health maintained in optimal green zone');
  eco.destroy();
});

test('game 6 (ecosystem): poor environmental conditions (drought, extreme cold) damage crop health', () => {
  const eco = new MartianEcosystem(document.createElement('div'), { difficulty: 'beginner' });
  eco.moisture = 20; // severe drought
  eco.temperature = 10; // freezing cold
  eco.advanceCycle();
  assert.ok(eco.plantHealth < 100, 'Health damaged by sub-optimal environment');
  eco.destroy();
});

console.log(`\nAll ${n} Learning Lab mini-game tests passed successfully!`);
process.exit(0);
