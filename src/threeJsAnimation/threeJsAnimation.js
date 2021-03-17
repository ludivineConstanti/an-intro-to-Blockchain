import * as THREE from 'three';
import nx from 'src/threeJsAnimation/environmentMap/nx.png';
import ny from 'src/threeJsAnimation/environmentMap/ny.png';
import nz from 'src/threeJsAnimation/environmentMap/nz.png';
import px from 'src/threeJsAnimation/environmentMap/px.png';
import py from 'src/threeJsAnimation/environmentMap/py.png';
import pz from 'src/threeJsAnimation/environmentMap/pz.png';

import {
  // eslint-disable-next-line camelcase
  unstable_LowPriority,
  // eslint-disable-next-line camelcase
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
    transparent: true,
    envMap: texture,
    opacity: 0.2,
    roughness: 0,
    metalness: 0.2,
    // set the color of the shine (dark grey, by default)
    specular: 0xffffff,
    side: THREE.FrontSide,
  });

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

function init() {
  unstable_scheduleCallback(unstable_LowPriority, () => {
    createScene();
    const loader = new THREE.CubeTextureLoader();
    texture = loader.load([px, ny, nx, nz, pz, py]);
    createBubble();
    window.addEventListener('resize', onWindowResize, false);
  });
}

function render() {
  const r = Date.now() * 0.0001;

  bubble.target.position.set(700 * Math.cos(r), 700 * Math.sin(r), 700 * Math.sin(r));

  bubble.target.rotation.x -= 0.001 * Math.cos(r);
  bubble.target.rotation.z -= 0.001 * Math.sin(r);
  bubble.target.rotation.y -= 0.001 * Math.sin(r);

  cameraPerspective.lookAt(bubble.target.position);

  renderer.clear();

  activeHelper.visible = false;

  renderer.setViewport(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  renderer.render(scene, cameraPerspective);

  activeHelper.visible = true;
}

function animate() {
  unstable_scheduleCallback(unstable_LowPriority, () => {
    requestAnimationFrame(animate);
    render();
  });
}

export { init, animate };
