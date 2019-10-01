let x = 1
let y = 50

//Create player object
let player = {
  x: 0,
  y: 0,
  width: 50,
  height: 30,
  speed: 5,
  vx: 0,
  vy: 0
}

let enemy = {
  x: 400,
  y: 10,
  width: 50,
  height: 30,
  speed: 5,
  vx: -3,
  vy: 2
}

function setup() {
  createCanvas(400, 400);
  frameRate(24)
}

function draw() {
  background(220);
  stroke("red")
  fill("blue")
  rect(player.x, player.y, player.width, player.height)
  
  if (enemy.x > 335) {
     fill("red") 
  }
  else if (enemy.x > 269) {
      fill("orange")
  }
  else if (enemy.x > 203) {
      fill("yellow")
  }
  else if (enemy.x > 148) {
      fill("green")
  }
  else if (enemy.x > 65) {
      fill("blue")
  }
  //yellow, green, blue
  else {
    fill("purple")
  }
    
  circle(enemy.x, enemy.y, enemy.width, enemy.height)
  player.x += player.vx
  player.y += player.vy
  enemy.x += enemy.vx
  enemy.y += enemy.vy
  
  //call wallBounce()
  wallBounce()
}

//Define wallBounce
function wallBounce() {
  if (enemy.x < 0) {
      enemy.vx = -enemy.vx
  }
  
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.vx = player.speed
  }
  else if (keyCode === LEFT_ARROW) {
    player.vx = -player.speed
  }
  else if (keyCode === UP_ARROW) {
    player.vy = -player.speed
  }
  else if (keyCode === DOWN_ARROW) {
    player.vy = player.speed
  }
}

function keyReleased() {
  player.vx = 0
  player.vy = 0
}
