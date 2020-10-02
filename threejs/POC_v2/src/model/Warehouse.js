let ID_WAREHOUSE = 0;

export class Warehouse{

    constructor(listLines, forklift){
        
        this._ID = ID_WAREHOUSE;
        this._name = "warehouse_0"+(this.ID);
        this._listLines = listLines
        this._forklift = forklift;

        ID_WAREHOUSE++;
    }
    get ID(){
        return this._ID;
    }

    set ID(newID){
        this._ID = newID;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    get listLines(){
        return this._listLines;
    }

    set listLines(newlistLine){
        this._listLines = newlistLine;
    }
    
    get forklift(){
        return this._forklift;
    }

    set forklift(newForklift){
        this._forklift = newForklift;
    }
}