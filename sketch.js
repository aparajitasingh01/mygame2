const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Composite = Matter.Composite;
var player;

var engine, world, backgroundImg;

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;


  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  wall1=new Wall(100,15,200,PI/2);
  wall2=new Wall(200,160,190,PI/2);
  wall3=new Wall(width/2-130,100,200,PI);
  wall4=new Wall(300,208,140,PI);
  wall5=new Wall(300,408,100,PI);
  wall6=new Wall(155,275,190,PI);7
  wall7=new Wall(100,550,350,PI/2);

  player=Bodies.rectangle(20,40,15,60)
  World.add(world,player);

  platform = Bodies.rectangle(10,player.position.y+80,40,10, { isStatic: true });
  World.add(world, platform);


  room=new Room(width/2-220,height/2+50)
}

function draw() {
  background("pink");

  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  rect(player.position.x,player.position.y,15,60);
  //rect(platform.position.x, platform.position.y,20,10);

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  room.display();
  wall6.display();
  wall7.display();

  playerControl();
  
  

}

function mousePressed(){
  Matter .Body.setPosition(player,{x:player.position.x,y:player.position.y})
}