"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var THREE = _interopRequireWildcard(require("../lib/three.js-master/build/three.module.js"));

var _PointerLockControls = require("../lib/three.js-master/examples/jsm/controls/PointerLockControls.js");

var _keyboardControls = require("./modules/modulesFramework/keyboardControls.js");

var _generateScene = require("./modules/generateScene.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var container = document.querySelector('#sceneContainer');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.background = new THREE.Color("grey");
(0, _generateScene.generateScene)(scene);
var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 3);
scene.add(light);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var controls = new _PointerLockControls.PointerLockControls(camera, renderer.domElement);
var clock = new THREE.Clock();
document.addEventListener('click', function () {
  controls.lock();
});
camera.position.z = 10;
camera.position.y = 3.5; //camera.lookAt(scene.getObjectByName('shelf_00').position);

var animate = function animate() {
  renderer.render(scene, camera);
  var delta = clock.getDelta();
  (0, _keyboardControls.processKeyboard)(delta, controls);
  requestAnimationFrame(animate);
};

animate();