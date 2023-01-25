let colours = ["red", "green", "blue"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createGraphics(width, height);
  bg.rectMode(CENTER);
}

function draw() {
  background(255, 255, 255)
  bg.fill(random(colours))
  bg.circle(width / 2, mouseY, 50);
  image(bg, 0, 0);
  fill(255, 255, 0)
  ellipse(mouseX, mouseY, 50)
}










