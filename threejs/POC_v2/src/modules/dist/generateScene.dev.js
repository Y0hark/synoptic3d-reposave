"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateScene = generateScene;

var _generateWarehouse = require("./modulesModel/generateWarehouse.js");

var _boxLoaderPositioner = require("./modulesModFram/boxLoaderPositioner.js");

var _shelfLoaderPositioner = require("./modulesModFram/shelfLoaderPositioner.js");

var _warehouseLoaderPositioner = require("./modulesModFram/warehouseLoaderPositioner.js");

function generateScene(SCENE) {
  var WAREHOUSE_3DMODEL_PATH = './lib/3D/_warehouse_OBJ3/warehouse.gltf';
  var SHELF_3DMODEL_PATH = './lib/3D/etagere/files/etagere.stl';
  var BOX_3DMODEL_PATH = './lib/3D/Wooden Crate/Wooden Crate.obj';
  var warehouse = (0, _generateWarehouse.generateWarehouse)(6, 14, 7, 4);
  (0, _warehouseLoaderPositioner.warehouseLoaderPositioner)(WAREHOUSE_3DMODEL_PATH, SCENE, warehouse._name);

  warehouse._listLines.forEach(function (line) {
    line._listShelves.forEach(function (shelf) {
      var shelfPositions = (0, _shelfLoaderPositioner.shelfLoaderPositioner)(SCENE, line, shelf, SHELF_3DMODEL_PATH);

      shelf._listBoxes.forEach(function (box) {
        (0, _boxLoaderPositioner.boxLoaderPositioner)(SCENE, box, shelfPositions, BOX_3DMODEL_PATH);
      });
    });
  });
}