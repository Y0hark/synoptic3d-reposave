let keyboard = [];
addEventListener('keydown', (e)=>{
    keyboard[e.key] = true;
});
  
addEventListener('keyup', (e)=>{
    keyboard[e.key] = false;
});
  
export function processKeyboard(delta, controls) {
    let speed = 5;
    let actualSpeed = speed * delta;
    if (keyboard['ArrowUp']) {
        controls.moveForward(actualSpeed);
    }
    if (keyboard['ArrowDown']) {
        controls.moveForward(-actualSpeed);
    }
    if (keyboard['ArrowRight']) {
        controls.moveRight(actualSpeed);
    }
    if (keyboard['ArrowLeft']) {
        controls.moveRight(-actualSpeed);
    }
    if (keyboard['u']) {
        controls.getObject().position.y += actualSpeed;
    }
    if (keyboard['l']) {
        controls.getObject().position.y -= actualSpeed;
    }
};