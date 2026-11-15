# Development status

Last updated: Stage 7A delivery (Learning Lab & Six Educational Mini-Games). Stage 6H was 3D colony structures. Stage 6G was final integration and save system.

## Stage 7A: Educational Mini-Games & Learning Lab (Implemented, logic-tested, production-bundled)
- **Learning Lab Hub Interface** (`src/learning/LearningLabUI.js`, `src/learning/LearningLabScene.js`, `src/learning/learningData.js`):
  - Dedicated cinematic space aesthetic interface matching COSMIX style with 3D orbiting orbital laboratory station backdrop (`LearningLabScene.js`).
  - Access from main menu ("Learning Lab" button) via `app.goTo('lab')` or seamless menu transition.
  - Features overall Astronaut Science Rating / Rank (Cadet Trainee -> Science Specialist -> Flight Engineer -> Senior Science Officer -> Cosmix Mission Commander) based on cumulative points.
  - Displays activity cards with status, difficulty indicators, high scores, star ratings (1-3 stars), and "Enter Simulation" launcher.
  - Top navigation bar with Back to Lab Hub / Main Menu, active difficulty toggle (Beginner / Advanced), and collapsible "Instructions & Science" briefing modal.
  - Completion modal with animated score awarding, stars, summary, scientific debriefing, and next challenge progression.
- **Six Fully Playable Educational Mini-Games**:
  1. **Lunar Gravity Challenge** (`src/learning/LunarGravityChallenge.js`):
     - Interactive Moon (1.62 m/s²) vs Earth (9.81 m/s²) gravity and jumping simulation.
     - Parabolic projectile kinematics: apex height h = v₀²/(2g), hang time t = 2v₀/g.
     - Beginner: 3 progressive altitude target platforms on the Moon with side-by-side Earth comparison arc showing 6x height disparity.
     - Advanced: Obstacle trajectory over a crater ridge, balancing velocity and launch angle to land safely within a designated landing zone without exceeding EVA suit impact speed limits (5.5 m/s).
  2. **Crater Detective** (`src/learning/CraterDetective.js`):
     - Identification of crater morphologies: Simple craters (Linné), Complex craters with central rebound peaks (Tycho), Multi-Ring impact basins (Mare Orientale), and Degraded/infilled craters (Gusev).
     - Cross-section geological inspector: identify raised rims, melt floors, central peaks, and ejecta blankets.
     - Advanced mode: Hypervelocity impact kinetic energy simulation (E = ½mv²) matching Copernican crater diameter and depth; plus stratigraphic superposition age ordering puzzle.
  3. **Mars Rover Navigator** (`src/learning/MarsRoverNavigator.js`):
     - Path planning and obstacle avoidance across a hazardous Martian terrain grid.
     - Rocker-bogie rover sprite with steering and AutoNav hazard avoidance.
     - Power budget management (Watt-hours Wh), terrain slope costs, and sand dune wheel slip penalties.
     - Beginner: 7x7 grid with guided command execution, rock core sample drilling, and solar recharge pads.
     - Advanced: 9x9 grid with communication latency simulation (uplink pipeline: player must assemble an autonomous sequence of up to 16 commands before transmitting).
  4. **Mission Resource Manager** (`src/learning/MissionResourceManager.js`):
     - Closed-loop Environmental Control and Life Support Systems (ECLSS) outpost survival simulation.
     - Multi-sol balancing of Oxygen, Water, Electrical Power, Food, and Cabin CO₂ for 4 crew members.
     - Controls for MOXIE oxygen generation, Water Recovery System filtration, CO₂ amine scrubbers, thermal heaters, and scientific research.
     - Day/night diurnal power cycle with solar insolation and battery storage dispatch.
     - Advanced mode: Emergency scenarios including solar-dimming dust storms, water recycler valve leaks, and load-shedding protocols.
  5. **Solar Power Engineer** (`src/learning/SolarPowerEngineer.js`):
     - Photovoltaic power generation and sun tracking across diurnal arc.
     - Mathematical implementation of Lambert's Cosine Law (P = P₀ cos θ).
     - Real-time rotating photovoltaic array responding to Tilt (β) and Azimuth (ϕ) controls.
     - Advanced mode: Dual-axis tracking across a Martian sol, atmospheric dust accumulation, electrostatic cleaning pulses (spending battery power), and diurnal battery banking for nocturnal outpost survival.
  6. **Martian Ecosystem** (`src/learning/MartianEcosystem.js`):
     - Closed-loop greenhouse bioregenerative life support and space agronomy.
     - Growth stages: Seedling -> Vegetative Canopy -> Tuber Bulking -> Harvest.
     - Controls for soil moisture irrigation, LED photoperiod (450nm Blue + 660nm Red PAR spectrum), temperature, and nutrients.
     - Advanced mode: Regolith perchlorate toxicity leaching and diagnosing nutrient deficiencies (e.g. leaf chlorosis from nitrogen deficiency).
