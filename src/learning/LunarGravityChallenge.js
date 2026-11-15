// Mini-Game 1: Lunar Gravity Challenge
// Interactive Moon vs Earth gravity and jumping simulation.

export class LunarGravitySim {
  constructor(difficulty = 'beginner') {
    this.difficulty = difficulty;
    this.g = 1.62; // Moon default m/s^2
    this.gEarth = 9.81;
    this.reset();
  }

  reset() {
    this.active = false;
    this.t = 0;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.v0 = 6.0;
    this.angle = this.difficulty === 'beginner' ? 90 : 45; // degrees
    this.mass = 120; // kg astronaut + EVA suit
    this.apexY = 0;
    this.flightTime = 0;
    this.trajectory = [];
    this.earthTrajectory = [];
    this.landed = false;
    this.targetHit = false;
    this.crashed = false;
    this.attempts = 0;
    this.stage = 0; // current challenge stage

    if (this.difficulty === 'beginner') {
      // 3 altitude targets: 4.2m (lander antenna), 7.5m (outpost gantry), 12.0m (crater rim shelf)
      this.targets = [
        { height: 4.2, tolerance: 0.8, name: 'Lander Antenna' },
        { height: 7.5, tolerance: 1.0, name: 'Habitat Gantry' },
        { height: 12.0, tolerance: 1.2, name: 'Observation Shelf' },
      ];
    } else {
      // Advanced: 2D obstacle navigation over a crater ridge to hit landing pad
      this.obstacle = { x: 14, width: 4, height: 4.5 };
      this.targetZone = { minX: 24, maxX: 32 };
      this.maxSafeImpactV = 5.5; // m/s
    }
  }

  getTarget() {
    if (this.difficulty === 'beginner') {
      return this.targets[this.stage] ?? this.targets[this.targets.length - 1];
    }
    return this.targetZone;
  }

  // Pre-calculate theoretical physics values
  calcTheory(v0, angleDeg, g = this.g) {
    const rad = (angleDeg * Math.PI) / 180;
    const vx = v0 * Math.cos(rad);
    const vy = v0 * Math.sin(rad);
    const apex = (vy * vy) / (2 * g);
    const hangTime = (2 * vy) / g;
    const range = (v0 * v0 * Math.sin(2 * rad)) / g;
    return { vx, vy, apex, hangTime, range };
  }

  launch(v0, angleDeg, mass = 120) {
    this.v0 = v0;
    this.angle = angleDeg;
    this.mass = mass;
    const rad = (angleDeg * Math.PI) / 180;
    this.vx = v0 * Math.cos(rad);
    this.vy = v0 * Math.sin(rad);
    this.x = 0;
    this.y = 0;
    this.t = 0;
    this.apexY = 0;
    this.active = true;
    this.landed = false;
    this.targetHit = false;
    this.crashed = false;
    this.attempts++;
    this.trajectory = [{ x: 0, y: 0 }];

    // Pre-calculate Earth trajectory for side-by-side comparison
    this.earthTrajectory = [];
    const eRad = rad;
    const evx = v0 * Math.cos(eRad);
    const evy = v0 * Math.sin(eRad);
    const dt = 0.04;
    let ex = 0, ey = 0, evY = evy;
    for (let s = 0; s < 100; s++) {
      this.earthTrajectory.push({ x: ex, y: Math.max(0, ey) });
      ex += evx * dt;
      ey += evY * dt - 0.5 * this.gEarth * dt * dt;
      evY -= this.gEarth * dt;
      if (ey < 0) {
        this.earthTrajectory.push({ x: ex, y: 0 });
        break;
      }
    }
  }

