import { Box } from "../../model/Box.js";

export function generateListBoxes(NUMBER_SLOTS_BY_SHELVES) {

    let listBoxes = [];

    for (let index = 0; index < NUMBER_SLOTS_BY_SHELVES; index++) {
        
        let parent = null;
        let position = index;
        let rnd = Math.random();

        if (rnd>=0.5) {
            let isVisible = true;
            listBoxes.push(new Box(parent, position, isVisible));
        }
    }

    return listBoxes;
}