- **Persistence & Progress**:
  - Scores, stars, and completion records are saved locally via `src/utils/storage.js` (`learning:scores`), updating cumulative score and rank dynamically.
- **Verification**:
  - `npm run check`: Syntax check and import resolution across all 54 modules. **Passes.**
  - `npm test`: Sim tests (37 tests). **Passes.**
  - `npm run smoke`: Headless real WorldScene integration test. **Passes.**
  - `npm run structures`: Colony 3D structure geometry tests. **Passes.**
  - `npm run learning`: 15 headless tests verifying all six games, scoring formulas, difficulties, and data storage. **Passes.**
  - `npm run verify`: All test suites run together and pass 100%.
  - `npm run build`: Production bundle built cleanly with Vite.


## How this was verified
No browser, GPU or network was available when this was written, so Three.js, GSAP and Vite were never installed here.
- `npm run check`: all source files parse and every relative import resolves. **Passes.**
- `npm test`: 15 headless tests of terrain, physics, controller, objectives, interaction and data. **Passes.**
- `npm run smoke`: runs the real `WorldScene` for Moon and Mars against a fake Three.js: builds both worlds, walks, runs, jumps, collects a sample, scans, inspects the rover, completes objectives, saves, and checks the two saves differ. **Passes.** This tests game logic and wiring only.
- **Not verified anywhere:** how anything looks or feels, frame rate, shadows, the sky shader, pointer lock behaviour, GSAP, and the real Three.js API calls. Treat all of the below as "written and logic-tested, not yet seen running".

## Stage 1 (kept, with two small edits)
Menu, world selection, settings, credits, IndexedDB saves are unchanged in behaviour. Edits: (1) the Discovery Database panel now lists real entries; (2) `styles.css` no longer lets the full-screen UI layer capture mouse clicks meant for the 3D canvas (the old `#ui > *` rule outranked `.screen { pointer-events: none }`, which would have blocked clicking planets). `worlds/WorldStubScene.js` is kept but no longer registered.

## Stage 2: worlds (implemented, untested visually)
- Procedural terrain per world from one height function: rolling ground, mountain ring, isolated hills, craters with raised rims (46 Moon, 22 Mars), wind dunes on Mars, flat landing pad, vertex-coloured with a tiling grain/bump texture.
- Instanced rocks (about 1100 Moon, 900 Mars), the larger ones are solid and can be climbed onto.
- Moon: black star sky, Earth and Sun in fixed sky positions, hard directional light with shadows.
- Mars: gradient sky shader, distance haze, warm light, wind-blown dust particles.
- Outpost: two habitat modules and tunnel, tanks (Moon) or shielded dome (Mars), 4-panel solar array, communications dish (aimed at Earth on the Moon), landing pad, environment console, rover.
- Gravity from real values: Moon 1.62 m/s², Mars 3.71 m/s². Both worlds are independently selectable and save separately.

## Stage 3: astronaut gameplay (implemented, untested visually)
- Third-person suited astronaut with walk, run and airborne animation.
- WASD, Shift to run, Space to jump, mouse look (pointer lock, with drag-to-look fallback), wheel zoom, camera kept above terrain. Esc pauses.
- Custom physics: slope limit about 49°, step-up 0.4 m, solid rocks and modules, landing on top of rocks, world bounds. Apex height follows gravity (about 2.1 m Moon, 0.9 m Mars at the current jump speed).
- Interaction: E near a sample, the rover or the console; hold F facing a marked feature to scan it (1.4 s).
- Samples: 6 per world (3 types, 2 each), glowing with a light beam. Scannable features: 2 craters, solar array, dish, habitat, plus dunes on Mars.
- Discoveries: 10 Moon and 12 Mars entries unlock from scans, samples, the console, the rover and your first jump. They appear in the Discovery Database.
- Basic exploration objectives: reach the outpost, inspect the rover, scan 3 features, collect 3 samples, return. Progress, inventory, position and discoveries autosave every 30 s, on every unlock, and on exit.

