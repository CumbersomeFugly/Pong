PONK.score.preload = function () {
    
    };

PONK.score.init = function () {

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
    };

PONK.score.update = function () {
    
    };