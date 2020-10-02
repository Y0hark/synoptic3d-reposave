"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boxLoaderPositioner = boxLoaderPositioner;

var _OBJLoader = require("../../../lib/three.js-master/examples/jsm/loaders/OBJLoader2.js");

function boxLoaderPositioner(SCENE, BOX, SHELFPOSITIONS, BOX_3DMODEL_PATH) {
  if (BOX._isVisible == true) {
    var PARENT_POSITION_X = SHELFPOSITIONS[0];
    var PARENT_POSITION_Y = 0.06;
    var PARENT_POSITION_Z = SHELFPOSITIONS[1];
    var loaderOBJ = new _OBJLoader.OBJLoader2();
    loaderOBJ.load(BOX_3DMODEL_PATH, function (box) {
      box.name = BOX._name;
      box.scale.set(0.06, 0.06, 0.06); //box.position.x = PARENT_POSITION_X+0.17;

      switch (BOX._position) {
        case 0:
          box.position.y = PARENT_POSITION_Z - 0.165;
          box.position.z = PARENT_POSITION_Y + 1.058;
          break;

        case 1:
          box.position.y = PARENT_POSITION_Z + 0.311;
          box.position.z = PARENT_POSITION_Y + 1.058;
          break;

        case 2:
          box.position.y = PARENT_POSITION_Z - 0.165;
          box.position.z = PARENT_POSITION_Y + 0.584;
          break;

        case 3:
          box.position.y = PARENT_POSITION_Z + 0.311;
          box.position.z = PARENT_POSITION_Y + 0.584;
          break;

        case 4:
          box.position.y = PARENT_POSITION_Z - 0.165;
          box.position.z = PARENT_POSITION_Y + 0.11;
          break;

        case 5:
          box.position.y = PARENT_POSITION_Z + 0.311;
          box.position.z = PARENT_POSITION_Y + 0.11;
          break;
      }

      SCENE.add(box);
    });
  }
}