PONK.background.preload = function () {
    PONK.run.game.load.image('background', PONK.config.BACKGROUND_IMG);
    PONK.run.game.load.audio('mainTheme', 'assets/sounds/mainTheme.ogg');
    };
    
PONK.background.init = function () {
    PONK.background = PONK.run.game.add.sprite(PONK.config.BACKGROUND_X, PONK.config.BACKGROUND_Y, 'background');
    var music;
    PONK.config.music = PONK.run.game.sound.play('mainTheme');
    PONK.config.music.loop = true;
    //NOTE TO JUSTIN: Run "PONK.config.music.loop" through your console. Why's it set to false in the game when I'm clearly assigning it to true here?
    };