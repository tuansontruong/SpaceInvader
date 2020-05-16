const ImageFiles = {
    'Ship3': { width: 128, height: 128 },
    'shot3_asset': { width: 64, height: 64 },
    'enemy': { width: 64, height: 64 },
    'frame0000': { width: 128, height: 128 },
    'frame0001': { width: 128, height: 128 },
    'frame0002': { width: 128, height: 128 },
    'frame0003': { width: 128, height: 128 },
    'frame0004': { width: 128, height: 128 },
    'frame0005': { width: 128, height: 128 },
    'frame0006': { width: 128, height: 128 },
    'frame0007': { width: 128, height: 128 },
    'frame0008': { width: 128, height: 128 },
    'frame0009': { width: 128, height: 128 },
    'frame0010': { width: 128, height: 128 },
    'frame0011': { width: 128, height: 128 },
    'frame0012': { width: 128, height: 128 },
    'frame0013': { width: 128, height: 128 },
};


const WayPoints = {
    LEFTTORIGHTSHALLOW: [{
            x: 60,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            x: 60,
            y: 128,
            dir_x: 0,
            dir_y: 1
        },
        {
            x: 810,
            y: 128,
            dir_x: 1,
            dir_y: 0
        }
    ],
    STREAMFROMB180: [{
            x: 180,
            y: 620,
            dir_x: 0,
            dir_y: 0
        },
        {
            x: 180,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ]
};

let EnemySequences = [];


const GameSetting = {
    keyPress: {
        left: 37,
        right: 39,
        up: 38,
        down: 40,
        space: 32
    },
    FPS: 1000 / 60,

    bulletSpeed: 700 / 1000,
    bulletLife: 4000,
    bulletFireRate: 200,
    bulletTop: 10,

    playAreaWidth: 720,
    playAreaHeight: 576,
    playAreaDiv: '#playArea',

    playerDivName: 'playerSprite',
    playerStart: {
        x: 360,
        y: 440,
    },
    playerStartLives: 3,
    playerState: {
        ok: 0,
        dead: 1,
        hitFlashing: 2
    },
    playerMoveStep: 50,
    enemyState: {
        ready: 1,
        dead: 0,
        movingToWaypoint: 2
    },

    pressSpaceDelay: 3000,
    gamePhase: {
        ready: 1,
        playing: 3,
        gameOver: 4
    },

    countdownGap: 700,
    countDownValues: ['2', '1', 'GO!']


};

let GameManager = {
    assets: {},
    player: undefined,
    bullets: undefined,
    enemies: undefined,
    phase: GameSetting.gamePhase.ready,
    lastUpdated: Date.now(),
    elapsedTime: 0,
    fps: 0,
}