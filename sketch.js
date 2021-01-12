var jerry,jerryImg,jerryImg2,jerryAnimation;
var tom,tomImg,tomImg2,tomAnimation;
var garden;

function preload() {
    //load the images here
    jerryImg=loadImage("jerryTwo.png");
    tomImg=loadImage("tomFour.png");
    garden=loadImage("garden.png");
    tomAnimation=loadAnimation("tomThree.png","tomTwo.png");
    jerryAnimation=loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg2=loadAnimation("jerryOne.png");
    tomImg2=loadAnimation("tomOne.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry= createSprite(200,690,20,20);
    //jerry.addImage("cheese",jerryImg2);
    jerry.addImage(jerryImg);
    jerry.addAnimation("standing",jerryAnimation);
    
    jerry.scale=0.15;
    
     tom= createSprite(800,690,20,20);
    //tom.addImage("sleep",tomImg2);
     tom.addImage(tomImg);
     tom.addAnimation("running",tomAnimation);
     
     tom.scale=0.15;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    
    keyPressed();
    collided();

 // tom.debug=true;

  //jerry.debug=true;
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("space")){

tom.velocityX=-3;
tom.changeAnimation("running",tomAnimation);

jerry.changeAnimation("standing",jerryAnimation);


  }


}

function collided(){
  //
  //if(jerry.x-tom.x < tom.width/2 + jerry.width/2 && tom.x-jerry.x < tom.width/2 + jerry.width/2 && jerry.y-tom.y < tom.width/2 + jerry.width/2 && tom.y-jerry.y < tom.width/2 + jerry.width/2){
  
//tom.addImage(tomImg2);
//jerry.addImage(jerryImg2);

//tom.changeImage(tomImg2);
//jerry.changeImage(jerryImg2);

      //}
     // else{
       
      // tom.addImage(tomImg);
       //jerry.addImage(jerryImg);

     // }

if(tom.x-jerry.x < (tom.width - jerry.width)/2 ){

tom.addAnimation("sleep",tomImg2);
tom.x=400;
tom.velocityX=0;
tom.changeAnimation("sleep");

jerry.addAnimation("cheese",jerryImg2);
jerry.changeAnimation("cheese");

}

}
