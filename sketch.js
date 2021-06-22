 var girl , girl_animation;
 var bg,bgimage;
 var monsters,monster1,monster2;
 var ground, invisibleGround, groundImage;
 var monsterGroup
 var girlDying;

function preload(){

  girl_animation =loadAnimation("Assets/girl1.png","Assets/girl2.png");
  
  bgimage =loadAnimation("Assets/bg.jpg");
  
  monsters1 =loadAnimation("Assets/monster1.png");
  monsters2 =loadAnimation("Assets/monster2.png");
  girlDying = loadAnimation("Assets/girl3.png");

}


function setup() {
  createCanvas(600, 200);
  bg = createSprite(300,100)
  bg.addAnimation("background",bgimage);
  bg.velocity.x = -3;
  
  girl = createSprite(50,170,20,20);
  girl.addAnimation("girlrun", girl_animation)
  girl.scale = 0.1;
  girl.addAnimation("girlsit",girlDying);
  invisibleGround = createSprite(200,190,600,20)
   
  monsterGroup = createGroup();
}

 

function draw() {
  background(220);
  
  if (bg.x<0){
    bg.x = bg.width/2 
  }
  
  if(keyDown("space")&& girl.y >= 100) {
        girl.velocityY = -12;
}
  girl.velocityY = girl.velocityY + 0.8
  
  if(monsterGroup.isTouching(girl)){
    monsterGroup.destroyEach()
    bg.velocityX = 0;
    girl.changeAnimation("girlsit",girlDying)
  }
  sponmonsters();
  drawSprites();
  girl.collide(invisibleGround);
 
 
}
function sponmonsters(){
  if(frameCount % 60 === 0){
    monsters = createSprite(400,160,10,40);
    monsters.velocityX = -6;
    monsters.scale =0.07;
    monsters.collide(invisibleGround);
    var rand = Math.round(random(1,2))
    switch(rand) {
      case 1: monsters.addAnimation("monsteranimation",monsters1)
        break;
      case 2: monsters.addAnimation("monsterrun",monsters2)
        break;
        default:break;
    }
    monsterGroup.add(monsters);
  }
}