PONK.win = function (direction) {
    PONK.win.message.setText(direction + " player wins!\nPress spacebar to play again.");
    PONK.paddles.vanish();
    PONK.ball.vanish();
    PONK.win.won = true;	
    };

PONK.score.preload = function () {
    
    };

PONK.win.init = function () {
    PONK.win.message = PONK.run.game.add.text(PONK.config.CENTER_X, PONK.config.CENTER_Y, '', {
        font: "45px Arial",
        fill: "#A349A4",
        align: "center"
        });

    PONK.win.message.anchor.setTo(0.5, 0.5);
    };

PONK.win.update = function () {
    if (PONK.win.won === true) {
        PONK.pause.count = 0;
   	    PONK.score.vanish();
        if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            PONK.win.won = false;
            PONK.paddles.reset();
            PONK.ball.reset();
            PONK.win.message.setText('');
            PONK.score.reset();
            }
        }
    };