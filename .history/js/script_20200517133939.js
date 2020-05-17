$(function() {
    writeMessage('Press Space To Start');
    render();
    setUpSequences();
    $(document).keydown(
        function(e) {
            if (GameManager.phase == GameSetting.gamePhase.ready || GameManager.phase == GameSetting.gameOver) {
                if (e.which == GameSetting.keyPress.space) {
                    clearMessages()
                    gameInit();
                }
            } else if (GameManager.phase == GameSetting.gamePhase.playing) {
                switch (e.which) {
                    case GameSetting.keyPress.up:
                        GameManager.player.move(0, -1);
                        break;
                    case GameSetting.keyPress.down:
                        GameManager.player.move(0, 1);
                        break;
                    case GameSetting.keyPress.left:
                        GameManager.player.move(-1, 0);
                        break;
                    case GameSetting.keyPress.right:
                        GameManager.player.move(1, 0);
                        break;
                }
            }
        }
    );
});

function render() {
    // $('#explosion').empty();
    for (let key in ImageFiles) {
        GameManager.assets[key] = {
            width: ImageFiles[key].width,
            height: ImageFiles[key].height,
            fileName: 'img/' + key + '.png'
        }
    }
    console.log(GameManager.assets)
}

function initEnemies() {
    if (GameManager.enemies) {
        GameManager.enemies.reset();
    } else {
        GameManager.enemies = new EnemyCollection(GameManager.player, GameManager.bullets, GameManager.explosions);
    }
}

function initBullet() {
    if (GameManager.bullets) {
        GameManager.bullets.reset();
    } else {
        GameManager.bullets = new BulletCollection(GameManager.player);
    }
}

function initPlayer() {
    if (GameManager.player) {
        GameManager.player.reset();
    } else {
        let asset = GameManager.assets['Ship3'];
        GameManager.player = new Player(GameSetting.playerDivName,
            new Point(GameSetting.playerStart.x, GameSetting.playerStart.y),
            asset,
            new Rect(0, 0, GameSetting.playAreaWidth - 100, GameSetting.playAreaHeight - 100));
        GameManager.player.addToBoard(1);
    }
}

// function initExplosions() {
//     GameManager.explosions = new Explosions('frame0000');
// }

function gameInit() {
    initPlayer();
    initBullet();
    // initExplosions();
    initEnemies();

    GameManager.phase = GameSetting.gamePhase.playing;
    // GameManager.lastUpdated = Date.now();
    // GameManager.elapsedTime = 0;
    setTimeout(update, GameSetting.FPS);
}



function update() {
    let now = Date.now();
    let dt = now - GameManager.lastUpdated;
    GameManager.lastUpdated = now;

    GameManager.enemies.update(dt);


    if (GameManager.enemies.gameOver || GameManager.player.lives <= 0) {
        showGameOver();
    } else {
        GameManager.bullets.update(dt);
        GameManager.player.update(dt);
        setTimeout(update, GameSetting.FPS);
    }
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
    appendMessage('Game Over');
    appendMessage('Press Space To Reset');
    // setTimeout(function() { appendMessage('Press Space To Reset'); }, GameSetting.pressSpaceDelay);
}

function addEnemySequence(delayBefore, image, score, lives, speed, number, delayBetween, waypoints) {
    for (let i = 0; i < number; ++i) {
        let delay = delayBetween;
        if (i == 0) {
            delay = delayBefore;
        }
        EnemySequences.push({
            delayBefore: delay,
            image: image,
            waypoints: waypoints,
            score: score,
            lives: lives,
            speed: speed
        });
    }
}

function setUpSequences() {
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        5, 800, WayPoints['LEFTTORIGHTSHALLOW']);

    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        2, 400, WayPoints['STREAM300']);
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        2, 400, WayPoints['STREAM420']);

    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        5, 800, WayPoints['INLEFTDIAGUP']);



    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        1, 400, WayPoints['STREAM540']);
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        1, 400, WayPoints['STREAM660']);
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        5, 800, WayPoints['RIGHTTOLEFTSHALLOW']);

    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        5, 800, WayPoints['INRIGHTDIAGUP']);

    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        5, 800, WayPoints['INLEFTTURNDOWN']);
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        3, 400, WayPoints['STREAM300']);
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        2, 400, WayPoints['STREAM420']);
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        5, 800, WayPoints['INRIGHTTURNDOWN']);
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        3, 400, WayPoints['STREAM300']);
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        2, 400, WayPoints['STREAM420']);

    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        5, 800, WayPoints['INLEFTTURNUP'])
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        3, 400, WayPoints['STREAM300']);
    addEnemySequence(1000, 'enemy', 100, 1, 200 / 1000,
        2, 400, WayPoints['STREAM420']);

    // console.log(EnemySequences);
}




// function endCountDown() {
//     clearMessages();
//     GameManager.phase = GameSetting.gamePhase.playing;
//     GameManager.lastUpdated = Date.now();

// }

// function runCountDown() {
//     GameManager.phase = GameSetting.gamePhase.countdownToStart;
//     writeMessage(3);
//     for (let i = 0; i < GameSetting.countDownValues.length; ++i) {
//         setTimeout(writeMessage, GameSetting.countdownGap * (i + 1), GameSetting.countDownValues[i]);
//     }
//     setTimeout(endCountDown, (GameSetting.countDownValues.length + 1) * GameSetting.countdownGap);
// }