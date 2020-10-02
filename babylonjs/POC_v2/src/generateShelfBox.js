import { setBoxesRandomly } from "./setBoxesRandomly";

export function generateShelfBox(etagere,ID_SHELF, POSITION_X, BOXMODEL_PATH, BOXMODEL_NAME, ID_BOX, cameraObject, scene) {
    
    //Une boucle qui sera répétée afin de compléter le remplisage de l'entrpôt
    for (let index = 1; index < 7; index++) {
        //Création de 6 nouvelles instances de l'étagère avec nommage dynamique
        let newInstance = etagere.createInstance('etagere_0'+ID_SHELF);
        ID_SHELF++;
        //Le positionnement selon z se fait en fonction de l'index qui vient multiplier l'écart nécéssaire entre chaque entité
        newInstance.position.z = etagere.position.z + 1.2*index;
        
        newInstance.position.x = POSITION_X;
        //Pour chaque nouvelle instance on appelle le générateur de boîtes qui va remplir l'étagère courante de manière aléatoire
        ID_BOX = setBoxesRandomly(BOXMODEL_PATH, BOXMODEL_NAME, newInstance, ID_BOX, cameraObject, scene);

        let newInstance2 = etagere.createInstance('etagere_0'+ID_SHELF);
        ID_SHELF++;

        newInstance2.position.z = etagere.position.z - 1.2*index;

        newInstance2.position.x = POSITION_X;

        ID_BOX = setBoxesRandomly(BOXMODEL_PATH, BOXMODEL_NAME, newInstance2, ID_BOX, cameraObject, scene);

    };

    return [ID_SHELF, ID_BOX];
}
    