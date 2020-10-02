import * as THREE from "../threejs/build/three.module.js"

let container;
let camera;
let renderer;
let scene;
let cube;

function init() {
  
    container = document.querySelector('#scene-container');
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color('skyblue');

    camera = new THREE.PerspectiveCamera(
        35, //FOV
        container.clientWidth / container.clientHeight, //aspect
        0.1, //near clipping space
        100 //far clipping space
    );

    camera.position.set(0,0,10);
    
    //create a driectional light
    const light = new THREE.DirectionalLight(0xffffff, 3.0);
    
    //move back and up a bit
    light.position.set(10,10,10);
    
    //add to the scene
    scene.add( light );

    const geometry = new THREE.BoxBufferGeometry(2,2,2);

    const material = new THREE.MeshStandardMaterial( { 

    color: 0x800080, 
    transparent: false,
    opacity:1

    });

    cube = new THREE.Mesh(geometry, material);

    scene.add( cube );
    renderer = new THREE.WebGLRenderer({ antialias: true});

    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    renderer.setAnimationLoop(() => {

        update();
        render();

  })

}

function update() {
  
    cube.rotation.z += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;

}


function render() {

  renderer.render(scene, camera);

}


function onWindowResize() {

  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;


  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize( container.clientWidth, container.clientHeight );

}

window.addEventListener( 'resize', onWindowResize );

init();



