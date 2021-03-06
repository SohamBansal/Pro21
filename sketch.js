var speed,weight;
var bullet,wall;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "white";
  speed = random(223,221);
  weight = random(30,52);
  thickness=random(22,83);
  bullet.velocityX = speed;
  wall = createSprite(1500,200,thickness,height/2);
}

function draw() {
  background(0); 

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  if (damage<10) 
  {
    wall.shapeColor=color(0,255,0);
  }
}
  /*if (wall.x - bullet.x < (bullet.width+wall.width)/2) 
  {
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  if (damage>180) 
  {
    bullet.shapeColor=color(255,0,0);
  }
  if (damage<180 && damage>100) 
  {
   bullet.shapeColor=color(230,230,0); 
  }
  if (damage<100) 
  {
    bullet.shapeColor=color(0,255,0)
  }
  
  }*/
  
  drawSprites();
}
function hasCollided(lbullet,lwall) 
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) 
  {
    return true
  }
  return false;
}