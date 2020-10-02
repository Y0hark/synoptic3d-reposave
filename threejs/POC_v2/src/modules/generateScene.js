import { generateWarehouse } from "./modulesModel/generateWarehouse.js";
import { boxLoaderPositioner } from "./modulesModFram/boxLoaderPositioner.js";
import { shelfLoaderPositioner } from "./modulesModFram/shelfLoaderPositioner.js";
import { warehouseLoaderPositioner } from "./modulesModFram/warehouseLoaderPositioner.js";

export function generateScene(SCENE) {

    const WAREHOUSE_3DMODEL_PATH = './lib/3D/_warehouse_OBJ3/warehouse.gltf';
    const SHELF_3DMODEL_PATH = './lib/3D/etagere/files/etagere.stl';
    const BOX_3DMODEL_PATH = './lib/3D/Wooden Crate/Wooden Crate.obj';

    let warehouse = generateWarehouse(6, 14, 7, 4);
    warehouseLoaderPositioner(WAREHOUSE_3DMODEL_PATH, SCENE, warehouse._name);

    warehouse._listLines.forEach(line => {

        line._listShelves.forEach(shelf => {

            let shelfPositions = shelfLoaderPositioner(SCENE, line, shelf, SHELF_3DMODEL_PATH);

            shelf._listBoxes.forEach(box => {
                boxLoaderPositioner(SCENE, box, shelfPositions,BOX_3DMODEL_PATH);
            });

        });

    });
}

