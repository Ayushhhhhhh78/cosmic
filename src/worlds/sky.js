import { Vector3, Color, Fog, Group, Mesh, SphereGeometry, ShaderMaterial, BackSide, MeshBasicMaterial, DirectionalLight, HemisphereLight, Points, BufferGeometry, Float32BufferAttribute, PointsMaterial, CanvasTexture, SRGBColorSpace, AdditiveBlending } from 'three';
import { starfield } from '../scenes/common.js';
import { rng } from '../utils/noise.js';

export const EARTH_DIR = new Vector3(0.55, 0.42, -0.72).normalize(); // Earth's fixed patch of the lunar sky (simplified)
const SUN = { moon: new Vector3(-0.6, 0.36, 0.7).normalize(), mars: new Vector3(-0.5, 0.5, 0.7).normalize() };
const MAP = { low: 0, medium: 2048, high: 3072 };

function earthTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 128; const g = c.getContext('2d'), r = rng(6);
  g.fillStyle = '#2a5fb4'; g.fillRect(0, 0, 256, 128);
  for (let i = 0; i < 26; i++) { g.fillStyle = r() < 0.5 ? '#4f8a4a' : '#8a7a4a'; g.beginPath(); g.ellipse(r() * 256, 20 + r() * 88, 8 + r() * 24, 5 + r() * 12, r() * 3, 0, 6.283); g.fill(); }
  for (let i = 0; i < 40; i++) { g.fillStyle = 'rgba(255,255,255,.5)'; g.beginPath(); g.ellipse(r() * 256, r() * 128, 10 + r() * 24, 3 + r() * 6, r() * 3, 0, 6.283); g.fill(); }
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
}

export function createSky(world, scene, quality = 'medium') {
  const objs = [], add = o => { scene.add(o); objs.push(o); return o; }, dir = SUN[world];
  const sun = add(new DirectionalLight(world === 'moon' ? 0xffffff : 0xffe2c4, world === 'moon' ? 3.2 : 2.4));
  add(sun.target);
  if (MAP[quality]) {
    sun.castShadow = true; sun.shadow.mapSize.set(MAP[quality], MAP[quality]);
    Object.assign(sun.shadow.camera, { left: -42, right: 42, top: 42, bottom: -42, near: 1, far: 320 });
    sun.shadow.camera.updateProjectionMatrix(); sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.05;
  }
  const followers = [], dust = []; let storm = null; // storm = Mars-only handles for setStorm()
  if (world === 'moon') {
    scene.background = new Color(0x000000); scene.fog = null;
    add(new HemisphereLight(0x202838, 0x0a0a0c, 0.35));
    const stars = add(starfield(quality === 'low' ? 1400 : 2800, 450)); stars.material.fog = false; followers.push([stars, new Vector3()]);
    const earth = add(new Mesh(new SphereGeometry(12, 32, 24), new MeshBasicMaterial({ map: earthTexture(), fog: false })));
    followers.push([earth, EARTH_DIR.clone().multiplyScalar(420)]);
    const disc = add(new Mesh(new SphereGeometry(4, 16, 12), new MeshBasicMaterial({ color: 0xffffff, fog: false })));
    followers.push([disc, dir.clone().multiplyScalar(420)]);
  } else {
    const horizon = new Color().setRGB(0.78, 0.52, 0.36, SRGBColorSpace);
    scene.background = horizon; scene.fog = new Fog(horizon, 25, 420);
    add(new HemisphereLight(0xd6a07a, 0x6a3a28, 0.95));
    const dome = add(new Mesh(new SphereGeometry(900, 32, 16), new ShaderMaterial({
      side: BackSide, depthWrite: false, fog: false, uniforms: { uSun: { value: dir }, uDust: { value: 0 }, uDustC: { value: new Vector3(0.58, 0.38, 0.26) } },
      vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: 'uniform vec3 uSun; uniform float uDust; uniform vec3 uDustC; varying vec3 vDir; void main(){ float h = clamp(vDir.y,0.,1.); vec3 c = mix(vec3(.78,.52,.36), vec3(.40,.29,.29), pow(h,.55)); float s = max(dot(normalize(vDir),uSun),0.); c += vec3(1.,.8,.55)*(pow(s,48.)*.55 + pow(s,6.)*.12); c = mix(c, uDustC, uDust); gl_FragColor = vec4(c,1.); }',
    })));
    dome.renderOrder = -10; followers.push([dome, new Vector3()]);
    const n = quality === 'low' ? 250 : 600, a = new Float32Array(n * 3), r = rng(9);
    for (let i = 0; i < n * 3; i++) a[i] = (r() - 0.5) * 50;
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(a, 3));
    const pts = add(new Points(g, new PointsMaterial({ color: 0xd99a6c, size: 0.13, transparent: true, opacity: 0.55, depthWrite: false, blending: AdditiveBlending })));
    pts.frustumCulled = false; dust.push(pts);
    storm = { dome, pts, level: -1, sunBase: sun.intensity };
  }
  return {
    sun, dir,
    // Stage 6F: 0 = clear Mars air, 1 = full dust storm. Pulls fog in, tints sky and fog to dust, dims the sun, thickens the dust particles. No-op on the Moon.
    setStorm(k) {
      if (!storm || Math.abs(k - storm.level) < 0.002) return; storm.level = k;
      const L = (a, b) => a + (b - a) * k, r = L(0.78, 0.58), g = L(0.52, 0.38), b = L(0.36, 0.26);
      scene.background.setRGB(r, g, b, SRGBColorSpace); scene.fog.color.setRGB(r, g, b, SRGBColorSpace); scene.fog.near = L(25, 2); scene.fog.far = L(420, 42);
      storm.dome.material.uniforms.uDustC.value.set(r, g, b); storm.dome.material.uniforms.uDust.value = k;
      sun.intensity = storm.sunBase * (1 - 0.55 * k); storm.pts.material.opacity = 0.55 + 0.35 * k; storm.pts.material.size = 0.13 + 0.12 * k;
    },
    update(dt, camPos, player) {
      for (const [o, off] of followers) o.position.copy(camPos).add(off);
      sun.position.set(player.x + dir.x * 120, player.y + dir.y * 120, player.z + dir.z * 120); sun.target.position.set(player.x, player.y, player.z);
      const wind = 1 + 4 * Math.max(0, storm?.level ?? 0); // storm winds drive the dust five times faster
      for (const p of dust) { // wind-blown dust drifts through a 50 m box that follows the player
        p.position.set(player.x, player.y + 8, player.z); const a = p.geometry.attributes.position.array;
        for (let i = 0; i < a.length; i += 3) {
          a[i] += 3 * wind * dt; a[i + 1] += 0.15 * dt; a[i + 2] += 1.2 * wind * dt;
          for (let k = 0; k < 3; k++) if (a[i + k] > 25) a[i + k] -= 50;
        }
        p.geometry.attributes.position.needsUpdate = true;
      }
    },
    dispose() { objs.forEach(o => { scene.remove(o); o.geometry?.dispose?.(); o.material?.dispose?.(); o.material?.map?.dispose?.(); }); scene.fog = null; },
  };
}
