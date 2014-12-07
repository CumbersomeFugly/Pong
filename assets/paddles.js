PONK.paddles.preload = function () {
    PONK.run.game.load.image('leftPaddle', PONK.config.LEFT_PADDLE_IMG);
    PONK.run.game.load.image('rightPaddle', PONK.config.RIGHT_PADDLE_IMG);
    };

PONK.paddles.init = function () {
    PONK.paddles.leftPaddle = PONK.run.game.add.sprite(PONK.config.LEFT_PADDLE_X, PONK.config.PADDLE_SPAWN_Y, 'leftPaddle');
    PONK.run.game.physics.p2.enableBody(PONK.paddles.leftPaddle, true);    
    PONK.paddles.leftPaddle.body.damping = 0.9;
    PONK.paddles.leftPaddle.body.fixedRotation = true;
    PONK.paddles.leftPaddle.body.kinematic = true;
    var leftPaddeCollisionGroup = PONK.run.game.physics.p2.createCollisionGroup();

    PONK.paddles.rightPaddle = PONK.run.game.add.sprite(PONK.config.RIGHT_PADDLE_X, PONK.config.PADDLE_SPAWN_Y, 'rightPaddle');
    PONK.run.game.physics.p2.enableBody(PONK.paddles.rightPaddle, true);
    PONK.paddles.rightPaddle.body.damping = 0.9;
    PONK.paddles.rightPaddle.body.fixedRotation = true;
    PONK.paddles.rightPaddle.body.kinematic = true;
    var rightPaddleCollisionGroup = PONK.run.game.physics.p2.createCollisionGroup();
    };

PONK.paddles.handleKeys = function () {

    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        PONK.paddles.leftPaddle.body.moveUp(PONK.config.PADDLE_VELOCITY);
        }

    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        PONK.paddles.leftPaddle.body.moveDown(PONK.config.PADDLE_VELOCITY);
        }
    
    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        PONK.paddles.rightPaddle.body.moveUp(PONK.config.PADDLE_VELOCITY);
        }

    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        PONK.paddles.rightPaddle.body.moveDown(PONK.config.PADDLE_VELOCITY);
        }

    // Add friction to the kinematic paddles:
    if (PONK.paddles.leftPaddle.body.velocity.y > PONK.config.PADDLE_DRAG) {
        PONK.paddles.leftPaddle.body.velocity.y -= PONK.config.PADDLE_DRAG;
    }

    else if (PONK.paddles.leftPaddle.body.velocity.y < (-1 * PONK.config.PADDLE_DRAG)) {
        PONK.paddles.leftPaddle.body.velocity.y += PONK.config.PADDLE_DRAG;
    }

    else {PONK.paddles.leftPaddle.body.velocity.y = 0;}


    if (PONK.paddles.rightPaddle.body.velocity.y > PONK.config.PADDLE_DRAG) {
        PONK.paddles.rightPaddle.body.velocity.y -= PONK.config.PADDLE_DRAG;
    }

    else if (PONK.paddles.rightPaddle.body.velocity.y < (-1 * PONK.config.PADDLE_DRAG)) {
        PONK.paddles.rightPaddle.body.velocity.y += PONK.config.PADDLE_DRAG;
    }

    else {PONK.paddles.rightPaddle.body.velocity.y = 0;}

    // Lock paddles' X positions:
    PONK.paddles.leftPaddle.body.x = PONK.config.LEFT_PADDLE_X;
    PONK.paddles.rightPaddle.body.x = PONK.config.RIGHT_PADDLE_X;

    // Make sure paddles stay in bounds (kinematics prevents normal collision):
    if (PONK.paddles.leftPaddle.body.y < PONK.config.MAX_PADDLE_Y) {
        PONK.paddles.leftPaddle.body.y = PONK.config.MAX_PADDLE_Y;
        }
        
    if (PONK.paddles.leftPaddle.body.y > PONK.config.MIN_PADDLE_Y) {
        PONK.paddles.leftPaddle.body.y = PONK.config.MIN_PADDLE_Y;
        }

    if (PONK.paddles.rightPaddle.body.y < PONK.config.MAX_PADDLE_Y) {
        PONK.paddles.rightPaddle.body.y = PONK.config.MAX_PADDLE_Y;
        }

    if (PONK.paddles.rightPaddle.body.y > PONK.config.MIN_PADDLE_Y) {
        PONK.paddles.rightPaddle.body.y = PONK.config.MIN_PADDLE_Y;
        }

    };