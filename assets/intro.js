/*
This is supposed to be the start screen, but it currently crashes the game. The lines
//    PONK.intro.init();
and
//    PONK.intro.update();
are currently commented out of PONK.run for that reason.
*/


PONK.intro.init = function () {
    PONK.intro.message = PONK.run.game.add.text(PONK.config.CENTER_X, PONK.config.CENTER_Y, "PONK!\nPress spacebar to start.", {
        font: "45px Arial",
        fill: "#A349A4",
        align: "center"
        });

    PONK.intro.message.anchor.setTo(0.5, 0.5);
    PONK.intro();
    PONK.paddles.pause();
    PONK.ball.pause();
    PONK.score.vanish();
    PONK.pause.paused = true;	
    PONK.intro.introd = true;
    };

PONK.intro.update = function () {

    if (PONK.intro.introd === true;) {

        if (PONK.run.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
           	PONK.pause.unpause();
      	    }
        }
    };