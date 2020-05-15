$(function() {
    $(document).keydown(
        function(e) {
            switch (e.which) {
                case GameSetting.keyPresses.up:
                    console.log("up");
                    break;

                default:
                    break;
            }
        }
    );
});