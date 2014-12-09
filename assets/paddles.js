PONK.paddles.preload = function () {
    PONK.run.game.load.image('leftPaddleImage', PONK.config.LEFT_PADDLE_IMG);
    PONK.run.game.load.image('rightPaddleImage', PONK.config.RIGHT_PADDLE_IMG);

    PONK.run.game.load.physics('leftPaddlePhysics', PONK.config.LEFT_PADDLE_PHYSICS);
    PONK.run.game.load.physics('rightPaddlePhysics', PONK.config.RIGHT_PADDLE_PHYSICS);
    };

PONK.paddles.init = function () {
    PONK.paddles.leftPaddle = PONK.run.game.add.sprite(PONK.config.LEFT_PADDLE_X, PONK.config.PADDLE_SPAWN_Y, 'leftPaddleImage');
    PONK.run.game.physics.p2.enableBody(PONK.paddles.leftPaddle, true);    
    PONK.paddles.leftPaddle.body.damping = 0.9;
    PONK.paddles.leftPaddle.body.fixedRotation = true;
    PONK.paddles.leftPaddle.body.kinematic = true;

    PONK.paddles.leftPaddle.body.clearShapes();
    PONK.paddles.leftPaddle.body.loadPolygon('leftPaddlePhysics', 'leftPaddle');

// ^^^ This is my attempt at loading a hitmap to the left paddle. The shape 
// ^^^ clearing works, but the new definition breaks it entirely. No clue why.

    var leftPaddeCollisionGroup = PONK.run.game.physics.p2.createCollisionGroup();

    PONK.paddles.rightPaddle = PONK.run.game.add.sprite(PONK.config.RIGHT_PADDLE_X, PONK.config.PADDLE_SPAWN_Y, 'rightPaddleImage');
    PONK.run.game.physics.p2.enableBody(PONK.paddles.rightPaddle, true);
    PONK.paddles.rightPaddle.body.damping = 0.9;
    PONK.paddles.rightPaddle.body.fixedRotation = true;
    PONK.paddles.rightPaddle.body.kinematic = true;
    var rightPaddleCollisionGroup = PONK.run.game.physics.p2.createCollisionGroup();

    PONK.paddles.rightPaddle.body.clearShapes();
    PONK.paddles.rightPaddle.body.loadPolygon('rightPaddlePhysics', 'rightPaddle')

    };

PONK.paddles.vanish = function () {
    PONK.paddles.leftPaddle.exists = false;
    PONK.paddles.rightPaddle.exists = false;
    };

PONK.paddles.reset = function () {
    PONK.paddles.leftPaddle.exists = true;
    PONK.paddles.leftPaddle.body.y = PONK.config.PADDLE_SPAWN_Y;
    PONK.paddles.rightPaddle.exists = true;
    PONK.paddles.rightPaddle.body.y = PONK.config.PADDLE_SPAWN_Y;
    };

PONK.paddles.pause = function () {
    PONK.paddles.cache = {};
    PONK.paddles.cache.left = PONK.paddles.leftPaddle.body;
    PONK.paddles.cache.right = PONK.paddles.rightPaddle.body;
    PONK.paddles.vanish();
    };

PONK.paddles.unpause = function () {
    PONK.paddles.leftPaddle.exists = true;
    PONK.paddles.rightPaddle.exists = true;
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