import { BufferGeometry, Float32BufferAttribute, Points, PointsMaterial, Mesh, SphereGeometry, MeshStandardMaterial, ShaderMaterial, BackSide, AdditiveBlending, Color } from 'three';
import { planetTexture } from '../utils/proceduralTextures.js';

export function starfield(count = 1800, radius = 120) {
  const p = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u), r = radius * (0.7 + Math.random() * 0.3);
    p.set([r * s * Math.cos(a), r * u, r * s * Math.sin(a)], i * 3);
  }
  const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(p, 3));
  return new Points(g, new PointsMaterial({ color: 0xdfe8ff, size: 0.35, sizeAttenuation: true, transparent: true, opacity: 0.85, depthWrite: false }));
}
export function planet(kind, radius, hazeColor) {
  const mesh = new Mesh(new SphereGeometry(radius, 64, 48), new MeshStandardMaterial({ map: planetTexture(kind), roughness: 1, metalness: 0 }));
  if (hazeColor) {
    mesh.add(new Mesh(new SphereGeometry(radius * 1.08, 48, 32), new ShaderMaterial({
      uniforms: { c: { value: new Color(hazeColor) } }, side: BackSide, transparent: true, blending: AdditiveBlending, depthWrite: false,
      vertexShader: 'varying vec3 n; void main(){ n = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: 'uniform vec3 c; varying vec3 n; void main(){ float i = pow(0.62 - dot(n, vec3(0.,0.,1.)), 3.0); gl_FragColor = vec4(c, 1.) * clamp(i, 0., 1.); }',
    })));
  }
  return mesh;
}
