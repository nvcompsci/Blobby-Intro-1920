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
  x: 350,
  y: 30,
  width: 50,
  height: 50,
  speed: 5,
  vx: -7,
  vy: 5
}

function setup() {
  createCanvas(400, 400);
  frameRate(100)
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
    
  circle(enemy.x, enemy.y, enemy.width)
  player.x += player.vx
  player.y += player.vy
  enemy.x += enemy.vx
  enemy.y += enemy.vy
  
  if (collide(player,enemy) == true) {
    console.log( "hit" )
  }
  
  //call wallBounce()
  wallBounce()
}

function collide(player1, player2) {
  if(player1.x < player2.x + player2.width &&
    player1.x + player1.width > player2.x &&
    player1.y < player2.y + player2.height &&
    player1.y + player1.height > player2.y) {
      return true
  }
  else {
   return false 
  }
}

//Define wallBounce
function wallBounce() {
  // and = &&    or = ||
  if (enemy.x  < 0 + enemy.width / 2 || enemy.x > width - enemy.width / 2) {
      enemy.vx = -enemy.vx
  }
  if(enemy.y > width - enemy.width / 2|| enemy.y < 0 + enemy.width / 2){
    enemy.vy = -enemy.vy
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
