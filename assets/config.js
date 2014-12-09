// Ye olde code mappe:
var PONK = {
    config : {},
    intro : {},
    background : {},
    score : {},
    win : {},
    pause : {},
    paddles : {},
    ball : {},
    run : {} // Starts phaser and handles updating.
    };

var music;

PONK.config.SCREEN_WIDTH = 1200;
PONK.config.SCREEN_HEIGHT = 600;
PONK.config.CENTER_X = (PONK.config.SCREEN_WIDTH / 2);
PONK.config.CENTER_Y = (PONK.config.SCREEN_HEIGHT / 2);

PONK.config.PADDLE_WIDTH = 30;
PONK.config.PADDLE_HEIGHT = (PONK.config.SCREEN_HEIGHT / 5);

PONK.config.LEFT_PADDLE_X = (PONK.config.PADDLE_WIDTH / 2);
PONK.config.RIGHT_PADDLE_X = (PONK.config.SCREEN_WIDTH - 
        (PONK.config.PADDLE_WIDTH / 2));
PONK.config.PADDLE_SPAWN_Y = (PONK.config.CENTER_Y);
PONK.config.PADDLE_VELOCITY = 450;
PONK.config.PADDLE_DRAG = (PONK.config.PADDLE_VELOCITY / 20);

PONK.config.MAX_PADDLE_Y = (PONK.config.PADDLE_HEIGHT / 2);
PONK.config.MIN_PADDLE_Y = PONK.config.SCREEN_HEIGHT - PONK.config.MAX_PADDLE_Y;

PONK.config.BALL_RADIUS = (PONK.config.PADDLE_WIDTH / 2);
PONK.config.BALL_SPAWN_X = (PONK.config.CENTER_X);
PONK.config.BALL_SPAWN_Y = (PONK.config.CENTER_Y);
PONK.config.BALL_SPAWN_SPEED = (Math.floor(Math.random() * 2) === 0) ? -300 : 300;
// ^^^ The above line randomly determines which way the ball starts flying.
PONK.config.MAX_BALL_SPEED_X = 60;
PONK.config.MAX_BALL_SPEED_Y = 35;
PONK.config.MIN_BALL_X = (-1 * PONK.config.BALL_RADIUS);
PONK.config.MAX_BALL_X = (PONK.config.SCREEN_WIDTH + PONK.config.BALL_RADIUS);


PONK.config.BACKGROUND_IMG = 'assets/images/background.png';
PONK.config.LEFT_PADDLE_IMG = 'assets/images/leftPaddle.png';
PONK.config.RIGHT_PADDLE_IMG = 'assets/images/rightPaddle.png';
PONK.config.BALL_IMG = 'assets/images/ball.png';

PONK.config.LEFT_PADDLE_PHYSICS = 'assets/physics/leftPaddle.json';
PONK.config.RIGHT_PADDLE_PHYSICS = 'assets/physics/rightPaddle.json';

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