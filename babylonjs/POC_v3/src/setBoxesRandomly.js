import { generateImportedBox } from './generateImportedBox.js';

//Cette fonction permet de positionner de manière aléatoire 0 à 6 boîtes sur les emplacements prédéfinis d'une étagère
//Les mesures sont propres à une échelle particulière de l'objet importé, et seront amenée à changer si jamais le scaling de l'object étagère est changé

export function setBoxesRandomly(BOXMODEL_PATH, BOXMODEL_NAME, etagere, ID_BOX, cameraObject, scene) {
    
    //Ici on déclare 6 tableaux qui continennent chacun les trois coordonnées relatives aux 6 emplacements de l'étagère courante
    let position_01 = [etagere.position.x-0.17, etagere.position.y+1.058, etagere.position.z-0.165];
    let position_02 = [etagere.position.x-0.17, etagere.position.y+1.058, etagere.position.z+0.311];
    let position_03 = [etagere.position.x-0.17, etagere.position.y+0.584, etagere.position.z-0.165];
    let position_04 = [etagere.position.x-0.17, etagere.position.y+0.584, etagere.position.z+0.311];
    let position_05 = [etagere.position.x-0.17, etagere.position.y+0.11, etagere.position.z-0.165];
    let position_06 = [etagere.position.x-0.17, etagere.position.y+0.11, etagere.position.z+0.311];

    //Les 6 emplacements sont stockés dans un tableau afin de pouvoir accèder aux emplacements les uns à la suite des autres
    let tabPositions = [position_01, position_02, position_03, position_04, position_05, position_06];


    //Cette boucle viens tout simplement tirer au sort un chiffre entre 0 et 1, si jamais il est supérieur ou égal à 0.5, alors une boîte est générée à l'emplacement 'compt' 
    //(donc emplacement de 0 à 6) et l'ID est ensuite incrémenté. Si jamais rnd est < 0.5, alors aucune boîte n'est générée et le compteur n'est pas incrémenté 
    for (var compt = 1; compt <= 6; compt++) {

        var rnd = Math.random();

        if (rnd>=0.5) {
            generateImportedBox(BOXMODEL_PATH, BOXMODEL_NAME, tabPositions[compt-1][0], tabPositions[compt-1][1], tabPositions[compt-1][2], ID_BOX, cameraObject, scene);
            ID_BOX++;
        }
    }
    //On retourne l'ID car on veut assurer une continuité des identifiants des boîtes
    return ID_BOX;
}