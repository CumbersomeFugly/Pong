PONK.ball.preload = function () {
    PONK.run.game.load.image('ball', PONK.config.BALL_IMG);
    };

PONK.ball.init = function () {
    PONK.ball = PONK.run.game.add.sprite(PONK.config.BALL_SPAWN_X, PONK.config.BALL_SPAWN_Y, 'ball');
    PONK.run.game.physics.p2.enableBody(PONK.ball, true);
    PONK.ball.body.velocity.x = PONK.config.BALL_SPAWN_SPEED;
    PONK.ball.body.setCircle(PONK.config.BALL_RADIUS);

    PONK.ball.update = function () {
        var angle, currVelocitySqr, xVelocity, yVelocity;

        xVelocity = PONK.ball.body.data.velocity[0];
        yVelocity = PONK.ball.body.data.velocity[1];
  
        velocitySqr = xVelocity * xVelocity + yVelocity * yVelocity;
  
        if (velocitySqr > PONK.config.MAX_BALL_SPEED * PONK.config.MAX_BALL_SPEED) {
            angle = Math.atan2(yVelocity, xVelocity);
    
            xVelocity = Math.cos(angle) * PONK.config.MAX_BALL_SPEED;
            yVelocity = Math.sin(angle) * PONK.config.MAX_BALL_SPEED;
    
            PONK.ball.body.data.velocity[0] = xVelocity;
            PONK.ball.body.data.velocity[1] = yVelocity;
            }
        };
    };