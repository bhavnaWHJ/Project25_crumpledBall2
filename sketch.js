
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, ground;

//var dustbinImg, ballImg;
var backImg
var dustbin

function preload()
{
	//dustbinImg = loadImage("Dustbin1.png");
	//ballImg = loadImage("crumbledBall1.png");
    backImg = loadImage("park1.jpg");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
    dustbin = new Dustbin(600,650);
	paperBall = new Paper();
	
	
	

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  ground.display();
  background(backImg);
 
  
  
 
  
  paperBall.display();
  dustbin.display();
  

  keyPressed();
 
}

function keyPressed(){

	if (keyDown(UP_ARROW)){

		Matter.Body.applyForce(paperBall.body,paperBall.body.position, {x: 85, y: -85});
	}
}



