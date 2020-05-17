class LocalStorage {
    constructor(itemName) {
        this.item = itemName;
    }
    getItem() {
        return localStorage.getItem(this.item);
    }
    setCurrentUser(dic) {
        this.getItem()
    }
}