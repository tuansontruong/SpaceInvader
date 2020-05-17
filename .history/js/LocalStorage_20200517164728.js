class LocalStorage {
    constructor(itemName) {
        this.item = itemName;
    }
    getItem() {
        return JSON.parse(localStorage.getItem(this.item));
    }
    setItem(dic) {
        localStorage.setItem(this.item, JSON.stringify(dic));
    }
}