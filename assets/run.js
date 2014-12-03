PONK.run = function() {
    var game = new Phaser.Game(PONK.config.SCREEN_WIDTH, PONK.config.SCREEN_HEIGHT, 
            Phaser.AUTO, '', {preload: preload, create: create, update: 
            update});

    function preload () {
        game.load.image('loadingScreen', PONK.config.LOADING_IMG);
        }

    function create () {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 
                'loadingScreen');
        logo.anchor.setTo(0.5, 0.5);
        }
        
    function update () {
        }
    };

window.onload = PONK.run;