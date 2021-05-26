//Create variables here
var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;
function preload()
{
dogImg=loadImage("images/dogImg.png")
dogImg1=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  database=firebase.database()

  dog=createSprite(250,250,10,10)
  dog.addImage(dogImg)
  dog.scale=0.15

  foodStock=database.ref('food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg1)
}

  drawSprites();
  //add styles here
  
 stroke("black")
 text("food Remaining: "+foodS,170,200)
 textSize(13)
 text ("note:press up-arrow key to feed brago milk",130,10)
}

function readStock(data){
foodS=data.val()

}

function writeStock(x){
 if(x<=0){
   x=0;
 }
 else{
   x=x-1
 }
 database.ref('/').update({
   food:x
 })
}
