// Mini-Game 2: Crater Detective
// Identify craters and learn how hypervelocity impacts shape planetary surfaces.

export const CRATER_CASES = [
  {
    id: 'case_simple',
    name: 'Case 1: Linn\u00e9 Crater (Lunar Mare Serenitatis)',
    type: 'Simple Crater',
    diameter: '2.2 km',
    depth: '0.6 km',
    features: ['Bowl-shaped floor', 'Sharp raised rim', 'No central peak', 'Overturned rock layers'],
    description: 'A classic young simple crater. The meteorite impact excavated a parabolic transient cavity that retained its bowl geometry without post-impact wall collapse.',
    correctTypeIndex: 0,
    requiredFeature: 'Raised Rim & Bowl Floor',
  },
  {
    id: 'case_complex',
    name: 'Case 2: Tycho Crater (Lunar Southern Highlands)',
    type: 'Complex Crater',
    diameter: '85 km',
    depth: '4.8 km',
    features: ['Hydrodynamic central rebound peak', 'Terraced slumped walls', 'Flat impact-melt floor', 'Bright ray system'],
    description: 'Hypervelocity impact of a massive asteroid. The target rocks momentarily acted as a fluid, rebounding upward into a towering central peak while gravity collapsed the rim into stepped terraces.',
    correctTypeIndex: 1,
    requiredFeature: 'Central Rebound Peak',
  },
  {
    id: 'case_basin',
    name: 'Case 3: Mare Orientale (Western Lunar Limb)',
    type: 'Multi-Ring Basin',
    diameter: '930 km',
    depth: '3.0 km',
    features: ['Multiple concentric mountain rings', 'Cordillera & Rook mountain arcs', 'Flooded dark basalt center'],
    description: 'A colossal cataclysmic impact. Shockwaves fractured the planetary crust into multiple concentric mountain ranges like frozen ripples on a pond.',
    correctTypeIndex: 2,
    requiredFeature: 'Concentric Ring Scarp',
  },
  {
    id: 'case_degraded',
    name: 'Case 4: Gusev Crater (Martian Highlands)',
    type: 'Degraded / Infilled Crater',
    diameter: '166 km',
    depth: '1.2 km',
    features: ['Eroded subdued rim', 'Fluvial sediment channels', 'Aeolian dust infill', 'Flat sedimentary floor'],
    description: 'An ancient Noachian impact on Mars heavily modified by flowing water, ancient lake sediments, and billions of years of atmospheric wind erosion.',
    correctTypeIndex: 3,
    requiredFeature: 'Eroded Subdued Rim',
  },
];

export const CRATER_TYPES = [
  'Simple Crater',
  'Complex Crater',
  'Multi-Ring Basin',
  'Degraded / Infilled Crater',
];

export class CraterDetective {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.difficulty = options.difficulty ?? 'beginner';
    this.onComplete = options.onComplete ?? (() => {});

    this.currentCase = 0;
    this.score = 0;
    this.identifiedParts = new Set();
    this.selectedType = null;
    this.inspectX = 0.5;

    // Advanced mode state
    this.advStage = 'impact'; // 'impact' or 'superposition'
    this.impactorD = 1.2; // km
    this.impactorV = 20; // km/s
    this.impactorAngle = 45; // deg
    this.simulatingImpact = false;
    this.impactAnimT = 0;
    this.superposAnswer = ['', '', ''];

    this.initDOM();
    this.startLoop();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Investigation</span><b class="val case-title">--</b></div>
          <div class="hud-item"><span class="label">Crater Dimensions</span><b class="val crater-dim">--</b></div>
          <div class="hud-item"><span class="label">Evidence Discovered</span><b class="val evidence-val">0 / 3</b></div>
          <div class="hud-item"><span class="label">Geology Score</span><b class="val score-val">0</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls">
          ${
            this.difficulty === 'beginner'
              ? `
            <div class="investigation-controls">
              <div class="features-row">
                <span class="ctrl-label">Inspect Cross-Section Features:</span>
                <div class="feature-buttons">
                  <button class="mini feat-btn" data-f="rim">Raised Rim</button>
                  <button class="mini feat-btn" data-f="floor">Crater Floor</button>
                  <button class="mini feat-btn" data-f="peak">Central Peak / Ring</button>
                  <button class="mini feat-btn" data-f="ejecta">Ejecta Blanket</button>
                </div>
              </div>
              <div class="type-classify-row">
                <span class="ctrl-label">Classify Morphology:</span>
                <div class="type-buttons">
                  ${CRATER_TYPES.map(
                    (t, i) => `<button class="solid type-btn" data-idx="${i}">${t}</button>`
                  ).join('')}
                </div>
              </div>
            </div>
            `
              : `
            <div class="adv-crater-controls">
              <div class="adv-tabs">
                <button class="mini tab-btn ${this.advStage === 'impact' ? 'on' : ''}" data-tab="impact">Stage 1: Impact Kinetic Energy</button>
                <button class="mini tab-btn ${this.advStage === 'superposition' ? 'on' : ''}" data-tab="superposition">Stage 2: Stratigraphic Superposition</button>
              </div>
              <div class="adv-panel-content"></div>
            </div>
            `
          }
        </div>

