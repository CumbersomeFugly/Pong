PONK.ball.preload = function () {
    PONK.run.game.load.image('ball', PONK.config.BALL_IMG);
    };

PONK.ball.init = function () {
    PONK.ball = PONK.run.game.add.sprite(PONK.config.BALL_SPAWN_X, PONK.config.BALL_SPAWN_Y, 'ball');
    PONK.run.game.physics.p2.enableBody(PONK.ball, true);
    PONK.ball.body.velocity.x = PONK.config.BALL_SPAWN_SPEED;
    PONK.ball.body.setCircle(15);
    };
