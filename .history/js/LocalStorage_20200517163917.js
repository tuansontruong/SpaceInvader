class LocalStorage {
    constructor(itemName) {
        this.item = itemName;
    }
    getItem() {
        return localStorage.getItem(this.item);
    }
    setItem(dic) {
        localStorage.setItem(dic);
    }
}