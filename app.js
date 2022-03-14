var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');
var dir, score, balls, fruite;
var scoreNum = document.getElementById('score');

console.log(score);

function init() {
    dir = 'right';
    score = 0;
    balls = [
        { x: 20, y: 20 },
        { x: 40, y: 20 },
        { x: 60, y: 20 },
    ]
    createFruites()
}
function createFruites() {
    fruite = { x: Math.floor(Math.random() * 40) * 20, y: Math.floor(Math.random() * 25) * 20 };
    for (i = 0; i < balls.length; i++) {
        ball = balls[i]
        if (fruite.x == ball.x && fruite.y == ball.y) {
            createFruites()
        }
    }
}

init();
function add() {
    var lastBalls = balls[balls.length - 1];


    if (dir == 'right') {
        balls.push({ x: lastBalls.x + 20, y: lastBalls.y });
    }
    if (dir == 'down') {
        balls.push({ x: lastBalls.x, y: lastBalls.y + 20 });
    }
    if (dir == 'left') {
        balls.push({ x: lastBalls.x - 20, y: lastBalls.y });
    }
    if (dir == 'up') {
        balls.push({ x: lastBalls.x, y: lastBalls.y - 20 });
    }
}

function animation() {
    ctx.clearRect(0, 0, 888, 555);
    balls.shift();
    add();
    lastBall = balls[balls.length - 1]
    if (lastBall.x == fruite.x && lastBall.y == fruite.y) {
        add();
        createFruites();
        score += 5;
        console.log(score);

    }
    for (i = 0; i < balls.length; i++) {

        if (balls[i] == lastBall) {
            ctx.fillStyle = 'green';
        } else {
            ctx.fillStyle = 'red';
        }
        let ball = balls[i];
        ctx.fillRect(ball.x, ball.y, 19, 19);
        if (ball.x > 780) {
            ball.x = 0;
        }
        if (ball.x < 0) {
            ball.x = 780;
        }
        if (ball.y > 480) {
            ball.y = 0;
        }
        if (ball.y < 0) {
            ball.y = 480;
        }
        if (ball.x == lastBall.x && ball.y == lastBall.y && i != balls.length - 1) {
            // alert('hi')
        }
        ctx.fillRect(fruite.x, fruite.y, 19, 19);
    }
}
animation();
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 37 && dir != 'right') {
        dir = 'left';
    }
    if (e.keyCode == 38 && dir != 'down') {
        dir = 'up';
    }
    if (e.keyCode == 39 && dir != 'left') {
        dir = 'right';
    }
    if (e.keyCode == 40 && dir != 'up') {
        dir = 'down';
    }
})
setInterval(animation, 222)