  step(dt) {
    if (!this.active || this.landed) return;
    this.t += dt;
    this.x += this.vx * dt;
    this.y += this.vy * dt - 0.5 * this.g * dt * dt;
    this.vy -= this.g * dt;
    this.apexY = Math.max(this.apexY, this.y);
    this.trajectory.push({ x: this.x, y: Math.max(0, this.y) });

    if (this.difficulty === 'advanced' && this.obstacle) {
      // Check collision with obstacle
      if (
        this.x >= this.obstacle.x &&
        this.x <= this.obstacle.x + this.obstacle.width &&
        this.y <= this.obstacle.height
      ) {
        this.active = false;
        this.landed = true;
        this.crashed = true;
        return;
      }
    }

    // Touchdown
    if (this.y <= 0 && this.t > 0.05) {
      this.y = 0;
      this.active = false;
      this.landed = true;
      this.flightTime = this.t;

      if (this.difficulty === 'beginner') {
        const target = this.getTarget();
        const diff = Math.abs(this.apexY - target.height);
        if (diff <= target.tolerance) {
          this.targetHit = true;
        }
      } else {
        const inZone = this.x >= this.targetZone.minX && this.x <= this.targetZone.maxX;
        const safeSpeed = Math.abs(this.vy) <= this.maxSafeImpactV;
        if (inZone && safeSpeed && !this.crashed) {
          this.targetHit = true;
        } else if (!safeSpeed) {
          this.crashed = true;
        }
      }
    }
  }
}

export class LunarGravityChallenge {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.difficulty = options.difficulty ?? 'beginner';
    this.sim = new LunarGravitySim(this.difficulty);
    this.score = 0;
    this.totalPointsAwarded = 0;
    this.onComplete = options.onComplete ?? (() => {});
    this.initDOM();
    this.startLoop();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Gravity</span><b class="val">1.62 m/s\u00b2 (Moon)</b></div>
          <div class="hud-item"><span class="label">Target Objective</span><b class="val target-desc">--</b></div>
          <div class="hud-item"><span class="label">Apex Height</span><b class="val apex-val">0.0 m</b></div>
          <div class="hud-item"><span class="label">Hang Time</span><b class="val time-val">0.0 s</b></div>
          <div class="hud-item"><span class="label">Score</span><b class="val score-val">0</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls">
          <div class="ctrl-group">
            <label>Launch Velocity: <span class="v-val">6.0</span> m/s</label>
            <input type="range" class="v-slider" min="2" max="18" step="0.2" value="6.0">
          </div>
          ${
            this.difficulty === 'advanced'
              ? `
          <div class="ctrl-group">
            <label>Launch Angle: <span class="a-val">45</span>\u00b0</label>
            <input type="range" class="a-slider" min="15" max="85" step="1" value="45">
          </div>
          <div class="ctrl-group">
            <label>Suit Payload Mass: <span class="m-val">120</span> kg</label>
            <input type="range" class="m-slider" min="80" max="180" step="10" value="120">
          </div>
          `
              : `
          <div class="ctrl-group">
            <label>Physics Comparison</label>
            <span class="ctrl-note">Comparing Moon (1.62 m/s\u00b2, Blue) vs Earth (9.81 m/s\u00b2, Green)</span>
          </div>
          `
          }
          <div class="ctrl-buttons">
            <button class="solid btn-launch">Launch Jump</button>
            <button class="btn-reset">Reset</button>
          </div>
        </div>

