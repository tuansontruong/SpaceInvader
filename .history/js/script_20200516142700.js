function resetEnemies() {
    GameManager.enemies = new EnemyCollection(GameManager.player);
}

function resetBullet() {
    if (GameManager.bullets) {
        GameManager.bullets.reset();
    } else {
        GameManager.bullets = new BulletCollection(GameManager.player);
    }
}

function resetPlayer() {
    if (!GameManager.player) {
        let asset = GameManager.assets['Ship3'];
        GameManager.player = new Player(GameSetting.playerDivName,
            new Point(GameSetting.playerStart.x, GameSetting.playerStart.y),
            asset,
            new Rect(45, 45, GameSetting.playAreaWidth - 80, GameSetting.playAreaHeight - 100));
    }
    GameManager.player.addToBoard(1);
    console.log('resetPlayer()', GameManager.player);
    GameManager.player.reset();
}

function resetGame() {
    resetPlayer();
    resetBullet();
    resetEnemies();

    GameManager.phase = GameSetting.gamePhase.readyToplay;
    GameManager.lastUpdated = Date.now();
    GameManager.elapsedTime = 0;

    writeMessage('Press Space To Start');
}

function proccessAsset(indexNum) {
    let img = new Image();
    let fileName = 'img/' + ImageFiles[indexNum] + '.png';
    img.src = fileName;
    img.onload = function() {
        GameManager.assets[ImageFiles[indexNum]] = {
            width: this.width,
            height: this.height,
            fileName: fileName
        };
        indexNum++;
        if (indexNum < ImageFiles.length) {
            proccessAsset(indexNum);
        } else {
            console.log("Assets Done:", GameManager.assets)
                // resetGame();
        }
    }
}

function tick() {
    let now = Date.now();
    let dt = now - GameManager.lastUpdated;
    GameManager.lastUpdated = now;
    // GameManager.fps = parseInt(1000 / dt);
    // $('#divFPS').text("FPS: " + GameManager.fps);
    GameManager.bullets.update(dt);
    GameManager.enemies.update(dt);

    if (GameManager.enemies.gameOver) {
        showGameOver();
    } else {
        setTimeout(tick, GameSetting.targetFPS);
    }
}

function endCountDown() {
    clearMessages();
    GameManager.phase = GameSetting.gamePhase.playing;
    GameManager.lastUpdated = Date.now();
    setTimeout(tick, GameSetting.targetFPS);
}

function runCountDown() {
    GameManager.phase = GameSetting.gamePhase.countdownToStart;
    writeMessage(3);
    for (let i = 0; i < GameSetting.countDownValues.length; ++i) {
        setTimeout(writeMessage, GameSetting.countdownGap * (i + 1), GameSetting.countDownValues[i]);
    }
    setTimeout(endCountDown, (GameSetting.countDownValues.length + 1) * GameSetting.countdownGap);
}

function clearMessages() {
    $('#messageContainer').empty();
}

function appendMessage(text) {
    $('#messageContainer').append('<div class="message">' + text + '</div>');
}

function writeMessage(text) {
    clearMessages();
    appendMessage(text);
}

function showGameOver() {
    GameManager.phase = GameSetting.gameOver;
    writeMessage('Game Over');
    setTimeout(function() { appendMessage('Press Space To Reset'); }, GameSetting.pressSpaceDelay);

}

$(function() {
    proccessAsset(0);
    setUpSequences();
    writeMessage("Press Space to Continue")
    $(document).keydown(
        function(e) {
            if (GameManager.phase == GameSettings.gamePhase.readyToplay) {
                if (e.which == GameSettings.keyPress.space) {
                    runCountDown();
                }
            } else if (GameManager.phase == GameSettings.gamePhase.playing) {
                switch (e.which) {
                    case GameSettings.keyPress.up:
                        GameManager.player.move(0, -1);
                        break;
                    case GameSettings.keyPress.down:
                        GameManager.player.move(0, 1);
                        break;
                    case GameSettings.keyPress.left:
                        GameManager.player.move(-1, 0);
                        break;
                    case GameSettings.keyPress.right:
                        GameManager.player.move(1, 0);
                        break;
                }
            } else if (GameManager.phase == GameSettings.gameOver) {
                if (e.which == GameSettings.keyPress.space) {
                    resetGame();
                }
            }
        }
    );
});