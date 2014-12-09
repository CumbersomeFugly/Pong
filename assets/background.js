PONK.background.preload = function () {
    PONK.run.game.load.image('background', PONK.config.BACKGROUND_IMG);
    PONK.run.game.load.audio('mainTheme', 'assets/sounds/mainTheme.mp3');
    };
    
PONK.background.init = function () {
    PONK.background = PONK.run.game.add.sprite(PONK.config.BACKGROUND_X, PONK.config.BACKGROUND_Y, 'background');
    PONK.config.music = PONK.run.game.sound.play('mainTheme');
    PONK.config.music.loop = true;
    };