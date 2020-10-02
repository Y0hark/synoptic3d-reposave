"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shelf = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ID_SHELF = 0;

var Shelf =
/*#__PURE__*/
function () {
  function Shelf(position, slots, listBoxes) {
    _classCallCheck(this, Shelf);

    this._ID = ID_SHELF;
    this._name = "shelf_0" + this.ID;
    this._position = position;
    this._slots = slots;
    this._listBoxes = listBoxes;
    ID_SHELF++;
  }

  _createClass(Shelf, [{
    key: "ID",
    get: function get() {
      return this._ID;
    },
    set: function set(newID) {
      this._ID = newID;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(newPosition) {
      this._position = newPosition;
    }
  }, {
    key: "slots",
    get: function get() {
      return this._slots;
    },
    set: function set(newSlots) {
      this._slots = newSlots;
    }
  }, {
    key: "listBoxes",
    get: function get() {
      return this._listBoxes;
    },
    set: function set(newListboxes) {
      this._listBoxes = newListboxes;
    }
  }]);

  return Shelf;
}();

exports.Shelf = Shelf;