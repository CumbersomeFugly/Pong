// Ye olde code mappe:
var PONK = {
    config : {},
    background : {},
    paddles : {},
    ball : {},
    run : {} // Starts phaser and handles updating.
    };

PONK.config.SCREEN_WIDTH = 600;
PONK.config.SCREEN_HEIGHT = 600;
PONK.config.CENTER_X = Math.floor(PONK.config.SCREEN_WIDTH / 2);
PONK.config.CENTER_Y = Math.floor(PONK.config.SCREEN_HEIGHT / 2);

PONK.config.PADDLE_WIDTH = Math.floor(PONK.config.SCREEN_WIDTH / 20);
PONK.config.PADDLE_HEIGHT = Math.floor(PONK.config.SCREEN_HEIGHT / 5);

PONK.config.LEFT_PADDLE_X = Math.floor(PONK.config.PADDLE_WIDTH / 2);
PONK.config.RIGHT_PADDLE_X = (PONK.config.SCREEN_WIDTH - 
        Math.floor(PONK.config.PADDLE_WIDTH / 2));
PONK.config.PADDLE_SPAWN_Y = (PONK.config.CENTER_Y);
PONK.config.PADDLE_VELOCITY = 450;

PONK.config.BALL_RADIUS = Math.floor(PONK.config.PADDLE_WIDTH / 2);
PONK.config.BALL_SPAWN_X = (PONK.config.CENTER_X);
PONK.config.BALL_SPAWN_Y = (PONK.config.CENTER_Y);
PONK.config.BALL_SPAWN_SPEED = (Math.floor(Math.random() * 2) == 0) ? -150 : 150;
// ^^^ The above line randomly determines which way the ball starts flying.

PONK.config.BACKGROUND_IMG = 'assets/images/background.png';
PONK.config.LEFT_PADDLE_IMG = 'assets/images/leftPaddle.png';
PONK.config.RIGHT_PADDLE_IMG = 'assets/images/rightPaddle.png';
PONK.config.BALL_IMG = 'assets/images/ball.png';

// Check to see if we are living the future. If we are living in the future and
// the E.C.M.A. has convinced modern browsers to have Object.create predefined,
// go with that definition. Otherwise add it as a method of the global Object.
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
        };
    }