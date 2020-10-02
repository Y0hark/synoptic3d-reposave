"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shelfLoaderPositioner = shelfLoaderPositioner;

var _STLLoader = require("../../../lib/three.js-master/examples/jsm/loaders/STLLoader.js");

var THREE = _interopRequireWildcard(require("../../../lib/three.js-master/build/three.module.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function shelfLoaderPositioner(SCENE, LINE, SHELF, SHELF_3DMODEL_PATH) {
  var material = new THREE.MeshPhongMaterial();
  var loaderSTL = new _STLLoader.STLLoader();
  var shelfPositions = [];
  loaderSTL.load(SHELF_3DMODEL_PATH, function (geometry) {
    var shelf = new THREE.Mesh(geometry, material);
    shelf.name = SHELF._name;
    shelf.position.y = 0.06;
    var isDestroyed = false;
    var position_Z;
    var position_X;

    switch (LINE._position) {
      case 0:
        shelf.position.x = position_X = 7;
        break;

      case 1:
        shelf.position.x = position_X = 5;
        break;

      case 2:
        shelf.position.x = position_X = 3;
        break;

      case 3:
        isDestroyed = true;
        break;

      case 4:
        shelf.position.x = position_X = -2;
        break;

      case 5:
        shelf.position.x = position_X = -4;
        break;

      case 6:
        shelf.position.x = position_X = -6;
        break;
    }

    if (SHELF._position == 0) {
      shelf.position.z = position_Z = 7;
    } else {
      shelf.position.z = position_Z = 9 - 1.2 * SHELF._position;
    }

    shelf.scale.set(0.01, 0.01, 0.01);
    shelf.rotation.set(-Math.PI / 2, 0, 0);
    shelf.receiveShadow = true;
    shelf.castShadow = true;

    if (isDestroyed == false) {
      SCENE.add(shelf);
    }

    shelfPositions.push(position_X, position_Z);
  });
  return shelfPositions;
}