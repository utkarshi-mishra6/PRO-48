var PLAY =1;
var END = 0;
var gameState = PLAY;
var score;

var canvas, backgroundImage;
var ball;
var tilesG;
var tiles2G;
var danger1,danger2,tileimg1,tileimg2,tileimg3,ballimg;
var gameoverImg,gameover

function preload(){
  backgroundImage = loadImage("background.jpg");
  danger1 = loadImage("dan2.png");
  danger2 = loadImage("danger2.png");
  ballimg = loadImage("ball1.jpg");
  tileimg1 = loadImage("1.jpg");
  tileimg2 = loadImage("tile2.jpg");
  tileimg3 = loadImage("tile3.png");
  gameoverImg = loadImage("game.png")
}

function setup(){
 createCanvas (500,900);

  ball = createSprite(250,820,40,40);
  ball.addImage(ballimg);
  
  gameover = createSprite(250,450)
  gameover.addImage(gameoverImg)

  tilesG = new Group();
  tiles2G = new Group();
  score = 0;
}


function draw(){
background(backgroundImage);
text("SCORE:"+ score,400,30)
fill("brown")

/*ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);*/

  if(gameState === PLAY){

    gameover.visible = false;

   if (keyDown(LEFT_ARROW)) {
      ball.x -= 10;
    }

    if (keyDown(RIGHT_ARROW)) {
      ball.x += 10;
    }

    if(tilesG.isTouching(ball)) {
      score = score+1;
    }
  
    for(var i =0; i<tilesG.length; i++){
      if(tilesG.get(i).isTouching(ball))
      //tilesG.get(i).destroy();
      ball.velocityY = -1;
    }

    if(tiles2G.isTouching(ball)){
      gameState = END;
    }
}


  else if(gameState === END) {
    gameover.visible = true;

    ball.x = -90;

    tiles2G.setLifetimeEach(-1);
    tilesG.setLifetimeEach(-1);
   
    tiles2G.setVelocityYEach(0);
    tilesG.setVelocityYEach(0); 

    tiles2G.visible = false;
    tilesG.visible = false;

    tiles2G.velocityX = 0;
    tiles2G.velocityY = 0;

   /* tilesG.velocityX = 0;
    tilesG.velocityY = 0;*/
  }

  spawnTiles();
drawSprites();

}


function spawnTiles(){
  if (frameCount % 200 === 0){
    tiles = createSprite(250,-50)
    tiles.y = Math.round(random(10,300))
    //tiles.shapeColor = 'red'
    tiles.velocityX = 0;
    tiles.velocityY = 4;

    var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: tiles.addImage(tileimg1);
                 break;
         case 2: tiles.addImage(tileimg2);
         tiles.scale = 0.4;
                 break;
         case 3: tiles.addImage(tileimg3);
         tiles.scale = 0.1;
                 break;
         default: break;
       }
       //tiles.scale = 0.3;

    tiles.lifeTime = 400;
    tilesG.add (tiles);

  }


  if(frameCount % 450 === 0) {
    tiles2 = createSprite(100,-10)
    tiles2.velocityX = 0;
    tiles2.velocityY = 3;
    //tiles2.shapeColor = 'blue'
    //tiles2.x = Math.round(random(10,400));

    var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: tiles2.addImage(danger1);
                 break;
         case 2: tiles2.addImage(danger2);
                 break;
         default: break;
       }

       tiles2.scale = 0.4;
    //tiles2.velocityX = 0;
    //tiles2.velocityY = 3;

    tiles2.lifeTime = 400;
    tiles2G.add (tiles2);

  }
}

 














/*for(var i =0; i<tilesG.lenght; i++){
  if(tilesG.get(i).isTouching(ball))
  tilesG.get(i).destroy();
} */

/*if(gameState === PLAY){

    //gameOver.visible = false;
    //restart.visible = false;
    
    
    
   // if(score>0 && score%100 === 0){
     //  checkPointSound.play() 
    //}
    
   // if (ground.x < 0){
     // ground.x = ground.width/2;
    //}
    
    //jump when the space key is pressed
    //if(keyDown("space")&& trex.y >= 100) {
    //    trex.velocityY = -12;
      //  jumpSound.play();
    //}
    
    //add gravity
  //  trex.velocityY = trex.velocityY + 0.8
  
    //spawn the clouds
  //  spawnClouds();
  
    //spawn obstacles on the ground
  //  spawnObstacles();
    
    if(obstaclesGroup.isTouching(trex)){
        //trex.velocityY = -12;
        jumpSound.play();
        gameState = END;
        dieSound.play()
      
    }
  }
   else if (gameState === END) {
      gameOver.visible = true;
      restart.visible = true;
     
     //change the trex animation
      trex.changeAnimation("collided", trex_collided);
    
     
     
      ground.velocityX = 0;
      trex.velocityY = 0
      
     
      //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
     cloudsGroup.setVelocityXEach(0); 
     
     if(mousePressedOver(restart)) {
      reset();
    }
   }
  
 
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  

  drawSprites();


function reset(){
  score = 0;
  gameOver.visible = false;
  restart.visible = false;
  gameState = PLAY;
  obstaclesGroup.destroyEach ();
  cloudsGroup.destroyEach ();
  trex.changeAnimation ("running",trex_running);
}*/




  



