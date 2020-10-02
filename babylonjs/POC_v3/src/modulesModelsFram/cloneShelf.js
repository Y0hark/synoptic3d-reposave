import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export function cloneBox(SHELF, LINE, SCENE) {

    let shelf = SCENE.getMeshByName('shelf_000');

    shelf.createInstance(SHELF._name);

    shelf.isVisible = true;

    let isDestroyed = false;

    shelf.position.y = 0.06;


    switch (LINE._position) {
    
        case 0:
            shelf.position.x = 7
            break;
        
        case 1:
            shelf.position.x = 5
            break;
        
        case 2:
            shelf.position.x = 3
            break;
        
        case 3:
            isDestroyed = true;
            break;

        case 4:
            shelf.position.x = -2
            break;
            
        case 5:
            shelf.position.x = -4
            break;
            
        case 6:
            shelf.position.x = -6
            break;
    }

    if (SHELF._position == 0) {
        shelf.position.z = position_Z = 7;
    } else {
        shelf.position.z = position_Z = 9 - 1.2*SHELF._position;
    }
}