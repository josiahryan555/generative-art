let r = 100;
let g = 100;
let b = 100;
const deltaB = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r, g, b);
  drawingChanges();
}

function drawingChanges() {
  r = mouseX;
  g = mouseY;
  if (b => 220) {
    b -= deltaB;
  } else {
    b += deltaB;
  }
}