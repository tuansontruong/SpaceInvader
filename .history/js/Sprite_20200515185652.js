class Sprite {
    constructor(divName, position, imgName, sizePx) {
        this.divName = divName;
        this.position = position;
        this.imgName = imgName;
        this.size = sizePx;
        this.anchorShift = new Point(-this.size.width / 2, -this.size.height / 2);
    }

    removeFromBoard() {
        $('#' + this.divName).remove();
    }

    draw() {
        $('#' + this.divName).css({
            "left": this.position.x;
            "right": this.position.y;
        });
    }

    setPosition(x, y, shift) {
        this.position.update(x, y);
        if (shift) {
            this.incrementPosition(this.anchorShift.x, this.anchorShift.y);
        }
    }
    updatePosition(x, y) {
        this.position.update(x, y)
    }
    incrementPosition(ix, iy) {
        this.position.increment(ix, iy);
    }
}