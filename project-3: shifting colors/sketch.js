// This file currently sets the whole background of a chrome browser to a grew color

let r = 100;
let g = 100;
let b = 100;
let ddR = 0; //the change in delatR
let ddG = 0;
let ddB = 0;

let colorList = [r, g, b];
let primaryColorIndex = 0;  //the index of the primary color that will be shifing in colorList
// let colorDeltaList = [deltaR, deltaG, deltaB];



// Unneeded?
// let maxDeltaR;
// let maxDeltaG;
// let maxDeltaB;
// let maxColorChange = random(0, 2);
// let maxDeltaR = random(0.2, 5);  // the most R will change by
// let maxDeltaG = random(0.2, 5);
// let maxDeltaB = random(0.2, 5);
// let deltaR = random(-maxDeltaR, maxDeltaR);
// let deltaG = random(-maxDeltaG, maxDeltaG);
// let deltaB = random(-maxDeltaB, maxDeltaB);


function setup() {
  createCanvas(1440, 920);
}



function draw() {
  background(colorList);
  modColors();
}

// modifies colors
function modColors() {
  //set random delta for colors
  //apply that random change using maxDeltB
  //do more change on main

  colorList = [r, g, b];
  console.log(colorList);
}

// randomizes and creates color changes for r, g, b colors.
function smallRandomColorChanges() {
  r += deltaR;
  g += deltaG;
  b += deltaB;
}

