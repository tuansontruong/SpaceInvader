$(function() {
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
                default:
                    break;
            }
        }
    );
});