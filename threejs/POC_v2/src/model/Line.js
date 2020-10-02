let ID_LINE = 0;

export class Line{

    constructor(position, listShelves){

        this._ID = ID_LINE;
        this._name = "line_0"+(this.ID);
        this._position = position;
        this._listShelves = listShelves;

        ID_LINE++;

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

    get position(){
        return this._position;
    }

    set position(newPosition){
        this._position = newPosition;
    }

    get listShelves(){
        return this._listShelves;
    }
    
    set listShelves(newListShelves){
        this._listShelves = newListShelves;
    }

}