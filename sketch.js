const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var engine, world;
var ground;


function setup() {
  
  createCanvas(800,650);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400,630,800,20);
  box1 = new Box(500,600,25,25)
}

function draw() {
  background(0);  
  Engine.update(engine);
 
ground.display();
box1.display();
}