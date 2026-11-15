import { App } from './core/App.js';
import { MenuScene } from './scenes/MenuScene.js';
import { WorldSelectScene } from './scenes/WorldSelectScene.js';
import { WorldScene } from './worlds/WorldScene.js';
import { LearningLabScene } from './learning/LearningLabScene.js';
import { showMenu, showSelect } from './ui/ui.js';
import { showWorldHud } from './ui/hud.js';
import { showLearningLab } from './learning/LearningLabUI.js';

const app = new App();
await app.init(document.getElementById('gl'));
app.register('menu', new MenuScene());
app.register('select', new WorldSelectScene(app, id => app.goTo('world', { world: id })));
app.register('lab', new LearningLabScene());
const worldScene = new WorldScene(app);
app.register('world', worldScene);

let off = null;
app.bus.on('scene', ({ name, params }) => {
  off?.(); off = null;
  if (name === 'menu') showMenu(app);
  if (name === 'select') off = showSelect(app);
  if (name === 'lab') off = showLearningLab(app);
  if (name === 'world') off = showWorldHud(app, worldScene);
});
app.goTo('menu');
