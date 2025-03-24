function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("skyblue");

  //Draw sun in top right
  fill("yellow"); //fills circle with yellow
  stroke("orange"); //orange outline/border
  strokeWeight(20); //size of the outline
  circle(550, 50, 100); //circle(x coordinate, y coordinate, radius of circle)

  //Draw Grass
  fill("green");
  strokeWeight(0);
  rect(0, 300, 600, 100);


}
