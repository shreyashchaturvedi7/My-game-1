var ground,football,player1,player2;
var bgImg,footballImg;

function preload(){
    bgImg = loadImage("bg.jpg");
    footballImg = loadImage("ball.png");

}

function setup(){
  createCanvas(800,500);
  ground = createSprite(400,250,10,10);
  ground.addImage(bgImg);

  football = createSprite(400,250,10,10);
  football.addImage(footballImg);
  football.scale = 0.1;
}

function draw(){
    background("green");
  
 drawSprites();

}
