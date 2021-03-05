const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;

function preload() {
  bg = loadImage("images/bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);

    b1 = new Bogie(50,170,50,50);
    b2 = new Bogie(150,170,50,50);
    b3 = new Bogie(250,170,50,50);
    b4 = new Bogie(350,170,50,50);
    b5 = new Bogie(450,170,50,50);
    b6 = new Bogie(550,170,50,50);

    rock = new Rock(1100,200,100,100);

    chain1 = new Chain(b1.body,b2.body);
    chain2 = new Chain(b2.body,b3.body);
    chain3 = new Chain(b3.body,b4.body);
    chain4 = new Chain(b4.body,b5.body);
    chain5 = new Chain(b5.body,b6.body);

    var collision = Matter.SAT.collides(b6.body,rock.body);
}

function draw(){
   
        background(bg);
        b1.display();
        b2.display();
        b3.display();
        b4.display();
        b5.display();
        b6.display();

        rock.display();

        chain1.display();
        chain2.display();
        chain3.display();
        chain4.display();
        chain5.display();
}



function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
       
       Matter.Body.applyForce(b6.body,{x:b6.body.position.x,y:b6.body.position.y},{x:10,y:0});
       
    }
}
