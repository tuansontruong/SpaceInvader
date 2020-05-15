class Player extends Sprite {
    constructor(divName, position, assetDesc) {
        super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
    }
}