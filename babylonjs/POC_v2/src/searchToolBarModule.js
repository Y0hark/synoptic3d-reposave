import * as GUI from 'babylonjs-gui';

//Permet d'ajouter une barre de recherche à l'interface
export function addSearchToolBar(scene) {

    //Création d'une AdvancedDynamicTexture qui est souvent le composant principal utilisé par GUI pour les interfaces utilisateur
    var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    
    //Création d'un input text
    var searchBar = new GUI.InputText();
    searchBar.width = 0.2;
    searchBar.maxWidth = 0.2;
    searchBar.height = "40px";
    searchBar.text = "Looking up for something?";
    searchBar.color = "white";
    searchBar.background = "black";
    //Positionnement de la barre sur le haut gauche de la fenêtre
    searchBar.top = -400;
    searchBar.left = -470;

    //Ce paramètre permet d'ajouter un comportement lié à une touche particulière
    //Ici la fonction prendra le texte dans la barre de recherche et lancera une recherche sur tous les noms des objets de la scène avec de focus la caméra sur l'objet correspondant
    //TODO GALIERE Mettre en place test null pointer
    searchBar.onKeyboardEventProcessedObservable.add((event) => {
        if (event.key=="Enter") {
            scene.setActiveCameraByName('camera_obj_01');
            scene.activeCamera.setTarget(scene.getMeshByName(searchBar.text));
            scene.activeCamera.radius = 1.5;
        }
    });
    //On attache la barre de recherche à l'objet advanced texture
    advancedTexture.addControl(searchBar); 
}