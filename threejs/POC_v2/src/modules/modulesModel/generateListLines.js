import { generateListShelves } from "./generateListShelves.js";
import { Line } from "../../model/Line.js";

export function generateListLines(NUMBER_LINES, NUMBER_SHELVES_BY_LINE, NUMBER_SLOTS_BY_SHELVES) {
    
    let listLines = [];

    for (let index = 0; index < NUMBER_LINES; index++) {
       
        let position = index;
        let listShelves = generateListShelves(NUMBER_SHELVES_BY_LINE, NUMBER_SLOTS_BY_SHELVES);

        listLines.push(new Line(position, listShelves));
        
    }

    return listLines;

}