function resetPlayer() {
    if (!GameManager.player) {
        let asset = GameManager.assets['Ship3'];
        GameManager.player = new Player(GameSetting.playerDivName,
            new Point(GameSetting.playerStart.x, GameSetting.playerStart.y),
            asset,
            new Rect(50, 50, GameSetting.playAreaWidth - 80, GameSetting.playAreaHeight - 95));
    }
    GameManager.player.addToBoard(1);
    console.log('resetPlayer()', GameManager.player);
    GameManager.player.reset();
}

function init() {
    resetPlayer();

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
            init();
        }
    }
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