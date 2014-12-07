var PONK.score = Object.create();

PONK.score.current = 0;

PONK.score.update = function(){
    PONK.score.current+=1;
};
PONK.score.reset = function(){
    PONK.score = 0;
};

var PONK.score.rightScore = Object.create(PONK.score);