## Partial or simplified
- Rover is inspectable but not drivable.
- Outpost interiors cannot be entered; modules are solid shells.
- Colliders are circles, so long modules are approximated by several circles.
- Earth is always a full disc and does not show phases. Sun and Earth positions are fixed (no day/night until the Environment Studio).
- Discovery text is written from general knowledge. **Each entry still needs a citation check against NASA sources (Stage 9).** Entries are marked real or real-but-simplified.
- Jump speed, walk and run speeds are gameplay tuning, not suit-accurate.
- Moon and Mars terrain are stylised procedural worlds, not maps of real sites.

## Deviation from the original brief
Rapier is not used. The custom solver is unit-tested and avoids a WASM dependency. See ARCHITECTURE.md.

## Remaining
Stage 4 PIP companion and richer scanning. Stage 5 missions and resource simulation. Stage 6 construction and hazards. Stage 7 Learning Lab and discovery expansion. Stage 8 achievements and Learning Report. Stage 9 NASA content, audio, optimisation, polish. Also: Environment Studio, rover driving, touch controls, gamepad.

## Known risks to check first when you run it
1. Terrain build time and frame rate on a weak laptop (83k-vertex terrain at medium quality; low quality uses fewer vertices and no shadows).
2. Sun shadow coverage follows the player (about 84 m square); look for shimmering.
3. Mars sky and fog colours should match at the horizon.
4. Pointer lock after pressing Esc may need a second click; the game retries once then falls back to drag-to-look.
5. Package versions in `package.json` are unverified against a live install.

## Stage 5: planetary missions and resource simulation (written, NOT run, built or tested)
Nothing from Stage 5 has been executed. `npm run check/test/smoke` were not run and the fake-Three.js smoke test has not been extended for the new code, so it may fail on new Three.js calls.
- **Missions** (`data/missions.js`, `systems/Missions.js`): Moon 5, Mars 8, sequential unlock. Objectives read live game state and latch; rewards apply once.
- **Colony simulation** (`systems/Colony.js`): per-world oxygen, water, food, electricity, battery, construction materials, ice, equipment condition. Solar (dust and storm losses) charges batteries; power is shed by priority (life support, oxygen, water, greenhouse). Shortages damage crew health; zero health triggers an evacuation penalty.
- **Gameplay hooks** (`worlds/colonyProps.js`, `WorldScene.js`): build sites on the pad (E), supply caches and ice deposits to mine (E), depot to store materials, ice loaded into the water processor, sample lab, Earth uplink with signal delay, R to service equipment, Mars ice found by hold-F scan, Mars dust storms from the Storm mission onward.
- **UI** (`ui/colonyUI.js`, `ui/hud.js`): HUD supply strip and warnings; Tab panel with supplies, rates, power, crew, equipment and on/off switches; M for missions.
- **Saves**: `colony` is stored in each world's own save record (stage 5). Stage 3 saves load fine and start with a fresh colony.
- **Simplified**: the sim runs only while playing or in the panel; energy runs at 1 s = 1 simulated minute; no lunar night; storm timing and all rates are tuned for play, not realistic. Numbers have not been balance-tested.

## Stage 6A: basic colony interface (written, logic-tested, NOT seen running)
- **Colony Management overview** with separate Moon and Mars sections. Each shows colony name (Selene Outpost, Ares Base; `colonyName` in `data/worlds.js`), population (crew, health, housing), resources (oxygen, water, food, materials, ice, battery power) and buildings (two base habitat modules plus every buildable module for that world, with state and condition).
- **Where to open it:** main menu button "Colony Management" (both colonies from their saves), or in a world press **C** or use the new **Colonies** tab of the Tab/M panel. In-game, the world you are in is live; the other world shows its last saved state and says so.
- **Files:** new `systems/ColonySummary.js` (pure, read-only) and `ui/colonyOverview.js` (renderer); small edits to `WorldScene.js`, `ui/colonyUI.js`, `ui/hud.js`, `ui/ui.js`, `ui/styles.css`, `data/worlds.js`. No simulation, save format, mission or gameplay logic changed.
- **Display only:** no building, supplying or renaming from this screen yet. A world never visited shows starting supplies and "No landing recorded".
- **Tests:** `npm run check` and `npm test` (17 tests) pass. The Colonies tab is also checked in `npm run smoke`, which passes that step.
- **Pre-existing smoke failure:** `npm run smoke` still fails at the later assertion expecting an "Exploration briefing complete" toast, which Stage 5 removed. It failed the same way before Stage 6A. Also fixed in `scripts/three-stub.mjs` (stub only): `Color.setHex` and numeric material colours, which previously stopped the smoke test before the world finished building.
- **Not verified:** how the screen looks, layout on small screens, and a real `vite build` (Vite is not installed here).

