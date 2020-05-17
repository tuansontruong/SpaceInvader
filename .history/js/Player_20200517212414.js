class Player extends Sprite {
    constructor(divName, position, assetDesc, boundaryRect, highScore) {
        super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
        this.lives = GameSetting.playerStartLives;
        this.score = 0;
        this.highScore = highScore;
        this.state = GameSetting.playerState.ok;
        this.boundaryRect = boundaryRect; //for boudary
        this.isHit = false;
        this.lasthit = 0;
        this.setLives();
        this.setScore();
        this.setHighScore();
    }

    reset() {
        $('#' + this.divName).css({ 'opacity': '1.0' });
        this.lives = GameSetting.playerStartLives;
        this.score = 0;
        this.isHit = false;
        this.state = GameSetting.playerState.ok;
        this.setLives();
        this.setScore();
        this.setHighScore();
        this.highScore = 0
        this.setPosition(GameSetting.playerStart.x, GameSetting.playerStart.y, 1)
    }

    incrementScore(amount) {
        this.score += amount;
        this.setScore();
        this.setHighScore();
    }

    update(dt) {

        // player got hit
        if (this.isHit && this.state !== GameSetting.playerState.hitFlashing) {
            this.state = GameSetting.playerState.hitFlashing;
            this.lives--;
            this.lasthit = 0;
            this.setLives();
            if (this.lives > 0) {
                $('#' + this.divName).css({ 'opacity': '0.5' });
            }
        }
        this.lasthit += dt;
        // set back to default
        if (this.state === GameSetting.playerState.hitFlashing) {
            if (this.lasthit > 1000) {
                this.state = GameSetting.playerState.ok;
                this.lasthit = 0;
                this.isHit = false;
                $('#' + this.divName).css({ 'opacity': '1.0' });
            }

        }
    }

    move(x, y) {
        let xStep = GameSetting.playerMoveStep * x;
        let yStep = GameSetting.playerMoveStep * y;

        // check boundary
        if (this.boundaryRect.outsideHorizontal(xStep + this.position.x)) xStep = 0;
        if (this.boundaryRect.outsideVertical(yStep + this.position.y)) yStep = 0;

        this.incrementPosition(xStep, yStep);
    }

    setLives() {
        $('#lives').text('Lives: x' + this.lives);
    }

    setScore() {
        $('#score').text('Current Score: ' + this.score);
    }

    setHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score
        }
        $('#highScore').text('High Score: ' + this.highScore);
    }
}