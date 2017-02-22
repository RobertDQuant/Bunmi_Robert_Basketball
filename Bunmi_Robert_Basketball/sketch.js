
var y = 0; //this is to make the ball move on hte y-axis
var speed = 5; 

function setup() {
  createCanvas(600, 480);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(3);
  fill("orange"); // a basketball
  ellipse(240, y, 100, 100);
  
  if (y > height) {
    speed = -5; //how fast the ball bounces
  }
  if(y < 0) { // to make the ball bounce back up
    speed = 5;
  }  
 y = y + speed; 
 

  }
  
   function mousePressed() {
   speed = 0;
 }
 
    function mousePressed() {
   speed = 5;
   
}