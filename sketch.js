
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stand
var ball1
var ball2
var ball3
var ball4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	stand=new Stand(400,100,500,30)
	ball1=new Balls(200,200)
	
  
}


function draw() {
  background(0);
  
  rectMode(CENTER)
  stand.display();
  ball1.display();
 
}



