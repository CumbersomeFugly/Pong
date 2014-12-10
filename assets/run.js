PONK.run.start = function() {
    PONK.run.game = new Phaser.Game(PONK.config.SCREEN_WIDTH, PONK.config.SCREEN_HEIGHT, 
            Phaser.AUTO, 'PONK!', {preload: PONK.run.preload, create: PONK.run.create, update: 
            PONK.run.update});
    };

PONK.run.preload = function () {
    PONK.background.preload();
    PONK.paddles.preload();
    PONK.ball.preload();
    };

PONK.run.create = function () {
    PONK.run.game.world.setBounds(-100, 0, PONK.config.SCREEN_WIDTH + 200, PONK.config.SCREEN_HEIGHT);
    PONK.run.game.physics.startSystem(Phaser.Physics.P2JS);
    PONK.run.game.physics.p2.restitution = 1;
//    PONK.run.game.physics.p2.updateBoundsCollisionGroup();
  
    // Don't let any of the following keys affect anything outside of our game:
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.DOWN]);
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP]);
    PONK.run.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    
    PONK.background.init();
    PONK.score.init();
    PONK.win.init();
    PONK.pause.init();
    PONK.ball.init();
    PONK.paddles.init();
    PONK.run.game.debug.currentAlpha = 0;
//    PONK.intro.init();
    };
        
PONK.run.update = function () {
    PONK.score.update();
    PONK.paddles.handleKeys();
    PONK.ball.update();
    PONK.win.update();
    PONK.pause.update();
    PONK.config.music.loop = true;

//    PONK.intro.update();
    };

window.onload = PONK.run.start;