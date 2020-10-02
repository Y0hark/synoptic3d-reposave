let ID_FORKLIFT = 0;

export class Forklift{

    constructor(line){
        this._ID = ID_FORKLIFT;
        this._name = "forklift_0"+(this.ID);
        this._line = line;

        ID_FORKLIFT++;
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


    get line(){
        return this._line;
    }
    
    set line(newLine){
        this._line = newLine;
    }
    
}