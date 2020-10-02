import { generateListBoxes } from "./generateListBoxes.js";
import { Shelf } from "../../model/Shelf.js";
import { setBoxesParent } from "./setBoxesParent.js";

export function generateListShelves(NUMBER_SHELVES_BY_LINE, NUMBER_SLOTS_BY_SHELVES) {
    
    let listShelves = [];

    for (let index = 0; index < NUMBER_SHELVES_BY_LINE; index++) {
        
        let position = index;
        let listBoxes = generateListBoxes(NUMBER_SLOTS_BY_SHELVES);
        
        let shelf = new Shelf(position, NUMBER_SLOTS_BY_SHELVES, listBoxes);
        
        setBoxesParent(shelf);

        listShelves.push(shelf);
        
    }

    return listShelves;

}

