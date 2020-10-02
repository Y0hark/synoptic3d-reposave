"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateModels = generateModels;

var THREE = _interopRequireWildcard(require("../../../lib/three.js-master/build/three.module.js"));

var _OBJLoader = require("../../../lib/three.js-master/examples/jsm/loaders/OBJLoader2.js");

var _STLLoader = require("../../../lib/three.js-master/examples/jsm/loaders/STLLoader.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function generateModels(BOX_MODEL_PATH, BOX_TEXTURE_PATH, SHELF_MODEL_PATH, SCENE) {
  var loaderOBJ = new _OBJLoader.OBJLoader2();
  loaderOBJ.load(BOX_MODEL_PATH, function (box) {
    box.name = 'modelBox';
    box.scale.set(0.6, 0.6, 0.6);
    box.position.x = 2;
    box.position.y = 8;
    SCENE.add(box);
  });
  console.log(SCENE.getObjectByName('modelBox'));
  var material = new THREE.MeshPhongMaterial();
  var loaderSTL = new _STLLoader.STLLoader();
  loaderSTL.load(SHELF_MODEL_PATH, function (geometry) {
    var shelf = new THREE.Mesh(geometry, material);
    shelf.name = "modelShelf";
    SCENE.add(shelf);
  });
}