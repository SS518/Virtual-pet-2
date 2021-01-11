const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;
var feedDog,addFood;
var fedTime,lastfed;
var food1,food2,food3,food4,food5,food6,food7,food8,food9,food10,food11,food12,food13,food14,food15;

var feed,addFood;

function preload(){
   dogImg=loadImage("Images/Dog.png");
   dogImg1=loadImage("Images/happy dog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  engine = Engine.create();
	world = engine.world;

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 

  food1 = new Food(10,0)
  food2 = new Food(20,0)
  food3 = new Food(30,0)
  food4 = new Food(10,0)
  food5 = new Food(10,0)
  food6 = new Food(10,0)
  food7 = new Food(10,0)
  food8 = new Food(10,0)
  food9 = new Food(10,0)
  food10 = new Food(10,0)
  food11 = new Food(10,0)
  food12 = new Food(10,0)
  food13 = new Food(10,0)
  food14 = new Food(10,0)
  food15 = new Food(10,0)

  feed = createButton("Click To Feed the dog");
  feed.position(680,350);
  feed.mousePressed(feedDog);


  addFood = createButton("Click To Add Food");
  addFood.position(400,350);
 // addFood.mousePressed(addFoods)
  Engine.run(engine);
}

// function to display UI
function draw() {
  background(46,139,87);

  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
if( foodS >=1  ){
  food1.display();
}
if( foodS >=2  ){
  food2.display();
}
if( foodS >=3  ){
  food3.display();
}
if( foodS >=4  ){
  food4.display();
}
if( foodS >=5  ){
  food5.display();
}
if( foodS >=6  ){
  food6.display();
}
if( foodS >=7  ){
  food7.display();
}
if( foodS >=8  ){
  food8.display();
}
if( foodS >=9  ){
  food9.display();
}
if( foodS >=10  ){
  food10.display();
}
if( foodS >=11  ){
  food11.display();
}
if( foodS >=12  ){
  food12.display();
}
if( foodS >=13  ){
  food13.display();
}
if( foodS >=14  ){
  food14.display();
}
if( foodS >=15  ){
  food15.display();
}

  drawSprites();
 // fill(255,255,254);
 //  stroke("black");
//  text("Food remaining : "+foodS,170,200);
//  textSize(13);
//  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}