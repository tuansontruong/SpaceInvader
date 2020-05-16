class Enemy extends Sprite {
    constructor(divName, assetDesc, player, sequence) {
        super(divName, new Point(0, 0), assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
        this.state = GameSettings.enemyState.ready;
        this.waypointList = [];
        this.targetWayPointNumber = 0;
        this.targetWayPoint = new Waypoint(0, 0, 0, 0);
        this.lastWayPointIndex = 0;
        this.player = player;
        this.score = sequence.score;
        this.lives = sequence.lives;
        this.speed = sequence.speed;
        this.readInWaypoints(sequence.waypoints);
    }

    readInWaypoints(wpList) {
        this.waypointList = [];
        for (let i = 0; i < wpList.length; ++i) {
            let t_wp = wpList[i];
            let n_wp = new Waypoint(
                t_wp.x + this.anchorShift.x,
                t_wp.y + this.anchorShift.y,
                t_wp.dir_x,
                t_wp.dir_y
            );
            this.waypointList.push(n_wp);
        }
    }

    update(dt) {
        switch (this.state) {
            case GameSettings.enemyState.movingToWaypoint:
                this.moveTowardPoint(dt);
                break;
        }
    }

    moveTowardPoint(dt) {
        let inc = dt * this.speed;
        this.incrementPosition(inc * this.targetWayPoint.dir_x, inc * this.targetWayPoint.dir_y);

        if (Math.abs(this.position.x - this.targetWayPoint.point.x) < Math.abs(inc) &&
            Math.abs(this.position.y - this.targetWayPoint.point.y) < Math.abs(inc)) {
            this.updatePosition(this.targetWayPoint.point.x, this.targetWayPoint.point.y);
        }

        if (this.position.equalToPoint(this.targetWayPoint.point.x, this.targetWayPoint.point.y)) {
            if (this.targetWayPointNumber == this.lastWayPointIndex) {
                this.remove();
            } else {
                this.setNextWayPoint();
            }
        }
    }

    setNextWayPoint() {
        this.targetWayPointNumber++;
        this.targetWayPoint = this.waypointList[this.targetWayPointNumber];
    }

    remove() {
        this.state = GameSettings.enemyState.dead;
        this.removeFromBoard();
    }

    setMoving() {
        this.targetWayPointNumber = 0;
        this.targetWayPoint = this.waypointList[this.targetWayPointNumber];
        this.lastWayPointIndex = this.waypointList.length - 1;
        this.setPosition(this.targetWayPoint.point.x, this.targetWayPoint.point.y, false);
        this.addToBoard(false);

        this.targetWayPointNumber = 1;
        this.targetWayPoint = this.waypointList[this.targetWayPointNumber];
        this.state = GameSettings.enemyState.movingToWaypoint;
    }
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
    addEnemySequence(2000, 'enemy', 100, 1, 200 / 1000,
        2, 800, WayPoints['LEFTTORIGHTSHALLOW']);
    addEnemySequence(4000, 'enemy', 100, 1, 400 / 1000,
        6, 400, WayPoints['STREAMFROMB180']);
    // console.log(EnemySequences);
}