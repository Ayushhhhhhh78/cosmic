// Learning Lab activity definitions, scientific principles, and persistent score storage.
import { get, set } from '../utils/storage.js';

export const ACTIVITIES = [
  {
    id: 'gravity',
    name: 'Lunar Gravity Challenge',
    tagline: 'Moon vs Earth physics and jump simulation',
    icon: '\u25b2', // triangle / rocket trajectory
    category: 'Astrophysics & Biomechanics',
    world: 'moon',
    accent: '#5b8cff',
    concept: 'Gravitational acceleration (g = GM/R\u00b2), parabolic trajectory, apex height (v\u00b2/2g), hang time.',
    maxScore: { beginner: 100, advanced: 150 },
    briefing: 'Earth gravity is 9.81 m/s\u00b2, while the Moon has only 1.62 m/s\u00b2 (about one-sixth). Because gravity pulls downward with less acceleration, the same muscle or thruster launch impulse sends an astronaut six times higher and keeps them airborne nearly six times longer! Adjust launch velocities, angles and suit payload masses to hit target science platforms and clear obstacle craters.',
  },
  {
    id: 'crater',
    name: 'Crater Detective',
    tagline: 'Impact morphology & planetary surface shaping',
    icon: '\u25ce', // bullseye crater
    category: 'Planetary Geology',
    world: 'moon',
    accent: '#8fb4ff',
    concept: 'Simple vs complex craters, central rebound peaks, ejecta blankets, kinetic energy (E = \u00bdmv\u00b2), and stratigraphic superposition.',
    maxScore: { beginner: 100, advanced: 150 },
    briefing: 'Impact cratering is the dominant geological process shaping airless worlds. Small meteorites carve simple bowl-shaped craters, while massive hypervelocity impactors produce complex craters with central peaks and terraced walls. By inspecting morphological cross-sections and crater superposition (which crater overlaps which), planetary geologists reconstruct billions of years of solar system history.',
  },
  {
    id: 'rover',
    name: 'Mars Rover Navigator',
    tagline: 'Path planning & obstacle avoidance across Martian terrain',
    icon: '\u25c8', // diamond rover
    category: 'Robotics & Autonomous Systems',
    world: 'mars',
    accent: '#ff8a5c',
    concept: 'Autonomous path planning, wheel slip on regolith dunes, battery power budget, communication signal latency.',
    maxScore: { beginner: 100, advanced: 150 },
    briefing: 'Radio signals between Earth and Mars take anywhere from 3 to 22 minutes to travel each way due to the vast distance. Real rovers like Curiosity and Perseverance cannot be joy-sticked in real time: engineers must pre-program command pipelines, calculate wheel slip on steep dunes, and manage strict watt-hour power budgets to reach science targets safely.',
  },
  {
    id: 'resources',
    name: 'Mission Resource Manager',
    tagline: 'Life support & closed-loop outpost survival balancing',
    icon: '\u25a3', // square habitat
    category: 'Life Support & Systems Engineering',
    world: 'mars',
    accent: '#4aff9a',
    concept: 'Environmental Control and Life Support Systems (ECLSS), Sabatier CO\u2082 reduction, water recovery filtration, load shedding.',
    maxScore: { beginner: 100, advanced: 150 },
    briefing: 'Deep space missions require closed-loop Environmental Control and Life Support Systems (ECLSS). Human crew continuously consume oxygen, water, and food while generating carbon dioxide and waste. Balance power allocation between MOXIE/Sabatier oxygen generators, urine and greywater filtration, and cabin air scrubbers to keep the crew healthy across multi-sol expeditions.',
  },
  {
    id: 'solar',
    name: 'Solar Power Engineer',
    tagline: 'Photovoltaic angles, sun tracking & energy generation',
    icon: '\u2600', // sun
    category: 'Renewable Power & Orbital Mechanics',
    world: 'mars',
    accent: '#ffcf7a',
    concept: 'Lambert\'s cosine law (P = P\u2080 cos \u03b8), solar elevation/azimuth tracking, Martian atmospheric dust opacity (\u03c4).',
    maxScore: { beginner: 100, advanced: 150 },
    briefing: 'Solar panels produce maximum electrical power when sunlight strikes perpendicular to the photovoltaic cells (\u03b8 = 0\u00b0). According to Lambert\'s cosine law, power drops as the cosine of the angle of incidence. Rotate panel tilt and azimuth to track the sun across the sky, clean off accumulated Martian dust, and bank sufficient kilowatt-hours to survive the cold alien night.',
  },
  {
    id: 'ecosystem',
    name: 'Martian Ecosystem',
    tagline: 'Greenhouse hydro/lighting/nutrients & plant growth',
    icon: '\u2698', // flower/sprout
    category: 'Space Botany & Agronomy',
    world: 'mars',
    accent: '#8b6bff',
    concept: 'Bioregenerative Life Support (BLSS), Photosynthetically Active Radiation (PAR), perchlorate soil washing, N-P-K nutrient balance.',
    maxScore: { beginner: 100, advanced: 150 },
    briefing: 'Growing fresh food on Mars is essential for long-term human exploration. Natural Martian regolith contains toxic perchlorate salts that must be leached before planting. Plants require a precise balance of red/blue LED spectrums, soil moisture, elevated CO\u2082, and Nitrogen-Phosphorus-Potassium nutrients to complete their growth cycle and provide life-sustaining calories.',
  },
];

export const RANKS = [
  { threshold: 0, title: 'Cadet Trainee', badge: '\u25cb' },
  { threshold: 200, title: 'Science Specialist', badge: '\u25d4' },
  { threshold: 500, title: 'Flight Engineer', badge: '\u25d1' },
  { threshold: 900, title: 'Senior Science Officer', badge: '\u25d5' },
  { threshold: 1300, title: 'Cosmix Mission Commander', badge: '\u25cf' },
];

export function getRank(totalScore) {
  let best = RANKS[0];
  for (const r of RANKS) {
    if (totalScore >= r.threshold) best = r;
  }
  return best;
}

const STORAGE_KEY = 'learning:scores';

export async function loadLearningScores() {
  const data = await get(STORAGE_KEY, {});
  return data && typeof data === 'object' ? data : {};
}

export async function saveLearningScore(activityId, difficulty, score, details = {}) {
  const current = await loadLearningScores();
  const prev = current[activityId]?.[difficulty]?.score ?? 0;
  const bestScore = Math.max(prev, Math.round(score));
  const stars = score >= 120 ? 3 : score >= 80 ? 2 : score > 0 ? 1 : 0;
  
  const updated = {
    ...current,
    [activityId]: {
      ...(current[activityId] ?? {}),
      [difficulty]: {
        score: bestScore,
        stars: Math.max(current[activityId]?.[difficulty]?.stars ?? 0, stars),
        completed: true,
        updatedAt: Date.now(),
        ...details,
      },
    },
  };
  await set(STORAGE_KEY, updated);
  return { updated, bestScore, stars };
}

export function calculateTotalScore(scores) {
  let total = 0;
  for (const act of ACTIVITIES) {
    const actScores = scores[act.id] ?? {};
    const b = actScores.beginner?.score ?? 0;
    const a = actScores.advanced?.score ?? 0;
    total += b + a;
  }
  return total;
}
