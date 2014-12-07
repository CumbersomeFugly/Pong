PONK.ball.preload = function () {
    PONK.run.game.load.image('ball', PONK.config.BALL_IMG);
    };

PONK.ball.init = function () {
    PONK.ball = PONK.run.game.add.sprite(PONK.config.BALL_SPAWN_X, PONK.config.BALL_SPAWN_Y, 'ball');
    PONK.run.game.physics.p2.enableBody(PONK.ball, true);
    PONK.ball.body.velocity.x = PONK.config.BALL_SPAWN_SPEED;
    PONK.ball.body.setCircle(PONK.config.BALL_RADIUS);
    var ballCollisionGroup = PONK.run.game.physics.p2.createCollisionGroup();
    
//This is the code to switch gravity once you determine which paddle you hit. -> PONK.run.game.physics.p2.gravity.x = 100;


//This is a kind of weird way to do this, but PONK.ball.preload and PONK.ball.init 

//Justin's stolen Internet algorithms for setting minimum and maximum speeds: 
    PONK.ball.update = function () {
        var angle, currVelocitySqr, xVelocity, yVelocity;

        xVelocity = PONK.ball.body.data.velocity[0];
        yVelocity = PONK.ball.body.data.velocity[1];
  
        velocitySqr = xVelocity * xVelocity + yVelocity * yVelocity;
  
        if (velocitySqr > PONK.config.MAX_BALL_SPEED_Y * PONK.config.MAX_BALL_SPEED_X) {
            angle = Math.atan2(yVelocity, xVelocity);
    
            xVelocity = Math.cos(angle) * PONK.config.MAX_BALL_SPEED_X;
            yVelocity = Math.sin(angle) * PONK.config.MAX_BALL_SPEED_Y;
    
            PONK.ball.body.data.velocity[0] = xVelocity;
            PONK.ball.body.data.velocity[1] = yVelocity;
            }
        };
    };