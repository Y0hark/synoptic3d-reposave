import * as THREE from '../lib/three.js-master/build/three.module.js';
import {PointerLockControls} from '../lib/three.js-master/examples/jsm/controls/PointerLockControls.js';
import { processKeyboard } from "./modules/modulesFramework/keyboardControls.js";
import { generateScene } from './modules/generateScene.js';


const container = document.querySelector('#sceneContainer');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

scene.background = new THREE.Color("grey");

generateScene(scene);



var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 3 );
scene.add( light );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let controls = new PointerLockControls(camera, renderer.domElement);
let clock = new THREE.Clock();

document.addEventListener('click', ()=>{
  controls.lock();
});

camera.position.z = 10;
camera.position.y = 3.5;

//camera.lookAt(scene.getObjectByName('shelf_00').position);


var animate = function () {
  renderer.render( scene, camera );
  let delta = clock.getDelta();
  processKeyboard(delta, controls);
  requestAnimationFrame( animate );
};

animate();