        <div class="science-callout">
          <strong>Key Science Fact:</strong> On Earth, a jump launch speed of 6 m/s achieves an apex of only 1.83 m ($h = v^2/2g$). On the Moon, that exact same launch reaches 11.11 m \u2014 more than 6 times higher!
        </div>
      </div>
    `;

    this.canvas = this.container.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.vSlider = this.container.querySelector('.v-slider');
    this.vVal = this.container.querySelector('.v-val');
    this.aSlider = this.container.querySelector('.a-slider');
    this.aVal = this.container.querySelector('.a-val');
    this.mSlider = this.container.querySelector('.m-slider');
    this.mVal = this.container.querySelector('.m-val');
    this.btnLaunch = this.container.querySelector('.btn-launch');
    this.btnReset = this.container.querySelector('.btn-reset');
    this.feedback = this.container.querySelector('.feedback-banner');
    this.targetDesc = this.container.querySelector('.target-desc');
    this.apexVal = this.container.querySelector('.apex-val');
    this.timeVal = this.container.querySelector('.time-val');
    this.scoreVal = this.container.querySelector('.score-val');

    this.resizeCanvas();
    window.addEventListener('resize', this.onResize);

    this.vSlider.oninput = () => {
      this.vVal.textContent = parseFloat(this.vSlider.value).toFixed(1);
    };
    if (this.aSlider) {
      this.aSlider.oninput = () => {
        this.aVal.textContent = this.aSlider.value;
      };
    }
    if (this.mSlider) {
      this.mSlider.oninput = () => {
        this.mVal.textContent = this.mSlider.value;
      };
    }

    this.btnLaunch.onclick = () => this.handleLaunch();
    this.btnReset.onclick = () => {
      this.sim.reset();
      this.hideFeedback();
      this.updateHUD();
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

  updateHUD() {
    if (this.difficulty === 'beginner') {
      const t = this.sim.getTarget();
      this.targetDesc.textContent = `${t.name}: ${t.height.toFixed(1)} m (\u00b1${t.tolerance}m) [Stage ${this.sim.stage + 1}/3]`;
    } else {
      this.targetDesc.textContent = `Clear ridge at 14m, land softly between 24m \u2013 32m`;
    }
    this.scoreVal.textContent = this.score;
  }

  handleLaunch() {
    if (this.sim.active) return;
    const v0 = parseFloat(this.vSlider.value);
    const angle = this.aSlider ? parseFloat(this.aSlider.value) : 90;
    const mass = this.mSlider ? parseFloat(this.mSlider.value) : 120;
    this.sim.launch(v0, angle, mass);
    this.hideFeedback();
  }

  showFeedback(text, isGood = true) {
    this.feedback.hidden = false;
    this.feedback.className = `feedback-banner ${isGood ? 'good' : 'warn'}`;
    this.feedback.innerHTML = text;
  }

  hideFeedback() {
    this.feedback.hidden = true;
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
    const wasActive = this.sim.active;
    this.sim.step(dt);

    if (wasActive) {
      this.apexVal.textContent = `${this.sim.apexY.toFixed(1)} m`;
      this.timeVal.textContent = `${this.sim.t.toFixed(1)} s`;
    }

    // Check completion when landed
    if (wasActive && this.sim.landed) {
      this.handleLanded();
    }
  }

  handleLanded() {
    if (this.difficulty === 'beginner') {
      const target = this.sim.getTarget();
      const diff = Math.abs(this.sim.apexY - target.height);
      if (this.sim.targetHit) {
        const stagePts = 35;
        this.score += stagePts;
        this.updateHUD();
        if (this.sim.stage < this.sim.targets.length - 1) {
          this.showFeedback(
            `\u2714 Target reached! Apex: ${this.sim.apexY.toFixed(1)} m. Hang time: ${this.sim.flightTime.toFixed(1)} s. Advance to next target platform!`,
            true
          );
          setTimeout(() => {
            this.sim.stage++;
            this.sim.reset();
            this.updateHUD();
            this.hideFeedback();
          }, 2000);
        } else {
          // All 3 stages complete!
          this.score = Math.min(100, this.score);
          this.showFeedback(`\u2605 EXCELLENT! All 3 Lunar altitude targets conquered! Score: ${this.score}`, true);
          setTimeout(() => {
            this.onComplete({
              activityId: 'gravity',
              difficulty: 'beginner',
              score: this.score,
              stars: 3,
              summary: `Mastered lunar vertical kinematics. Achieved apexes up to 12.0m demonstrating $h = v^2/(2g)$ with 1/6th Earth gravity.`,
            });
          }, 1800);
        }
      } else {
        const dir = this.sim.apexY < target.height ? 'Too low' : 'Overshot';
        this.showFeedback(
          `\u26a0 ${dir}! Reached ${this.sim.apexY.toFixed(1)} m (needed ${target.height.toFixed(1)} m). On Earth that jump would only reach ${(this.sim.apexY / 6.05).toFixed(1)} m. Adjust velocity!`,
          false
        );
      }
    } else {
      // Advanced
      if (this.sim.targetHit) {
        const impactV = Math.abs(this.sim.vy);
        const pts = Math.round(150 - Math.min(30, (this.sim.attempts - 1) * 10));
        this.score = Math.max(90, pts);
        this.updateHUD();
        this.showFeedback(
          `\u2714 PERFECT LANDING! Cleared obstacle, touched down at ${this.sim.x.toFixed(1)} m with safe impact speed of ${impactV.toFixed(1)} m/s! Score: ${this.score}`,
          true
        );
        setTimeout(() => {
          this.onComplete({
            activityId: 'gravity',
            difficulty: 'advanced',
            score: this.score,
            stars: 3,
            summary: `Successfully calculated lunar ballistic trajectory over crater terrain, landing safely within the target survey shelf.`,
          });
        }, 1800);
      } else if (this.sim.crashed) {
        this.showFeedback(
          `\u2716 Mission Failure: ${this.sim.x < this.sim.obstacle.x + this.sim.obstacle.width ? 'Crashed into crater ridge obstacle!' : 'Hard impact! Impact speed exceeded EVA suit limit (5.5 m/s).'}. Try a higher launch angle or adjust velocity.`,
          false
        );
      } else {
        const msg = this.sim.x < this.sim.targetZone.minX ? 'Landed short of target zone.' : 'Overshot target landing pad!';
        this.showFeedback(`\u26a0 ${msg} Touchdown at ${this.sim.x.toFixed(1)} m. Adjust launch angle and speed.`, false);
      }
    }
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Background gradient (lunar surface and deep space)
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#040714');
    bg.addColorStop(0.75, '#0b1026');
    bg.addColorStop(0.85, '#232838');
    bg.addColorStop(1, '#181b24');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Stars
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    for (let i = 0; i < 40; i++) {
      const sx = ((i * 137.5) % w);
      const sy = ((i * 83.1) % (h * 0.7));
      ctx.fillRect(sx, sy, (i % 3 === 0) ? 2 : 1, (i % 3 === 0) ? 2 : 1);
    }

    // World coordinate mapping
    const originX = 50;
    const originY = h - 45;
    const scaleX = (w - 90) / (this.difficulty === 'beginner' ? 12 : 36);
    const scaleY = (h - 90) / 14;

    const toX = (x) => originX + x * scaleX;
    const toY = (y) => originY - y * scaleY;

    // Ground line
    ctx.strokeStyle = '#4a536b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(w, originY);
    ctx.stroke();

    // Ground texture
    ctx.fillStyle = '#2d3345';
    ctx.fillRect(0, originY, w, h - originY);

    // Height grid lines
    ctx.strokeStyle = 'rgba(180, 196, 255, 0.12)';
    ctx.fillStyle = 'rgba(180, 196, 255, 0.4)';
    ctx.font = '10px monospace';
    for (let meter = 2; meter <= 14; meter += 2) {
      const my = toY(meter);
      ctx.beginPath();
      ctx.moveTo(originX - 10, my);
      ctx.lineTo(w - 20, my);
      ctx.stroke();
      ctx.fillText(`${meter}m`, originX - 35, my + 3);
    }

    // Distance grid lines for advanced
    if (this.difficulty === 'advanced') {
      for (let dist = 5; dist <= 35; dist += 5) {
        const mx = toX(dist);
        ctx.beginPath();
        ctx.moveTo(mx, originY - 5);
        ctx.lineTo(mx, originY + 5);
        ctx.stroke();
        ctx.fillText(`${dist}m`, mx - 8, originY + 18);
      }
    }

    // Render targets
    if (this.difficulty === 'beginner') {
      const t = this.sim.getTarget();
      const ty = toY(t.height);
      const tolLow = toY(t.height - t.tolerance);
      const tolHigh = toY(t.height + t.tolerance);

      // Target shelf area
      ctx.fillStyle = 'rgba(91, 140, 255, 0.16)';
      ctx.fillRect(originX, tolHigh, w - originX - 40, tolLow - tolHigh);

      // Target line
      ctx.strokeStyle = '#5b8cff';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(originX, ty);
      ctx.lineTo(w - 40, ty);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#5b8cff';
      ctx.font = '11px sans-serif';
      ctx.fillText(`\u25b6 Target: ${t.name} (${t.height}m)`, originX + 12, ty - 6);
    } else {
      // Advanced: draw obstacle ridge and target landing pad
      const obs = this.sim.obstacle;
      const ox = toX(obs.x);
      const ow = obs.width * scaleX;
      const oy = toY(obs.height);

      ctx.fillStyle = '#7a3b2e';
      ctx.beginPath();
      ctx.moveTo(ox, originY);
      ctx.lineTo(ox + ow * 0.2, oy);
      ctx.lineTo(ox + ow * 0.8, oy);
      ctx.lineTo(ox + ow, originY);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#ff6b4a';
      ctx.stroke();
      ctx.fillStyle = '#ffcf7a';
      ctx.font = '10px sans-serif';
      ctx.fillText('Crater Ridge', ox + 4, oy - 6);

      // Target zone
      const tz = this.sim.targetZone;
      const tzx1 = toX(tz.minX);
      const tzx2 = toX(tz.maxX);
      ctx.fillStyle = 'rgba(74, 255, 154, 0.22)';
      ctx.fillRect(tzx1, originY - 6, tzx2 - tzx1, 8);
      ctx.strokeStyle = '#4aff9a';
      ctx.strokeRect(tzx1, originY - 6, tzx2 - tzx1, 8);
      ctx.fillStyle = '#4aff9a';
      ctx.fillText('\u25bc Target Landing Shelf', tzx1 + 4, originY - 14);
    }

    // Draw Earth trajectory (comparison in green)
    if (this.sim.earthTrajectory.length > 1) {
      ctx.strokeStyle = 'rgba(74, 255, 154, 0.45)';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(toX(this.sim.earthTrajectory[0].x), toY(this.sim.earthTrajectory[0].y));
      for (const pt of this.sim.earthTrajectory) {
        ctx.lineTo(toX(pt.x), toY(pt.y));
      }
      ctx.stroke();
      ctx.setLineDash([]);

      const lastE = this.sim.earthTrajectory[this.sim.earthTrajectory.length - 1];
      ctx.fillStyle = 'rgba(74, 255, 154, 0.7)';
      ctx.font = '10px sans-serif';
      ctx.fillText('Earth Trajectory (g = 9.81)', toX(lastE.x) + 4, toY(lastE.y) - 6);
    }

    // Draw Moon trajectory (in glowing blue)
    if (this.sim.trajectory.length > 1) {
      ctx.strokeStyle = '#5b8cff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(toX(this.sim.trajectory[0].x), toY(this.sim.trajectory[0].y));
      for (const pt of this.sim.trajectory) {
        ctx.lineTo(toX(pt.x), toY(pt.y));
      }
      ctx.stroke();

      // Apex marker
      if (this.sim.apexY > 0.5) {
        const aY = toY(this.sim.apexY);
        ctx.fillStyle = '#ffcf7a';
        ctx.beginPath();
        ctx.arc(toX(this.sim.x * 0.5), aY, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText(`Apex: ${this.sim.apexY.toFixed(1)}m`, toX(this.sim.x * 0.5) + 6, aY - 4);
      }
    }

    // Draw Astronaut jumper
    const curX = toX(this.sim.x);
    const curY = toY(this.sim.y);

    ctx.save();
    ctx.translate(curX, curY);

    // Astronaut figure
    ctx.fillStyle = '#f1f2f6';
    // Torso / PLSS backpack
    ctx.fillRect(-6, -24, 12, 16);
    ctx.fillStyle = '#8a8f9c';
    ctx.fillRect(-10, -22, 4, 12); // backpack
    // Helmet
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, -29, 6, 0, Math.PI * 2);
    ctx.fill();
    // Visor gold
    ctx.fillStyle = '#c9a24a';
    ctx.beginPath();
    ctx.arc(2, -29, 3, 0, Math.PI * 2);
    ctx.fill();
    // Legs
    ctx.strokeStyle = '#f1f2f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-3, -8);
    ctx.lineTo(-4, 0);
    ctx.moveTo(3, -8);
    ctx.lineTo(4, 0);
    ctx.stroke();

    ctx.restore();
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.onResize);
  }
}
