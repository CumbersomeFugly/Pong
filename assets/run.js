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
    PONK.run.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    // Don't let any of the following keys affect anything outside of our game:
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.DOWN]);
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP]);
    
    var background = PONK.run.game.add.sprite(PONK.config.BACKGROUND_X, PONK.config.BACKGROUND_Y, 'background');    
    PONK.ball = PONK.run.game.add.sprite(PONK.config.BALL_SPAWN_X, PONK.config.BALL_SPAWN_Y, 'ball');

    PONK.paddles.rightPaddle = PONK.run.game.add.sprite(PONK.config.RIGHT_PADDLE_X, PONK.config.PADDLE_SPAWN_Y, 'rightPaddle');
    PONK.paddles.leftPaddle = PONK.run.game.add.sprite(PONK.config.LEFT_PADDLE_X, PONK.config.PADDLE_SPAWN_Y, 'leftPaddle');

    PONK.paddles.leftPaddle.body = new Phaser.Physics.Arcade.Body(PONK.paddles.leftPaddle);
    PONK.paddles.rightPaddle.body = new Phaser.Physics.Arcade.Body(PONK.paddles.rightPaddle);
    PONK.ball.body = new Phaser.Physics.Arcade.Body(PONK.ball);

    PONK.ball.body.velocity.x = 150;
    PONK.ball.body.collideWorldBounds = true;
    PONK.ball.body.bounce.y = 1;
    PONK.ball.body.bounce.x = 1;

    PONK.paddles.leftPaddle.body.collideWorldBounds = true;


    PONK.run.game.physics.arcade.enable(PONK.paddle.leftPaddle);
    PONK.paddles.leftPaddle.inputEnabled = true;

    PONK.run.game.physics.arcade.enable(PONK.paddle.rightPaddle);
    PONK.paddles.rightPaddle.body.collideWorldBounds = true;
    PONK.paddles.rightPaddle.inputEnabled = true;
    
    PONK.run.game.physics.arcade.enable(PONK.ball);

    };
        
//Does this have to be PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.W) or something?

PONK.run.update = function () {

    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        PONK.paddles.leftPaddle.y -= PONK.config.PADDLE_SPEED;
        }

    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        PONK.paddles.leftPaddle.y += PONK.config.PADDLE_SPEED;
        }
    
    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        PONK.paddles.rightPaddle.y -= PONK.config.PADDLE_SPEED;
        }

    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        PONK.paddles.rightPaddle.y += PONK.config.PADDLE_SPEED;
        }

    PONK.run.game.physics.arcade.collide(PONK.paddles.leftPaddle, PONK.ball);
    PONK.run.game.physics.arcade.collide(PONK.paddles.rightPaddle, PONK.ball);
    };

window.onload = PONK.run.start;