import { GLTFLoader } from "../../../lib/three.js-master/examples/jsm/loaders/GLTFLoader.js";

export function warehouseLoaderPositioner(MODEL_PATH, SCENE, NAME, ) {
    
    let warehouse;

    let loaderGTLF = new GLTFLoader();

    loaderGTLF.load(MODEL_PATH, function (gltf) {
    
        warehouse = gltf.scene;
        warehouse.name = NAME;

        SCENE.add(warehouse);
    });
}