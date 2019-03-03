var WINDOW_WIDTH = 700;
var WINDOW_HEIGHT = 400;

window.onload = function(){
    var canvas = document.getElementById('canvas');
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    var context = canvas.getContext("2d");
    
    drawBall(context)
    setInterval(() => {
        moveBall(context)
    }, 50);
}
var ball = { x:50,y:50,radius:10,vx:5,vy:3,g:1.5 };

function drawBall(cxt){
    cxt.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
    cxt.beginPath();
    cxt.arc(  ball.x,ball.y, ball.radius, 0 , 2*Math.PI )
    cxt.fillStyle = "pink";
    cxt.closePath()
    cxt.fill()
}

function moveBall(cxt){
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy += ball.g;
    
    if( ball.y >= WINDOW_HEIGHT-ball.radius ){
        ball.y = WINDOW_HEIGHT-ball.radius;
        ball.vy = - ball.vy*0.75;
    }
    drawBall(cxt)
}