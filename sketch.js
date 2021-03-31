const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var holder,ball,ground;
var platform1,platform2;
var polygon;
var slingShot;
var polygonImg;

var score=0;

function preload(){
    polygonImg=loadImage("polygon.png");
    
  }

function setup() {
createCanvas(900,400);

engine=Engine.create()
world=engine.world;
Engine.run(engine);

ground=new Ground(450,390,900,20);
platform1=new Platform(390,300,250,10);
platform2=new Platform(600,200,190,10);

  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  
  box8 = new Box(330,235,30,40);
  box9=  new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  
  box16 = new Box(390,155,30,40);

boxA=new Box(540,170,30,40);
boxB=new Box(570,170,30,40);
boxC=new Box(600,170,30,40);
boxD=new Box(630,170,30,40);
boxE=new Box(660,170,30,40);

boxF=new Box(570,130,30,40);
boxG=new Box(600,130,30,40);
boxH=new Box(630,130,30,40);

boxI=new Box(600,90,30,40);

polygon= Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background("white");

  text("SCORE: "+score,750,40)

  ground.display();
  platform1.display();
  platform2.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  
  boxA.score();
  boxB.score();
  boxC.score();
  boxD.score();
  boxE.score();
  boxF.score();
  boxG.score();
  boxH.score();
  boxI.score();
  
  imageMode(CENTER)
  image(polygonImg ,polygon.position.x,polygon.position.y,30,30);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon);
  }
}
async function getTime(){
var time= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var timeJSON=await time.json()
var datetime = timeJSON.datetime;
var hour = datetime.slice(11,13);

if(hour>=11 && hour<=18){
background("yellow");
}
else{
 background("black");   
}


}