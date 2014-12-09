    PONK.score.left = {
        currentScore : 0,
    
        addScore : function () {
            PONK.score.left.currentScore += 1;

            if (PONK.score.left.currentScore > 9) {
                PONK.score.left.win();
                }
            },

        getScore : function () {
            return PONK.score.left.currentScore;
            },    

        win : function () {
            return PONK.score.left;
            } 
        };

    PONK.score.right = {
        currentScore : 0,
    
        addScore : function () {
            PONK.score.right.currentScore += 1;

            if (PONK.score.right.currentScore > 9) {
                PONK.score.right.win();
                }
            },

        getScore : function () {
            return PONK.score.right.currentScore;
            },    

        win : function () {
            return PONK.score.right;
            } 
        };

PONK.score.renderText = function () {
    PONK.score.text = (PONK.score.left.currentScore + " - " + PONK.score.right.currentScore);
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