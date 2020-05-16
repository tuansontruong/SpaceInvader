class Player extends Sprite {
    constructor(divName, position, assetDesc, boundaryRect) {
        super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
        this.lives = GameSetting.playerStartLives;
        this.score = 0;
        this.highScore = 0;
        this.state = GameSetting.playerState.ok;
        this.boundaryRect = boundaryRect; //for boudary
        this.isHit = false;
        this.lasthit = 0;
        this.setLives();
        this.setScore();
        this.setHighScore();
    }

    reset() {
        this.lives = GameSetting.playerStartLives;
        this.score = 0;
        this.isHit = false;
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

    update(dt) {
        switch (this.state) {
            case GameSettings.playerState.hitFlashing:
                this.lastFlash += dt;
                if (this.lastFlash > GameSettings.playerFlashTime) {
                    this.lastFlash = 0;
                    this.numFlashes++;
                    if (this.numFlashes == GameSettings.playerFlashes) {
                        this.state = GameSettings.playerState.ok;
                        $('#' + this.divName).show();
                        this.hit = false;
                        $('#' + this.divName).css({ 'opacity': '1.0' });
                    } else {
                        if (this.numFlashes % 2 == 1) {
                            $('#' + this.divName).hide();
                        } else {
                            $('#' + this.divName).show();
                        }
                    }
                }
                break;
        }

        if (this.hit == true && this.state != GameSettings.playerState.hitFlashing) {
            this.state = GameSettings.playerState.hitFlashing;
            this.lastFlash = 0;
            this.numFlashes = 0;
            this.lives--;
            this.setLives();
            console.log('player hit!!');
            if (this.lives > 0) {
                $('#' + this.divName).css({ 'opacity': GameSettings.playerFlashOpacity });
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