        <div class="science-callout">
          <strong>Planetary Science Note:</strong> The transition from simple to complex craters occurs at smaller diameters on planets with higher gravity ($D_{crit} \propto 1/g$). On the Moon (1.62 m/s\u00b2), transition occurs at ~15-20 km; on Earth (9.81 m/s\u00b2), it occurs at only ~2-4 km!
        </div>
      </div>
    `;

    this.canvas = this.container.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.caseTitle = this.container.querySelector('.case-title');
    this.craterDim = this.container.querySelector('.crater-dim');
    this.evidenceVal = this.container.querySelector('.evidence-val');
    this.scoreVal = this.container.querySelector('.score-val');
    this.feedback = this.container.querySelector('.feedback-banner');

    this.resizeCanvas();
    window.addEventListener('resize', this.onResize);

    if (this.difficulty === 'beginner') {
      this.wireBeginnerControls();
    } else {
      this.wireAdvancedControls();
    }

    this.updateHUD();
  }

  onResize = () => this.resizeCanvas();

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = Math.max(400, rect.width || 600);
    this.canvas.height = 360;
  }

  wireBeginnerControls() {
    this.container.querySelectorAll('.feat-btn').forEach((btn) => {
      btn.onclick = () => {
        const feat = btn.dataset.f;
        this.identifiedParts.add(feat);
        btn.classList.add('found');
        this.showFeatureDescription(feat);
        this.updateHUD();
      };
    });

    this.container.querySelectorAll('.type-btn').forEach((btn) => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.idx, 10);
        this.handleClassification(idx);
      };
    });
  }

  showFeatureDescription(feat) {
    const c = CRATER_CASES[this.currentCase];
    const msgs = {
      rim: `Inspecting Raised Rim: Overturned rock strata (flap) elevated above the pre-impact planetary surface.`,
      floor: `Inspecting Crater Floor: ${c.type === 'Simple Crater' ? 'Deep parabolic bowl filled with breccia rubble.' : 'Flat melted sheet created by extreme shock pressure & heat.'}`,
      peak: `Inspecting Center: ${c.type === 'Complex Crater' ? 'Prominent central rebound peak! Bedrock bounced upward hydrodynamically.' : c.type === 'Multi-Ring Basin' ? 'Concentric peak rings formed by planetary-scale crustal ripples.' : 'No rebound peak present (impact energy too low).' }`,
      ejecta: `Inspecting Ejecta Blanket: Continuous shattered debris blanket thinning outward from the crater rim.`,
    };
    this.showFeedback(msgs[feat] ?? 'Feature examined.', true);
  }

  handleClassification(typeIdx) {
    const c = CRATER_CASES[this.currentCase];
    if (typeIdx === c.correctTypeIndex) {
      this.score += 25;
      this.showFeedback(
        `\u2714 CORRECT! ${c.name} is a ${c.type}. ${c.description}`,
        true
      );
      this.updateHUD();

      setTimeout(() => {
        if (this.currentCase < CRATER_CASES.length - 1) {
          this.currentCase++;
          this.identifiedParts.clear();
          this.container.querySelectorAll('.feat-btn').forEach((b) => b.classList.remove('found'));
          this.hideFeedback();
          this.updateHUD();
        } else {
          // Finished all 4 cases!
          this.score = 100;
          this.showFeedback(`\u2605 EXCELLENT DETECTIVE WORK! All 4 planetary impact cases solved! Score: 100`, true);
          setTimeout(() => {
            this.onComplete({
              activityId: 'crater',
              difficulty: 'beginner',
              score: 100,
              stars: 3,
              summary: 'Correctly classified simple, complex, multi-ring and degraded impact craters across the Moon and Mars.',
            });
          }, 1800);
        }
      }, 2500);
    } else {
      this.showFeedback(
        `\u26a0 Incorrect classification: Selected ${CRATER_TYPES[typeIdx]}. Look at the floor depth and whether a central peak or multi-rings exist!`,
        false
      );
    }
  }

  wireAdvancedControls() {
    const tabs = this.container.querySelectorAll('.tab-btn');
    tabs.forEach((tab) => {
      tab.onclick = () => {
        this.advStage = tab.dataset.tab;
        tabs.forEach((t) => t.classList.toggle('on', t === tab));
        this.renderAdvPanel();
        this.updateHUD();
      };
    });
    this.renderAdvPanel();
  }

  renderAdvPanel() {
    const content = this.container.querySelector('.adv-panel-content');
    if (!content) return;

    if (this.advStage === 'impact') {
      content.innerHTML = `
        <div class="adv-impact-box">
          <p class="adv-task">Target: Reconstruct Copernican Complex Crater (Diameter: 93 km, Depth: 3.8 km on the Moon).</p>
          <div class="adv-inputs">
            <div class="ctrl-group">
              <label>Asteroid Impactor Diameter: <span class="d-val">${this.impactorD}</span> km</label>
              <input type="range" class="d-slider" min="0.5" max="8.0" step="0.1" value="${this.impactorD}">
            </div>
            <div class="ctrl-group">
              <label>Impact Velocity: <span class="v-val">${this.impactorV}</span> km/s</label>
              <input type="range" class="v-slider" min="11" max="45" step="1" value="${this.impactorV}">
            </div>
            <div class="ctrl-group">
              <label>Impact Angle: <span class="a-val">${this.impactorAngle}</span>\u00b0</label>
              <input type="range" class="a-slider" min="15" max="90" step="5" value="${this.impactorAngle}">
            </div>
          </div>
          <div class="adv-impact-actions">
            <button class="solid btn-sim-impact">Simulate Hypervelocity Impact</button>
            <div class="energy-readout">Kinetic Energy: <b class="ke-val">--</b> Megatons TNT | Predicted Crater: <b class="pc-val">--</b> km</div>
          </div>
        </div>
      `;

      const dS = content.querySelector('.d-slider');
      const vS = content.querySelector('.v-slider');
      const aS = content.querySelector('.a-slider');
      const dV = content.querySelector('.d-val');
      const vV = content.querySelector('.v-val');
      const aV = content.querySelector('.a-val');
      const keVal = content.querySelector('.ke-val');
      const pcVal = content.querySelector('.pc-val');

      const updateCalc = () => {
        this.impactorD = parseFloat(dS.value);
        this.impactorV = parseFloat(vS.value);
        this.impactorAngle = parseFloat(aS.value);
        dV.textContent = this.impactorD.toFixed(1);
        vV.textContent = this.impactorV;
        aV.textContent = this.impactorAngle;

        // Energy = 0.5 * mass * v^2
        // Mass = (4/3) * pi * (R)^3 * density (3000 kg/m^3 for stony chondrite)
        const radM = (this.impactorD * 1000) / 2;
        const vol = (4 / 3) * Math.PI * Math.pow(radM, 3);
        const massKg = vol * 3000;
        const vMps = this.impactorV * 1000;
        const joules = 0.5 * massKg * vMps * vMps;
        const megatons = (joules / 4.184e15).toFixed(0);

        // Crater diameter scaling on Moon (g = 1.62 m/s^2)
        // D_crater ≈ 1.8 * (rho_impactor / rho_target)^0.11 * D_impactor^0.78 * v^0.44 * g^-0.22 * (sin theta)^(1/3)
        const rad = (this.impactorAngle * Math.PI) / 180;
        const dCrater = (
          1.8 *
          Math.pow(this.impactorD, 0.78) *
          Math.pow(this.impactorV, 0.44) *
          Math.pow(1.62, -0.22) *
          Math.pow(Math.sin(rad), 0.33) *
          4.8
        ).toFixed(1);

        keVal.textContent = megatons;
        pcVal.textContent = dCrater;
        this.lastDcrater = parseFloat(dCrater);
      };

      dS.oninput = updateCalc;
      vS.oninput = updateCalc;
      aS.oninput = updateCalc;
      updateCalc();

      content.querySelector('.btn-sim-impact').onclick = () => {
        this.simulatingImpact = true;
        this.impactAnimT = 0;
        this.hideFeedback();
        setTimeout(() => {
          this.simulatingImpact = false;
          const diff = Math.abs(this.lastDcrater - 93);
          if (diff <= 12) {
            this.score = 75;
            this.showFeedback(
              `\u2714 IMPACT MATCH! Excavated a ${this.lastDcrater} km complex crater matching Copernicus (Target: 93 km)!`,
              true
            );
            this.updateHUD();
          } else {
            this.showFeedback(
              `\u26a0 Excavated crater is ${this.lastDcrater} km (${this.lastDcrater < 93 ? 'Too small' : 'Too large'}). Adjust impactor size and speed.`,
              false
            );
          }
        }, 1200);
      };
    } else {
      // Superposition stage
      content.innerHTML = `
        <div class="adv-superpos-box">
          <p class="adv-task">Task: Order the 3 overlapping lunar craters (Alpha, Beta, Gamma) from OLDEST to NEWEST based on rim cross-cutting & ejecta overlap.</p>
          <div class="superpos-ordering">
            <div class="order-step">
              <span>1. Oldest (Bottom layer):</span>
              <select class="ord-sel" data-pos="0">
                <option value="">-- Choose --</option>
                <option value="A">Crater Alpha</option>
                <option value="B">Crater Beta</option>
                <option value="C">Crater Gamma</option>
              </select>
            </div>
            <div class="order-step">
              <span>2. Intermediate:</span>
              <select class="ord-sel" data-pos="1">
                <option value="">-- Choose --</option>
                <option value="A">Crater Alpha</option>
                <option value="B">Crater Beta</option>
                <option value="C">Crater Gamma</option>
              </select>
            </div>
            <div class="order-step">
              <span>3. Youngest (Top cross-cut):</span>
              <select class="ord-sel" data-pos="2">
                <option value="">-- Choose --</option>
                <option value="A">Crater Alpha</option>
                <option value="B">Crater Beta</option>
                <option value="C">Crater Gamma</option>
              </select>
            </div>
            <button class="solid btn-check-superpos">Verify Stratigraphy</button>
          </div>
        </div>
      `;

      content.querySelectorAll('.ord-sel').forEach((sel) => {
        sel.onchange = () => {
          const pos = parseInt(sel.dataset.pos, 10);
          this.superposAnswer[pos] = sel.value;
        };
      });

      content.querySelector('.btn-check-superpos').onclick = () => {
        // Correct order: Alpha (ancient large degraded) -> Beta (cuts into Alpha's rim) -> Gamma (fresh crisp ray crater overlapping Beta)
        if (this.superposAnswer.join('') === 'ABC') {
          this.score += 75;
          this.updateHUD();
          this.showFeedback(
            `\u2714 OUTSTANDING! Stratigraphic sequence verified: Alpha (Oldest) \u2192 Beta \u2192 Gamma (Youngest). Cross-cutting relationships confirmed! Score: ${this.score}`,
            true
          );
          setTimeout(() => {
            this.onComplete({
              activityId: 'crater',
              difficulty: 'advanced',
              score: Math.min(150, this.score),
              stars: 3,
              summary: 'Mastered impact kinetic energy scaling and stratigraphic superposition age determination.',
            });
          }, 1800);
        } else {
          this.showFeedback(
            `\u26a0 Sequence incorrect. Hint: Check which crater's ejecta blanket lies undisturbed on top of the other rims!`,
            false
          );
        }
      };
    }
  }

  showFeedback(text, isGood = true) {
    this.feedback.hidden = false;
    this.feedback.className = `feedback-banner ${isGood ? 'good' : 'warn'}`;
    this.feedback.innerHTML = text;
  }

  hideFeedback() {
    this.feedback.hidden = true;
  }

  updateHUD() {
    if (this.difficulty === 'beginner') {
      const c = CRATER_CASES[this.currentCase];
      this.caseTitle.textContent = `${c.name} [Case ${this.currentCase + 1}/4]`;
      this.craterDim.textContent = `\u00d8 ${c.diameter} \u00b7 Depth ${c.depth}`;
      this.evidenceVal.textContent = `${this.identifiedParts.size} / 4 Features`;
    } else {
      this.caseTitle.textContent =
        this.advStage === 'impact' ? 'Stage 1: Kinetic Energy Scaling' : 'Stage 2: Superposition Forensics';
      this.craterDim.textContent = this.advStage === 'impact' ? 'Target: 93 km Copernicus' : '3 Overlapping Craters';
      this.evidenceVal.textContent = this.advStage === 'impact' ? 'Impactor Parameters' : 'Stratigraphy Puzzle';
    }
    this.scoreVal.textContent = this.score;
  }

  startLoop() {
    let last = performance.now();
    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      this.update(dt);
      this.render();
      this.animId = requestAnimationFrame(frame);
    };
    this.animId = requestAnimationFrame(frame);
  }

  update(dt) {
    if (this.simulatingImpact) {
      this.impactAnimT += dt * 3;
    }
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.fillStyle = '#070a14';
    ctx.fillRect(0, 0, w, h);

    if (this.difficulty === 'beginner') {
      this.renderBeginnerCase(ctx, w, h);
    } else {
      if (this.advStage === 'impact') {
        this.renderAdvImpact(ctx, w, h);
      } else {
        this.renderAdvSuperpos(ctx, w, h);
      }
    }
  }

  renderBeginnerCase(ctx, w, h) {
    const c = CRATER_CASES[this.currentCase];
    const cy = h * 0.58;

    // Title on canvas
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = '14px sans-serif';
    ctx.fillText(`${c.name} \u2014 Geological Cross-Section`, 30, 32);

    // Baseline ground
    ctx.strokeStyle = '#41485c';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(20, cy);
    ctx.lineTo(w - 20, cy);
    ctx.stroke();

    // Crater profile drawing
    ctx.beginPath();
    ctx.moveTo(30, cy);

    const midX = w * 0.5;
    const rimW = w * 0.35;
    const rimL = midX - rimW;
    const rimR = midX + rimW;

    if (c.id === 'case_simple') {
      // Simple bowl shape
      ctx.lineTo(rimL - 20, cy);
      ctx.quadraticCurveTo(rimL, cy - 25, rimL + 20, cy + 10);
      ctx.quadraticCurveTo(midX, cy + 110, rimR - 20, cy + 10);
      ctx.quadraticCurveTo(rimR, cy - 25, rimR + 20, cy);
      ctx.lineTo(w - 30, cy);
    } else if (c.id === 'case_complex') {
      // Complex: Terraced walls + central peak
      ctx.lineTo(rimL - 30, cy);
      ctx.lineTo(rimL, cy - 35); // Rim crest
      ctx.lineTo(rimL + 35, cy + 20); // Terrace 1
      ctx.lineTo(rimL + 60, cy + 40); // Terrace 2
      ctx.lineTo(midX - 35, cy + 65); // Floor
      ctx.lineTo(midX - 10, cy + 10); // Central Peak left
      ctx.lineTo(midX, cy - 15); // Central Peak summit
      ctx.lineTo(midX + 10, cy + 10); // Central Peak right
      ctx.lineTo(midX + 35, cy + 65); // Floor
      ctx.lineTo(rimR - 60, cy + 40); // Terrace 2
      ctx.lineTo(rimR - 35, cy + 20); // Terrace 1
      ctx.lineTo(rimR, cy - 35); // Rim crest
      ctx.lineTo(rimR + 30, cy);
      ctx.lineTo(w - 30, cy);
    } else if (c.id === 'case_basin') {
      // Multi-ring: Cordillera outer ring, Rook inner ring
      ctx.lineTo(rimL - 60, cy);
      ctx.lineTo(rimL - 40, cy - 40); // Outer ring
      ctx.lineTo(rimL - 10, cy - 5);
      ctx.lineTo(rimL + 20, cy - 30); // Inner ring
      ctx.lineTo(rimL + 50, cy + 40); // Basalt floor
      ctx.lineTo(rimR - 50, cy + 40);
      ctx.lineTo(rimR - 20, cy - 30);
      ctx.lineTo(rimR + 10, cy - 5);
      ctx.lineTo(rimR + 40, cy - 40);
      ctx.lineTo(rimR + 60, cy);
      ctx.lineTo(w - 30, cy);
    } else {
      // Degraded / infilled: rounded low rim, flat sed floor
      ctx.lineTo(rimL - 20, cy);
      ctx.quadraticCurveTo(rimL, cy - 10, rimL + 30, cy + 15);
      ctx.lineTo(rimR - 30, cy + 15);
      ctx.quadraticCurveTo(rimR, cy - 10, rimR + 20, cy);
      ctx.lineTo(w - 30, cy);
    }

    ctx.lineTo(w - 30, h - 20);
    ctx.lineTo(30, h - 20);
    ctx.closePath();

    // Fill bedrock
    const bedrock = ctx.createLinearGradient(0, cy - 40, 0, h);
    bedrock.addColorStop(0, '#2b3040');
    bedrock.addColorStop(1, '#151822');
    ctx.fillStyle = bedrock;
    ctx.fill();
    ctx.strokeStyle = '#5b8cff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Feature annotations
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#ffcf7a';

    if (this.identifiedParts.has('rim')) {
      ctx.fillText('\u25bc Raised Rim Crest', rimL - 25, cy - 45);
    }
    if (this.identifiedParts.has('floor')) {
      ctx.fillText('\u25bc Melt Sheet / Floor', midX - 45, cy + 85);
    }
    if (this.identifiedParts.has('peak') && c.id === 'case_complex') {
      ctx.fillText('\u25b2 Central Rebound Peak', midX - 55, cy - 25);
    }
    if (this.identifiedParts.has('ejecta')) {
      ctx.fillText('\u25ba Ejecta Blanket Strata', rimL - 75, cy - 10);
    }
  }

  renderAdvImpact(ctx, w, h) {
    const cy = h * 0.65;
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = '14px sans-serif';
    ctx.fillText('Hypervelocity Impact Excavation Simulation', 30, 32);

    if (this.simulatingImpact) {
      // Impact flash and blast wave animation
      const r = (this.impactAnimT % 3) * 60;
      ctx.fillStyle = 'rgba(255, 200, 100, 0.4)';
      ctx.beginPath();
      ctx.arc(w * 0.5, cy, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(w * 0.5, cy, 18, 0, Math.PI * 2);
      ctx.fill();
    }

    // Ground
    ctx.fillStyle = '#262a36';
    ctx.fillRect(0, cy, w, h - cy);

    // Excavated crater representation
    const dPixels = Math.min(w * 0.7, (this.lastDcrater ?? 50) * 3);
    const midX = w * 0.5;

    ctx.fillStyle = '#0f121a';
    ctx.beginPath();
    ctx.ellipse(midX, cy + 10, dPixels * 0.5, 45, 0, 0, Math.PI);
    ctx.fill();
    ctx.strokeStyle = '#ff6b4a';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#ffcf7a';
    ctx.font = '12px monospace';
    ctx.fillText(`Excavated Diameter: ${(this.lastDcrater ?? 0).toFixed(1)} km`, midX - 85, cy + 35);
  }

  renderAdvSuperpos(ctx, w, h) {
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = '14px sans-serif';
    ctx.fillText('Stratigraphic Superposition: Orbital Map View', 30, 32);

    // Draw Crater Alpha (Oldest, large, subdued, partially eroded)
    ctx.fillStyle = '#1c2130';
    ctx.strokeStyle = '#525a75';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w * 0.38, h * 0.52, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#8a93ad';
    ctx.font = '13px sans-serif';
    ctx.fillText('Crater Alpha (Oldest, heavily cratered & weathered)', w * 0.22, h * 0.35);

    // Draw Crater Beta (Intermediate, cuts into Alpha's south-eastern rim)
    ctx.fillStyle = '#22293d';
    ctx.strokeStyle = '#7382ab';
    ctx.beginPath();
    ctx.arc(w * 0.55, h * 0.56, 65, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#cdd3e6';
    ctx.fillText('Crater Beta (Intermediate: cuts Alpha rim)', w * 0.44, h * 0.55);

    // Draw Crater Gamma (Youngest, fresh, sharp rim, bright rays overlaying Beta)
    // Draw bright ejecta rays
    ctx.strokeStyle = 'rgba(200, 220, 255, 0.35)';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
      ctx.beginPath();
      ctx.moveTo(w * 0.65, h * 0.5);
      ctx.lineTo(w * 0.65 + Math.cos(a) * 95, h * 0.5 + Math.sin(a) * 95);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    ctx.fillStyle = '#2c3550';
    ctx.strokeStyle = '#5b8cff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.65, h * 0.5, 38, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#5b8cff';
    ctx.fillText('Crater Gamma (Youngest: rays overlie Beta)', w * 0.52, h * 0.42);
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.onResize);
  }
}
