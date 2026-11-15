// Mini-Game 6: Martian Ecosystem
// Manage greenhouse water, light, nutrients and plant growth in an alien biosphere.

export class MartianEcosystem {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.difficulty = options.difficulty ?? 'beginner';
    this.onComplete = options.onComplete ?? (() => {});

    this.cropType = 'Martian Red Potatoes';
    this.growthStage = 0; // 0: Sprout, 1: Vegetative, 2: Tuber Bulking, 3: Harvest
    this.stageNames = ['Seedling / Sprouting', 'Vegetative Canopy', 'Tuber Formation', 'Ready for Harvest'];
    this.plantHealth = 100; // %
    this.growthProgress = 0; // 0 to 100% within current stage
    this.score = 0;

    // Environmental parameters
    this.moisture = 55; // % (ideal 45 - 65%)
    this.lightHours = 16; // hours/sol (ideal 14 - 18h)
    this.temperature = 22; // °C (ideal 20 - 24°C)
    this.perchlorates = 0.05; // % in regolith (toxic > 0.15%)
    this.nutrientN = 100; // Nitrogen
    this.nutrientP = 100; // Phosphorus
    this.nutrientK = 100; // Potassium

    // Advanced event flags
    this.deficiency = null; // 'nitrogen', 'phosphorus', null
    this.perchlorateAlert = false;

    this.initDOM();
    this.startLoop();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Crop Cultivar</span><b class="val crop-val">${this.cropType}</b></div>
          <div class="hud-item"><span class="label">Growth Stage</span><b class="val stage-val">${this.stageNames[this.growthStage]}</b></div>
          <div class="hud-item"><span class="label">Biomass Health</span><b class="val health-val">100%</b></div>
          <div class="hud-item"><span class="label">Soil Moisture</span><b class="val moist-val">55% (Optimal)</b></div>
          <div class="hud-item"><span class="label">Score</span><b class="val score-val">0</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls eco-ctrl-grid">
          <div class="ctrl-group">
            <label>Irrigation Pump: <span class="moist-val-num">${this.moisture}</span>% Moisture</label>
            <input type="range" class="moist-slider" min="20" max="90" step="5" value="${this.moisture}">
          </div>

          <div class="ctrl-group">
            <label>LED Photoperiod: <span class="light-val-num">${this.lightHours}</span> hrs/sol</label>
            <input type="range" class="light-slider" min="8" max="24" step="1" value="${this.lightHours}">
          </div>

          <div class="ctrl-group">
            <label>Greenhouse Temperature: <span class="temp-val-num">${this.temperature}</span>\u00b0C</label>
            <input type="range" class="temp-slider" min="10" max="35" step="1" value="${this.temperature}">
          </div>

          ${
            this.difficulty === 'advanced'
              ? `
          <div class="ctrl-group adv-fert-group">
            <label>Nutrient & Regolith Treatment:</label>
            <div class="fert-buttons">
              <button class="mini btn-dose-n">+ Nitrogen (N)</button>
              <button class="mini btn-dose-p">+ Phosphorus (P)</button>
              <button class="mini btn-flush-regolith">Leach Perchlorates</button>
            </div>
          </div>
          `
              : ''
          }

          <div class="ctrl-buttons">
            <button class="solid btn-advance-cycle">Advance Growth Cycle (+3 Sols)</button>
            <button class="btn-eco-reset">Reset Greenhouse</button>
          </div>
        </div>

