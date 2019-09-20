let x = 1
let y = 50

function setup() {
  createCanvas(400, 400);
  frameRate(24)
}

function draw() {
  background(220);
  stroke("red")
  fill("blue")
  rect(x,y,50,50)
  x += 3
  y += 1
  fill("green")
  circle(mouseX,mouseY,30)
}
