import * as xeogl from '../xeogl-master/build/xeogl.module.js'

const scene = new xeogl.Scene({

    transpartent: true

});

let geometry = new xeogl.TorusGeometry({
    radius: 1.0,
    tube: 0.3
});

let material = new xeogl.MetallicMaterial({
    baseColorMap: new xeogl.Texture({
        src: "./uvGrid2.jpg"
    }),
    roughnessMap: new xeogl.Texture({
        src: "./goldRoughness.jpg"
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