let r = 100;
let g = 100;
let b = 100;

let deltaR = 1;
let deltaG = 1;
let deltaB = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r, g, b);
  colorChanges();
}

function colorChanges() {
  r = mouseX;
  g = mouseY;
  if (b => 220) {
    b -= deltaB;
  } else {
    b += deltaB;
  }
}