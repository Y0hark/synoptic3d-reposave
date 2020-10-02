//Il s'agit du fichier qui génère les boîtes ainsi que l'affichage de leur ID qui leur est attaché

import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import * as GUI from 'babylonjs-gui'; //C'est GUI pour Graphic User Interface, ce module permet notamment de créer des boutons et autres interfaces utilisateur

//C'est la fonction principale de mon module, on lui passe le modèle, la position de la box, son ID, la caméraObject pour zoomer dessus et la scène
export function generateImportedBox(BOXMODEL_PATH, BOXMODEL_NAME, positionX, positionY, positionZ, ID_BOX, cameraObject, scene, parent, scaling) {
    
    let PATH = BOXMODEL_PATH;
    let FILE_NAME = BOXMODEL_NAME;


    let POSITION_X = positionX;
    let POSITION_Y = positionY;
    let POSITION_Z = positionZ;
    let ID = ID_BOX;
    let CAMERA_OBJ = cameraObject;
    let SCENE = scene;

    
    let clickableTexture;
    let idButton;
    let box;
    let plane;
    //Ici le loader de la box
    BABYLON.SceneLoader.ImportMesh("", PATH, FILE_NAME, SCENE, function(newMeshes){

        box = newMeshes[0];
        //Si la boîte a un parent alors on les lie
        box.parent = parent;
        //On réduit l"échelle du modèle pour correspondre à l'échelle de la scène
        if (scaling != null) {
            box.scaling = scaling;
        }
        else {
            box.scaling = new BABYLON.Vector3(0.06,0.06,0.06);
        }

        box.position.x = POSITION_X;
        box.position.y = POSITION_Y;
        box.position.z = POSITION_Z;
        box.name = "box_0"+ID;

        //On passe l'ID en string car GUI ne supporte pas le cast automatique
        ID = ID.toString();

        //On déclare un plan qui sera le support physique du bouton
        plane = BABYLON.Mesh.CreatePlane("plane_0"+ID, 2, scene, true);
        //Affiliation du plan à la box, cela permet de donner au plan une position relative non plus à la scène mais à son parent
        plane.parent = box;
        //Positionnement du plan en avant de la box
        plane.position.y = 3;
        plane.position.x = 5;
        //BILLBOARMODE permet de faire en sorte que le plan soit toujours orienté vers la caméra active
        plane._billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
    
        //On créer une texture dynamique à partir du plan
        clickableTexture = GUI.AdvancedDynamicTexture.CreateForMesh(plane);
    
        //Création du bouton et paramétrage de ce dernier
        idButton = GUI.Button.CreateSimpleButton("but_0"+ID, ID);
        idButton.width = 1;
        idButton.height = 0.4;
        idButton.color = "white";
        idButton.fontSize = 500;
        idButton.fontStyle = "bold"
        
        //Mise en place de la fonction clickOnBoxNumber() en cas de clic sur le bouton
        idButton.onPointerUpObservable.add(function () {
            clickOnBoxNumber(box, CAMERA_OBJ)
        });
        
        //On lie le bouton au plan qui est maintenant une texture dynamique capable de reconnaitre un clic souris
        clickableTexture.addControl(idButton);
    });

    //La fonction suivante fait en sortre de changer de la caméra active actuelle s'il s'agit de la 'freeCamera' ou alors de changer de target s'il s'agit de la 'cameraObj'
    //Elle permet de zoomer ou dezoomer afin de visualiser à 360° l'object dont on a sélectionné l'ID
    //La touche echap en caméra libre permet de focus la caméra sur le dernier objet que caméra obj a pris pour target 
    function clickOnBoxNumber(target, camera) {
        camera.setTarget(target);
        //Le radius est la distance à laquelle la caméra doit se tenir de l'object après le clic souris
        camera.radius = 1.5;
        SCENE.setActiveCameraByName(camera.name);
    };
}




