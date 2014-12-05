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
    
    //Capture keys from the browser.
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.DOWN]);
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP]);
    
    //var rightPaddleUpKey = PONK.run.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    //rightPaddleUpKey.onDown.add(this.bird.flap, this.bird);

    
    
    var background = PONK.run.game.add.sprite(PONK.run.game.world.centerX, PONK.run.game.world.centerY, 
            'background');
    PONK.paddles.leftPaddle = PONK.run.game.add.sprite(PONK.config.LEFT_PADDLE_X, PONK.config.PADDLE_SPAWN_Y, 'leftPaddle');
    PONK.paddles.leftPaddle.body.collideWorldBounds = true;
    PONK.paddles.leftPaddle.inputEnabled = true;
    PONK.paddles.leftPaddle

    var rightPaddle = PONK.run.game.add.sprite(PONK.config.RIGHT_PADDLE_X, PONK.config.PADDLE_SPAWN_Y, 'rightPaddle');
    rightPaddle.body.collideWorldBounds = true;
    rightPaddle.inputEnabled = true;

    //PONK.run.game.rightPaddle
    
    var ball = PONK.run.game.add.sprite(PONK.config.BALL_SPAWN_X, PONK.config.BALL_SPAWN_Y, 'ball');
    ball.body.bounce.y = 1;
    ball.body.bounce.x = 1;
    ball.body.collideWorldBounds = true;

    ball.body.velocity.x=150;

    background.anchor.setTo(0.5, 0.5);
    };
        


//Does this have to be PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.W) or something?

PONK.run.update = function () {

    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        PONK.paddles.leftPaddle.y -= PONK.config.PADDLE_SPEED;
        }

    else if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        PONK.paddles.leftPaddle.y += PONK.config.PADDLE_SPEED;
        }
    
    if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.I)) {
        rightPaddle.x -= PONK.config.PADDLE_SPEED;
        }

    else if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.K)) {
        rightPaddle.x += PONK.config.PADDLE_SPEED;
        }


    };

/*
This code is broken as fuck. It seems to me that the above version of 
PONK.run.update should handle the keys and update the positions of the paddles.
It is based off the keyboard input example at 
http://dev.phaser.io/examples/input/keyboard
and it breaks the game entirely. The screen goes all black if it is used. The
below version of PONK.run.update is replaceing the above version. The below
version does nothing, which allows everything to load in its initial position.
*/

PONK.run.update = function () {
        if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        PONK.paddles.leftPaddle.y -= PONK.config.PADDLE_SPEED;
        }
    };

window.onload = PONK.run.start;