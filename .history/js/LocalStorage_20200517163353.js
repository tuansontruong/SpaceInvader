class LocalStorage {
    constructor(localStorage) {
        this.localStorage = localStorage;
    }
    getItem(id) {
        return localStorage.getItem(id);
    }
    setCurrentUser(dic) {

    }
}