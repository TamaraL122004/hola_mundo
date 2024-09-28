// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(4);
//   background(0);
//   rectMode(CENTER);
// }

// function draw() {
//   background(random(150, 250), random(0, 100), 90, 50);

//   strokeWeight(9);
//   stroke(0);
//   fill(mouseY, 0, 150);
//   circle(mouseX + 70, mouseY, mouseX);

//   stroke(100, 100, 0);
//   fill(100, 0, 30);
//   rect(mouseX, mouseY, 110, 110);
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  background(0);
  circle(50, 50, 25);
}

function draw() {
  background(random(150, 250), random(0, 100), 90, 50);
}
