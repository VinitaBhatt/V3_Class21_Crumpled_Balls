
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var left_side, right_side;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options = {
		isStatic : false,
		resititution : 0.3,
		friction : 0,
		density : 1.2
	}

	ball = Bodies.circle(200,200,10,ball_options);

	World.add(world,ball);

	ground = new Ground(width/2,470,width,10);
	left_side = new Ground(width/2+100,440,10,50);
	right_side = new Ground(width/2+200,440,10,50);
	
	Engine.run(engine);
    ellipseMode(RADIUS);
	rectMode(CENTER);
}


function draw() {
  background(0);

  ellipse(ball.position.x, ball.position.y,10);
  ground.display();
  left_side.display();
  right_side.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:5.2,y:1});
	}
}



