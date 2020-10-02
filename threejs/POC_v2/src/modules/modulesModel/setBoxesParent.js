export function setBoxesParent(shelf) {
    shelf.listBoxes.forEach(box => {
        box.parent = shelf;
    });
}