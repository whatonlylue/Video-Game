const canvas = document.getElementById("canvas1");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

//http://jsfiddle.net/loktar/dMYvG/
/*Citations of where I derived this code from. While its not exactly the same 
I borrowed the general Idea from these two links. 
*/

var color = [ "#9198e5" , "#91c2e5" , "#b491e5" , "#e59198" ]; 
var colorR = Math.floor(Math.random() * 4);

var ctx = canvas.getContext("2d");
    
var x = (window.innerWidth-10) / 2,
    y = (window.innerHeight-10) / 2,
    velY = 0,
    velX = 0,
    speed = 2,
    friction = 0.98,
    keys = [];

function update() {
    requestAnimationFrame(update);
    if (keys[38]) {
        if (velY > -speed) {
            velY--;
        }
    }
    if (keys[40]) {
        if (velY < speed) {
            velY++;
        }
    }
    if (keys[39]) {
        if (velX < speed) {
            velX++;
        }
    }
    if (keys[37]) {
        if (velX > -speed) {
            velX--;
        }
    }
    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;
    if (x >= window.innerWidth - 20) {
        x = window.innerWidth -20;
    } else if (x <= 5) {
        x = 5;
    }
    if (y >= window.innerHeight - 20) {
        y = window.innerHeight - 20;
    } else if (y <= 5) {
        y = 5;
    }
//linear-gradient(100deg,#e66465, #9198e5)
    ctx.beginPath();
    ctx.fillStyle = color[colorR];
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
}

update();

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

