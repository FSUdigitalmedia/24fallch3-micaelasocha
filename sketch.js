let x1 = 100;     // x1 position of the ball
let y1 = 0;       // y1 position of the ball
let x1Speed = 3;  // speed in X1 direction
let y1Speed = 7; // speed in Y1 direction
let d1 = 20;      // diameter of the ball

let x2 = 100;     // x1 position of the ball
let y2 = 0;       // y1 position of the ball
let x2Speed = 2;  // speed in X1 direction
let y2Speed = 3; // speed in Y1 direction
let d2 = 20;      // diameter of the ball

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("blue"); // try commenting this out!
 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;  
  }
  x1 = x1 + x1Speed; // adding a negative x1Speed *decreases* x1, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1;  
  }
  y1 = y1 + y1Speed;

    circle(x1, y1, d1);function draw() {}
   
    
    // if x hits the right side or the left side of the canvas,
    // switch directions...
    if (x2 > width || x2 < 0) {
      x2Speed = x2Speed * -1;  
    }
    x2 = x2 + x2Speed; // adding a negative x1Speed *decreases* x1, right?
    
    // same as above, but for the top and bottom of the canvas
    if (y2 > width || y2 < 0) {
      y2Speed = y2Speed * -1;  
    }
    y2 = y2 + y2Speed;
  
    square(x2, y2, d2);
}