## Stage 6B: Moon outpost construction (written, logic-tested, NOT seen running)
- **What it does:** on the Moon, open the colony panel (Tab, M or C) and choose the new **Construction** tab, or press **B**. Four structures can be built: Lunar Habitat (45 materials, max 3), Solar Power Station (30 materials, max 4), Research Lab (35 materials + 3 kWh battery, max 2) and Storage Unit (20 materials, max 4). The Build button is disabled and the missing cost shown in red until the colony can afford it; a successful build deducts every cost and saves.
- **Reuses existing systems:** costs come out of the colony's existing `res` (construction materials from supply caches and the depot, battery energy). Counts live in `colony.outpost`, saved and loaded with the rest of the colony (old saves load with none built). Completed structures are listed on the Construction tab and in the Colonies overview (Moon section, also reachable from the main menu Colony Management).
- **Files:** new `systems/Construction.js` (pure logic). Small edits to `systems/Colony.js` (state, save, load), `systems/ColonySummary.js`, `worlds/WorldScene.js` (B key, build action, HUD data), `ui/colonyUI.js`, `ui/colonyOverview.js`, `ui/hud.js` (controls text), `ui/styles.css`, README controls line.
- **Not done on purpose:** these structures have **no gameplay effect yet** (they do not add crew, power or storage capacity) and **have no 3D model in the world**; they appear in the interface only. They are separate from the mission-gated modules (Solar array II, Habitat module II). No Mars construction, hazards, PIP or achievements.
- **Tests:** `npm run check` passes; `npm test` passes (23 tests, 6 new for construction). `npm run smoke` runs a new construction check for Moon and Mars through the real `WorldScene`. The smoke test still fails at the old "Exploration briefing complete" assertion (pre-existing, see 6A), which comes after the new checks; with only that line removed, both worlds pass.
- **Not verified:** how the Construction tab looks or feels (no browser was available), small-screen layout, a real `vite build`. Costs and limits are unbalanced guesses.

## Stage 6C: Mars outpost construction (written, logic-tested, NOT seen running)
- **What it does:** on Mars, the same Construction tab (Tab, M or C panel, or **B**) now works. Four structures: Mars Habitat (50 materials, max 3), Solar Power Station (35 materials, max 4), Research Lab (40 materials + 3 kWh battery, max 2) and Water Extraction Unit (30 materials + 2 kWh battery, max 3). Resource check before building, cost deducted only on success, Build button disabled with the missing cost shown in red otherwise, saved on success.
- **Where they show:** completed structures are listed under "Completed buildings" on the Construction tab and in the Mars section of the Colonies overview (also from the main menu Colony Management). They are stored in each world's own `colony.outpost`, so Moon and Mars never mix.
- **How:** `systems/Construction.js` now gives each structure a `worlds` list and an optional `mars` override (name, blurb, cost). Moon costs and the Moon Storage Unit are unchanged; Water Extraction Unit is Mars-only and Storage Unit Moon-only. Small edits: `Colony.js` (load clamps per world), `ColonySummary.js`, controls text in `hud.js`/README. UI files needed no logic change, since they already render whatever `Construction.view` returns.
- **Not done on purpose:** like the Moon structures, these have **no gameplay effect** (the extraction unit does not yet make water) and **no 3D model**. No hazards, no new features. Costs are unbalanced guesses (Mars starts with 40 materials, so the first build needs mining at the supply caches).
- **Tests:** `npm run check` passes; `npm test` passes (27 tests, 4 new for Mars construction). `npm run smoke` now runs the build check on both worlds. It still fails at the old "Exploration briefing complete" assertion (pre-existing since Stage 5, see 6A); with only that line removed, both worlds pass.
- **Not verified:** how it looks (no browser), small-screen layout, a real `vite build`.

