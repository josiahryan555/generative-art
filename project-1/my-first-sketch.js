// This is my first art project


/*  NOTES!

ellipse(50,50,80,80);
rect(x, y, x + cellSize, y + cellSize);
*/





const canvasSize = 400;
let palette = [];

function setup() {
    createCanvas(canvasSize, canvasSize);
    noLoop();
}

function draw() {
    palette = [];

    let r = random(255);
    generatePalette(palette, r);
    console.log(palette);
    const density = 10;
    const cellSize = canvasSize / density;
    for (let r = 0; r < density; r++) {
        for (let c = 0; c < density; c++) {
            drawCell(r, c, cellSize);
        }
    }
}

function drawCell(row, col, cellSize) {
    const x = col * cellSize;
    const y = row * cellSize;
    pickAColor();
    rect(x, y, x + cellSize, y + cellSize);

    const shapeFunction = random([drawCircle, drawDiamond, drawCross]);
    shapeFunction(row, col, cellSize);
}

function pickAColor() {
    const c = random(palette);
    // const c = color(
    // random(255),
    // random(255),
    // random(255)
    //       );
    fill(c);
}

function generatePalette(array, r) {
    const numColors = random(2, 10);
    for (let i = 0; i < numColors; i++) {
        const c = color(r, random(255), random(255));
        array.push(c);
    }
}

function drawCircle(row, col, cellSize) {
    const halfCellSize = cellSize / 2;
    const centerX = col * cellSize + halfCellSize;
    const centerY = row * cellSize + halfCellSize;
    pickAColor();
    // circle(centerX, centerY, cellSize);
    ellipse(centerX, centerY, cellSize, cellSize);
}

function drawDiamond(row, col, cellSize) {
    const halfCellSize = cellSize / 2;
    const centerX = col * cellSize + halfCellSize;
    const centerY = row * cellSize + halfCellSize;
    pickAColor();

    quad(
        centerX,
        centerY + halfCellSize,
        centerX + halfCellSize,
        centerY,
        centerX,
        centerY - halfCellSize,
        centerX - halfCellSize,
        centerY
    );
}

function drawCross(row, col, cellSize) {
    const x = col * cellSize;
    const y = row * cellSize;
    line(x, y, x + cellSize, y + cellSize);
    line(x + cellSize, y, x, y + cellSize);
}