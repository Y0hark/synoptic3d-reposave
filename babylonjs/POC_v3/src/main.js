//Le fichier main.js est le coeur de l'application. Il construit une partie de la scène et fait appel aux méthodes de génération des objets à charger.
//Le Vector3 est une entité souvent utilisé, il s'agit de la déclaration d'une position dans l'espace dans l'ordre x, y, z
//Pour tout ce qui est gestion de package j'ai travaillé avcec node.js (npm) car c'était ce qui marchait le mieux pour moi
//Le serveur utilisé est "webpack dev server"


import * as BABYLON from 'babylonjs'; //On importe le module babylonjs et on lui donne l'alias BABYLON afin d'être en mesure d'intéragir avec les fonctions de base du framework
import 'babylonjs-loaders'; //C'est le module qui permet de charger des fichiers 3D dans BABYLON
import { generateIndoor } from './generateIndoor.js'; //Il s'agit de la fonction dans laquelle l'intérieur de l'entrepôt est généré
import { addSearchToolBar } from './searchToolBarModule.js'; //On importe le module permettant d'ajouter la barre de recherche à la scène
import { generateImportedBox } from './generateImportedBox.js'; //Import du module qui permet de générer une box



let canvas;
let engine;
let warehouse;
let scene;
let cameraFree;
let cameraObject;
let lightHem;
let lightPoint;
let forklift;

const SCENE_ORIGIN = new BABYLON.Vector3.Zero();

const FREECAM_INITIAL_POSITION = new BABYLON.Vector3(0,1,1.3);

const OBJCAM_DEFAULT_RADIUS = 1.5;
const OBJCAM_DEFAULT_ROTATION = 0;


const HEMLIGHT_INITIAL_POSITION = new BABYLON.Vector3(0,1,0);

const DEFAULT_CAMSPEED = 0.3;

const ECHAP_KEYCODE = 27; 


//La fonction lauchScene me permet en une seule ligne dans index.js de générer la totalité de la scène
export function lauchScene() { 

    //L'object canvas est récupéré depuis index.html, c'est sur cet objet HTML que se base le rendement de la scène 3D
    canvas = document.querySelector('#renderCanvas'); 
    
    //Création du moteur de rendu en lui passant en paramètre le canvas qui va lui servir à délimiter la section du document HTML dans laquele rendre la scène
    engine = new BABYLON.Engine(canvas); 

    //Cette fonction va mettre en place la scène, sans générer de rendu, elle ne suffit pas à elle seule à générer le rendu visuel, une fonction plus bas est dédiée à cela
    function createScene() {

        //Création de la scène en passsant en paramètre le moteur qui vas servir à générer les objets 3D
        scene = new BABYLON.Scene(engine);

        //Mise en place d'une caméra dite 'libre', cette dernière n'a pas de comportement particulier, et se veut en général être attachée à des contrôles
        cameraFree = new BABYLON.FreeCamera('camera_free_01', FREECAM_INITIAL_POSITION, scene);
        //On donne les contrôles à la caméra: haut, bas, gauche et droite, de même que les clicks-glissés de la souris. Ils serviront à bouger la caméra.
        //On passe le canvas car c'est lui qui récupère les entrées clavier/souris.
        cameraFree.attachControl(canvas, true);
        //Réduction de la vitesse de déplacement de la caméra, de base elle est fixée à 1
        cameraFree.speed = DEFAULT_CAMSPEED;

        //On met en place une caméra qui fixe une cible et ne peut se déplacer qu'en la gardant au centre de l'écran. C'est la caméra qui sera utiliser pour visualiser les boîtes
        //Son comportement est qu'elle décrit un arc à 360° autour de sa "target"
        cameraObject = new BABYLON.ArcRotateCamera("camera_obj_01", OBJCAM_DEFAULT_ROTATION, OBJCAM_DEFAULT_ROTATION ,OBJCAM_DEFAULT_RADIUS, SCENE_ORIGIN, scene);
        cameraObject.attachControl(canvas, true);
        cameraObject.speed = DEFAULT_CAMSPEED;

        //Création d'une lumière qui a le même comportement qu'une ampoule dans un plafonnier, soit un éclairage en hémisphère en dessous de la source lumineuse
        lightHem = new BABYLON.HemisphericLight("hemLight_01", HEMLIGHT_INITIAL_POSITION, scene);
        //On réduit l'intensité de la lumière émise
        lightHem.intensity = 0.6;

        //Le PointLight est une source lumineuse qui éclaire dans toutes les directions à partir d'un point, c'est la lumière qui éclaire l'intérieur du hangard
        //Le Vector3.Zero() est un raccourcis pour ne pas avoir à entrer les coordonnées du centre de la scène
        lightPoint = new BABYLON.PointLight('light_point_01', SCENE_ORIGIN, scene);
        lightPoint.intensity = 0.7;


        //Appel du module qui permet d'intégrer la barre de recherche
        //TODO GALIERE Sortir les import dans un autre fichier JS
        addSearchToolBar(scene);




        BABYLON.SceneLoader.ImportMesh("", FORKLIFT_PATH, FORKLIFT_NAME, scene, function (newMeshes) {
            
            forklift = newMeshes[0];
            forklift.scaling = scaleForklift(0.000005);
            forklift.rotate(BABYLON.Axis.X, -Math.PI/2, BABYLON.Space.WORLD);
            forklift.position.y = 0.06;

            let a = 1;
            scene.registerBeforeRender(function () {
                a += 0.005;
                var sign = Math.cos(a)/Math.abs(Math.cos(a));
                forklift.position.z += 0.01*sign;
            });

            generateImportedBox(BOXMODEL_PATH, BOXMODEL_NAME, 0, -180, 40, 0, cameraObject, scene, forklift, scaleForklift(15));
        });


        //Appel de la fonction assurant la génération de l'intérieur en lui passant les fichiers que l'on veut importer
        generateIndoor(SHELFMODEL_PATH, SHELFMODEL_NAME, BOXMODEL_PATH, BOXMODEL_NAME, cameraObject, scene);

        
        return scene;
        
    }

    //Cette partie est mentionnée plus haut, on fait appel à runRenderLoop qui permet d'assurer le rendu de la scène image par image
    let scenerendered = createScene();

    engine.runRenderLoop(function(){

        scenerendered.render();

    });

    function scaleForklift(multiplicator){

        return new BABYLON.Vector3(multiplicator, multiplicator, multiplicator);
    }

    //Cette fonction écoute constamment la touche echap qui permet de revenir de la caméra "objet" vers la caméra "libre", en changeant la propriété "activeCamera" de la scene
    //TODO GALIERE Descendre sous la génération de la scène + CONST sur 27
    document.onkeydown = function (e) {
        if (e.keyCode == ECHAP_KEYCODE) {
            //Changement de la caméra active grâce à une fonction qui va chercher une caméra par son nom
            scene.setActiveCameraByName('camera_free_01');
            //Repositionnement de la camera "libre" en pointant vers l'objet que l'on vient de quitter
            scene.activeCamera.setTarget(cameraObject.getTarget());
        }
    }
}
