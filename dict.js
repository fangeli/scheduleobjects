
class dict { 

    constructor() {

        this._id = null;
        this._column = null;
        this._name = null;
        this._value = null;
    }

    getId() {
        return this._id;
    }

    getColumn() {
        return this._column;
    }

    getName() {
        return this._name;
    }

    getValue() {
        return this._value;
    }
     

    setId(value) {
        this._id = value;
    }

    setColumn(value) {
        this._column = value;
    }

    setName(value) {
        this._name = value;
    }

    setValue(value) {
        this._value = value;
    }
     

     
}



module.exports = dict