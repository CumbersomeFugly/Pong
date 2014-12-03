window.onload = function() {
    var game = new Phaser.Game(PONK.CON.SCREEN_WIDTH, PONK.CON.SCREEN_HEIGHT, 
            Phaser.AUTO, '', {preload: preload, create: create, update: 
            update});

    function preload () {
        game.load.image('logo', PONK.CON.LOADING_IMG);
        }

    function create () {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 
                'logo');
        logo.anchor.setTo(0.5, 0.5);
        }
        
    function update () {
        }
    };