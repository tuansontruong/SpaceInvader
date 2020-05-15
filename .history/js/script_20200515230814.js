function resetBullet() {
    if (GameManager.bullets != undefined) {
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
    setTimeout(tick, GameSetting.targetFPS);

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
            resetGame();
        }
    }
}

function tick() {
    let now = Date.now();
    let dt = now - GameManager.lastUpdated;
    GameManager.lastUpdated = now;
    GameManager.fps = parseInt(1000 / dt);

    $('#divFPS').text("FPS: " + GameManager.fps);

    GameManager.bullets.update(dt);

    setTimeout(tick, GameSetting.targetFPS);
}

$(function() {
    proccessAsset(0)
    $(document).keydown(
        function(e) {
            switch (e.which) {
                case GameSetting.keyPresses.up:
                    GameManager.player.move(0, -1);
                    break;
                case GameSetting.keyPresses.down:
                    GameManager.player.move(0, 1);
                    break;
                case GameSetting.keyPresses.left:
                    GameManager.player.move(-1, 0);
                    break;
                case GameSetting.keyPresses.right:
                    GameManager.player.move(1, 0);
                    break;
            }
        }
    );
});