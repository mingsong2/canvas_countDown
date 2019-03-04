var WINDOW_WIDTH = 700;
var WINDOW_HEIGHT = 400;
var RADIUS = 8;
window.onload = function(){
    var num  =11; 
    var canvas = document.getElementById('canvas');
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    var cvsCtx = canvas.getContext('2d');
    renderDigit(num,cvsCtx);
}
function renderDigit(num,cvsCtx){
    cvsCtx.fillStyle = "rgb(0,102,153)";
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){
                cvsCtx.beginPath();
                cvsCtx.arc(RADIUS+1+2*j*(RADIUS + 1),RADIUS+1+i*2*(RADIUS+1),RADIUS,0,2*Math.PI,true);
                cvsCtx.closePath();
                cvsCtx.fill();
            }
        }
    }
}  
