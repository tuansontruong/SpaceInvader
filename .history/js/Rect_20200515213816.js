class Rect {
    constructor(x, y, width, height) {
        this.origin = new Point(x, y);
        this.size = new Size(width, height);
        this.max = new Point(this.origin.x + this.size.width, this.origin.y + this.size.height);
    }
}