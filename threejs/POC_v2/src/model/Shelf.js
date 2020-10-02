let ID_SHELF = 0;
export class Shelf{

    constructor(position, slots, listBoxes){

        this._ID = ID_SHELF;
        this._name = "shelf_0"+(this.ID);
        this._position = position;
        this._slots = slots;
        this._listBoxes = listBoxes;

        ID_SHELF++;
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

    get slots(){
        return this._slots;
    }

    set slots(newSlots){
        this._slots = newSlots;
    }

    get listBoxes(){
        return this._listBoxes;
    }

    set listBoxes(newListboxes){
        this._listBoxes = newListboxes;
    }

}