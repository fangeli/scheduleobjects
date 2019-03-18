
class type { 

    constructor() {

        this._id = null;
        this._name = null;
        this._value = null;
    }

    getId() {
        return this._id;
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

    setName(value) {
        this._name = value;
    }

    setValue(value) {
        this._value = value;
    }
     

     
}



module.exports = type