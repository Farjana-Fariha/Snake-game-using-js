let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');

let balls, fruit, score, dir;

function init() {
    dir = 'right';
    fruit = 0;
    score = 0;
    balls = [
        { x: 20, y: 20 },
        { x: 40, y: 20 },
        { x: 60, y: 20 },
    ]
}

function animation() {
    ctx.clearRect(0, 0, 888, 555);
    balls.shift();
    add();
    
    for (i = 0; i < balls.length; i++) {
        if(balls[i] == balls[balls.length-1]){
            ctx.fillStyle='green';
        }else{
            ctx.fillStyle='red';
        }
        let ball = balls[i];
        ctx.fillRect(ball.x, ball.y, 19, 19);
      

    }
}
function add(){
    lastBall = balls[balls.length-1];
    if(dir == 'down'){
        balls.push({x:lastBall.x, y:lastBall.y+20}); 
    }else{
        balls.push({x:lastBall.x+20, y:lastBall.y});

    }

}
document.addEventListener('keydown',(e)=>{
    if(e.keyCode==40 && dir !='up'){
        dir = 'down';
    }
})
//function call
init();
animation();
setInterval(animation,222)

