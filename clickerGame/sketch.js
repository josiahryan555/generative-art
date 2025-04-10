let cash = 0;
let winningCashAmount = 1000;
let userWon = false;
let horizon;
let button;
let clickMultiplier = 1;
let upgradeCost = 10;
let upgradeCostMultiplier = 2; // upgradeCost *= upgradeCostMultiplier after upgrade is clicked

function setup() {
  createCanvas(800, 800);
  horizon = height / 2;

  //button that upgrades the click
  button = createButton('Upgrade Cash Per Click', 2);
  button.mouseClicked(upgradeButtonClicked);
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



  textSize(18);
  //Displays the current score
  text(`Cash: $${cash}`, 20, 20);
  //Displays the current click multiplier
  text(`Click multiplier: x${clickMultiplier}`, 20, 40);
  text(`Cost of next upgrade: $${upgradeCost}`, 20, 60);
  text(`Goal: $${winningCashAmount}`, 20, 80);

  checkIfUserWon();
  //win condition

  if (userWon) {
    textSize(80);
    text(`You Win!`, 200, 290);
  }

}

function mouseClicked() {
  let newCash = 1 * clickMultiplier;
  cash += newCash;
}

// when upgrade buton is clicked, the click multiplier is increased by 1
function upgradeButtonClicked() {
  //check money
  //if enough
  if (cash >= upgradeCost) {
    cash -= upgradeCost; // takes cash from user
    upgradeCost *= upgradeCostMultiplier; //increases the cost of upgrades

    // initiate upgrade
    clickMultiplier += 1;
    // change button

  }
  else {
    // red message telling user they don't have enough
    fill("red");
    text("You do not have enough money for this upgrade.", 10, 200,)
    console.log("You do not have enough money for this upgrade");

  }
  console.log("Upgrade button was clicked");

  //solves problem: adding cash when user clicks the upgrade button
  let newCash = 1 * clickMultiplier;
  cash -= newCash;
}

function checkIfUserWon() {
  if (cash >= winningCashAmount) {
    userWon = true;
  }
}