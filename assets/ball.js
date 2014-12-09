/*
This is a kind of wonky way of doing this, but PONK.ball.preload and 
PONK.ball.init will only be called one time each during Phaser's start up. 
So it doesn't really matter that PONK.ball.init erases itself and 
PONK.ball.preload when it sets PONK.ball to a <quote>sprite,</quote> but it 
might be kind of confusing if you don't expect it. PONK.background does the 
same thing.
*/

PONK.ball.preload = function () {
    PONK.run.game.load.image('ball', PONK.config.BALL_IMG);
    };

PONK.ball.init = function () {
    PONK.ball = PONK.run.game.add.sprite(PONK.config.BALL_SPAWN_X, PONK.config.BALL_SPAWN_Y, 'ball');
    PONK.run.game.physics.p2.enableBody(PONK.ball, true);
    PONK.ball.body.velocity.x = PONK.config.BALL_SPAWN_SPEED;
    PONK.ball.body.damping = 0;
    PONK.ball.body.angularDamping = 0;
    PONK.ball.body.setCircle(PONK.config.BALL_RADIUS);
    var ballCollisionGroup = PONK.run.game.physics.p2.createCollisionGroup();

    PONK.ball.update = function () {

        if (PONK.ball.body.x > PONK.config.MAX_BALL_X) {
            PONK.ball.body.x = PONK.config.BALL_SPAWN_X;
            PONK.ball.body.y = PONK.config.BALL_SPAWN_Y;
            PONK.ball.body.velocity.x = (-1 * Math.abs(PONK.config.BALL_SPAWN_SPEED));
            PONK.ball.body.velocity.y = 0;
            PONK.ball.body.angularVelocity = 0;
            PONK.ball.body.rotation = 0;
            PONK.score.left.addScore();
            }
            
        else if (PONK.ball.body.x < PONK.config.MIN_BALL_X) {
            PONK.ball.body.x = PONK.config.BALL_SPAWN_X;
            PONK.ball.body.y = PONK.config.BALL_SPAWN_Y;
            PONK.ball.body.velocity.x = Math.abs(PONK.config.BALL_SPAWN_SPEED);
            PONK.ball.body.velocity.y = 0;
            PONK.ball.body.angularVelocity = 0;
            PONK.ball.body.rotation = 0;
            PONK.score.right.addScore();
            }
        };
    };    

