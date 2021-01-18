
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new ground(500,height-20,1020,20);
	bin1=new bomb(570,height-40,250,20)
	bin2=new bomb(460,602,30,128)
	bin3=new bomb(683,605,30,128)
	paper1=new crumpledpaper(150,605)


	Engine.run(engine);
	
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  ground1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display();
 
  

}





  