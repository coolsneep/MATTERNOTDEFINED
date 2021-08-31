const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var blower,ground

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  ground = new Ground(200,400,400,10)
  blower = createImg('blower.png');
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airBlow);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();

}
function airBlow()
{
  
}