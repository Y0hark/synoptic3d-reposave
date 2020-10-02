import * as THREE from "../js/three.js-master/build/three.module.js"
import { FirstPersonControls } from '../js/three.js-master/examples/jsm/controls/FirstPersonControls.js';
import Stats from '../js/three.js-master/examples/jsm/libs/stats.module.js';

let container;
let camera;
let renderer;
let controls;
let scene;
let cube;
let stats;
let clock;
let ground;

function init() {
  
  container = document.querySelector('#scene-container');
  
  scene = new THREE.Scene();
  scene.background = new THREE.Color('skyblue');

  createCamera();
  createControls();
  createLights();
  createMeshes();
  createRenderer();

  clock = new THREE.Clock();

  stats = new Stats();
  container.appendChild(stats.dom);

  renderer.setAnimationLoop(() => {

    update();
    render();

  })

}


function createCamera() {
  
  camera = new THREE.PerspectiveCamera(
    35, //FOV
    container.clientWidth / container.clientHeight, //aspect
    0.1, //near clipping space
    100 //far clipping space
  );

  camera.position.set( 0, 0, 10 );

}


function createLights() {

  const ambiantLight = new THREE.HemisphereLight(
    0xddeeff, 
    0x202020,
    3
  )

  const mainLight = new THREE.DirectionalLight(0xffffff, 5);

  mainLight.position.set(10, 10, 10);

  scene.add(ambiantLight, mainLight);

}


function createMeshes() {
  
  let geometry = new THREE.BoxBufferGeometry(2,2,2);
  
  let material = new THREE.MeshStandardMaterial( { 
    
    color: 0x808080, 
    transparent: false,
    opacity:1
  
  });
  
  cube = new THREE.Mesh(geometry, material);

  geometry = new THREE.PlaneBufferGeometry(20, 20, 20);
  material = new THREE.MeshBasicMaterial( {
    
    color: 0x808080, 
    side : THREE.DoubleSide
  });

  ground = new THREE.Mesh( geometry, material);

  ground.position.y = -3;
  ground.rotation.x = Math.PI/2;
  
  scene.add( cube, ground );

}

function createRenderer() {
  
  renderer = new THREE.WebGLRenderer({ antialias: true});
  
  renderer.setSize(container.clientWidth, container.clientHeight);
  
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.physicallyCorrectLights = true;
  
  container.appendChild(renderer.domElement);

}

function createControls() {
  
  controls = new FirstPersonControls(camera, container);
  controls.movementSpeed = 10;
  controls.lookSpeed = 0.1;

}

function update() {
  stats.update();
}


function render() {

  controls.update( clock.getDelta() );
  renderer.render(scene, camera);

}


function onWindowResize() {

  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;


  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize( container.clientWidth, container.clientHeight );

  controls.handleResize();

}

window.addEventListener( 'resize', onWindowResize );

init();