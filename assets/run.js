PONK.run.start = function() {
    PONK.run.game = new Phaser.Game(PONK.config.SCREEN_WIDTH, PONK.config.SCREEN_HEIGHT, 
            Phaser.AUTO, 'PONK!', {preload: PONK.run.preload, create: PONK.run.create, update: 
            PONK.run.update});
    };

PONK.run.preload = function () {
    PONK.run.game.load.image('loadingScreen', PONK.config.LOADING_IMG);
    PONK.run.game.load.image('background', PONK.config.BACKGROUND_IMG);
    PONK.run.game.load.image('leftPaddle', PONK.config.LEFT_PADDLE_IMG);
    PONK.run.game.load.image('rightPaddle', PONK.config.RIGHT_PADDLE_IMG);
    PONK.run.game.load.image('ball', PONK.config.BALL_IMG);
    };

PONK.run.create = function () {
    PONK.run.game.physics.startSystem(Phaser.Physics.P2JS);
    PONK.run.game.physics.p2.restitution = .01;
    
    // Don't let any of the following keys affect anything outside of our game:
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.DOWN]);
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP]);
    
    var background = PONK.run.game.add.sprite(PONK.config.BACKGROUND_X, PONK.config.BACKGROUND_Y, 'background');
    
    PONK.ball = PONK.run.game.add.sprite(PONK.config.BALL_SPAWN_X, PONK.config.BALL_SPAWN_Y, 'ball');
    PONK.paddles.rightPaddle = PONK.run.game.add.sprite(PONK.config.RIGHT_PADDLE_X, PONK.config.PADDLE_SPAWN_Y, 'rightPaddle');
    PONK.paddles.leftPaddle = PONK.run.game.add.sprite(PONK.config.LEFT_PADDLE_X, PONK.config.PADDLE_SPAWN_Y, 'leftPaddle');
    
    PONK.run.game.physics.p2.enableBody(PONK.ball, true);
    PONK.run.game.physics.p2.enableBody(PONK.paddles.rightPaddle, true);
    PONK.run.game.physics.p2.enableBody(PONK.paddles.leftPaddle, true);
    
    PONK.ball.body.fixedRotation = true;
    PONK.paddles.leftPaddle.body.fixedRotation = true;
    PONK.paddles.rightPaddle.body.fixedRotation = true;
    
    PONK.paddles.leftPaddle.body.damping = 0.9;
    PONK.paddles.rightPaddle.body.damping = 0.9;
    };
        
//Does this have to be PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.W) or something?

PONK.run.update = function () {

    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        PONK.paddles.leftPaddle.body.moveUp(PONK.config.PADDLE_SPEED);
        }

    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        PONK.paddles.leftPaddle.body.moveDown(PONK.config.PADDLE_SPEED);
        }
    
    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        PONK.paddles.rightPaddle.body.moveUp(PONK.config.PADDLE_SPEED);
        }

    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        PONK.paddles.rightPaddle.body.moveDown(PONK.config.PADDLE_SPEED);
        }
    };

window.onload = PONK.run.start;