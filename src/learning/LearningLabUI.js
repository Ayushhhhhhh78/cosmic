// Learning Lab UI Manager
// Hub view, activity cards, game container, difficulty selection, and completion modals.

import { mount, h, toast } from '../ui/ui.js';
import {
  ACTIVITIES,
  getRank,
  loadLearningScores,
  saveLearningScore,
  calculateTotalScore,
} from './learningData.js';

import { LunarGravityChallenge } from './LunarGravityChallenge.js';
import { CraterDetective } from './CraterDetective.js';
import { MarsRoverNavigator } from './MarsRoverNavigator.js';
import { MissionResourceManager } from './MissionResourceManager.js';
import { SolarPowerEngineer } from './SolarPowerEngineer.js';
import { MartianEcosystem } from './MartianEcosystem.js';

const GAME_CLASSES = {
  gravity: LunarGravityChallenge,
  crater: CraterDetective,
  rover: MarsRoverNavigator,
  resources: MissionResourceManager,
  solar: SolarPowerEngineer,
  ecosystem: MartianEcosystem,
};

export function showLearningLab(app) {
  let activeGame = null;
  let activeActivity = null;
  let activeDifficulty = 'beginner';
  let scores = {};

  const el = mount(
    h(`
    <div class="screen lab-screen">
      <header class="lab-header">
        <button class="back lab-back" data-a="menu">&larr; Main Menu</button>
        <div class="lab-title-group">
          <h1 class="lab-title">LEARNING LAB</h1>
          <p class="lab-sub">Interactive Astronaut Training \u00b7 Physics, Planetary Geology & Space Systems</p>
        </div>
        <div class="lab-rank-box">
          <div class="rank-badge"><span class="badge-icon">\u25cb</span> <span class="badge-title">Cadet Trainee</span></div>
          <div class="total-score-val">0 / 1500 PTS</div>
        </div>
      </header>

      <main class="lab-body">
        <div class="lab-hub-view">
          <div class="activity-grid"></div>
        </div>

        <div class="lab-game-view" hidden>
          <div class="game-topbar">
            <button class="mini btn-back-hub">&larr; Lab Hub</button>
            <div class="game-meta">
              <h2 class="active-game-title">--</h2>
              <span class="active-game-concept">--</span>
            </div>
            <div class="diff-toggle">
              <button class="mini btn-diff ${activeDifficulty === 'beginner' ? 'on' : ''}" data-d="beginner">Beginner</button>
              <button class="mini btn-diff ${activeDifficulty === 'advanced' ? 'on' : ''}" data-d="advanced">Advanced</button>
            </div>
            <button class="mini btn-show-briefing">Instructions & Science</button>
          </div>

          <div class="game-workspace"></div>
        </div>
      </main>

      <div class="lab-modal-veil" hidden>
        <div class="lab-modal-box">
          <h3 class="modal-title">--</h3>
          <div class="modal-content"></div>
          <div class="modal-actions">
            <button class="solid btn-modal-close">Got It</button>
          </div>
        </div>
      </div>
    </div>
  `)
  );

  const $ = (s) => el.querySelector(s);
  const hubView = $('.lab-hub-view');
  const gameView = $('.lab-game-view');
  const workspace = $('.game-workspace');
  const grid = $('.activity-grid');
  const modalVeil = $('.lab-modal-veil');
  const modalTitle = $('.modal-title');
  const modalContent = $('.modal-content');
  const modalActions = $('.modal-actions');

  async function refreshScores() {
    scores = await loadLearningScores();
    const total = calculateTotalScore(scores);
    const rank = getRank(total);

    $('.badge-icon').textContent = rank.badge;
    $('.badge-title').textContent = rank.title;
    $('.total-score-val').textContent = `${total} / 1500 PTS`;

    renderActivityCards();
  }

  function renderActivityCards() {
    grid.innerHTML = ACTIVITIES.map((act) => {
      const actScores = scores[act.id] ?? {};
      const bScore = actScores.beginner?.score ?? 0;
      const aScore = actScores.advanced?.score ?? 0;
      const bStars = actScores.beginner?.stars ?? 0;
      const aStars = actScores.advanced?.stars ?? 0;

      const starStr = (n) => '\u2605'.repeat(n) + '\u2606'.repeat(3 - n);

      return `
        <div class="act-card" data-act="${act.id}" style="--accent: ${act.accent}">
          <div class="act-card-head">
            <span class="act-icon">${act.icon}</span>
            <div class="act-meta">
              <span class="act-category">${act.category}</span>
              <h3 class="act-name">${act.name}</h3>
            </div>
          </div>
          <p class="act-tagline">${act.tagline}</p>
          <div class="act-scores-row">
            <div class="score-pill">
              <span class="pill-label">Beginner</span>
              <b class="pill-val">${bScore > 0 ? `${bScore} pts ${starStr(bStars)}` : 'Incomplete'}</b>
            </div>
            <div class="score-pill">
              <span class="pill-label">Advanced</span>
              <b class="pill-val">${aScore > 0 ? `${aScore} pts ${starStr(aStars)}` : 'Incomplete'}</b>
            </div>
          </div>
          <button class="solid btn-launch-act" data-act="${act.id}">Enter Simulation</button>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.btn-launch-act').forEach((btn) => {
      btn.onclick = () => {
        const id = btn.dataset.act;
        launchGame(id, 'beginner');
      };
    });
  }

  function launchGame(actId, difficulty = 'beginner') {
    activeActivity = ACTIVITIES.find((a) => a.id === actId);
    if (!activeActivity) return;

    activeDifficulty = difficulty;

    // Destroy existing game
    if (activeGame?.destroy) {
      activeGame.destroy();
      activeGame = null;
    }

    hubView.hidden = true;
    gameView.hidden = false;

    $('.active-game-title').textContent = activeActivity.name;
    $('.active-game-concept').textContent = activeActivity.concept;

    $('.btn-diff[data-d="beginner"]').classList.toggle('on', activeDifficulty === 'beginner');
    $('.btn-diff[data-d="advanced"]').classList.toggle('on', activeDifficulty === 'advanced');

    workspace.innerHTML = '';

    const GameClass = GAME_CLASSES[actId];
    if (GameClass) {
      activeGame = new GameClass(workspace, {
        difficulty: activeDifficulty,
        onComplete: handleGameComplete,
      });
    }
  }

  async function handleGameComplete(result) {
    const { activityId, difficulty, score, stars, summary } = result;

    // Persist score
    await saveLearningScore(activityId, difficulty, score, { summary });
    await refreshScores();

    // Show completion modal
    modalTitle.textContent = `CHALLENGE COMPLETED: ${activeActivity.name.toUpperCase()}`;
    const starStr = '\u2605'.repeat(stars) + '\u2606'.repeat(Math.max(0, 3 - stars));

    modalContent.innerHTML = `
      <div class="completion-box">
        <div class="completion-stars">${starStr}</div>
        <div class="completion-score">+${score} PTS AWARDED</div>
        <p class="completion-summary">${summary}</p>
        <div class="completion-science">
          <strong>Scientific Debriefing:</strong> ${activeActivity.briefing}
        </div>
      </div>
    `;

    modalActions.innerHTML = `
      ${
        difficulty === 'beginner'
          ? `<button class="solid btn-modal-next">Proceed to Advanced Difficulty</button>`
          : `<button class="solid btn-modal-hub">Return to Lab Hub</button>`
      }
      <button class="mini btn-modal-replay">Replay Challenge</button>
    `;

    modalVeil.hidden = false;

    const nextBtn = modalActions.querySelector('.btn-modal-next');
    if (nextBtn) {
      nextBtn.onclick = () => {
        modalVeil.hidden = true;
        launchGame(activeActivity.id, 'advanced');
      };
    }

    const hubBtn = modalActions.querySelector('.btn-modal-hub');
    if (hubBtn) {
      hubBtn.onclick = () => {
        modalVeil.hidden = true;
        closeGame();
      };
    }

    const replayBtn = modalActions.querySelector('.btn-modal-replay');
    if (replayBtn) {
      replayBtn.onclick = () => {
        modalVeil.hidden = true;
        launchGame(activeActivity.id, activeDifficulty);
      };
    }
  }

  function closeGame() {
    if (activeGame?.destroy) {
      activeGame.destroy();
      activeGame = null;
    }
    gameView.hidden = true;
    hubView.hidden = false;
    refreshScores();
  }

  // Topbar events
  $('.btn-back-hub').onclick = () => closeGame();

  $('.btn-diff[data-d="beginner"]').onclick = () => {
    if (activeDifficulty !== 'beginner') launchGame(activeActivity.id, 'beginner');
  };

  $('.btn-diff[data-d="advanced"]').onclick = () => {
    if (activeDifficulty !== 'advanced') launchGame(activeActivity.id, 'advanced');
  };

  $('.btn-show-briefing').onclick = () => {
    if (!activeActivity) return;
    modalTitle.textContent = activeActivity.name;
    modalContent.innerHTML = `
      <div class="briefing-box">
        <h4>Core Scientific Concept</h4>
        <p>${activeActivity.concept}</p>
        <h4>Educational Briefing</h4>
        <p>${activeActivity.briefing}</p>
        <h4>Instructions (${activeDifficulty.toUpperCase()})</h4>
        <p>${
          activeDifficulty === 'beginner'
            ? 'Beginner mode provides guided telemetry, visual tolerances, and step-by-step assistance.'
            : 'Advanced mode introduces real-world spaceflight constraints: obstacle trajectories, communication latency, dust accumulation, and emergency system failures.'
        }</p>
      </div>
    `;
    modalActions.innerHTML = `<button class="solid btn-modal-close">Return to Simulation</button>`;
    modalVeil.hidden = false;
    modalActions.querySelector('.btn-modal-close').onclick = () => {
      modalVeil.hidden = true;
    };
  };

  $('.btn-modal-close').onclick = () => {
    modalVeil.hidden = true;
  };

  // Back to main menu
  $('.lab-back').onclick = () => {
    if (activeGame?.destroy) {
      activeGame.destroy();
      activeGame = null;
    }
    app.goTo('menu');
  };

  refreshScores();

  return () => {
    if (activeGame?.destroy) {
      activeGame.destroy();
      activeGame = null;
    }
  };
}
