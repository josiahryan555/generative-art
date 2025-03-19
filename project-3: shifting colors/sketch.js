let r = 100;
let g = 100;
let b = 100;

let maxDeltaR;
let maxDeltaG;
let maxDeltaB;

let deltaR = 1;
let deltaG = 1;
let deltaB = 1;

let ddR = 0; //the change in delatR
let ddG = 0;
let ddB = 0;

function setup() {
  createCanvas(400, 400);
  maxDeltaR = random(0.2, 5);  // the most R will change by
  maxDeltaG = random(0.2, 5);
  maxDeltaB = random(0.2, 5);
  const x = 0;
  // const result = `The sum of ${x} and ${y} is ${x + y}.`;
}



function draw() {
  background(r, g, b);
  modColors();
}

// modifies colors
function modColors() {
  //for each color
  // randomly tweak colors
  deltaR = random(-maxDeltaR, maxDeltaR);
  deltaG = random(-maxDeltaG, maxDeltaG);
  deltaB = random(-maxDeltaB, maxDeltaB);

  // modify colors
  r += deltaR;
  g += deltaG;
  b += deltaB;

  console.log({ r, g, b });
}