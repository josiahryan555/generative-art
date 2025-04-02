let emojiSize = 75;
let ladybugVisible = true;

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



  //Add emojis
  textSize(emojiSize);
  text("🌸", 100, 330);

  if (ladybugVisible) {
    //creates new x,y variables that will allow the cursor to be in the middle of the 🐞 emoji
    let middleEmojiX = mouseX - 0.5 * emojiSize;
    let middleEmojiY = mouseY + 0.5 * emojiSize;
    text("🐞", middleEmojiX, middleEmojiY);
  }
}

// mouseClicked() runs when the mouse is clicked
// the ladybug emoji will appear or disapear when clicked
function mouseClicked() {
  ladybugVisible = !ladybugVisible;
}