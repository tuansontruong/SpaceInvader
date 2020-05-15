class Player extends Sprite {
    constructor(divName, position, assetDesc, boundaryRect) {
        super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
        this.lives = GameSetting.playerStartLives;
        this.score = 0;
        this.highScore = 0;
        this.state = GameSetting.playerState.ok;
        this.boundaryRect = boundaryRect;
        this.boundaryRect.shift(this.anchorShift.x, this.anchorShift.y)
    }

    reset() {
        this.lives = GameSetting.playerStartLives;
        this.score = 0;
        this.state = GameSetting.playerState.ok;
        this.setLives();
        this.setScore();
        this.setHighScore();
        this.setPosition(GameSetting.playerStart.x, GameSetting.playerStart.y, 1)
    }

    incrementScore(amount) {
        this.score += amount;
        this.setScore();
        this.setHighScore();
    }

    move(x, y) {
        let xStep = this.boundaryRect.outsideHorizontal(this.position.x) ? 0 : GameSetting.playerMoveStep * x;
        let yStep = this.boundaryRect.outsideHorizontal(this.position.y) ? 0 : GameSetting.playerMoveStep * y;


        this.incrementPosition(xStep, yStep);
    }

    setLives() {
        $('#lives').text('x' + this.lives);
    }

    setScore() {
        $('#score').text(this.score);
    }

    setHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score
        }
        $('#highScore').text(this.highScore);
    }
}