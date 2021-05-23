const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body= Matter.Body

var engine, world;
var box1, pig1;
var backgroundImg;
var platform;
var ball,roof,rope,boxes=[]
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
   roof=new Ground (100,50,200,20)
ball=new Ball(100,300,50)
rope=new Chain(roof.body,ball.body)
for(var i=0;i<7;i++){
    var box=new Box(250,50,50,50);
    boxes.push(box)
    var box=new Box(300,50,50,50);
    boxes.push(box)
    var box=new Box(350,50,50,50);
    boxes.push(box)
}

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    roof.display()
    ground.display();
ball.display()
    rope.display()
for(var i =0;i<boxes.length;i++){
    boxes[i].display()
}


}
function mouseDragged(){
 Body.setPosition(ball.body,{x:mouseX,y:mouseY})

 }
 function keyPressed(){
     if(keyCode===32){
         Body.applyForce(ball.body,ball.body.position,{x:170,y:-170})
     }
 }