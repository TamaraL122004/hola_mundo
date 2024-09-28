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
}

function draw() {
  // background(100, 0, 50);
  background(random(0, 50), random(10, 5), 20, 40);

  // // puntos
  // strokeWeight(0);
  // fill(mouseY, 110, 30);
  // ellipse(mouseX - 75, mouseY + 10, 20, 20);

  // strokeWeight(0);
  // fill(mouseY, 40, 0);
  // ellipse(mouseX + 75, mouseY + 10, 20, 20);

  // strokeWeight(0);
  // fill(mouseY, 40, 55);
  // ellipse(mouseX + 10, mouseY + 75, 20, 20);

  // strokeWeight(0);
  // fill(mouseY, 40, 113);
  // ellipse(mouseX + 10, mouseY - 75, 20, 20);

  // hojas
  strokeWeight(0);
  fill(0, 140, 0);
  ellipse(mouseX - 45, mouseY + 10, 30, 10);

  strokeWeight(0);
  fill(0, 140, 0);
  ellipse(mouseX + 45, mouseY - 20 + 10, 30, 10);

  // pétalos
  strokeWeight(2);
  stroke(250, 170, 200);
  fill(250, 160, 200);
  ellipse(mouseX + 20, mouseY + 10, 60, 60);

  strokeWeight(2);
  stroke(140, 230, 200);
  fill(100, 230, 220);
  ellipse(mouseX - 10, mouseY + 20, 60, 60);

  strokeWeight(2);
  stroke(100, 140, 250);
  fill(100, 130, 220);
  ellipse(mouseX - 20, mouseY - 10, 60, 60);

  strokeWeight(2);
  stroke(170, 250, 20);
  fill(150, 230, 20);
  ellipse(mouseX + 10, mouseY - 20, 60, 60);

  // Centro
  strokeWeight(2);
  stroke(250, 100, 0);
  fill(250, 160, 0);
  ellipse(mouseX, mouseY, 50, 50);
}
