var fixedRect,movingRect,fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect1= createSprite(100,200,30,80);
  fixedRect1.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
 if( isTouching(movingRect,fixedRect)){
  
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
    
  }
  else if(isTouching(movingRect,fixedRect1)){movingRect.shapeColor="green";
  fixedRect1.shapeColor="green";
 }
 else{
   movingRect.shapeColor="black";
   fixedRect.shapeColor="yellow";
   fixedRect1.shapeColor="blue";
 }
 

  drawSprites();
}
