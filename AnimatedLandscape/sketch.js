//custom variable for x coordinate of cloud
let cloudOneX = 50;
let cloudWidth = 80;

//custom variable for shooting stars
let lineXone = 0;
let lineYone = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('navy'); //navy background
  frameRate(15); //set frame rate to 15

  //shooting star
  stroke("yellow");
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);

  //moon
  fill(255);
  stroke(0);
  circle(350, 50, 100);

  //overlapping navy circle for crescent moon
  stroke("navy");
  fill("navy");
  circle(320, 50, 100);

  //big gray mountains
  stroke(0);
  fill(80);
  triangle(-40, 300, 75, 100, 250, 300);
  triangle(100, 300, 300, 100, 500, 300);

  //grass
  fill('rgb(50,76,50)');
  rect(0, 300, 400, 100);

  //cloud
  fill(255);
  cloudOneX = cloudOneX - 0.5 * cloudWidth; //allows new clouds to appear off the canvas, giving a better illusion of a new cloud
  ellipse(cloudOneX, 50, cloudWidth, 40);
  ellipse(cloudOneX - 40, 100, 60, 20);
  ellipse(cloudOneX + 20, 150, 40, 10);

  //growing tree
  //trunk
  fill("rgb(118,80,72)");
  rect(40, 270, 15, 50);
  //leaves
  fill("green");
  let treeFrameCount = frameCount / 4;
  triangle(25, 270, 45, 240 - treeFrameCount % 290, 70, 270);

  //trunk
  fill("rgb(118,80,72)");
  rect(340, 330, 15, 50);
  //leaves
  fill("green");
  triangle(325, 330, 345, 240 - treeFrameCount % 290, 370, 330);

  //sets the x coordinate to the frame count
  //resets at left edge
  cloudOneX = frameCount % (width + cloudWidth);

  //set shooting star to random location
  lineXone = random(0, width);
  lineYone = random(0, height / 2);

  //displays the x and y position of the mouse on the canvas
  fill(255) //white text
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
  //displays the x and y position of the mouse on the canvas
}