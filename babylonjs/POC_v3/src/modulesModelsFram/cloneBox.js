import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export function cloneBox(BOX, SCENE, CAMERA_OBJ) {
    
    let box = SCENE.getMeshByName('box_000');

    box.createInstance(BOX._name);

    box.isVisible = true;

    //On passe l'ID en string car GUI ne supporte pas le cast automatique
    let ID = BOX._ID.toString();

    box.parent = SCENE.getMeshByName(BOX._parent._name);
    
    box.position.x = BOX._parent.position.x+0.17;

    switch (BOX._position) {
        case 0:
            box.position.y = BOX._parent.position.z-0.165;
            box.position.z = BOX._parent.position.y+1.058;
            break;
    
        case 1:
            box.position.y = BOX._parent.position.z+0.311;
            box.position.z = BOX._parent.position.y+1.058;
            break;

        case 2:
            box.position.y = BOX._parent.position.z-0.165;
            box.position.z = BOX._parent.position.y+0.584;
            break;

        case 3:
            box.position.y = BOX._parent.position.z+0.311;
            box.position.z = BOX._parent.position.y+0.584;
            break;

        case 4:
            box.position.y = BOX._parent.position.z-0.165;
            box.position.z = BOX._parent.position.y+0.11;
            break;
            
        case 5:
            box.position.y = BOX._parent.position.z+0.311;
            box.position.z = BOX._parent.position.y+0.11;
            break;
    }

    //On déclare un plan qui sera le support physique du bouton
    let plane = BABYLON.Mesh.CreatePlane("plane_0"+ID, 2, SCENE, true);
    //Affiliation du plan à la box, cela permet de donner au plan une position relative non plus à la scène mais à son parent
    plane.parent = box;
    //Positionnement du plan en avant de la box
    plane.position.y = 3;
    plane.position.x = 5;
    //BILLBOARMODE permet de faire en sorte que le plan soit toujours orienté vers la caméra active
    plane._billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;

    //On créer une texture dynamique à partir du plan
    let clickableTexture = GUI.AdvancedDynamicTexture.CreateForMesh(plane);

    //Création du bouton et paramétrage de ce dernier
    let idButton = GUI.Button.CreateSimpleButton("button_0"+ID, ID);
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
