class LocalStorage {
    constructor(itemName) {
        this.item = itemName;
    }
    getItem(id) {
        return localStorage.getItem(id);
    }
    setCurrentUser(dic) {
        this.getItem()
    }
}