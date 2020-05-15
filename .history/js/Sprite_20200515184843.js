class Sprite {
    constructor(divName, position, imgName, sizePx) {
        this.divName = divName;
        this.position = position;
        this.imgName = imgName;
        this.size = sizePx;
        this.anchorShift = new Point(-this.size.width / 2, -this.size.heigtht / 2);
    }
}