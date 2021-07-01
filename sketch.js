var goal, goalIMG
var player, playerIMG
var gameState = 1
var Play = 2
var End = 3
var Ball, BallIMG
var score = 49
var edges

function preload(){
goalIMG = loadImage("images/leftgoal.png")
playerIMG = loadImage("images/player.png")
BallIMG = loadImage("images/soccer_ball.jpg")
}

function setup() {
  createCanvas(800,400);
  Ball = createSprite(250, 100, 10, 10);
  edges = createEdgeSprites();
  player = createSprite(190, 100, 20, 20);
  goal = createSprite(600, 100, 100, 100);
  Ball.addImage("BallIMG", BallIMG)
  player.addImage("playerIMG", playerIMG)
  goal.addImage("goalIMG", goalIMG);
}

function draw() {
  background("blue")
/*if(gameState === 1){
text("Press spacebar to play")
}
 if(keyCode === 32){
   gameState = 2;
 }*/
 Ball.velocityX = 5;
if(keyWentDown("S")){
  player.velocityY = -1
}
if(keyWentUp("S") || keyWentUp("W")){
  player.velocityY = 0
}
if(keyWentDown("W")){
  player.velocityY = 1
}
Ball.collide(edges);

 if(Ball.isTouching(goal)){
   Ball.x = 250;
   Ball.y = 100;
   Ball.velocityX = 5;
   Ball.velocityY = 0;
   score =+ 1;
 } 
if(player.collide(Ball)){
Ball.velocityX = 20;
Ball.velocityY = 0;
goal.velocityY =+ 1;
goal.velocityX = 0;
}
if(score > 50){
  gameState = 3
}
if(gameState === 3){
  clear();
  text("welp guess you beat my game, press space to restart")
  if(keyCode = 32){
    gameState = 2
  }
drawSprites()
}
}
