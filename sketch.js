var paper, ball
var box1,box2,box3



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
engine = Engine.create()
world = engine.world

	createCanvas(800, 700);
  
	box1Sprite=createSprite(340,600,20,120);
	box1Sprite.shapeColor=color(255)

	
	box2Sprite=createSprite(390,650,120,20);
	box2Sprite.shapeColor=color(255)


	box3Sprite=createSprite(440,600,20,120);
	box3Sprite.shapeColor=color(255)
	






	paper = new Paper(100,300,57)	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red")

 
	

	//Create the Bodies Here.



	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 box1 = Bodies.rectangle(340,600,20,120, {isStatic:true});
	 World.add(world, box1);

	 box2 = Bodies.rectangle(390,650,120,20, {isStatic:true});
	 World.add(world, box2);

	 box3 = Bodies.rectangle(440,600,20,120, {isStatic:true});
	 World.add(world, box3);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display() 
  drawSprites();
 
}


function keyPressed() {

if (keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}

}
