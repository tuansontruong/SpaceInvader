class Enemy extends Sprite {
    constructor(divName, assetDesc, player, sequence) {
        super(divName, new Point(0, 0), assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
        this.state = GameSetting.enemyState.ready;
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

    checkIfCollisionWithPlayer() {
        if (this.containingBox.IntersectedBy(this.player.containingBox)) {
            if (this.player.isHit == false) {
                this.player.isHit = true;
            }
        }
    }

    update(dt) {
        switch (this.state) {
            case GameSetting.enemyState.movingToWaypoint:
                this.moveTowardPoint(dt);
                this.checkplayerCollision();
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
        this.state = GameSetting.enemyState.dead;
        this.removeFromBoard();
    }

    setMoving() {
        this.targetWayPointNumber = 0;
        this.targetWayPoint = this.waypointList[this.targetWayPointNumber];
        this.lastWayPointIndex = this.waypointList.length - 1;
        this.setPosition(this.targetWayPoint.point.x, this.targetWayPoint.point.y, false);
        this.addToBoard(false);

        // this.targetWayPointNumber = 1;
        // this.targetWayPoint = this.waypointList[this.targetWayPointNumber];
        this.state = GameSetting.enemyState.movingToWaypoint;
    }
}

class EnemyCollection {
    constructor(player, bullets) {
        this.listEnemies = [];
        this.lastAdded = 0;
        this.gameOver = false;
        this.sequenceIndex = 0;
        this.sequencesDone = false;
        this.count = 0;
        this.player = player;
        this.bullets = bullets;
    }

    reset() {
        this.killAll();
        this.listEnemies = [];
        this.lastAdded = 0;
        this.gameOver = false;
        this.sequenceIndex = 0;
        this.sequencesDone = false;
        this.count = 0;
    }
    killAll() {
        for (let i = 0; i < this.listEnemies.length; ++i) {
            this.listEnemies[i].remove();
        }
    }

    update(dt) {
        this.lastAdded += dt;
        if (!this.sequencesDone && EnemySequences[this.sequenceIndex].delayBefore < this.lastAdded) {
            this.addEnemy();
        }

        for (let i = this.listEnemies.length - 1; i >= 0; --i) {
            let enemy = this.listEnemies[i];
            if (enemy.state == GameSetting.enemyState.dead) {
                this.listEnemies.splice(i, 1);
            } else if (this.listEnemies[i].state == GameSetting.enemyState.movingToWaypoint) {
                for (let b = 0; b < this.bullets.listBullets.length; ++b) {
                    let bullet = this.bullets.listBullets[b];
                    if (!bullet.dead && bullet.position.y > GameSetting.bulletTop && enemy.containingBox.IntersectedBy(bullet.containingBox)) {
                        bullet.killBullet();
                        enemy.lives--;
                        if (enemy.lives <= 0) {
                            this.player.incrementScore(enemy.score);
                            enemy.remove();
                        }
                    }
                }
                enemy.update(dt);
            }
        }

        this.checkGameOver();
    }

    checkGameOver() {
        if (this.listEnemies.length == 0 && this.sequencesDone) {
            this.gameOver = true;
        }
    }

    addEnemy() {
        let seq = EnemySequences[this.sequenceIndex];
        let en_new = new Enemy('en_' + this.count, GameManager.assets[seq.image],
            this.player, seq);
        this.listEnemies.push(en_new);
        en_new.setMoving();
        this.count++;
        this.sequenceIndex++;
        this.lastAdded = 0;
        if (this.sequenceIndex == EnemySequences.length) {
            this.sequencesDone = true;
        }
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