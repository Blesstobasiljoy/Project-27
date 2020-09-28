
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObject;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(400,250,150,20);

	bobObject1 = new Bob(340,390,15);
	bobObject2 = new Bob(370,390,15);
	bobObject3 = new Bob(400,390,15);
	bobObject4 = new Bob(430,390,15);
	bobObject5 = new Bob(460,390,15);

	rope1 = new Rope(bobObject1.body,{x:340, y:250});
	rope2 = new Rope(bobObject2.body,{x:370, y:250});
	rope3 = new Rope(bobObject3.body,{x:400, y:250});
	rope4 = new Rope(bobObject4.body,{x:430, y:250});
	rope5 = new Rope(bobObject5.body,{x:460, y:250});
  
}


function draw() {
	background("gray");

 Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();  
  

  rectMode(CENTER);	


  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


}

function keyPressed()
{
	if (keyCode === LEFT_ARROW) 
	{
	  Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-30, y:-25}); 
	}
	  
	if (keyCode === RIGHT_ARROW) 
	{
	  Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:20, y:-25}); 
	}
}		
