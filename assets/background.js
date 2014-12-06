PONK.background.preload = function () {
    PONK.run.game.load.image('background', PONK.config.BACKGROUND_IMG);
    };
    
PONK.background.init = function () {
    PONK.background = PONK.run.game.add.sprite(PONK.config.BACKGROUND_X, PONK.config.BACKGROUND_Y, 'background');
    };