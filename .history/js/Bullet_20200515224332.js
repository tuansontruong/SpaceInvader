class Bullet extends Sprite {
    constructor(divName, assetDesc, position) {
        super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
        this.life = GameSetting.bulletLife;
        this.dead = false;
        this.addToBoard(true);

    }
}