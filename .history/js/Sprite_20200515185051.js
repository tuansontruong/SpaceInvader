class Sprite {
    constructor(divName, position, imgName, sizePx) {
        this.divName = divName;
        this.position = position;
        this.imgName = imgName;
        this.size = sizePx;
        this.anchorShift = new Point(-this.size.width / 2, -this.size.height / 2);
    }
    setPosition(x, y, shift) {
        this.position.update(x, y);
        if (shift) {
            this.incrementPosition(this.anchorShift.x, this.anchorShift.y);
        }
    }
}