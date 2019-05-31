
class schedule { 

    constructor() {

        this._id = null;
        this._idReport = null;
        this._json = null;
        this._startDate = null;
        this._path = null;
        this._state = null;
        this._da = null;
        this._a = null;
        this._timestamp = null;
        this._idUser = null;
        this._idCompany = null;
        this._requestedDate = null;
        this._idType = null;
        this._note = null;
    }

    getId()  {
        return this._id;
    }

    getIdReport() {
        return this._idReport;
    }

    getJson() {
        return this._json;
    }

    getStartDate() {
        return this._startDate;
    }

    getPath() {
        return this._path;
    }

    getState() {
        return this._state;
    }
    getDa() {
        return this._da;
    }

    getA() {
        return this._a;
    }

    getTimestamp() {
        return this._timestamp;
    }

    getIdUser() {
        return this._idUser;
    }

    getIdCompany() {
        return this._idCompany;
    }

    getRequestedDate() {
        return this._requestedDate;
    }

    getIdType() {
        return this._idType;
    }

    getNote() {
        return this._note;
    }

    setId(value) {
        this._id = value;
    }

    setIdReport(value) {
        this._idReport = value;
    }

    setJson(value) {
        this._json = value;
    }

    setStartDate(value) {
        this._startDate = value;
    }

    setPath(value) {
        this._path = value;
    }

    setState(value) {
        this._state = value;
    }

    setDa(value) {
        this._da = value;
    }

    setA(value) {
        this._a = value;
    }

    setTimestamp(value) {
        this._timestamp = value;
    }

    setIdUser(value) {
        this._idUser = value;
    }
     
    setIdCompany(value) {
        this._idCompany = value;
    }

    setRequestedDate(value) {
        this._requestedDate = value;
    }

    setIdType(value) {
        this._idType = value;
    }

    setNote(value) {
        this._note = value;
    }
}



module.exports = schedule