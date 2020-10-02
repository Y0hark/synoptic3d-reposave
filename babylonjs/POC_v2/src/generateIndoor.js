import 'babylonjs-loaders';
import { setBoxesRandomly } from './setBoxesRandomly';
import { generateShelfBox } from './generateShelfBox';

//Cette fonction est là pour générer le contenu de l'entrepôt
export function generateIndoor(SHELFMODEL_PATH, SHELFMODEL_NAME, BOXMODEL_PATH, BOXMODEL_NAME, cameraObject, scene) {
    
  
    //Les identifiants des boîtes et des étagères
    let ID_SHELF = 1;
    let ID_BOX = 1;
    let ID;

    //Chargement de la première étagère qui va servir de modèle et être clonée autant que nécessaire
    BABYLON.SceneLoader.ImportMesh("", SHELFMODEL_PATH, SHELFMODEL_NAME,  scene, function(newMeshes){
        
        let etagere = newMeshes[0];
        
        //On donne le nom dynamiquement en fonction de l'ID à l'étagère
        etagere.name = 'etagere_0'+ID_SHELF;
        ID_SHELF++;
        //Réduction de la taille du modèle, par défaut c'est 1;1;1
        etagere.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
        //On positionne le modèle de façon à donner l'impression qu'il est sur le sol de l'entrepôt
        etagere.position.y = 0.06;
        etagere.position.x = 2;

        //Appel de la méthode qui prends l'instance courante de l'étagère et génère aléatoirement 0 à 6 caisses sur les emplacements disponibles, elle retourne ID_BOX incrémenté pour garder le compte des box
        ID_BOX = setBoxesRandomly(BOXMODEL_PATH, BOXMODEL_NAME, etagere, ID_BOX, cameraObject, scene);

        //Duplication de l'étagère pour en mettre une en face de la première, les deux vont servir à remplir chaque côté de l'entrepôt
        let firstInstance = etagere.createInstance('etagere_0'+ID_SHELF);
        ID_SHELF++;
        firstInstance.position.x = -2;

        ID_BOX = setBoxesRandomly(BOXMODEL_PATH, BOXMODEL_NAME, firstInstance, ID_BOX, cameraObject, scene);

        //Appel de la fonction du module qui permet de faire apparaître les étagères sur la scène et de les remplir avec des box
        //On récupère la tableau ID qui est retourné et on le passe ensuite en paramètre pour assurer la continuité du comptage des box
        ID = generateShelfBox(etagere, ID_SHELF, etagere.position.x, BOXMODEL_PATH, BOXMODEL_NAME, ID_BOX, cameraObject, scene);

        ID = generateShelfBox(etagere, ID[0], 4, BOXMODEL_PATH, BOXMODEL_NAME, ID[1], cameraObject, scene);

        ID = generateShelfBox(etagere, ID[0], 6, BOXMODEL_PATH, BOXMODEL_NAME, ID[1], cameraObject, scene);

        ID = generateShelfBox(etagere, ID[0], -2, BOXMODEL_PATH, BOXMODEL_NAME, ID[1], cameraObject, scene);

        ID = generateShelfBox(etagere, ID[0], -4, BOXMODEL_PATH, BOXMODEL_NAME, ID[1], cameraObject, scene);

        ID = generateShelfBox(etagere, ID[0], -6, BOXMODEL_PATH, BOXMODEL_NAME, ID[1], cameraObject, scene);
    });   
}