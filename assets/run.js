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
    
    PONK.background.init();
    PONK.ball.init();
    PONK.paddles.init();
    };
        
// If we only end up having PONK.run.update call PONK.paddles.handleKeys then 
// we could just define that as Phaser's update, but I suspect we'll end up 
// adding more to this loop.
PONK.run.update = function () {
    PONK.paddles.handleKeys();
    PONK.ball.update();
    };

window.onload = PONK.run.start;