const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var HexagomImg,HexagomSprite,hexagon;
var engine, world;
var box1;
var score=0
var backgroundImg;

function preload(){
HexagomIMG=loadImage("Hexagom.png")
getBackgroundImg();
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,390,1200,20)
    ground1 = new Ground(390,300,250,10)
    ground2 = new Ground(700,200,200,10)
    

   //level one
   block1 = new Block(300,275,30,40);
   console.log(block1);
   block2 = new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
   //level two
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
   //level three
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   //top
   block16 = new Block(390,155,30,40);
 
   //set 2 for second stand
   //level one
   blocks1 = new Block(640,175,30,40);
   blocks2 = new Block(670,175,30,40);
   blocks3 = new Block(700,175,30,40);
   blocks4 = new Block(730,175,30,40);
   blocks5 = new Block(760,175,30,40);
   //level two
   blocks6 = new Block(670,135,30,40);
   blocks7 = new Block(700,135,30,40);
   blocks8 = new Block(730,135,30,40);
   //top
   blocks9 = new Block(700,95,30,40);

    hexagon=Bodies.circle(130,100,20);
    World.add(world,hexagon)

  slingshot = new SlingShot(hexagon,{x:130,y:100});

}

function draw(){
  if(backgroundImg)
        background(backgroundImg);
    //background("cyan");
    Engine.update(engine);
    textSize(20)
    fill("brown")
   text("Score: "+score,1000,20)
   text("Drag The Hexagonal Stone & Release It,To Launch It Towards The Block's",100,20)
   text("Press Space To Get A Second Chance To Play !!",600,350)
    slingshot.display();
fill("pink")
strokeWeight(2);
stroke(15);
fill("skyblue");
block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();
block6.display();
block6.score();
block7.display();
block7.score();
fill("pink");
block8.display();
block8.score();
block9.display();
block9.score();
block10.display();
block10.score();
block11.display();
block11.score();
block12.display();
block12.score();
fill("turquoise");
block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();
fill("grey");
block16.display();
block16.score();
fill("skyblue");
blocks1.display();
blocks1.score();
blocks2.display();
blocks2.score();
blocks3.display();
blocks3.score();
blocks4.display();
blocks4.score();
blocks5.display();
blocks5.score();
fill("turquoise");
blocks6.display();
blocks6.score();
blocks7.display();
blocks7.score();
blocks8.display();
blocks8.score();
fill("pink")
blocks9.display();


     //ground
    ground.display();
    ground1.display();
    ground2.display();
    imageMode(CENTER);
   image(HexagomIMG,hexagon.position.x, hexagon.position.y,40,40)
}
function keyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(hexagon,{x:130,y:100})
		slingshot.attach(hexagon);
	}
}
function mouseDragged(){
	Matter.Body.setPosition(hexagon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	slingshot.fly()
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
    bg ="sunny-day-background-1.jpg"
  }
  else{
    bg = "bg2.jpg"
  }
  backgroundImg = loadImage(bg);
   // console.log(backgroundImg);
}
