import * as WHS from '../whs.js-dev/build/whs.module.js';
import * as THREE from '../lib/three.js';

const app = new WHS.App([
    u1 = new WHS.app.ElementModule(),
    u2 = new WHS.app.SceneModule(),
    u3 = new WHS.app.CameraModule({
      position: new THREE.Vector3(0,0,50)
    }), 
    WHS.app.RenderingModule({bgColor: 0x162129}),
    u4 = new WHS.app.ResizeModule()
  ]);

const sphere = new WHS.Sphere({ // Create sphere component.
    geometry: {
      radius: 3,
      widthSegments: 32,
      heightSegments: 32
    },
  
    material: new THREE.MeshBasicMaterial({
      color: 0xF2F2F2
    }),
  
    position: [0, 10, 0]
  });
  
  sphere.addTo(app); // Add sphere to world.

  new WHS.Plane({
    geometry: {
      width: 100,
      height: 100
    },
  
    material: new THREE.MeshBasicMaterial({
      color: 0x447F8B
    }),
  
    rotation: {
      x: - Math.PI / 2
    }
  }).addTo(app);
  
  app.start(); // Start animations and physics simulation.