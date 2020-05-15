class Player extends Sprite {
    constructor(divName, position, assetDesc) {
        super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
        this.lives = GameSetting.playerStartLives;
        this.score = 0;
        this.highScore = 0;
        this.state = GameSetting.playerState.ok;
    }

    reset() {
        this.lives = GameSetting.playerStartLives;
        this.score = 0;
        this.state = GameSetting.playerState.ok;
    }

    incrementScore(amount) {
        this.score += amount;
    }

    setLives() {
        $('lives').text('x' + this.lives);
    }

    setScore() {
        $('score').text('x' + this.score);
    }
}