## Stage 6F: Mars dust storm hazard (written, logic-tested, NOT seen running)
- **What happens:** on Mars, once you have explored for about 60 s of play and are at least 45 m from the outpost, a dust storm forms. **Warning** (12 s): red-orange banner "DUST STORM WARNING" in the HUD, a toast, light haze. **Storm**: visibility closes in over about 5 s (fog pulled to roughly 2-42 m, sky and fog tinted dust brown, sun dimmed, thicker and faster dust particles, a dusty screen vignette). The HUD banner shows the objective "Reach the outpost safe zone", a direction arrow relative to the camera, the distance, and the seconds left. A green light column and ground ring mark the safe zone and show through the dust. The storm lasts 75-150 s depending on how far away you were (always walkable).
- **Safe zone:** the outpost pad, a 14 m radius circle around (0, -6) that contains the habitats, dome, depot, lab and uplink. Entering it during the warning or the storm gives a green **"MISSION COMPLETE"** banner and toast. The storm then dies away over about 12 s, and the banner confirms "Visibility restored".
- **If you do not make it:** the timer runs out, the storm clears the same way and the banner says you were caught in the open. Nothing is penalised, it is not saved as complete, and it can form again on your next visit.
- **Saved:** completion is stored as `dustStorm: { done }` in the Mars save, so a completed storm does not repeat. Old saves load as not done. The Moon save has no such field.
- **Files:** new `systems/DustStorm.js` (pure state machine), new `worlds/stormBeacon.js`. Small edits: `worlds/sky.js` (`setStorm(level)`, Mars only; adds two shader uniforms), `worlds/WorldBuilder.js` (beacon), `worlds/WorldScene.js` (tick while playing, toasts, HUD data, save), `ui/hud.js` and `ui/styles.css` (banner and vignette), `scripts/test-sim.mjs` (6 new tests), `scripts/smoke.mjs` (Mars storm check through the real scene).
- **Existing systems untouched:** Moon gameplay and the colony simulation are unchanged. The storm does not affect the colony, which already has its own solar-loss storm (Stage 5, after the Storm mission). The hazard waits while that colony storm is forecast or active, but a colony storm can begin while the hazard is running, so both toasts can appear.
- **Tests:** `npm run check` passes; `npm test` passes (33 tests, 6 new). `npm run smoke` still fails at the old "Exploration briefing complete" assertion (pre-existing since Stage 5, see 6A); with only that line removed, Moon and Mars both pass, including the new Mars storm check.
- **Not verified:** how it looks (no browser or GPU): fog distances, colours, vignette strength and the beacon's visibility are tuned by reasoning only. Real Three.js calls used (`Color.setRGB`, `Fog.near/far`, shader uniforms) match the API but were only run against the fake. Timings are guesses.

## Stage 6G: final integration and save system (written, logic-tested, NOT seen running)
- **Inspection result:** the existing save system (`utils/storage.js`, one `save:<world>` record per world, written by `WorldScene.saveNow`) already stored the colony (resources, built modules, `outpost` structure counts, mission progress, colony storm) and the Mars `dustStorm.done` flag, and `saves.write` already merges into the old record. Nothing was duplicated or replaced. Moon and Mars construction already spent the same `colony.res` as the build sites, so no new wiring between them was needed.
- **Added, small:**
  1. **Reset:** `saves.resetColony(id)` (in the existing `saves` object) removes only that world's `colony` and `dustStorm` fields. Position, inventory, discoveries, exploration and the other world's save are kept. UI: main menu, **Colony Management**, a **Reset colony progress** button on each colony that has a save (click twice to confirm, the first click arms it for 5 s). Reset is menu-only on purpose, so the live world never has to be torn down mid-play: leave a world (Esc, Main menu), then reset. A reset Mars colony can have its dust storm again.
  2. **Save on hide/close:** `WorldScene` now also saves on `visibilitychange` (hidden) and `pagehide`, so a reload or closed tab keeps the latest resources and buildings instead of losing up to 30 s since the last autosave. Listeners are removed on exit.
  3. **World guard:** `Colony.loadColony` ignores a saved colony whose `world` field names the other world. Records without a `world` field (older saves) still load.
