      
export function warehouseLoad(WAREHOUSEMODEL_PATH, WAREHOUSEMODEL_NAME, SCENE, WAREHOUSE) {
    //On importe l'object qui vas servir d'entrepôt, la fonction SceneLoader embarque une fonction callback qui permet d'effectuer des modifications sur l'objet importé
    BABYLON.SceneLoader.ImportMesh("", WAREHOUSEMODEL_PATH, WAREHOUSEMODEL_NAME,  scene, function(newMeshes){ /*TODO GALIERE Faire un getter*/
            //newMeshes est le paramètre qui permet d'accéder au tableau où sont tous les imports que vient d'effectuer le loader
            warehouse = newMeshes[0]
            //Positionnement de l'objet à l'emplacement 0;0;0
            warehouse.position = BABYLON.Vector3.Zero();

    });    
}
