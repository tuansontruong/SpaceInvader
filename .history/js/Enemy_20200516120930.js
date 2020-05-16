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