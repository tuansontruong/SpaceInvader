class Bullet extends Sprite {
    constructor(divName, assetDesc, position) {
        super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
        this.life = GameSetting.bulletLife;
        this.dead = false;
        this.addToBoard(true);

    }

    update(dt) {
        let inc = dt * GameSetting.bulletSpeed;
        this.incrementPosition(0, -inc);
        this.life -= dt;
        if (!this.life) {
            this.remove();
        }
    }

    remove() {
        this.dead = true;
        this.removeFromBoard();
    }
}

class BulletCollection {
    constructor(player) {
        this.listBullets = [];
        this.lastAdded = 0;
        this.player = player;
        this.total_bullet = 0;
    }
}