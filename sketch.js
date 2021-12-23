const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(640,300,50,200);
    box2 = new Box(640,100,30,30);
    ground = new Ground(450,height,900,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    strokeWeight(4);
    stroke("yellow");
    //here give any color in single codes
     
    box1.display();
    box2.display();
    ground.display();
}