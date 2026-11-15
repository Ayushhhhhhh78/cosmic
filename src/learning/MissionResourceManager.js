// Mini-Game 4: Mission Resource Manager
// Manage oxygen, water, energy and supplies in a closed-loop planetary outpost.

export class MissionResourceManager {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.difficulty = options.difficulty ?? 'beginner';
    this.onComplete = options.onComplete ?? (() => {});

    this.maxSols = this.difficulty === 'beginner' ? 5 : 8;
    this.crewSize = 4;
    this.score = 0;
    this.running = false;

    this.reset();
    this.initDOM();
    this.startLoop();
  }

  reset() {
    this.sol = 1;
    this.hour = 8; // start at 08:00 (morning)
    this.crewHealth = 100; // %
    this.crewMorale = 100; // %
    this.sciencePoints = 0;

    // Reservoirs
    this.oxygen = 120; // kg
    this.water = 240; // kg / liters
    this.battery = 65; // kWh
    this.maxBattery = 80; // kWh
    this.food = 100; // rations
    this.co2Level = 600; // ppm (safe < 1000 ppm, dangerous > 2500 ppm)

    // Subsystem States
    this.systems = {
      moxie: 'nominal', // 'off', 'low', 'nominal', 'boost'
      waterRecycler: true, // on/off
      scrubber: 'nominal', // 'off', 'low', 'nominal', 'boost'
      thermal: 'normal', // 'eco', 'normal', 'high'
      scienceLab: false, // on/off
    };

    // Incident flags for advanced
    this.dustStorm = false;
    this.waterLeak = false;
    this.scrubberAlert = false;
    this.incidentsResolved = 0;
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Mission Time</span><b class="val time-val">Sol 1 \u00b7 08:00</b></div>
          <div class="hud-item"><span class="label">Crew Status</span><b class="val health-val">100% Health</b></div>
          <div class="hud-item"><span class="label">Cabin CO\u2082</span><b class="val co2-val">600 ppm</b></div>
          <div class="hud-item"><span class="label">Power Grid</span><b class="val power-val">Balanced</b></div>
          <div class="hud-item"><span class="label">Score</span><b class="val score-val">0</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls resource-ctrl-grid">
          <div class="res-col">
            <div class="subsys-card">
              <div class="subsys-head"><span>O\u2082 Generator (MOXIE)</span><b class="moxie-status">NOMINAL (3.5 kW)</b></div>
              <div class="subsys-buttons">
                <button class="mini mox-btn" data-s="off">Off</button>
                <button class="mini mox-btn on" data-s="nominal">Nominal</button>
                <button class="mini mox-btn" data-s="boost">Boost</button>
              </div>
            </div>

            <div class="subsys-card">
              <div class="subsys-head"><span>Water Recovery System</span><b class="wrs-status">ONLINE (2.0 kW)</b></div>
              <div class="subsys-buttons">
                <button class="mini wrs-btn" data-on="0">Bypass</button>
                <button class="mini wrs-btn on" data-on="1">Filter & Recycle</button>
              </div>
            </div>
          </div>

          <div class="res-col">
            <div class="subsys-card">
              <div class="subsys-head"><span>CO\u2082 Air Scrubber</span><b class="scrub-status">NOMINAL (1.5 kW)</b></div>
              <div class="subsys-buttons">
                <button class="mini scrub-btn" data-s="low">Low</button>
                <button class="mini scrub-btn on" data-s="nominal">Nominal</button>
                <button class="mini scrub-btn" data-s="boost">Boost</button>
              </div>
            </div>

            <div class="subsys-card">
              <div class="subsys-head"><span>Science Lab & Comms</span><b class="lab-status">OFFLINE (0 kW)</b></div>
              <div class="subsys-buttons">
                <button class="mini lab-btn on" data-on="0">Powered Down</button>
                <button class="mini lab-btn" data-on="1">Run Research (4.0 kW)</button>
              </div>
            </div>
          </div>

          <div class="res-col actions-col">
            <button class="solid btn-tick-hour">Advance 4 Hours</button>
            <button class="mini btn-tick-sol">Advance Full Sol</button>
            <button class="btn-res-reset">Emergency Reset</button>
          </div>
        </div>

        <div class="science-callout">
          <strong>Environmental Control & Life Support:</strong> On the International Space Station and future Martian outposts, the Water Recovery System recycles up to 98% of all human moisture (sweat, breath condensate, and urine) back into potable drinking water!
        </div>
      </div>
    `;

    this.canvas = this.container.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.timeVal = this.container.querySelector('.time-val');
    this.healthVal = this.container.querySelector('.health-val');
    this.co2Val = this.container.querySelector('.co2-val');
    this.powerVal = this.container.querySelector('.power-val');
    this.scoreVal = this.container.querySelector('.score-val');
    this.feedback = this.container.querySelector('.feedback-banner');

    this.resizeCanvas();
    window.addEventListener('resize', this.onResize);

    // Wire buttons
    this.container.querySelectorAll('.mox-btn').forEach((btn) => {
      btn.onclick = () => {
        this.systems.moxie = btn.dataset.s;
        this.container.querySelectorAll('.mox-btn').forEach((b) => b.classList.toggle('on', b === btn));
        this.updateHUD();
      };
    });

    this.container.querySelectorAll('.wrs-btn').forEach((btn) => {
      btn.onclick = () => {
        this.systems.waterRecycler = btn.dataset.on === '1';
        this.container.querySelectorAll('.wrs-btn').forEach((b) => b.classList.toggle('on', b === btn));
        this.updateHUD();
      };
    });

    this.container.querySelectorAll('.scrub-btn').forEach((btn) => {
      btn.onclick = () => {
        this.systems.scrubber = btn.dataset.s;
        this.container.querySelectorAll('.scrub-btn').forEach((b) => b.classList.toggle('on', b === btn));
        this.updateHUD();
      };
    });

    this.container.querySelectorAll('.lab-btn').forEach((btn) => {
      btn.onclick = () => {
        this.systems.scienceLab = btn.dataset.on === '1';
        this.container.querySelectorAll('.lab-btn').forEach((b) => b.classList.toggle('on', b === btn));
        this.updateHUD();
      };
    });

    this.container.querySelector('.btn-tick-hour').onclick = () => this.tickTime(4);
    this.container.querySelector('.btn-tick-sol').onclick = () => this.tickTime(24);
    this.container.querySelector('.btn-res-reset').onclick = () => {
      this.reset();
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

  updateHUD() {
    this.timeVal.textContent = `Sol ${this.sol} / ${this.maxSols} \u00b7 ${String(this.hour).padStart(2, '0')}:00`;
    this.healthVal.textContent = `${Math.round(this.crewHealth)}% Health`;
    this.co2Val.textContent = `${Math.round(this.co2Level)} ppm`;
    this.scoreVal.textContent = this.score;

    const isDay = this.hour >= 6 && this.hour <= 18;
    const solarKW = isDay ? (this.dustStorm ? 5.5 : 16.0) : 0;
    const drawKW =
      (this.systems.moxie === 'boost' ? 4.5 : this.systems.moxie === 'nominal' ? 2.5 : 0) +
      (this.systems.waterRecycler ? 1.2 : 0) +
      (this.systems.scrubber === 'boost' ? 2.2 : this.systems.scrubber === 'nominal' ? 1.0 : 0.5) +
      (this.systems.scienceLab ? 3.5 : 0) +
      1.2; // base habitat life support

    const netKW = solarKW - drawKW;
    this.powerVal.textContent = `${netKW >= 0 ? '+' : ''}${netKW.toFixed(1)} kW (Batt: ${Math.round(this.battery)} kWh)`;
  }

  showFeedback(text, isGood = true) {
    this.feedback.hidden = false;
    this.feedback.className = `feedback-banner ${isGood ? 'good' : 'warn'}`;
    this.feedback.innerHTML = text;
  }

  hideFeedback() {
    this.feedback.hidden = true;
  }

  tickTime(hours) {
    for (let h = 0; h < hours; h++) {
      this.hour = (this.hour + 1) % 24;
      if (this.hour === 0) {
        this.sol++;
      }

      // Check advanced incidents
      if (this.difficulty === 'advanced') {
        if (this.sol === 3 && this.hour === 10 && !this.dustStorm) {
          this.dustStorm = true;
          this.showFeedback('\u26a0 DUST STORM WARNING: Atmospheric dust has reduced solar generation by 65%! Shed load!', false);
        } else if (this.sol === 5 && this.hour === 14 && !this.waterLeak) {
          this.waterLeak = true;
          this.showFeedback('\u26a0 WRS VALVE LEAK: Water recycling efficiency compromised. Ration water!', false);
        } else if (this.sol === 6 && this.dustStorm) {
          this.dustStorm = false;
          this.showFeedback('\u2714 Dust storm has cleared! Solar panels operating at full insolation.', true);
        }
      }

      // 1. Crew consumption (4 crew members per hour)
      const hourlyO2 = (this.crewSize * 0.84) / 24;
      const hourlyH2O = (this.crewSize * 2.5) / 24;
      const hourlyFood = (this.crewSize * 1.0) / 24;

      this.oxygen = Math.max(0, this.oxygen - hourlyO2);
      this.water = Math.max(0, this.water - (this.systems.waterRecycler && !this.waterLeak ? hourlyH2O * 0.1 : hourlyH2O));
      this.food = Math.max(0, this.food - hourlyFood);

      // CO2 production
      this.co2Level += 18;

      // 2. Subsystems generation
      if (this.systems.moxie === 'boost') {
        this.oxygen += hourlyO2 * 1.8;
      } else if (this.systems.moxie === 'nominal') {
        this.oxygen += hourlyO2 * 1.1;
      }

      if (this.systems.scrubber === 'boost') {
        this.co2Level = Math.max(450, this.co2Level - 38);
      } else if (this.systems.scrubber === 'nominal') {
        this.co2Level = Math.max(500, this.co2Level - 22);
      } else if (this.systems.scrubber === 'low') {
        this.co2Level = Math.max(600, this.co2Level - 10);
      }

      // 3. Power balance
      const isDay = this.hour >= 6 && this.hour <= 18;
      const solarKW = isDay ? (this.dustStorm ? 5.5 : 16.0) : 0;
      const drawKW =
        (this.systems.moxie === 'boost' ? 4.5 : this.systems.moxie === 'nominal' ? 2.5 : 0) +
        (this.systems.waterRecycler ? 1.2 : 0) +
        (this.systems.scrubber === 'boost' ? 2.2 : this.systems.scrubber === 'nominal' ? 1.0 : 0.5) +
        (this.systems.scienceLab ? 3.5 : 0) +
        1.2;

      const netKWh = solarKW - drawKW;
      this.battery = Math.max(0, Math.min(this.maxBattery, this.battery + netKWh));

      // Science research points
      if (this.systems.scienceLab && this.battery > 5) {
        this.sciencePoints += 2;
      }

      // 4. Crew health impacts
      if (this.oxygen <= 5) this.crewHealth = Math.max(0, this.crewHealth - 3);
      if (this.water <= 5) this.crewHealth = Math.max(0, this.crewHealth - 2);
      if (this.co2Level > 2000) this.crewHealth = Math.max(0, this.crewHealth - 2.5);
      if (this.battery <= 0) this.crewHealth = Math.max(0, this.crewHealth - 2); // thermal heaters fail!
    }

    this.updateHUD();

    // Check completion or failure
    if (this.crewHealth <= 0) {
      this.showFeedback('\u2716 CRITICAL MISSION FAILURE: Habitat life support collapse. Crew evacuated.', false);
      return;
    }

    if (this.sol > this.maxSols) {
      const base = this.difficulty === 'beginner' ? 80 : 120;
      const bonus = Math.round((this.crewHealth / 100) * 20) + Math.min(10, Math.round(this.sciencePoints * 0.1));
      this.score = Math.min(this.difficulty === 'beginner' ? 100 : 150, base + bonus);
      this.updateHUD();
      this.showFeedback(
        `\u2714 EXPEDITION COMPLETED! Survived all ${this.maxSols} Sols with ${Math.round(this.crewHealth)}% crew health! Score: ${this.score}`,
        true
      );
      setTimeout(() => {
        this.onComplete({
          activityId: 'resources',
          difficulty: this.difficulty,
          score: this.score,
          stars: 3,
          summary: `Maintained stable closed-loop oxygen, water, and power balance throughout a ${this.maxSols}-Sol mission.`,
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

    // Dark control room monitor background
    ctx.fillStyle = '#080d1a';
    ctx.fillRect(0, 0, w, h);

    // Title / Status banner
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = '14px sans-serif';
    ctx.fillText(`Life Support ECLSS Status Monitor \u2014 Sol ${this.sol}`, 25, 30);

    // Resource Gauges
    const bars = [
      { name: 'Oxygen (O\u2082)', val: this.oxygen, max: 140, unit: 'kg', color: '#5b8cff' },
      { name: 'Water (H\u2082O)', val: this.water, max: 280, unit: 'L', color: '#4aff9a' },
      { name: 'Power Storage', val: this.battery, max: this.maxBattery, unit: 'kWh', color: '#ffcf7a' },
      { name: 'Ration Supplies', val: this.food, max: 120, unit: 'units', color: '#8b6bff' },
    ];

    const startY = 60;
    const barH = 18;
    const barW = w * 0.55;

    bars.forEach((b, i) => {
      const y = startY + i * 44;
      ctx.fillStyle = '#cdd3e6';
      ctx.font = '12px sans-serif';
      ctx.fillText(b.name, 25, y + 14);

      // Value text
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'right';
      ctx.fillText(`${b.val.toFixed(1)} / ${b.max} ${b.unit}`, 25 + barW, y + 14);
      ctx.textAlign = 'left';

      // Bar background
      ctx.fillStyle = 'rgba(180, 196, 255, 0.12)';
      ctx.fillRect(25, y + 20, barW, barH);

      // Bar fill
      const pct = Math.max(0, Math.min(1, b.val / b.max));
      ctx.fillStyle = pct < 0.2 ? '#ff5a5a' : b.color;
      ctx.fillRect(25, y + 20, barW * pct, barH);
    });

    // Right-hand telemetry gauges: CO2 & Crew Health
    const rightX = w * 0.68;
    ctx.fillStyle = '#1c2438';
    ctx.fillRect(rightX, 60, w - rightX - 25, 200);
    ctx.strokeStyle = '#344163';
    ctx.strokeRect(rightX, 60, w - rightX - 25, 200);

    ctx.fillStyle = '#ffcf7a';
    ctx.font = '12px sans-serif';
    ctx.fillText('Environmental Diagnostics', rightX + 15, 85);

    // CO2 meter
    ctx.fillStyle = '#cdd3e6';
    ctx.font = '11px sans-serif';
    ctx.fillText(`Cabin CO\u2082: ${Math.round(this.co2Level)} ppm`, rightX + 15, 115);
    ctx.fillStyle = this.co2Level > 1800 ? '#ff5a5a' : this.co2Level > 1100 ? '#ffcf7a' : '#4aff9a';
    ctx.fillText(
      this.co2Level > 1800 ? '\u26a0 DANGEROUS LEVEL' : this.co2Level > 1100 ? 'ELEVATED' : '\u2714 OPTIMAL AIR',
      rightX + 15,
      132
    );

    // Crew health meter
    ctx.fillStyle = '#cdd3e6';
    ctx.fillText(`Crew Health: ${Math.round(this.crewHealth)}%`, rightX + 15, 165);
    ctx.fillStyle = this.crewHealth < 50 ? '#ff5a5a' : '#4aff9a';
    ctx.fillRect(rightX + 15, 175, 120 * (this.crewHealth / 100), 10);

    // Research points
    ctx.fillStyle = '#cdd3e6';
    ctx.fillText(`Science Research: ${this.sciencePoints} pts`, rightX + 15, 215);

    // Diurnal cycle indicator at bottom
    const isDay = this.hour >= 6 && this.hour <= 18;
    ctx.fillStyle = isDay ? '#ffcf7a' : '#5b8cff';
    ctx.font = '12px sans-serif';
    ctx.fillText(
      isDay ? '\u2600 Diurnal Phase: Sun Insolation High' : '\u25d0 Nocturnal Phase: Night Load On Battery',
      25,
      h - 25
    );
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.onResize);
  }
}
