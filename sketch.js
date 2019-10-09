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
  vy: 0,
  hp: 100
}

let enemy = {
  x: 350,
  y: 30,
  width: 50,
  height: 50,
  speed: 5,
  vx: -7,
  vy: 5,
  alive: true
}

//Create lasers array
let lasers = []

function setup() {
  createCanvas(400, 400);
  frameRate(24)
}

function draw() {
  background(220);
  stroke("red")
  fill("blue")
  rect(player.x, player.y, player.width, player.height)
  
  //Loop through lasers array
  for (let i = 0; i < lasers.length; i++) {
    //Temporarily name each laser
    let laser = lasers[i]
    
    //Make laser move
    laser.x += laser.vx
    
    //Change color to laser.color and draw
    fill(laser.color)
    rect(laser.x, laser.y, laser.width, laser.height)
    
    if (collide(laser, enemy) == true) {
        //declare enemy is dead
        enemy.alive = false
      
        //kill laser / remove from array
        lasers.splice(i,1)
    }
  }
  
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
  
  if (enemy.alive == true) {
  circle(enemy.x, enemy.y, enemy.width)
    enemy.x += enemy.vx
  enemy.y += enemy.vy
}
  player.x += player.vx
  player.y += player.vy
  
  
  if (enemy.alive && collide(player,enemy) == true) {
    console.log(player.hp )
    /*tempVx = enemy.vx
    tempVy = enemy.vy
    enemy.vx = -player.vx
    enemy.vy = -player.vy
    player.vx = -tempVx
    player.vy = -tempVy*/
    
    player.hp -= 20
    if (player.hp <= 0) {
        text("Game Over!",width/2, height/2)
        noLoop()
    }
  }
  
  //call wallBounce()
  wallBounce()
}

function fireLaser() {
  //Create one new laser
  let laser = {
    x: player.x+player.width,
    y: player.y+player.height/2,
    vx: 3,
    vy: 0,
    width: 10,
    height: 4,
    color: "red"
  }
  //Add newest laser to lasers array
  lasers.push(laser)
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
  //Create new laser with SPACEBAR
  if (keyCode === 32) {
   fireLaser() 
  }
  
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
