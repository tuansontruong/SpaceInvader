class MyLocalStorage {
    constructor(itemName) {
        this.item = itemName;
    }
    getItem() {
        return JSON.parse(localStorage.getItem(this.item));
    }
    setItem(dic) {
        localStorage.setItem(this.item, JSON.stringify(dic));
    }

    setCurrenUser(dic) {
        this.getItem().currentUser = dic;
        this.setItem(this.getItem());
    }

    setgameHistory(arr) {
        this.getItem()['gameHistory'].setItem(arr);
        console.log(this.getItem().gameHistory[1].highScore);
        this.setItem(this.getItem());
    }
}