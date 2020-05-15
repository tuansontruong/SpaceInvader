function init() {

}

function proccessAsset(indexNum) {
    let img = new Image();
    let fileName = 'img/' + ImageFiles[indexNum] + '.png';
    img.src = fileName;
    img.onload = function() {
        GameManager.assets[ImageFiles[indexNum]] = {
            width: this.width,
            heigth: this.heigth,
            fileName: fileName
        };
        indexNum++;
        if (indexNum < ImageFiles.length) {
            proccessAsset(indexNum);
        } else {
            console.log("Assets Done:",
                GameManager.assets)
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
                    console.log("up");
                    break;
                case GameSetting.keyPresses.down:
                    console.log("down");
                    break;
                case GameSetting.keyPresses.left:
                    console.log("left");
                case GameSetting.keyPresses.right:
                    console.log("right");
                    break;
            }
        }
    );
});