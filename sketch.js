
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var ball, slingshot;

function preload() {
    polygon_img=loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  //level one
  box1= new Block(300,275,30,40);
  console.log(box1);
  box2 = new Block(330,275,30,40);
  box3 = new Block(360,275,30,40);
  box4 = new Block(390,275,30,40);
  box5= new Block(420,275,30,40);
  box6= new Block(450,275,30,40);
  box7= new Block(480,275,30,40);
  //level two
  box8= new Block(330,235,30,40);
  box9= new Block(360,235,30,40);
  box10= new Block(390,235,30,40);
  box11= new Block(420,235,30,40);
  box12= new Block(450,235,30,40);
  //level three
  box13= new Block(360,195,30,40);
  box14= new Block(390,195,30,40);
  box15= new Block(420,195,30,40);
  //top
  box16= new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  box17= new Block(640,175,30,40);
  box18= new Block(670,175,30,40);
  box19= new Block(700,175,30,40);
  box20= new Block(730,175,30,40);
  box21= new Block(760,175,30,40);
  //level two
  box22= new Block(670,135,30,40);
  box23= new Block(700,135,30,40);
  box24= new Block(730,135,30,40);
  //top
  box25= new Block(700,95,30,40);
   ball=Bodies.circle(50,200,20);
   World.add(world,ball);
    slingshot = new SlingShot(this.ball,{x:100, y:200});
}

function draw(){
        background("blue");

        noStroke();
        textSize(35)
        fill("white")

    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();  
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingshot.display();  

}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(this.ball,{x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.ball);
    }
  }

