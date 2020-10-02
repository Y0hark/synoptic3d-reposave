import { generateListLines } from "./generateListLines.js";
import { Forklift } from "../../model/Forklift.js";
import { Warehouse } from "../../model/Warehouse.js";

export function generateWarehouse(NUMBER_SLOTS_BY_SHELVES, NUMBER_SHELVES_BY_LINE, NUMBER_LINE, FORKLIFT_LINE) {
    
    let listLine = generateListLines(NUMBER_LINE, NUMBER_SHELVES_BY_LINE, NUMBER_SLOTS_BY_SHELVES)

    const forklift = new Forklift(FORKLIFT_LINE);
    
    const warehouse = new Warehouse(listLine, forklift);

    return warehouse;
}