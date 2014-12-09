    PONK.score.left = {
        currentScore : 0,
    
        addScore : function () {
            PONK.score.left.currentScore += 1;

            if (PONK.score.left.currentScore > 9) {
                PONK.win("Left");
                }
            },

        resetScore : function () {
            PONK.score.left.currentScore = 0;
            },

        getScore : function () {
            return PONK.score.left.currentScore;
            },    
        };

    PONK.score.right = {
        currentScore : 0,
    
        addScore : function () {
            PONK.score.right.currentScore += 1;

            if (PONK.score.right.currentScore > 9) {
                PONK.win("Right");
                }
            },

        resetScore : function () {
            PONK.score.right.currentScore = 0;
            },

        getScore : function () {
            return PONK.score.right.currentScore;
            },    
        };

PONK.score.renderText = function () {
    PONK.score.text = (PONK.score.left.currentScore + " - " + PONK.score.right.currentScore);
    };

PONK.score.vanish = function () {
    PONK.score.text = ("");
    PONK.score.box.setText(PONK.score.text);
    };

PONK.score.reset = function () {
    PONK.score.left.resetScore();
    PONK.score.right.resetScore();
    PONK.score.renderText();
    PONK.score.box.setText(PONK.score.text);
    };




PONK.score.preload = function () {
    
    };

PONK.score.init = function () {
    PONK.score.text = "0 - 0";

    PONK.score.box = PONK.run.game.add.text(PONK.config.CENTER_X, PONK.config.CENTER_Y, PONK.score.text, {
        font: "65px Arial",
        fill: "#A349A4",
        align: "center"
        });

    PONK.score.box.anchor.setTo(0.5, 0.5);
    };



PONK.score.update = function () {
	PONK.score.renderText();
    PONK.score.box.setText(PONK.score.text);
    };