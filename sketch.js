var surfer,surferImg;
var  path,pathImage;
var boundary1, boundary2

function preload(){
  //pre-load images
pathImg =loadImage("path.png");
surferImg =loadAnimation("runner-1.png","runner-2.png");



}

function setup(){
  createCanvas(400,400);
  //create sprites here

path =createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

surfer = createSprite(200,190,20,20)
surfer.addAnimation("boy",surferImg)
surfer.scale=0.1


boundary1 = createSprite(20,200,20,400);
boundary2 = createSprite(380,200,20,400);

boundary1.visible= false;
boundary2.visible= false;
}

function draw() {
  background("black");
surfer.x=World.mouseX

  if(path.y>400){
    path.y = height/2;



  }

  surfer.collide(boundary1);
  surfer.collide(boundary2);
drawSprites();
}
