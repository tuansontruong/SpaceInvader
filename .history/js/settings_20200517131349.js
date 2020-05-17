const ImageFiles = {
    'Ship3': { width: 128, height: 128 },
    'shot3_asset': { width: 64, height: 64 },
    'enemy': { width: 64, height: 64 },
};


const WayPoints = {
    STREAM60: [{
            rotation: 0,
            x: 60,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 60,
            y: 620,
            dir_x: 0,
            dir_y: 1
        }
    ],
    // STREAM180: [{
    //         rotation: 0,
    //         x: 180,
    //         y: -90,
    //         dir_x: 0,
    //         dir_y: 0
    //     },
    //     {
    //         rotation: 0,
    //         x: 180,
    //         y: 620,
    //         dir_x: 0,
    //         dir_y: 1
    //     }
    // ],
    STREAM300: [{
            rotation: 0,
            x: 300,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 300,
            y: 620,
            dir_x: 0,
            dir_y: 1
        }
    ],
    STREAM420: [{
            rotation: 0,
            x: 420,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 420,
            y: 620,
            dir_x: 0,
            dir_y: 1
        }
    ],
    STREAM540: [{
            rotation: 0,
            x: 540,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 540,
            y: 620,
            dir_x: 0,
            dir_y: 1
        }
    ],
    STREAM660: [{
            rotation: 0,
            x: 660,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 660,
            y: 620,
            dir_x: 0,
            dir_y: 1
        }
    ],
    STREAM60RETURN: [{
            rotation: 0,
            x: 60,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 60,
            y: 512,
            dir_x: 0,
            dir_y: 1
        }, {
            rotation: 0,
            x: 60,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAM180RETURN: [{
            rotation: 0,
            x: 180,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 180,
            y: 512,
            dir_x: 0,
            dir_y: 1
        }, {
            rotation: 0,
            x: 180,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAM300RETURN: [{
            rotation: 0,
            x: 300,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 300,
            y: 512,
            dir_x: 0,
            dir_y: 1
        }, {
            rotation: 0,
            x: 300,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAM420RETURN: [{
            rotation: 0,
            x: 420,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 420,
            y: 512,
            dir_x: 0,
            dir_y: 1
        }, {
            rotation: 0,
            x: 420,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAM540RETURN: [{
            rotation: 0,
            x: 540,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 540,
            y: 512,
            dir_x: 0,
            dir_y: 1
        }, {
            rotation: 0,
            x: 540,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAM660RETURN: [{
            rotation: 0,
            x: 660,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 660,
            y: 512,
            dir_x: 0,
            dir_y: 1
        }, {
            rotation: 0,
            x: 660,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    LEFTTORIGHTDEEP: [{
            rotation: 0,
            x: 60,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 60,
            y: 448,
            dir_x: 0,
            dir_y: 1
        },
        {
            rotation: 0,
            x: 810,
            y: 448,
            dir_x: 1,
            dir_y: 0
        }
    ],
    LEFTTORIGHTSHALLOW: [{
            rotation: 0,
            x: 60,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 60,
            y: 128,
            dir_x: 0,
            dir_y: 1
        },
        {
            rotation: 0,
            x: 810,
            y: 128,
            dir_x: 1,
            dir_y: 0
        }
    ],

    RIGHTTOLEFTDEEP: [{
            rotation: 0,
            x: 660,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 660,
            y: 448,
            dir_x: 0,
            dir_y: 1
        },
        {
            rotation: 0,
            x: -90,
            y: 448,
            dir_x: -1,
            dir_y: 0
        }
    ],

    RIGHTTOLEFTSHALLOW: [{
            rotation: 0,
            x: 660,
            y: -90,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 660,
            y: 128,
            dir_x: 0,
            dir_y: 1
        },
        {
            rotation: 0,
            x: -90,
            y: 128,
            dir_x: -1,
            dir_y: 0
        }
    ],

    INLEFTTURNDOWN: [{
            rotation: 0,
            x: -90,
            y: 256,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 480,
            y: 256,
            dir_x: 1,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 480,
            y: 620,
            dir_x: 0,
            dir_y: 1
        }
    ],
    INRIGHTTURNDOWN: [{
            rotation: 0,
            x: 810,
            y: 256,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 240,
            y: 256,
            dir_x: -1,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 240,
            y: 620,
            dir_x: 0,
            dir_y: 1
        }
    ],
    INLEFTTURNUP: [{
            x: -90,
            y: 384,
            dir_x: 0,
            dir_y: 0
        },
        {
            x: 480,
            y: 384,
            dir_x: 1,
            dir_y: 0
        },
        {
            x: 480,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    INRIGHTTURNUP: [{
            x: 810,
            y: 384,
            dir_x: 0,
            dir_y: 0
        },
        {
            x: 240,
            y: 384,
            dir_x: -1,
            dir_y: 0
        },
        {
            x: 240,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    INLEFTDIAGUP: [{
            x: 120,
            y: 620,
            dir_x: 0,
            dir_y: 0
        },
        {
            x: 120,
            y: 512,
            dir_x: 0,
            dir_y: -1
        },
        {
            x: 504,
            y: 128,
            dir_x: 1,
            dir_y: -1
        },
        {
            x: 504,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    INRIGHTDIAGUP: [{
            x: 504,
            y: 620,
            dir_x: 0,
            dir_y: 0
        },
        {
            x: 504,
            y: 512,
            dir_x: 0,
            dir_y: -1
        },
        {
            x: 120,
            y: 128,
            dir_x: -1,
            dir_y: -1
        },
        {
            x: 120,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAMFROMB60: [{
            rotation: 0,
            x: 60,
            y: 620,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 60,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAMFROMB180: [{
            rotation: 0,
            x: 180,
            y: 620,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 180,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAMFROMB300: [{
            rotation: 0,
            x: 300,
            y: 620,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 300,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAMFROMB420: [{
            rotation: 0,
            x: 420,
            y: 620,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 420,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAMFROMB540: [{
            rotation: 0,
            x: 540,
            y: 620,
            dir_x: 0,
            dir_y: -1
        },
        {
            rotation: 0,
            x: 540,
            y: -90,
            dir_x: 0,
            dir_y: -1
        }
    ],
    STREAMFROMB660: [{
            rotation: 0,
            x: 660,
            y: 620,
            dir_x: 0,
            dir_y: 0
        },
        {
            rotation: 0,
            x: 660,
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
    gamePhase: {
        ready: 1,
        playing: 3,
        gameOver: 4
    },
    explosionTimeout: 500


};

let GameManager = {
    assets: {},
    player: undefined,
    bullets: undefined,
    enemies: undefined,
    explosions: undefined,
    phase: GameSetting.gamePhase.ready,
    lastUpdated: Date.now(),
    elapsedTime: 0,
    fps: 0,
}