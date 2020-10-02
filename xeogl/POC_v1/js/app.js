/* Note : Quand je veux utiliser un fichier à part .js et l'importer dans la page HTML, il se trouve que j'obtiens un : xeogl.js:17 Uncaught TypeError: Cannot set property 'xeogl' of undefined
Mais quand je fais tout depuis la page HTML, tout se passe bien et sans soucis....*/


import * as xeogl from './xeogl.js'

const scene = new xeogl.Scene({

    transpartent: true

});

let geometry = new xeogl.TorusGeometry({
    radius: 1.0,
    tube: 0.3
});

let material = new xeogl.MetallicMaterial({
    baseColorMap: new xeogl.Texture({
        src: "uvGrid2.jpg"
    }),
    roughnessMap: new xeogl.Texture({
        src: "goldRoughness.jpg"
    })
});

let mesh = new xeogl.Mesh({
    geometry: geometry,
    material: material,
    position: [0,0,10]
});

var update = function () {

    requestAnimationFrame(update);
};

let cameraControl = new xeogl.CameraControl();

update();