- **What persists across a reload (checked through the real scene in the smoke test):** resources and carried items, built build-site modules (their 3D models and colliders reappear), constructed structures (the Completed buildings list and both colony overviews), mission progress, colony storm state, Mars dust storm completion. A dust storm that is only in progress is not saved by design (it restarts as not done, as in 6F).
- **Not changed:** Construction structures (Lunar/Mars Habitat, Solar Power Station, Research Lab, Storage Unit, Water Extraction Unit) still have **no 3D model and no gameplay effect**, exactly as documented in 6B and 6C. They are visible in the Construction tab and the Colonies overview, and that persists. The build-site modules from Stage 5 do have models.
- **Tests:** `npm run check` passes; `npm test` passes (37 tests, 4 new); `npm run smoke` passes for Moon and Mars. The smoke test gained a reload check (fresh scene from the saved record), a save-on-hide check and a reset check. Its old "Exploration briefing complete" assertion (stale since Stage 5, see 6A) was replaced by a check for an objective or mission completion toast, so `npm run verify` is green end to end.
- **Not verified:** everything runs against the localStorage fallback and the fake Three.js, so the real IndexedDB path, the browser's behaviour while a page unloads (an IndexedDB write started during unload is not guaranteed to finish), how the reset button looks, and a real `vite build` have not been tried.

## Stage 6H: 3D colony structures (written, checked against real Three.js in Node, NOT seen in a browser)
- **Cause of the missing buildings:** structures bought on the Construction tab (Habitat, Solar Power Station, Research Lab, Storage Unit, Water Extraction Unit) were only counters in `colony.outpost`; no code ever created a mesh for them (6B, 6C and 6G say so under "no 3D model"). There was also no greenhouse, storage or extraction building in the world unless a Stage 5 build site had been built. The existing outpost (two habitat tubes, array, dish, rover) was not touched.
- **What it does now:** `worlds/colonyStructures.js` (new) puts a **starter outpost** in the world from the first frame: Greenhouse, Habitat, Solar Power Station, Research Lab and Storage Unit (Moon) or Water Extraction Unit (Mars). Every structure the colony constructs adds one more 3D unit (Habitat up to 3 more, Power 4, Lab 2, Storage 4 or Extraction 3), which rises out of its plinth, becomes solid and is saved/reloaded with the colony (it reads `colony.outpost`, so nothing new is saved). The greenhouse shows full crops and glowing grow lights while the Stage 5 greenhouse module is built, powered on and working, and seedlings with dim lights otherwise.
- **Moon vs Mars:** Moon = white hulls, blue trim, horizontal Lunar Habitat tube on saddles, observatory-dome lab, cargo-container storage, cool-white grow lights and green crops. Mars = sand hulls, orange trim, dome sunk into a regolith berm, drill-rig lab, wider dust-toned panel banks, derrick and ice-melt tank for water extraction, rosy dome glass, pink grow lights and olive/amber crops over rust-red soil.
- **Placement:** fixed slots on the flat landing pad (terrain is exactly 0 within `PAD_R`), clear of the outpost, build sites, landing pad, spawn and the walking lane, nearest ones flanking the approach from the spawn. Each unit sits on a plinth that reaches below the ground and is checked to be inside its footprint.
- **Camera:** `ThirdPersonCamera` takes an optional collider lookup (`physics.near`) and keeps the camera outside buildings and large rocks unless it is above them. Without it the camera ended up inside the greenhouse when orbiting at its wall.
- **Files:** new `worlds/colonyStructures.js`, `scripts/verify-structures.mjs`. Small edits: `worlds/WorldBuilder.js` (creates, adds and collides the structures), `worlds/WorldScene.js` (sync with colony data, pop-in update, camera lookup), `camera/ThirdPersonCamera.js`, `scripts/three-stub.mjs` (Cone and Torus geometry), `scripts/smoke.mjs` (starter outpost present, a constructed structure appears), `package.json` (`npm run structures`, added to `verify`).
- **Checked:** `npm run verify` passes, including the new `npm run structures`, which runs against the real `three` package (needs `npm install`): 5 starters with an empty colony, all slots filled when fully built (18 Moon, 17 Mars), nothing below its plinth or outside its footprint, no overlap with each other or the existing outpost, sites, pad, spawn or lane, at least 3 buildings inside the spawn camera view at 4:3 and 4 at 16:9, camera never inside a building, construction adds a unit and a collider and moves the astronaut clear, crops follow the greenhouse module. A real `vite build` succeeds.
- **Not verified:** how it looks, colours, frame rate and shadows on real hardware (no browser or GPU was available). The transparent dome relies on normal alpha blending. Buildings are solid shells with no interiors, and the new structures still have no gameplay effect (as in 6B/6C).
- **Simplified:** slot positions are fixed, so units appear in a set order rather than where you choose. Structure counts never fall during play (only a menu reset, which rebuilds the world), so units are never removed mid-session.
