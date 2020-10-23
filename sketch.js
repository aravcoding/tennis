var SERVE = 1;
var PLAY = 2;
var ball,pc,npc,edges,leftLine,leftDoublesLine,rightDoublesLine,rightLine,net,serviceBox1,serviceBox2
,middleLine,gameState
function setup() {
  createCanvas(800,400);
  leftLine = createSprite(600,400,5,800);
  leftDoublesLine = createSprite(550,400,5,800);
  rightLine = createSprite(200,400,5,800);
  rightDoublesLine = createSprite(250,400,5,800);
  net = createSprite(400,200,400,5);
  serviceBox1 = createSprite(400,290,400,5);
  serviceBox2 = createSprite(400,110,400,5);
  middleLine = createSprite(400,200,5,180);
  ball = createSprite(400, 340, 5, 5);
  npc = createSprite(400,50,20,20);
  pc = createSprite(400,350,20,20);
  edges = createEdgeSprites(); 
  gameState = SERVE;
}

function draw() {
  background(255,255,255);
 
 

  ball.shapeColor = "yellow";
  pc.shapeColor = "blue";
  npc.shapeColor = "red";

  if (keyDown("space") && gameState === SERVE){
    ball.velocityY = -3;
    gameState = PLAY;
    console.log(gameState + "a");
  }

  if (ball.isTouching(npc) && gameState === PLAY){
    ball.velocityY = random(3,6);
    ball.velocityX = random(0,4);
  }

  if (ball.isTouching(pc) && gameState === PLAY){
    ball.velocityY = random(-3,-6);
    ball.velocityX = random(0,-4);
  }
  

  if (keyDown ("up")){
    pc.velocityY = -3;
  }

  if (keyDown ("down")){
    pc.velocityY = 3;
  }

  if (keyDown ("left")){
    pc.velocityX = -3;
  }

  if (keyDown ("right")){
    pc.velocityX = 3;
  }

  if (pc.isTouching(edges[0])){
    pc.velocityX *= -1;
    pc.velocityY *= 0;
  }
  if (pc.isTouching(edges[1])){
    pc.velocityX *= -1;
    pc.velocityY *= 0;
  }
  if (pc.isTouching(edges[2])){
    pc.velocityX *= 0;
    pc.velocityY *= -1;
  }
  if (pc.isTouching(edges[3])){
    pc.velocityX *= 0;
    pc.velocityY *= -1;
  }

  
  if (npc.isTouching(edges[0])){
    npc.velocityX *= -1;
    npc.velocityY *= 0;
  }
  if (npc.isTouching(edges[1])){
    npc.velocityX *= -1;
    npc.velocityY *= 0;
  }
  if (npc.isTouching(edges[2])){
    npc.velocityX *= 0;
    npc.velocityY *= -1;
  }
  if (npc.isTouching(edges[3])){
    npc.velocityX *= 0;
    npc.velocityY *= -1;
  }

  /*if (ball.x<200){
    gameState = SERVE;
  }

  if (ball.x>600){
    ngameState = SERVE;
  }*/

  if (pc.isTouching(leftLine) || pc.isTouching(rightLine) || npc.isTouching(leftLine) || npc.isTouching(rightLine)){
    pc.velocityX *= -1;
    npc.velocityX *= -1;
    console.log(npc.velocityX)
  }

  npc.x = ball.x;
  if (frameCount % 70 === 0){
  //npc.y = npc.y +20 
  //for (i = 0; i<=20; i += 1){
    //npc.y += i;
  //} 

  if (pc.isTouching(net)){

  }
    
  }
  drawSprites();
}