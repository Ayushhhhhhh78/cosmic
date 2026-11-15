// Mini-Game 5: Solar Power Engineer
// Adjust solar panel angles to maximise simulated energy generation across an alien day.

export class SolarPowerEngineer {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.difficulty = options.difficulty ?? 'beginner';
    this.onComplete = options.onComplete ?? (() => {});

    this.tilt = 45; // panel tilt angle (degrees from horizontal)
    this.azimuth = 0; // panel azimuth (-90 East to +90 West)
    this.hour = 8; // start at 08:00
    this.totalKWh = 0;
    this.batteryKWh = 20;
    this.maxBatteryKWh = 50;
    this.dustLevel = 0.05; // 5% dust initially
    this.targetKWh = this.difficulty === 'beginner' ? 320 : 450;
    this.score = 0;
    this.cleanedCount = 0;

    this.initDOM();
    this.startLoop();
  }

  getSunPosition(hour) {
    // Hour 6: Sunrise (elevation 0, azimuth -80 deg)
    // Hour 12: Solar Noon (elevation 65 deg, azimuth 0 deg)
    // Hour 18: Sunset (elevation 0, azimuth +80 deg)
    if (hour < 6 || hour > 18) {
      return { elevation: -10, azimuth: 0, isNight: true };
    }
    const t = (hour - 6) / 12; // 0 to 1
    const elevation = Math.sin(t * Math.PI) * 65; // peak at 65 deg
    const azimuth = (t - 0.5) * 160; // -80 to +80
    return { elevation, azimuth, isNight: false };
  }

  calcIncidence() {
    const sun = this.getSunPosition(this.hour);
    if (sun.isNight) return { cosTheta: 0, thetaDeg: 90, powerKW: 0 };

    const aRad = (sun.elevation * Math.PI) / 180;
    const bRad = (this.tilt * Math.PI) / 180;
    const dAzRad = ((sun.azimuth - this.azimuth) * Math.PI) / 180;

    // Cosine of incidence angle theta:
    // cos(theta) = sin(alpha)*cos(beta) + cos(alpha)*sin(beta)*cos(delta_azimuth)
    let cosTheta = Math.sin(aRad) * Math.cos(bRad) + Math.cos(aRad) * Math.sin(bRad) * Math.cos(dAzRad);
    cosTheta = Math.max(0, Math.min(1, cosTheta));
    const thetaDeg = (Math.acos(cosTheta) * 180) / Math.PI;

    // Power = Pmax * cos(theta) * (1 - dust)
    const pMax = 12.0; // kW
    const dustFactor = Math.max(0, 1 - this.dustLevel);
    const powerKW = pMax * cosTheta * dustFactor;

    return { cosTheta, thetaDeg, powerKW };
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Time of Day</span><b class="val time-val">08:00 (Morning)</b></div>
          <div class="hud-item"><span class="label">Sun Elevation</span><b class="val sun-val">25\u00b0 El \u00b7 -53\u00b0 Az</b></div>
          <div class="hud-item"><span class="label">Alignment Quality</span><b class="val align-val">92% (\u03b8 = 22\u00b0)</b></div>
          <div class="hud-item"><span class="label">Output Power</span><b class="val power-val">10.2 kW</b></div>
          <div class="hud-item"><span class="label">Energy Generated</span><b class="val kwh-val">0 / ${this.targetKWh} kWh</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls solar-ctrl-grid">
          <div class="ctrl-group">
            <label>Panel Tilt (\u03b2): <span class="tilt-val">${this.tilt}</span>\u00b0</label>
            <input type="range" class="tilt-slider" min="0" max="90" step="1" value="${this.tilt}">
          </div>

          ${
            this.difficulty === 'advanced'
              ? `
          <div class="ctrl-group">
            <label>Panel Azimuth (\u03d5): <span class="az-val">${this.azimuth}</span>\u00b0</label>
            <input type="range" class="az-slider" min="-80" max="80" step="2" value="${this.azimuth}">
          </div>
          <div class="ctrl-group">
            <label>Dust Accumulation: <span class="dust-val">${Math.round(this.dustLevel * 100)}</span>%</label>
            <button class="mini btn-clean-dust">Deploy Electrostatic Wiper (-10 kWh)</button>
          </div>
          `
              : `
          <div class="ctrl-group">
            <label>Tracking Mode</label>
            <span class="ctrl-note">Single-Axis Elevation Tracking (Auto-Azimuth)</span>
          </div>
          `
          }

          <div class="ctrl-buttons">
            <button class="solid btn-advance-time">Advance Time (+2 Hours)</button>
            <button class="btn-solar-reset">Reset Sol</button>
          </div>
        </div>

        <div class="science-callout">
          <strong>Lambert's Cosine Law:</strong> Solar irradiance collected by a flat surface decreases as $I = I_0 \cos \theta$, where $\theta$ is the angle between incident solar rays and the surface normal. When $\theta = 0^\circ$ (perpendicular), energy yield is 100%; at $\theta = 60^\circ$, yield drops by half!
        </div>
      </div>
    `;

    this.canvas = this.container.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.timeVal = this.container.querySelector('.time-val');
    this.sunVal = this.container.querySelector('.sun-val');
    this.alignVal = this.container.querySelector('.align-val');
    this.powerVal = this.container.querySelector('.power-val');
    this.kwhVal = this.container.querySelector('.kwh-val');
    this.feedback = this.container.querySelector('.feedback-banner');

    this.tiltSlider = this.container.querySelector('.tilt-slider');
    this.tiltVal = this.container.querySelector('.tilt-val');
    this.azSlider = this.container.querySelector('.az-slider');
    this.azVal = this.container.querySelector('.az-val');

    this.resizeCanvas();
    window.addEventListener('resize', this.onResize);

    this.tiltSlider.oninput = () => {
      this.tilt = parseFloat(this.tiltSlider.value);
      this.tiltVal.textContent = this.tilt;
      this.updateHUD();
    };

    if (this.azSlider) {
      this.azSlider.oninput = () => {
        this.azimuth = parseFloat(this.azSlider.value);
        this.azVal.textContent = this.azimuth;
        this.updateHUD();
      };
    }

    const cleanBtn = this.container.querySelector('.btn-clean-dust');
    if (cleanBtn) {
      cleanBtn.onclick = () => {
        if (this.batteryKWh < 10) {
          this.showFeedback('\u26a0 Insufficient battery power to run electrostatic dust wiper (needs 10 kWh)!', false);
          return;
        }
        this.batteryKWh -= 10;
        this.dustLevel = 0.02;
        this.cleanedCount++;
        this.showFeedback('\u2714 Electrostatic dust pulse executed! Panels cleaned (98% transmittance).', true);
        this.updateHUD();
      };
    }

    this.container.querySelector('.btn-advance-time').onclick = () => {
      this.advanceTime(2);
    };

    this.container.querySelector('.btn-solar-reset').onclick = () => {
      this.hour = 8;
      this.totalKWh = 0;
      this.batteryKWh = 20;
      this.dustLevel = 0.05;
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
    const sun = this.getSunPosition(this.hour);
    const { cosTheta, thetaDeg, powerKW } = this.calcIncidence();

    this.timeVal.textContent = `${String(this.hour).padStart(2, '0')}:00 ${sun.isNight ? '(Night)' : ''}`;
    this.sunVal.textContent = `${Math.round(sun.elevation)}\u00b0 El \u00b7 ${Math.round(sun.azimuth)}\u00b0 Az`;
    this.alignVal.textContent = `${Math.round(cosTheta * 100)}% (\u03b8 = ${Math.round(thetaDeg)}\u00b0)`;
    this.powerVal.textContent = `${powerKW.toFixed(1)} kW`;
    this.kwhVal.textContent = `${Math.round(this.totalKWh)} / ${this.targetKWh} kWh`;

    const dVal = this.container.querySelector('.dust-val');
    if (dVal) dVal.textContent = Math.round(this.dustLevel * 100);
  }

  advanceTime(stepHours = 2) {
    const { powerKW } = this.calcIncidence();
    const addedKWh = powerKW * stepHours;
    this.totalKWh += addedKWh;
    this.batteryKWh = Math.min(this.maxBatteryKWh, this.batteryKWh + addedKWh * 0.4);

    // Dust accumulation over time
    if (this.difficulty === 'advanced') {
      this.dustLevel = Math.min(0.65, this.dustLevel + 0.04);
    }

    this.hour += stepHours;
    this.updateHUD();

    if (this.hour > 18) {
      // Day is over! Check quota
      const ok = this.totalKWh >= this.targetKWh;
      const battOk = this.difficulty === 'advanced' ? this.batteryKWh >= 35 : true;

      if (ok && battOk) {
        const base = this.difficulty === 'beginner' ? 85 : 120;
        const bonus = Math.min(30, Math.round((this.totalKWh - this.targetKWh) * 0.3));
        this.score = Math.min(this.difficulty === 'beginner' ? 100 : 150, base + bonus);
        this.showFeedback(
          `\u2714 SOL COMPLETE! Target achieved: ${Math.round(this.totalKWh)} kWh generated! Night battery reserves: ${Math.round(this.batteryKWh)} kWh. Score: ${this.score}`,
          true
        );
        setTimeout(() => {
          this.onComplete({
            activityId: 'solar',
            difficulty: this.difficulty,
            score: this.score,
            stars: 3,
            summary: `Maximized photovoltaic output using Lambert's cosine law and managed diurnal battery reserves.`,
          });
        }, 1800);
      } else {
        this.showFeedback(
          `\u26a0 Sol ended with ${Math.round(this.totalKWh)} kWh (Target: ${this.targetKWh} kWh). ${!battOk ? 'Battery critically low for night heating.' : ''} Reset and adjust panel tracking angle closer to normal incidence!`,
          false
        );
      }
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

    // Martian / Space sky gradient
    const sun = this.getSunPosition(this.hour);
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    if (sun.isNight) {
      sky.addColorStop(0, '#03050d');
      sky.addColorStop(1, '#0c101e');
    } else {
      sky.addColorStop(0, '#1d1210');
      sky.addColorStop(0.7, '#42241b');
      sky.addColorStop(1, '#24130e');
    }
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    // Horizon line
    const horizonY = h * 0.72;
    ctx.fillStyle = '#1c0d0a';
    ctx.fillRect(0, horizonY, w, h - horizonY);

    // Draw Sun and Ray Vector
    if (!sun.isNight) {
      // Map sun azimuth (-80 to 80) to X (0.1w to 0.9w)
      const sunX = w * 0.5 + (sun.azimuth / 80) * (w * 0.38);
      // Map sun elevation (0 to 65) to Y (horizonY to 0.15h)
      const sunY = horizonY - (sun.elevation / 65) * (horizonY - 50);

      // Sun glow
      const sGlow = ctx.createRadialGradient(sunX, sunY, 6, sunX, sunY, 40);
      sGlow.addColorStop(0, '#ffffff');
      sGlow.addColorStop(0.3, '#ffcf7a');
      sGlow.addColorStop(1, 'rgba(255, 207, 122, 0)');
      ctx.fillStyle = sGlow;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 40, 0, Math.PI * 2);
      ctx.fill();

      // Sun core
      ctx.fillStyle = '#fff4db';
      ctx.beginPath();
      ctx.arc(sunX, sunY, 12, 0, Math.PI * 2);
      ctx.fill();

      // Incident ray lines to panel
      const panelCenterX = w * 0.5;
      const panelCenterY = horizonY - 20;

      ctx.strokeStyle = 'rgba(255, 207, 122, 0.45)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(sunX, sunY);
      ctx.lineTo(panelCenterX, panelCenterY);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw Solar Array Pivot Stand
    const cx = w * 0.5;
    const cy = horizonY - 10;

    ctx.fillStyle = '#3a3f4a';
    ctx.fillRect(cx - 8, cy, 16, horizonY - cy + 10);

    // Draw Rotated Solar Panel
    ctx.save();
    ctx.translate(cx, cy);

    // Rotate panel by tilt angle
    const tiltRad = ((this.tilt - 90) * Math.PI) / 180;
    ctx.rotate(tiltRad);

    // Panel frame
    ctx.fillStyle = '#1c2438';
    ctx.fillRect(-70, -10, 140, 20);
    ctx.strokeStyle = '#5b8cff';
    ctx.lineWidth = 2;
    ctx.strokeRect(-70, -10, 140, 20);

    // Photovoltaic cells
    ctx.fillStyle = '#183163';
    for (let c = -65; c < 65; c += 22) {
      ctx.fillRect(c, -8, 18, 16);
    }

    // Normal vector line (perpendicular to panel face)
    ctx.strokeStyle = '#4aff9a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.lineTo(0, -50);
    ctx.stroke();
    ctx.fillStyle = '#4aff9a';
    ctx.font = '10px sans-serif';
    ctx.fillText('Normal \u2192', 4, -40);

    ctx.restore();
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.onResize);
  }
}
