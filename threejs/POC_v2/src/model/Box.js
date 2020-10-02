let ID_BOX = 0;

export class Box{

    constructor(parent, position, isVisible){

        this._ID = ID_BOX;
        this._name = "box_0"+(this.ID);
        this._parent = parent;
        this._position = position;
        this._isVisible = isVisible;

        ID_BOX++;
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

    get parent(){
        return this._parent;
    }

    set parent(newParent){
        this._parent = newParent;
    }

    get position(){
        return this._position;
    }

    set position(newPosition){
        this._position = newPosition;
    }

    get isVisible(){
        return this._isVisible;
    }

    set isVisible(newIsvisible){
        this._isVisible = newIsvisible;
    }

}