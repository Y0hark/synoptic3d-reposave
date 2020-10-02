import { STLLoader } from "../../../lib/three.js-master/examples/jsm/loaders/STLLoader.js";
import * as THREE from "../../../lib/three.js-master/build/three.module.js";

export function shelfLoaderPositioner(SCENE, LINE, SHELF, SHELF_3DMODEL_PATH) {
    
    let material = new THREE.MeshPhongMaterial();
    let loaderSTL = new STLLoader();
    let shelfPositions = [];
    
    loaderSTL.load(SHELF_3DMODEL_PATH, function (geometry) {
    
        let shelf = new THREE.Mesh(geometry, material);
        shelf.name = SHELF._name;
        shelf.position.y = 0.06;
        let isDestroyed = false;
        
        let position_Z;
        let position_X;
        
        switch (LINE._position) {
    
            case 0:
                shelf.position.x = position_X = 7
                break;
            
            case 1:
                shelf.position.x = position_X = 5
                break;
            
            case 2:
                shelf.position.x = position_X = 3
                break;
            
            case 3:
                isDestroyed = true;
                break;
    
            case 4:
                shelf.position.x = position_X = -2
                break;
                
            case 5:
                shelf.position.x = position_X = -4
                break;
                
            case 6:
                shelf.position.x = position_X = -6
                break;
    
        }
        if (SHELF._position == 0) {
            shelf.position.z = position_Z = 7;
        } else {
            shelf.position.z = position_Z = 9 - 1.2*SHELF._position;
        }
    
        shelf.scale.set(0.01, 0.01, 0.01);
        shelf.rotation.set(- Math.PI / 2, 0, 0);
    
        shelf.receiveShadow = true;
        shelf.castShadow = true;

        if (isDestroyed == false) {
            SCENE.add(shelf);
        }

        shelfPositions.push(position_X, position_Z);

        
    });
    return shelfPositions;
}