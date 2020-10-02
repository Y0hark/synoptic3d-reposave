//Il s'agit du fichier qui génère les boîtes ainsi que l'affichage de leur ID qui leur est attaché

import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export function generateModels(BOXMODEL_PATH, BOXMODEL_NAME, SHELFMODEL_PATH, SHELFMODEL_NAME, SCENE) {
    
        //Ici le loader de la box
        BABYLON.SceneLoader.ImportMesh("", BOXMODEL_PATH, BOXMODEL_NAME, SCENE, function(newMeshes){
    
            let box = newMeshes[0];
            //Si la boîte a un parent alors on les lie
            box.parent = parent;
            //On réduit l"échelle du modèle pour correspondre à l'échelle de la scène

            box.scaling = new BABYLON.Vector3(0.06,0.06,0.06);
    
            box.name = "box_000";

            box.isVisible = false;    

        });

        BABYLON.SceneLoader.ImportMesh("", SHELFMODEL_PATH, SHELFMODEL_NAME, SCENE, function(newMeshes){
        
            let etagere = newMeshes[0];
            
            //On donne le nom dynamiquement en fonction de l'ID à l'étagère
            etagere.name = 'etagere_000';
            ID_SHELF++;
            //Réduction de la taille du modèle, par défaut c'est 1;1;1
            etagere.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);

            etagere.isVisible = false;
        });
}