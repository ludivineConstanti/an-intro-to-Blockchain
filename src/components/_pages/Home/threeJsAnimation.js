import * as THREE from 'three';

let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

let container;
let camera; let scene; let
  renderer;
let activeCamera; let
  activeHelper;
let cameraPerspective;
let cameraPerspectiveHelper;
let cube; let
  sphere;
let texture; let textureOpacity;

function createScene() {
  container = document.querySelector('.home__threeJs');

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  container.appendChild(renderer.domElement);
  renderer.autoClear = false;

  camera = new THREE.PerspectiveCamera(50, aspect, 1, 10000);
  camera.position.z = 2500;

  cameraPerspective = new THREE.PerspectiveCamera(
    50,
    aspect,
    200,
    1500,
  );

  cameraPerspectiveHelper = new THREE.CameraHelper(cameraPerspective);
  scene.add(cameraPerspectiveHelper);

  activeCamera = cameraPerspective;
  activeHelper = cameraPerspectiveHelper;

  // counteract different front orientation of cameras vs rig
  cameraPerspective.rotation.y = Math.PI;
}

function init() {
  createScene();

  //

  const loader = new THREE.CubeTextureLoader();

  texture = loader.load([
    'https://i.imgur.com/IXMxN7H.png', // px 1 => 1
    'https://i.imgur.com/1mWI1fY.png', // ny 4 => 2
    'https://i.imgur.com/C8PrCUi.png', // nx 2 => 3
    'https://i.imgur.com/K6UhDSg.png', // nz 6 => 4
    'https://i.imgur.com/5WQYlHJ.png', // pz 5 => 5
    'https://i.imgur.com/6368FV9.png', // py 3 => 6
  ]);

  const loaderOpacity = new THREE.CubeTextureLoader();

  textureOpacity = loaderOpacity.load([
    'https://i.imgur.com/zNuech5.png',
  ]);

  createCube();
  createSphere();

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  SCREEN_WIDTH = window.innerWidth;
  SCREEN_HEIGHT = window.innerHeight;
  aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

  // camera.aspect = aspect;
  // camera.updateProjectionMatrix();

  cameraPerspective.aspect = aspect;
  cameraPerspective.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  const r = Date.now() * 0.0001;

  cube.mesh.position.set(700 * Math.cos(r), 700 * Math.sin(r), 700 * Math.sin(r));

  cube.mesh.rotation.x -= 0.001 * Math.cos(r);
  cube.mesh.rotation.z -= 0.001 * Math.sin(r);
  cube.mesh.rotation.y -= 0.001 * Math.sin(r);

  sphere.mesh.position.x = 700 * Math.cos(r);
  sphere.mesh.position.z = 700 * Math.sin(r);
  sphere.mesh.position.y = 700 * Math.sin(r);

  sphere.meshS.position.x = 700 * Math.cos(r);
  sphere.meshS.position.z = 700 * Math.sin(r);
  sphere.meshS.position.y = 700 * Math.sin(r);

  /* if (activeCamera === cameraPerspective) {
    cameraPerspective.far = cube.mesh.position.length() + 250;
    cameraPerspective.updateProjectionMatrix();
    cameraPerspectiveHelper.update();
    cameraPerspectiveHelper.visible = true;
  } */

  cameraPerspective.lookAt(cube.mesh.position);

  renderer.clear();

  activeHelper.visible = false;

  renderer.setViewport(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  renderer.render(scene, activeCamera);

  activeHelper.visible = true;

  /* renderer.setViewport(
    SCREEN_WIDTH / 2,
    0,
    SCREEN_WIDTH / 2,
    SCREEN_HEIGHT,
  );
  renderer.render(scene, camera); */
}

function Cube() {
  const geom = new THREE.BoxGeometry(120, 120, 120);
  const geomL = new THREE.BoxGeometry(350, 350, 350);

  // create the material
  // Phong material is better for specular highlights as it respond better to the light source
  const mat = new THREE.MeshStandardMaterial({
    // color: Colors.blue,
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
  this.mesh = new THREE.Mesh(geom, mat);
  this.meshL = new THREE.Mesh(geomL, mat);

  // Allow the mesh to receive shadows
  this.mesh.receiveShadow = true;
}

// Instantiate the sea and add it to the scene:

function createCube() {
  cube = new Cube();

  // add the mesh to the scene
  scene.add(cube.mesh);
  // scene.add(cube.meshL);
}

function Sphere() {
  // create the geometry (shape) of the cylinder;
  // the parameters are:
  // radius top, radius bottom, height, number of segments on the radius, number of segments vertically
  const geom = new THREE.IcosahedronBufferGeometry(200, 6);
  // var geomS = new THREE.IcosahedronBufferGeometry(40, 3);

  // create the material
  const mat = new THREE.MeshStandardMaterial({
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

  // mat.alphaMap : textureOpacity
  // To create an object in Three.js, we have to create a mesh
  // which is a combination of a geometry and some material
  this.meshS = new THREE.Mesh(geom, matS);
  this.mesh = new THREE.Mesh(geom, mat);
  // Allow to receive shadows
  // this.mesh.receiveShadow = true;
}

function createSphere() {
  sphere = new Sphere();
  scene.add(sphere.mesh);
  scene.add(sphere.meshS);
}

export { init, animate };
