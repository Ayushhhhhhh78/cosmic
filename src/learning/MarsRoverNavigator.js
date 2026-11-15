// Mini-Game 3: Mars Rover Navigator
// Navigate a rover through obstacles and plan routes across Martian terrain.

export class MarsRoverNavigator {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.difficulty = options.difficulty ?? 'beginner';
    this.onComplete = options.onComplete ?? (() => {});

    this.gridSize = this.difficulty === 'beginner' ? 7 : 9;
    this.commandQueue = [];
    this.executing = false;
    this.samplesCollected = 0;
    this.requiredSamples = this.difficulty === 'beginner' ? 2 : 3;
    this.battery = 100; // Wh
    this.maxBattery = 100;
    this.score = 0;
    this.roverDir = 0; // 0: East, 1: South, 2: West, 3: North
    this.roverPos = { x: 0, y: 0 };
    this.uplinkPos = { x: this.gridSize - 1, y: this.gridSize - 1 };

    this.setupMap();
    this.initDOM();
    this.startLoop();
  }

  setupMap() {
    const N = this.gridSize;
    this.roverPos = { x: 0, y: 0 };
    this.roverDir = 0; // facing East
    this.samplesCollected = 0;
    this.battery = 100;
    this.grid = Array.from({ length: N }, () => Array(N).fill('empty'));

    // Place Start & Uplink
    this.grid[0][0] = 'start';
    this.grid[N - 1][N - 1] = 'uplink';

    if (this.difficulty === 'beginner') {
      // 2 Samples
      this.grid[2][2] = 'sample';
      this.grid[4][5] = 'sample';
      // 1 Solar recharge
      this.grid[1][4] = 'recharge';
      // Obstacles: Boulders & Sand
      this.grid[1][2] = 'boulder';
      this.grid[3][3] = 'boulder';
      this.grid[4][2] = 'dune';
      this.grid[5][4] = 'boulder';
    } else {
      // Advanced: 3 Samples, 2 Recharge, multiple dunes and boulder clusters
      this.grid[2][3] = 'sample';
      this.grid[5][2] = 'sample';
      this.grid[6][6] = 'sample';
      this.grid[3][6] = 'recharge';
      this.grid[7][1] = 'recharge';
      // Boulders
      this.grid[1][2] = 'boulder';
      this.grid[2][5] = 'boulder';
      this.grid[4][4] = 'boulder';
      this.grid[5][5] = 'boulder';
      this.grid[7][4] = 'boulder';
      // Sand Dunes (High slip, double energy cost)
      this.grid[2][1] = 'dune';
      this.grid[3][4] = 'dune';
      this.grid[6][3] = 'dune';
      this.grid[5][7] = 'dune';
    }
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="game-wrap">
        <div class="game-hud">
          <div class="hud-item"><span class="label">Rover Telemetry</span><b class="val pos-val">(0, 0) E</b></div>
          <div class="hud-item"><span class="label">Battery Storage</span><b class="val batt-val">100 / 100 Wh</b></div>
          <div class="hud-item"><span class="label">Samples Analyzed</span><b class="val sample-val">0 / ${this.requiredSamples}</b></div>
          <div class="hud-item"><span class="label">Signal Latency</span><b class="val lat-val">${this.difficulty === 'beginner' ? '0.2s (Local)' : '14m 22s (Earth-Mars)'}</b></div>
          <div class="hud-item"><span class="label">Score</span><b class="val score-val">0</b></div>
        </div>

        <div class="canvas-container">
          <canvas class="game-canvas"></canvas>
          <div class="canvas-overlay">
            <div class="feedback-banner" hidden></div>
          </div>
        </div>

        <div class="game-controls rover-ctrl-bar">
          <div class="command-palette">
            <button class="mini cmd-btn" data-c="F">\u25b2 Forward</button>
            <button class="mini cmd-btn" data-c="L">\u21b6 Turn Left</button>
            <button class="mini cmd-btn" data-c="R">\u21b7 Turn Right</button>
            <button class="mini cmd-btn" data-c="D">\u2699 Drill Sample</button>
            <button class="mini cmd-btn" data-c="C">\u2600 Clean & Charge</button>
          </div>

          <div class="queue-display">
            <span class="ctrl-label">Command Uplink Pipeline:</span>
            <div class="queue-list"><span class="queue-empty">Queue is empty</span></div>
          </div>

          <div class="queue-actions">
            <button class="solid btn-exec">${this.difficulty === 'beginner' ? 'Execute Commands' : 'Transmit Uplink Packet'}</button>
            <button class="btn-clear">Clear Queue</button>
            <button class="btn-reset-map">Reset Map</button>
          </div>
        </div>

        <div class="science-callout">
          <strong>Autonomous Navigation (AutoNav):</strong> NASA's Perseverance rover uses stereo cameras and dedicated compute to map terrain hazards in real time, enabling it to drive autonomously up to 200 meters per sol without waiting for Earth operators!
        </div>
      </div>
    `;

    this.canvas = this.container.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.posVal = this.container.querySelector('.pos-val');
    this.battVal = this.container.querySelector('.batt-val');
    this.sampleVal = this.container.querySelector('.sample-val');
    this.scoreVal = this.container.querySelector('.score-val');
    this.queueList = this.container.querySelector('.queue-list');
    this.feedback = this.container.querySelector('.feedback-banner');

    this.resizeCanvas();
    window.addEventListener('resize', this.onResize);

    this.container.querySelectorAll('.cmd-btn').forEach((btn) => {
      btn.onclick = () => {
        if (this.executing) return;
        if (this.commandQueue.length >= 16) {
          this.showFeedback('Command queue buffer full (max 16 instructions).', false);
          return;
        }
        this.commandQueue.push(btn.dataset.c);
        this.renderQueue();
      };
    });

    this.container.querySelector('.btn-clear').onclick = () => {
      if (this.executing) return;
      this.commandQueue = [];
      this.renderQueue();
    };

    this.container.querySelector('.btn-reset-map').onclick = () => {
      if (this.executing) return;
      this.setupMap();
      this.commandQueue = [];
      this.renderQueue();
      this.updateHUD();
      this.hideFeedback();
    };

    this.container.querySelector('.btn-exec').onclick = () => {
      this.executeQueue();
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

  renderQueue() {
    if (this.commandQueue.length === 0) {
      this.queueList.innerHTML = `<span class="queue-empty">Queue is empty</span>`;
      return;
    }
    const names = { F: 'Fwd', L: 'Left', R: 'Right', D: 'Drill', C: 'Charge' };
    this.queueList.innerHTML = this.commandQueue
      .map((c, i) => `<span class="queue-pill">${i + 1}:${names[c]}</span>`)
      .join(' ');
  }

  updateHUD() {
    const dirs = ['E', 'S', 'W', 'N'];
    this.posVal.textContent = `(${this.roverPos.x}, ${this.roverPos.y}) ${dirs[this.roverDir]}`;
    this.battVal.textContent = `${Math.round(this.battery)} / ${this.maxBattery} Wh`;
    this.sampleVal.textContent = `${this.samplesCollected} / ${this.requiredSamples}`;
    this.scoreVal.textContent = this.score;
  }

  showFeedback(text, isGood = true) {
    this.feedback.hidden = false;
    this.feedback.className = `feedback-banner ${isGood ? 'good' : 'warn'}`;
    this.feedback.innerHTML = text;
  }

  hideFeedback() {
    this.feedback.hidden = true;
  }

  async executeQueue() {
    if (this.executing || this.commandQueue.length === 0) return;
    this.executing = true;
    this.hideFeedback();

    for (let i = 0; i < this.commandQueue.length; i++) {
      const cmd = this.commandQueue[i];
      await this.runCommand(cmd);
      this.updateHUD();

      // Check battery failure
      if (this.battery <= 0) {
        this.showFeedback('\u26a0 BATTERY DEPLETED! Rover lost power in Martian terrain.', false);
        this.executing = false;
        return;
      }

      await new Promise((r) => setTimeout(r, 400));
    }

    this.executing = false;
    this.commandQueue = [];
    this.renderQueue();

    // Check victory condition
    const atUplink =
      this.roverPos.x === this.uplinkPos.x && this.roverPos.y === this.uplinkPos.y;
    if (atUplink) {
      if (this.samplesCollected >= this.requiredSamples) {
        const bonus = Math.round(this.battery * 0.4);
        const base = this.difficulty === 'beginner' ? 80 : 110;
        this.score = Math.min(this.difficulty === 'beginner' ? 100 : 150, base + bonus);
        this.updateHUD();
        this.showFeedback(
          `\u2714 MISSION SUCCESS! Reached communications uplink with all ${this.samplesCollected} samples! Remaining battery: ${Math.round(this.battery)} Wh. Score: ${this.score}`,
          true
        );
        setTimeout(() => {
          this.onComplete({
            activityId: 'rover',
            difficulty: this.difficulty,
            score: this.score,
            stars: 3,
            summary: `Successfully planned and executed autonomous route across Martian terrain, safely collecting rock core samples.`,
          });
        }, 1800);
      } else {
        this.showFeedback(
          `\u26a0 Reached uplink station, but only collected ${this.samplesCollected}/${this.requiredSamples} required science samples!`,
          false
        );
      }
    }
  }

  async runCommand(cmd) {
    const N = this.gridSize;
    if (cmd === 'L') {
      this.roverDir = (this.roverDir + 3) % 4;
      this.battery = Math.max(0, this.battery - 2);
    } else if (cmd === 'R') {
      this.roverDir = (this.roverDir + 1) % 4;
      this.battery = Math.max(0, this.battery - 2);
    } else if (cmd === 'F') {
      const dx = [1, 0, -1, 0][this.roverDir];
      const dy = [0, 1, 0, -1][this.roverDir];
      const nx = this.roverPos.x + dx;
      const ny = this.roverPos.y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
        this.showFeedback('\u26a0 Boundary collision prevented by AutoNav hazard avoidance!', false);
        this.battery = Math.max(0, this.battery - 4);
        return;
      }

      const cell = this.grid[ny][nx];
      if (cell === 'boulder') {
        this.showFeedback('\u26a0 Boulder collision! Obstacle blocked movement.', false);
        this.battery = Math.max(0, this.battery - 6);
        return;
      }

      this.roverPos.x = nx;
      this.roverPos.y = ny;

      if (cell === 'dune') {
        this.battery = Math.max(0, this.battery - 12); // High wheel slip energy drain
      } else {
        this.battery = Math.max(0, this.battery - 5);
      }
    } else if (cmd === 'D') {
      // Drill sample at current location
      const cell = this.grid[this.roverPos.y][this.roverPos.x];
      if (cell === 'sample') {
        this.samplesCollected++;
        this.grid[this.roverPos.y][this.roverPos.x] = 'empty';
        this.battery = Math.max(0, this.battery - 10);
        this.showFeedback(`\u2714 Rock sample collected and hermetically sealed!`, true);
      } else {
        this.battery = Math.max(0, this.battery - 8);
        this.showFeedback(`No sample found here (drilled ordinary regolith).`, false);
      }
    } else if (cmd === 'C') {
      // Clean panels & recharge
      const cell = this.grid[this.roverPos.y][this.roverPos.x];
      if (cell === 'recharge') {
        this.battery = Math.min(this.maxBattery, this.battery + 35);
        this.showFeedback(`\u2600 Solar panels angled to sun! Recharged +35 Wh.`, true);
      } else {
        this.battery = Math.min(this.maxBattery, this.battery + 8);
        this.showFeedback(`Low ambient sunlight: trickle charged +8 Wh.`, true);
      }
    }
  }

  startLoop() {
    let last = performance.now();
    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      this.render();
      this.animId = requestAnimationFrame(frame);
    };
    this.animId = requestAnimationFrame(frame);
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Martian terrain background
    ctx.fillStyle = '#180a06';
    ctx.fillRect(0, 0, w, h);

    const N = this.gridSize;
    const margin = 20;
    const cellSize = Math.min((w - margin * 2) / N, (h - margin * 2) / N);
    const offsetX = (w - cellSize * N) / 2;
    const offsetY = (h - cellSize * N) / 2;

    // Draw Grid
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const cx = offsetX + x * cellSize;
        const cy = offsetY + y * cellSize;
        const type = this.grid[y][x];

        // Cell background
        if (type === 'dune') {
          ctx.fillStyle = '#4a2312';
        } else if (type === 'boulder') {
          ctx.fillStyle = '#2d1810';
        } else if (type === 'recharge') {
          ctx.fillStyle = 'rgba(255, 207, 122, 0.18)';
        } else if (type === 'uplink') {
          ctx.fillStyle = 'rgba(91, 140, 255, 0.22)';
        } else {
          ctx.fillStyle = '#26120b';
        }
        ctx.fillRect(cx, cy, cellSize, cellSize);

        // Border
        ctx.strokeStyle = '#4d281a';
        ctx.lineWidth = 1;
        ctx.strokeRect(cx, cy, cellSize, cellSize);

        // Render cell contents
        if (type === 'boulder') {
          ctx.fillStyle = '#8f4f35';
          ctx.beginPath();
          ctx.arc(cx + cellSize * 0.5, cy + cellSize * 0.5, cellSize * 0.35, 0, Math.PI * 2);
          ctx.fill();
        } else if (type === 'dune') {
          ctx.strokeStyle = '#d97d4a';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx + 4, cy + cellSize * 0.7);
          ctx.bezierCurveTo(
            cx + cellSize * 0.3,
            cy + cellSize * 0.3,
            cx + cellSize * 0.7,
            cy + cellSize * 0.9,
            cx + cellSize - 4,
            cy + cellSize * 0.4
          );
          ctx.stroke();
        } else if (type === 'sample') {
          ctx.fillStyle = '#5effad';
          ctx.beginPath();
          ctx.arc(cx + cellSize * 0.5, cy + cellSize * 0.5, cellSize * 0.22, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#2b945f';
          ctx.stroke();
        } else if (type === 'recharge') {
          ctx.fillStyle = '#ffcf7a';
          ctx.font = `${Math.round(cellSize * 0.45)}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('\u2600', cx + cellSize * 0.5, cy + cellSize * 0.5);
        } else if (type === 'uplink') {
          ctx.fillStyle = '#5b8cff';
          ctx.font = `${Math.round(cellSize * 0.45)}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('\u25ce', cx + cellSize * 0.5, cy + cellSize * 0.5);
        }
      }
    }

    // Draw Rover
    const rx = offsetX + this.roverPos.x * cellSize + cellSize * 0.5;
    const ry = offsetY + this.roverPos.y * cellSize + cellSize * 0.5;

    ctx.save();
    ctx.translate(rx, ry);
    ctx.rotate((this.roverDir * Math.PI) / 2);

    // Rover chassis
    ctx.fillStyle = '#eef1fa';
    ctx.fillRect(-cellSize * 0.3, -cellSize * 0.25, cellSize * 0.6, cellSize * 0.5);

    // Solar deck
    ctx.fillStyle = '#1b2a56';
    ctx.fillRect(-cellSize * 0.2, -cellSize * 0.18, cellSize * 0.35, cellSize * 0.36);

    // Rocker-bogie 6 wheels
    ctx.fillStyle = '#3a3f4a';
    const rw = cellSize * 0.16;
    const rh = cellSize * 0.08;
    ctx.fillRect(-cellSize * 0.35, -cellSize * 0.32, rw, rh);
    ctx.fillRect(0, -cellSize * 0.32, rw, rh);
    ctx.fillRect(cellSize * 0.22, -cellSize * 0.32, rw, rh);
    ctx.fillRect(-cellSize * 0.35, cellSize * 0.24, rw, rh);
    ctx.fillRect(0, cellSize * 0.24, rw, rh);
    ctx.fillRect(cellSize * 0.22, cellSize * 0.24, rw, rh);

    // Mast / camera pointing forward (East / +x)
    ctx.fillStyle = '#ffcf7a';
    ctx.beginPath();
    ctx.arc(cellSize * 0.22, 0, cellSize * 0.08, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.onResize);
  }
}
