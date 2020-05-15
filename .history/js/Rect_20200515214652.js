class Rect {
    constructor(x, y, width, height) {
        this.origin = new Point(x, y);
        this.size = new Size(width, height);
        this.max = new Point(this.origin.x + this.size.width, this.origin.y + this.size.height);
    }

    update(x, y) {
        this.origin.x = x;
        this.origin.y = y;
        this.max.x = this.origin.x + this.size.width;
        this.max.y = this.origin.y + this.size.height;
    }

    shift(x, y) {
        this.update(this.origin.x + x, this.origin.y + y);
    }

    OutsideHorizontal(x) {
        if (x < this.origin.x || x > this.max.x) {
            return true;
        } else {
            return false;
        }
    }
    OutsideVertical(x) {
        if (y < this.origin.y || y > this.max.y) {
            return true;
        } else {
            return false;
        }
    }
}