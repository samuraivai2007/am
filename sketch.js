const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon,b;



function preload() {
  towerImage = loadImage("./assets/tower.png");
b=loadImage("/assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:true
  }

  ground = Bodies.rectangle(0,590,0,0,options);
  World.add(world,ground);

  tower = Bodies.rectangle(60,185,160,310,options);
  cannon=new Cannon(180,120,100,50,-PI/4);

}



function draw() {
  background(b);

  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,1);

  image(towerImage,tower.position.x,tower.position.y,160,320)
cannon.display();}
