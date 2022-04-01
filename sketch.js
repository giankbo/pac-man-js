// Dev: G (giankbo) //

const canvas = document.getElementById('pacmanArea');
const ctx = canvas.getContext('2d');

let x = 100;
let y = 100;
let radius = 50;
let speed = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

// Little game setup

function littleGame() {
    requestAnimationFrame(littleGame);
    emptyCanvas();
    inputs();
    borderLimit();
    littlePacman();
}

function borderLimit() {
    // up
    if (y < radius) {
        y = radius;
    }
    // down
    if (y > canvas.height - radius) {
        y = canvas.height - radius;
    }
    // left
    if (x < radius) {
        x = radius;
    }
    // right
    if (x > canvas.width - radius) {
        x  = canvas.width - radius;
    }    
}

function inputs() {
    if (upPressed) {
        y = y - speed;
    }
    if (downPressed) {
        y = y + speed;
    }
    if (leftPressed) {
        x = x - speed;
    }
    if (rightPressed) {
        x = x + speed;
    }
}

function littlePacman() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0.25 * Math.PI, 1.25 * Math.PI, false);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0.75 * Math.PI, 1.75 * Math.PI, false); 
    ctx.fill();
}

function emptyCanvas(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener('keydown',keyDown); // key pressed
document.body.addEventListener('keyup', keyUp); // key not pressed

function keyDown(event) {
    //up
    if (event.keyCode == 38) {
        upPressed = true;
    }
    //down
    if (event.keyCode == 40) {
        downPressed = true;
    }
    //left
    if (event.keyCode == 37) {
        leftPressed = true;
    }
    //right
    if (event.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUp(event) {
    //up
    if (event.keyCode == 38) {
        upPressed = false;
    }
    //down
    if (event.keyCode == 40) {
        downPressed = false;
    }
    //left
    if (event.keyCode == 37) {
        leftPressed = false;
    }
    //right
    if (event.keyCode == 39) {
        rightPressed = false;
    }
}

littleGame();