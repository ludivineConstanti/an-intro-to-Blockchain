import * as THREE from 'three';
import nx from 'src/threeJsAnimation/environmentMap/nx.png';
import ny from 'src/threeJsAnimation/environmentMap/ny.png';
import nz from 'src/threeJsAnimation/environmentMap/nz.png';
import px from 'src/threeJsAnimation/environmentMap/px.png';
import py from 'src/threeJsAnimation/environmentMap/py.png';
import pz from 'src/threeJsAnimation/environmentMap/pz.png';

import {
  unstable_LowPriority,
  unstable_scheduleCallback,
} from 'scheduler';

let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

let container;
let scene; let renderer;
let activeHelper;
let cameraPerspective;
let cameraPerspectiveHelper;
let bubble;
let texture;
let mousePos;

function createScene() {
  container = document.querySelector('.app__threeJs');

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  container.appendChild(renderer.domElement);
  renderer.autoClear = false;

  cameraPerspective = new THREE.PerspectiveCamera(
    50, // field of view
    aspect, // aspect ration (width / height)
    200, // nearPlane
    1500, // farPlane
  );

  cameraPerspectiveHelper = new THREE.CameraHelper(cameraPerspective);
  scene.add(cameraPerspectiveHelper);

  activeHelper = cameraPerspectiveHelper;

  // counteract different front orientation of cameras vs rig
  cameraPerspective.rotation.y = Math.PI;
}

function Bubble() {
  this.target = new THREE.Object3D();
  this.group = new THREE.Object3D();

  const cubeGeom = new THREE.BoxGeometry(150, 150, 150);

  const mat = new THREE.MeshStandardMaterial({
    transparent: true,
    envMap: texture,
    opacity: 0.2,
    roughness: 0,
    metalness: 0.2,
    // set the color of the shine (dark grey, by default)
    specular: 0xfff,
    // allow inside and outside plane of the geometry to be visible
    side: THREE.DoubleSide,
    shading: THREE.FlatShading,
  });

  // To create an object in Three.js, we have to create a mesh
  // which is a combination of a geometry and some material
  this.cube = new THREE.Mesh(cubeGeom, mat);
  this.group.add(this.cube);

  const sphereGeom = new THREE.IcosahedronBufferGeometry(280, 7);

  const matInside = new THREE.MeshStandardMaterial({
    // color: Colors.blue,
    transparent: true,
    envMap: texture,
    // metalnessMap: textureOpacity,
    opacity: 0.2,
    roughness: 0,
    metalness: 0.2,
    // mat.alphaMap : textureOpacity,
    // set the color of the shine (dark grey, by default)
    specular: 0xffffff,
    // allow inside and outside plane of the geometry to be visible
    // side: THREE.DoubleSide
    side: THREE.FrontSide,
    // shading:THREE.FlatShading,
  });

  const matS = new THREE.MeshStandardMaterial({
    // color: Colors.blue,
    transparent: true,
    envMap: texture,
    // metalnessMap: textureOpacity,
    opacity: 0.1,
    roughness: 0,
    metalness: 0.2,
    // mat.alphaMap : textureOpacity,
    // set the color of the shine (dark grey, by default)
    specular: 0xffffff,
    // allow inside and outside plane of the geometry to be visible
    // side: THREE.DoubleSide
    side: THREE.BackSide,
    // shading:THREE.FlatShading,
  });

  this.sphereInside = new THREE.Mesh(sphereGeom, matS);
  this.group.add(this.sphereInside);

  this.sphereOutside = new THREE.Mesh(sphereGeom, matInside);
  this.group.add(this.sphereOutside);

  this.group.position.x = -100;

  this.target.add(this.group);
  scene.add(this.mesh);
}

function createBubble() {
  bubble = new Bubble();
  scene.add(bubble.target);
}

function handleMouseMove(event) {
  // here we are converting the mouse position value received
  // to a normalized value varying between -1 and 1;
  // this is the formula for the horizontal axis:

  const tx = -1 + (event.clientX / SCREEN_WIDTH) * 2;

  // for the vertical axis, we need to inverse the formula
  // because the 2D y-axis goes the opposite direction of the 3D y-axis

  const ty = 1 - (event.clientY / SCREEN_HEIGHT) * 2;
  mousePos = { x: tx, y: ty };
}

function init() {
  unstable_scheduleCallback(unstable_LowPriority, () => {
    createScene();
    const loader = new THREE.CubeTextureLoader();
    texture = loader.load([px, ny, nx, nz, pz, py]);
    createBubble();
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', handleMouseMove, false);
  });
}

function onWindowResize() {
  unstable_scheduleCallback(unstable_LowPriority, () => {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

    cameraPerspective.aspect = aspect;
    cameraPerspective.updateProjectionMatrix();
  });
}

function animate() {
  unstable_scheduleCallback(unstable_LowPriority, () => {
    requestAnimationFrame(animate);
    render();
  });
}

function normalize(v, vmin, vmax, tmin, tmax) {
  const nv = Math.max(Math.min(v, vmax), vmin);
  const dv = vmax - vmin;
  const pc = (nv - vmin) / dv;
  const dt = tmax - tmin;
  const tv = tmin + (pc * dt);
  return tv;
}

function render() {
  const r = Date.now() * 0.0001;

  bubble.target.position.set(700 * Math.cos(r), 700 * Math.sin(r), 700 * Math.sin(r));

  bubble.target.rotation.x -= 0.001 * Math.cos(r);
  bubble.target.rotation.z -= 0.001 * Math.sin(r);
  bubble.target.rotation.y -= 0.001 * Math.sin(r);

  /* const targetX = normalize(mousePos.x, -1, 1, -100, 100);
  const targetY = normalize(mousePos.y, -1, 1, 25, 175);

  bubble.cube.position.y = targetY;
  bubble.cube.position.x = targetX;
  bubble.sphereOutside.position.x = targetX;
  bubble.sphereInside.position.x = targetX;
  bubble.sphereOutside.position.y = targetY;
  bubble.sphereInside.position.y = targetY; */

  cameraPerspective.lookAt(bubble.target.position);

  console.log('running');

  renderer.clear();

  activeHelper.visible = false;

  renderer.setViewport(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  renderer.render(scene, cameraPerspective);

  activeHelper.visible = true;
}

export { init, animate };
