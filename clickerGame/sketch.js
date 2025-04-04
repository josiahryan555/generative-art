let cash = 0;
let horizon;
let button;
let clickMultiplier = 1;

function setup() {
  createCanvas(800, 800);
  horizon = height / 2;
}

function draw() {
  background('skyblue');

  //grass
  fill('rgb(50,76,50)');
  rect(0, horizon, width, 0.5 * height);

  //tree
  fill("rgb(118,80,72)");
  rect(40, horizon, 15, 50);
  fill("green");
  triangle(25, horizon, 45, 240, 70, horizon);

  //button that upgrades the click
  button = createButton('click multiplier',)


  //Displays the current score
  text(`Cash: ${cash}`, 20, 20);
}

function mouseClicked() {
  cash += 1;
}