// Minimal fake of the parts of Three.js the game touches. Lets the smoke test execute game logic without a GPU.
// It does NOT render anything and says nothing about visual correctness.
export const AdditiveBlending = 2, BackSide = 1, DoubleSide = 2, PCFSoftShadowMap = 2, RepeatWrapping = 1000, SRGBColorSpace = 'srgb';
export class Vector3 {
  constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; }
  set(x, y, z) { this.x = x; this.y = y; this.z = z; return this; } setScalar(s) { return this.set(s, s, s); }
  copy(v) { return this.set(v.x, v.y, v.z); } clone() { return new Vector3(this.x, this.y, this.z); }
  add(v) { this.x += v.x; this.y += v.y; this.z += v.z; return this; } multiplyScalar(s) { this.x *= s; this.y *= s; this.z *= s; return this; }
  length() { return Math.hypot(this.x, this.y, this.z); } normalize() { return this.multiplyScalar(1 / (this.length() || 1)); }
  lerp(v, t) { this.x += (v.x - this.x) * t; this.y += (v.y - this.y) * t; this.z += (v.z - this.z) * t; return this; }
  applyAxisAngle(a, ang) { const c = Math.cos(ang), s = Math.sin(ang), d = a.x * this.x + a.y * this.y + a.z * this.z, cx = a.y * this.z - a.z * this.y, cy = a.z * this.x - a.x * this.z, cz = a.x * this.y - a.y * this.x; return this.set(this.x * c + cx * s + a.x * d * (1 - c), this.y * c + cy * s + a.y * d * (1 - c), this.z * c + cz * s + a.z * d * (1 - c)); }
}
export class Vector2 { constructor(x = 0, y = 0) { this.x = x; this.y = y; } set(x, y) { this.x = x; this.y = y; return this; } }
export class Quaternion { x = 0; y = 0; z = 0; w = 1; copy() { return this; } setFromUnitVectors() { return this; } setFromEuler() { return this; } }
export class Euler { x = 0; y = 0; z = 0; set(x, y, z) { this.x = x; this.y = y; this.z = z; return this; } }
export class Matrix4 { compose() { return this; } }
export class Color { constructor(c) { this.c = c; } set() { return this; } setRGB() { return this; } setHex() { return this; } }
export class Fog { constructor(c, n, f) { this.color = c; this.near = n; this.far = f; } }
export class Clock { getDelta() { return 0.016; } elapsedTime = 0; }
export class Raycaster { setFromCamera() {} intersectObjects() { return []; } }
export class Object3D {
  constructor() { this.position = new Vector3(); this.rotation = new Euler(); this.scale = new Vector3(1, 1, 1); this.quaternion = new Quaternion(); this.children = []; this.visible = true; this.parent = null; }
  add(...o) { for (const c of o) { if (!c || !c.position) throw new Error('add() of non-Object3D'); c.parent = this; this.children.push(c); } return this; }
  remove(o) { this.children = this.children.filter(c => c !== o); } traverse(fn) { fn(this); this.children.forEach(c => c.traverse(fn)); }
  lookAt() {} updateMatrixWorld() {} getWorldDirection(v) { return v.set(0, 0, -1); }
}
export class Group extends Object3D {}
export class Scene extends Object3D { background = null; fog = null; }
export class PerspectiveCamera extends Object3D { constructor(f, a) { super(); this.aspect = a; } updateProjectionMatrix() {} }
class Attr { constructor(array, itemSize = 3) { this.array = array; this.itemSize = itemSize; this.count = array.length / itemSize; }
  getX(i) { return this.array[i * 3]; } getY(i) { return this.array[i * 3 + 1]; } getZ(i) { return this.array[i * 3 + 2]; }
  setY(i, v) { this.array[i * 3 + 1] = v; } setXYZ(i, x, y, z) { this.array.set([x, y, z], i * 3); } }
export class Float32BufferAttribute extends Attr { constructor(a, s) { super(a instanceof Float32Array ? a : new Float32Array(a), s); } }
export class BufferGeometry { attributes = {}; setAttribute(n, a) { this.attributes[n] = a; } rotateX() { return this; } computeVertexNormals() {} dispose() {} }
class Shape extends BufferGeometry { constructor() { super(); const a = new Float32Array(90); for (let i = 0; i < 90; i++) a[i] = ((i * 37) % 11) / 10 - 0.5; this.attributes.position = new Attr(a); } }
export class PlaneGeometry extends BufferGeometry {
  constructor(w, h, sx, sy) { super(); const n = (sx + 1) * (sy + 1), a = new Float32Array(n * 3), nn = new Float32Array(n * 3);
    for (let j = 0, k = 0; j <= sy; j++) for (let i = 0; i <= sx; i++, k++) { a[k * 3] = -w / 2 + w * i / sx; a[k * 3 + 2] = -h / 2 + h * j / sy; nn[k * 3 + 1] = 1; }
    this.attributes.position = new Attr(a); this.attributes.normal = new Attr(nn); }
}
export const BoxGeometry = class extends Shape {}, CylinderGeometry = class extends Shape {}, SphereGeometry = class extends Shape {}, CircleGeometry = class extends Shape {}, RingGeometry = class extends Shape {}, IcosahedronGeometry = class extends Shape {}, DodecahedronGeometry = class extends Shape {}, OctahedronGeometry = class extends Shape {}, ConeGeometry = class extends Shape {}, TorusGeometry = class extends Shape {};
class Mat { constructor(p = {}) { Object.assign(this, p); if (typeof this.color === "number") this.color = new Color(this.color); } dispose() {} }
export const MeshStandardMaterial = class extends Mat {}, MeshBasicMaterial = class extends Mat {}, PointsMaterial = class extends Mat {}, ShaderMaterial = class extends Mat {};
export class Mesh extends Object3D { constructor(g, m) { super(); this.geometry = g; this.material = m; this.castShadow = false; this.receiveShadow = false; this.isMesh = true; } }
export class InstancedMesh extends Mesh { constructor(g, m, n) { super(g, m); this.count = n; } setMatrixAt() {} setColorAt() {} }
export class Points extends Mesh {}
class Light extends Object3D { constructor() { super(); this.target = new Object3D(); this.shadow = { mapSize: { set() {} }, camera: { updateProjectionMatrix() {} }, bias: 0, normalBias: 0 }; } }
export const DirectionalLight = class extends Light {}, HemisphereLight = class extends Light {}, AmbientLight = class extends Light {};
export class CanvasTexture { constructor(c) { this.image = c; this.repeat = { set() {} }; } dispose() {} }
export class WebGLRenderer {}
