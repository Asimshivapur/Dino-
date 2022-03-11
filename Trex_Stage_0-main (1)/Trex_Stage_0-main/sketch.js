
var trex ,trex_running;
var ground , ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground1=loadImage("ground2.png")
}

function setup(){
  createCanvas(1540,910)
  
  //create a trex sprite
  trex=createSprite(50,160,10,10)
 trex.addAnimation("animation",trex_running)
 trex.scale=0.5
ground=createSprite(140,195,900,20)
ground.addImage(ground1)
ground.velocityX=-4
}


function draw(){
  
  background("Brown")
  drawSprites()

}
