PONK.pause = function () {
    PONK.pause.message.setText("Game paused!\nPress spacebar to resume.");
    PONK.paddles.pause();
    PONK.ball.pause();
    PONK.score.vanish();
    PONK.pause.paused = true;	
    };

PONK.pause.unpause = function () {
	PONK.pause.paused = false;
    PONK.paddles.unpause();
    PONK.ball.unpause();
    PONK.pause.message.setText('');
    PONK.score.renderText();
    PONK.score.box.setText(PONK.score.text);
    }

PONK.score.preload = function () {
    
    };

PONK.pause.init = function () {
	PONK.pause.paused = false;
	PONK.pause.count = 0;
    PONK.pause.message = PONK.run.game.add.text(PONK.config.CENTER_X, PONK.config.CENTER_Y, '', {
        font: "45px Arial",
        fill: "#A349A4",
        align: "center"
        });

    PONK.pause.message.anchor.setTo(0.5, 0.5);
    };

PONK.pause.update = function () {

    PONK.pause.count += 1;

    if (PONK.win.won !== true) {

        if (PONK.pause.paused === false) {

        	if (PONK.pause.count > 25) {

                if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                	PONK.pause();
                	PONK.pause.count = 0;
                	}
                }
            }
        }

    if (PONK.pause.paused === true) {
   	    PONK.score.vanish();

        if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {

   	        if (PONK.pause.count > 25) {
                PONK.pause.count = 0;
                PONK.pause.unpause();
                }
            }
        }
    };