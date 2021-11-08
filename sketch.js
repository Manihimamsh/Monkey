var START = 1;
var PLAY = 1;
var END = 0;
var gameState = 1;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var road;
var play, playImage;
var gameOver, gameOverImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  playImage = loadImage("play image for monkey happy game whitehat jr.PNG");
 
  obstacleGroup = new Group();
  
  foodGroup = new Group();
  
  score = 0;
  
  gameOverImage = loadImage("gameoverskull whitehat jr.png");
  
}



function setup() {
  createCanvas(600,400);

  
  monkey = createSprite(100,300,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  
  
  score = (100,100);
  
  play = createSprite(300,200,10,10);
  play.addImage("drr",playImage);
  play.scale = 0.3;
  
  gameOver = createSprite(300,200,10,10);
  gameOver.addImage("blue",gameOverImage);
  gameOver.scale = 0.3;
  
 

  road = createSprite(0,330,1200,2);
  
  score = 0; 
 
}


function draw() {
  background("green");
  text("Score: "+ score, 500,50);
  
  if(keyDown("space") && monkey.y >= 290) {
      monkey.velocityY = -12;
    }
  
  
  gameOver.visible = false;
  
  
   
   
     road.velocityX = 0;
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
   if (road.x < 0){
      road.x = road.width/2;
    }
  
  if (obstacleGroup.isTouching(monkey)) {
   
    gameState = START;
    gameOver.visible = true;
    
     banana.velocityX = 0;
    road.velocityX = 0;
    //obstacleGroup.velocityX = 0;
       obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    
    
  }
  
  if (monkey.isTouching(foodGroup)) {
    score = score + 2;
    foodGroup.destroyEach();
    
  }
  
  /*if (gameState === START) {
    //banana.velocityX = 0;
   
    //obstacle.velocityX = 0;
  }*/
  
  if (gameState === PLAY) {
    road.velocityX = -10;
    //banana.velocityX = -10;
    //obstacle.velocityX = -9;
  }
  
  if (mousePressedOver(play)) {
    play.visible = false;
    gameState = PLAY;
  }
  
  
  createEdgeSprites();
  monkey.collide(road);
  monkey.collide(obstacleGroup);
  foodGroup.collide(obstacleGroup);
  
  spawnObstacles();
  spawnBananas();
  
  
  drawSprites();
}
  
  function spawnObstacles() {
    if (World.frameCount % 80 === 0) {
        obstacle = createSprite(500,310,10,10);
        obstacle.addImage("clear",obstacleImage);
        obstacle.scale = 0.1;
        r = Math.round(random(1, 4));
        if (r === 1) {
            obstacle.addImage(obstacleImage);
        } else if (r === 2) {
            obstacle.addImage(obstacleImage);
        } else if (r === 3) {
            obstacle.addImage(obstacleImage);
        } else {
            obstacle.addImage(obstacleImage);
        }

        obstacle.y = Math.round(random(310, 310));

        obstacle.velocityX = -10;
        obstacle.setLifetime = 100;

        obstacleGroup.add(obstacle);
    }

  }

  function spawnBananas() {
     if (World.frameCount % 60 === 0) {
        banana = createSprite(300,200,10,10);
        banana.addImage("diablo",bananaImage);
        banana.scale = 0.1;
        r = Math.round(random(1, 4));
        if (r === 1) {
            banana.addImage(bananaImage);
        } else if (r === 2) {
            banana.addImage(bananaImage);
        } else if (r === 3) {
            banana.addImage(bananaImage);
        } else {
            banana.addImage(bananaImage);
        }

        banana.y = Math.round(random(310, 150));

        banana.velocityX = -10;
        banana.setLifetime = 100;

        foodGroup.add(banana);
    }

  
  }







