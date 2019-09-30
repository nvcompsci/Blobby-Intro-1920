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
  vy: 0
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
  
  if (enemy.x > 300) {
     fill("red") 
  }
  else if (enemy.x > 200) {
      fill("orange")
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
  //fill("green")
  //circle(mouseX, mouseY, 30)
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