        <div class="science-callout">
          <strong>Bioregenerative Agriculture:</strong> Plants in extraterrestrial habitats do double duty: they produce fresh calorie-dense carbohydrates and vitamins for the crew while scrubbing CO\u2082 and producing breathable oxygen via photosynthesis ($6CO_2 + 6H_2O \to C_6H_{12}O_6 + 6O_2$)!
        </div>
      </div>
    `;

    this.canvas = this.container.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.stageVal = this.container.querySelector('.stage-val');
    this.healthVal = this.container.querySelector('.health-val');
    this.moistVal = this.container.querySelector('.moist-val');
    this.scoreVal = this.container.querySelector('.score-val');
    this.feedback = this.container.querySelector('.feedback-banner');

    this.moistSlider = this.container.querySelector('.moist-slider');
    this.moistValNum = this.container.querySelector('.moist-val-num');
    this.lightSlider = this.container.querySelector('.light-slider');
    this.lightValNum = this.container.querySelector('.light-val-num');
    this.tempSlider = this.container.querySelector('.temp-slider');
    this.tempValNum = this.container.querySelector('.temp-val-num');

    this.resizeCanvas();
    window.addEventListener('resize', this.onResize);

    this.moistSlider.oninput = () => {
      this.moisture = parseInt(this.moistSlider.value, 10);
      this.moistValNum.textContent = this.moisture;
      this.updateHUD();
    };

    this.lightSlider.oninput = () => {
      this.lightHours = parseInt(this.lightSlider.value, 10);
      this.lightValNum.textContent = this.lightHours;
      this.updateHUD();
    };

    this.tempSlider.oninput = () => {
      this.temperature = parseInt(this.tempSlider.value, 10);
      this.tempValNum.textContent = this.temperature;
      this.updateHUD();
    };

    if (this.difficulty === 'advanced') {
      this.container.querySelector('.btn-dose-n').onclick = () => {
        this.nutrientN = 100;
        if (this.deficiency === 'nitrogen') {
          this.deficiency = null;
          this.showFeedback('\u2714 Nitrogen dosed! Leaf chlorosis reversed.', true);
        } else {
          this.showFeedback('Nitrogen fertilizer supplemented.', true);
        }
      };

      this.container.querySelector('.btn-dose-p').onclick = () => {
        this.nutrientP = 100;
        if (this.deficiency === 'phosphorus') {
          this.deficiency = null;
          this.showFeedback('\u2714 Phosphorus dosed! Root stunting corrected.', true);
        } else {
          this.showFeedback('Phosphorus fertilizer supplemented.', true);
        }
      };

      this.container.querySelector('.btn-flush-regolith').onclick = () => {
        this.perchlorates = 0.02;
        this.perchlorateAlert = false;
        this.showFeedback('\u2714 Bacterial perchlorate reduction flush complete! Soil toxicity neutralized.', true);
      };
    }

    this.container.querySelector('.btn-advance-cycle').onclick = () => {
      this.advanceCycle();
    };

    this.container.querySelector('.btn-eco-reset').onclick = () => {
      this.growthStage = 0;
      this.plantHealth = 100;
      this.growthProgress = 0;
      this.moisture = 55;
      this.lightHours = 16;
      this.temperature = 22;
      this.perchlorates = 0.05;
      this.deficiency = null;
      this.updateHUD();
      this.hideFeedback();
    };

    this.updateHUD();
  }

  onResize = () => this.resizeCanvas();

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = Math.max(400, rect.width || 600);
    this.canvas.height = 360;
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
    this.stageVal.textContent = `${this.stageNames[this.growthStage]} [${this.growthStage + 1}/4]`;
    this.healthVal.textContent = `${Math.round(this.plantHealth)}%`;
    const mStatus =
      this.moisture >= 45 && this.moisture <= 65
        ? 'Optimal'
        : this.moisture < 45
        ? 'Dry / Wilting'
        : 'Over-watered';
    this.moistVal.textContent = `${this.moisture}% (${mStatus})`;
    this.scoreVal.textContent = this.score;
  }

  advanceCycle() {
    // Evaluate environmental health factors
    let healthDelta = 0;

    // Moisture check
    if (this.moisture < 40 || this.moisture > 70) {
      healthDelta -= 12;
    } else if (this.moisture >= 45 && this.moisture <= 65) {
      healthDelta += 4;
    }

    // Temperature check
    if (this.temperature < 18 || this.temperature > 28) {
      healthDelta -= 10;
    } else if (this.temperature >= 20 && this.temperature <= 24) {
      healthDelta += 4;
    }

    // Photoperiod check
    if (this.lightHours < 12 || this.lightHours > 22) {
      healthDelta -= 8;
    } else if (this.lightHours >= 14 && this.lightHours <= 18) {
      healthDelta += 4;
    }

    // Advanced factors
    if (this.difficulty === 'advanced') {
      if (this.growthStage === 1 && !this.deficiency) {
        this.deficiency = 'nitrogen';
        this.showFeedback(
          '\u26a0 DIAGNOSTIC ALERT: Upper leaves displaying pale yellow chlorosis! Nitrogen deficiency detected. Dose Nitrogen fertilizer!',
          false
        );
      } else if (this.growthStage === 2 && !this.perchlorateAlert) {
        this.perchlorates = 0.22;
        this.perchlorateAlert = true;
        this.showFeedback(
          '\u26a0 TOXICITY WARNING: Perchlorate salt leaching detected in regolith bed! Run perchlorate flush.',
          false
        );
      }

      if (this.deficiency) healthDelta -= 14;
      if (this.perchlorates > 0.15) healthDelta -= 15;
    }

    this.plantHealth = Math.max(10, Math.min(100, this.plantHealth + healthDelta));

    if (this.plantHealth > 30) {
      this.growthStage++;
    }

    this.updateHUD();

    if (this.growthStage >= 3) {
      // Harvest completed!
      const base = this.difficulty === 'beginner' ? 80 : 110;
      const bonus = Math.round((this.plantHealth / 100) * (this.difficulty === 'beginner' ? 20 : 40));
      this.score = base + bonus;
      this.updateHUD();
      this.showFeedback(
        `\u2714 BOUNTIFUL HARVEST! Yielded 48 kg of Martian Red Potatoes with ${Math.round(this.plantHealth)}% crop health! Score: ${this.score}`,
        true
      );
      setTimeout(() => {
        this.onComplete({
          activityId: 'ecosystem',
          difficulty: this.difficulty,
          score: this.score,
          stars: 3,
          summary: `Cultivated and harvested a full potato crop cycle inside a closed-loop Martian greenhouse bioregenerative life support facility.`,
        });
      }, 1800);
    }
  }

  startLoop() {
    let last = performance.now();
    const frame = (now) => {
      this.render();
      this.animId = requestAnimationFrame(frame);
    };
    this.animId = requestAnimationFrame(frame);
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Greenhouse interior background
    ctx.fillStyle = '#0b0f1a';
    ctx.fillRect(0, 0, w, h);

    // Overhead Agricultural LED Grow Light glow (Pink/Purple 660nm red + 450nm blue)
    const ledGlow = ctx.createLinearGradient(0, 0, 0, h * 0.6);
    ledGlow.addColorStop(0, 'rgba(230, 80, 255, 0.28)');
    ledGlow.addColorStop(1, 'rgba(230, 80, 255, 0)');
    ctx.fillStyle = ledGlow;
    ctx.fillRect(0, 0, w, h * 0.6);

    // LED fixture bar at top
    ctx.fillStyle = '#1e2438';
    ctx.fillRect(40, 20, w - 80, 14);
    for (let lx = 60; lx < w - 60; lx += 24) {
      ctx.fillStyle = lx % 48 === 0 ? '#ff4081' : '#448aff';
      ctx.fillRect(lx, 32, 10, 4);
    }

    // Hydroponic / Regolith Soil Bed
    const soilY = h * 0.62;
    ctx.fillStyle = '#3d2419'; // Martian regolith compost
    ctx.fillRect(50, soilY, w - 100, h - soilY - 30);
    ctx.strokeStyle = '#5a3828';
    ctx.lineWidth = 3;
    ctx.strokeRect(50, soilY, w - 100, h - soilY - 30);

    // Draw Plant Visuals based on Growth Stage
    const numPlants = 5;
    const spacing = (w - 160) / (numPlants - 1);

    for (let p = 0; p < numPlants; p++) {
      const px = 80 + p * spacing;
      this.drawPlant(ctx, px, soilY, this.growthStage);
    }

    // Diagnostics overlays
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.font = '12px sans-serif';
    ctx.fillText(`PAR Spectrum: 450nm Blue + 660nm Red LED`, 60, 60);

    if (this.deficiency === 'nitrogen') {
      ctx.fillStyle = '#ffcf7a';
      ctx.fillText('\u26a0 Visible Chlorosis (Pale Leaves)', 60, 80);
    }
  }

  drawPlant(ctx, x, groundY, stage) {
    ctx.save();
    ctx.translate(x, groundY);

    if (stage === 0) {
      // Sprout: tiny green shoot
      ctx.strokeStyle = '#7dffb0';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(-4, -15, -8, -20);
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(4, -15, 8, -20);
      ctx.stroke();
    } else if (stage === 1) {
      // Vegetative: stems and leafy canopy
      ctx.strokeStyle = '#4aff9a';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -55);
      ctx.stroke();

      // Leaves
      ctx.fillStyle = this.deficiency === 'nitrogen' ? '#e6df7e' : '#3be88b';
      for (const [lx, ly] of [[-18, -35], [18, -40], [-15, -55], [15, -60], [0, -70]]) {
        ctx.beginPath();
        ctx.ellipse(lx, ly, 14, 8, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (stage >= 2) {
      // Tuber bulking & full plant
      ctx.strokeStyle = '#38b872';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -65);
      ctx.stroke();

      // Bushy leaves
      ctx.fillStyle = '#2db867';
      for (const [lx, ly] of [[-25, -40], [25, -45], [-22, -65], [22, -70], [0, -85]]) {
        ctx.beginPath();
        ctx.ellipse(lx, ly, 18, 10, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Underground potato tubers!
      ctx.fillStyle = '#c76e48'; // Red potato skin
      ctx.beginPath();
      ctx.ellipse(-14, 25, 16, 12, 0.2, 0, Math.PI * 2);
      ctx.ellipse(14, 35, 18, 13, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#8c482a';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    ctx.restore();
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.onResize);
  }
}
