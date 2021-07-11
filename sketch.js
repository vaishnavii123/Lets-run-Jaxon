var boy,boy_running;
var path,pathImage;
var boundary,invisibleleftboundary,invisiblerightboundary;



function preload(){
  //pre-load images
pathImage = loadImage("path.png");


boy_running=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;

  boy=createSprite(200,300,20,50);
  boy.addAnimation("running",boy_running);
  boy.velocityX=-4;
  boy.scale=0.1;
 
  invisibleleftboundary=createSprite(10,400,50,400);
  invisibleleftboundary.visible=false;

  invisiblerightboundary=createSprite(390,400,50,400);
  invisiblerightboundary.visible=false;
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y=height/2;
  }
  
  boy.x = World.mouseX;

boy.collide(invisibleleftboundary);
boy.collide(invisiblerightboundary);

drawSprites();
}
