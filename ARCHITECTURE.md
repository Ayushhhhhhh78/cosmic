# COSMIX architecture

## Principles
- One `App` owns the renderer, loop, settings and scene registry. Scenes implement `{ scene, camera, enter, exit, update, resize }`.
- Worlds are data plus a module: `data/worlds.js` entry + `src/worlds/<id>/`. Moon and Mars share systems, never state.
- Systems (resources, missions, hazards) are plain classes constructed per world with their own save slice. They talk through `EventBus`, not imports of each other.
- UI is DOM over a canvas. No framework. Every control is wired in the same commit it appears.
- All persistence is local: IndexedDB with localStorage fallback. Keys: `save:moon`, `save:mars`, `settings`.
- Offline first: no CDN assets; textures, audio and models are generated or bundled.

## Layout
```
src/
  core/        App, EventBus, input, game loop, quality tiers
  scenes/      Menu, WorldSelect, shared scene helpers
  worlds/      moon/, mars/ (terrain, outpost, sky, hazards config); WorldStubScene (Stage 1 only)
  player/      astronaut controller, animation          (Stage 3)
  camera/      third-person rig, cinematic shots         (Stage 3, 9)
  physics/     Rapier world, colliders, gravity          (Stage 3)
  systems/     resources, power, water, oxygen, farming  (Stage 5)
  missions/    mission definitions, objectives, rewards  (Stage 5)
  companion/   PIP behaviour, eyes, dialogue             (Stage 4)
  construction/ build catalogue, placement, upgrades     (Stage 6)
  learning/    six activities, quizzes, report           (Stage 7, 8)
  ui/          HUD, menus, panels, styles
  data/        worlds, discoveries, mission text, sources
  audio/       WebAudio synth + mixer                    (Stage 9)
  utils/       storage, procedural textures, noise
```

## Key decisions
- **Physics**: Rapier (WASM) loads only when a world starts, so menus stay light. Gravity comes from `WORLDS[id].gravity`.
- **Terrain**: seeded heightfield per world, chunked, shared with the Rapier heightfield collider.
- **Quality tiers**: low/medium/high set pixel ratio now; later also shadow size, particle counts, view distance.
- **Save schema v1**: `{ world, version, createdAt, updatedAt, mission, discoveries, ... }`; later stages add resources, buildings, inventory, achievements, learning with a migration hook keyed on `version`.
- **Science integrity**: `data/sources.js` (Stage 9) lists every fact with a source and a `real | simplified` flag.

## Stages
1 Foundation, menu, world select (this delivery). 2 Moon and Mars environments. 3 Astronaut, camera, Rapier. 4 PIP and scanning. 5 Missions and resources. 6 Construction and hazards. 7 Learning Lab and discoveries. 8 Saves, achievements, report. 9 NASA content, audio, optimisation, polish.

## Stage 2 and 3 additions
- `worlds/heightfield.js` is the single source of terrain truth (pure function, no Three.js). `terrain.js` meshes it, `props.js` scatters rocks and samples on it, `Physics` collides against it. Changing a world's look means editing one config.
- `physics/Physics.js` is a custom kinematic solver (heightfield ground, slope limit, step-up, static circle colliders on a spatial grid, landing on rocks). **This replaces Rapier for now.** Rapier could not be installed or tested in the build environment, and a capsule on a heightfield with static obstacles does not need a rigid-body engine. Rapier stays on the table for Stage 6 if dynamic bodies are needed.
- `worlds/WorldBuilder.js` assembles a world; `worlds/WorldScene.js` runs it (input, player, camera, interaction, objectives, autosave). `ui/hud.js` renders state it emits on the event bus.
- `systems/Interaction.js` (E interact, hold F scan) and `systems/Objectives.js` (basic exploration goals) are pure and unit-tested. Stage 5 builds the real mission system on top.
- Stage 6H: `worlds/colonyStructures.js` renders constructed structures (`colony.outpost` counts) and the starter outpost; `WorldScene` calls its `sync` whenever colony data changes. `npm run structures` checks geometry against real Three.js.
- Verification scripts: `npm run check` (syntax and imports), `npm test` (terrain, physics, objectives, data), `npm run smoke` (runs the real WorldScene headlessly against a fake Three.js), `npm run verify` (all three).
