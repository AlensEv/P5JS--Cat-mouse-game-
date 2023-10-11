// fire cat and mouse
// attack the mouse with the fireballs
/// aim in the direction you want to attack
// get the mouse on the side banners to get points
// orange banners are 1 point
// green banners are 5 points
// blue banners are 10 points
// to clear fireball press space

// please make sure your screen is at the right scale to see the game area.

var bg;
let timer = 100;
let score;
let sprite, bumper;
let boxes, smallBoxes, bigBoxes;
let player, coin, dots;
let countDown;
let floor15, block, floor1, floor2, floor3, floor4, floor16, floor25, floor26;
let titleScreen;

  
function setup() {
new Canvas(windowWidth, windowHeight);
  bg = loadImage("assets/3dbackkk1.jpg");
 //background
  

  gems = new Group();
  gems.area = 20;
  gems.x = () => random(0, width);
  gems.y = () => random(0, height);
  gems.amount = 0;
// mouse
  dots = new Group();
  dots.color = "yellow";
  dots.y = 300;
  // dots.x= 500;
  dots.diameter = 40;
  
dots.addAnimation("shooting", "assets/mousebigger.png");
  while (dots.length < 6) {
    let dot = new dots.Sprite();
    dots.x = dots.length * 100;
  }

  block = dots;
  boxes = new Group();
  boxes.h = 30;

  smallBoxes = new boxes.Group();
  smallBoxes.w = 30;

  bigBoxes = new boxes.Group();
  bigBoxes.w = 60;

  //coin = new Sprite(800, 50, 30);
  //coin.color = "yellow";
  player = new Sprite(500, 500);


  //cat
  player.addAnimation("moving", "assets/3dcat28.png");
  //fireball
   smallBoxes.addAnimation('shooting','assets/fireball3d.png');

  
  // bumpers are the banners
  bumper = new Sprite(70, 360, 30, 90, "static"); //left bumper
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper = new Sprite(80, 500, 30, 90, "static"); //left bumper #3
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper = new Sprite(80, 230, 30, 90, "static"); //left bumper #1
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper = new Sprite(80, 100, 30, 90, "static"); //top left bumper #1
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper = new Sprite(80, 630, 30, 90, "static"); //left bumper #1
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper = new Sprite(760, 360, 30, 90, "static"); //right bumper
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper = new Sprite(760, 100, 30, 90, "static"); //right bumper
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper = new Sprite(760, 230, 30, 90, "static"); //right bumper
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper = new Sprite(760, 500, 30, 90, "static"); //right bumper
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper = new Sprite(760, 630, 30, 90, "static"); //right bumper
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/VerticalBumper.png");

  bumper = new Sprite(430, 90, 90, 30, "static"); // center top bumper
  bumper.color = "brown";
  bumper.addAnimation("shooting", "assets/HorizontalBumper.png");

  bumper = new Sprite(170, 90, 90, 30, "static"); // top bumper
  bumper.color = "brown";
  bumper.addAnimation("shooting", "assets/HorizontalBumper.png");

  bumper = new Sprite(300, 90, 90, 30, "static"); // top bumper
  bumper.color = "brown";

  bumper.addAnimation("shooting", "assets/HorizontalBumper.png");

  bumper = new Sprite(560, 90, 90, 30, "static"); // top bumper
  bumper.color = "brown";
  bumper.addAnimation("shooting", "assets/HorizontalBumper.png");

  bumper = new Sprite(680, 90, 90, 30, "static"); // top bumper
  bumper.color = "brown";
  bumper.addAnimation("shooting", "assets/HorizontalBumper.png");

  bumper = new Sprite(170, 650, 90, 30, "static"); // Bottom bumper
  bumper.color = "brown";
  bumper.addAnimation("shooting", "assets/HorizontalBumper.png");

  bumper = new Sprite(300, 650, 90, 30, "static"); // Bottom bumper
  bumper.color = "brown";
  bumper.addAnimation("shooting", "assets/HorizontalBumper.png");

  bumper = new Sprite(560, 650, 90, 30, "static"); // Bottom bumper
  bumper.color = "brown";
  bumper.addAnimation("shooting", "assets/HorizontalBumper.png");

  bumper = new Sprite(680, 650, 90, 30, "static"); // Bottom bumper
  bumper.color = "brown";
  bumper.addAnimation("shooting", "assets/HorizontalBumper.png");

  bumper = new Sprite(430, 650, 90, 30, "static"); // Center bottom bumper
  bumper.color = "brown";
  bumper.addAnimation("shooting", "assets/HorizontalBumper.png");

  floor1 = new Sprite(10, 200, 10, 150, "static"); //left floor
  floor1.color = "red";
floor1.addAnimation("shooting", "assets/redbarvert.png")
  floor15 = new Sprite(10, 450, 10, 150, "static"); //left floor +5
  floor15.color = "green";
floor15.addAnimation("shooting", "assets/greenbar.png");
  
  floor16 = new Sprite(10, 630, 10, 150, "static"); //left floor +10
  floor16.color = "blue";
floor16.addAnimation("shooting", "assets/blueebar.png");
  
  
  floor2 = new Sprite(820, 200, 10, 150, "static"); // right floor
  floor2.color = "red";
  floor2.addAnimation("shooting", "assets/redbarvert.png")
  
  floor25 = new Sprite(820, 450, 10, 150, "static");
  floor25.addAnimation("shooting", "assets/greenbar.png");
  +5; // right floor
  
  
  floor25.color = "green";
  floor26 = new Sprite(820, 630, 10, 150, "static");
  +10; // right floor
  
  
  floor26.addAnimation("shooting", "assets/blueebar.png");
  floor26.color = "blue";

  floor3 = new Sprite(420, 50, 810, 10, "static"); // top floor
  floor3.color = "red";
  
   floor3.addAnimation("shooting", "assets/rebarverL.png");

  floor4 = new Sprite(420, 700, 810, 10, "static"); // bottom floor
  floor4.color = "red";
   floor4.addAnimation("shooting", "assets/rebarverL.png");
  
  
    bumper = new Sprite(900, 400, 40, 900, "static"); //top left bumper #1
  bumper.color = "white";
}

function draw() {
   image(bg, 0, 0);
 

  player.moveTowards(mouse);
  //if (mouse.presses()) sprite.rotateTo(mouse, 0, 3);
  //clear();
 

  if (mouse.presses("left")) {
    new smallBoxes.Sprite(mouse.x, mouse.y);
  }
  if (mouse.presses("right")) {
    new bigBoxes.Sprite(mouse.x, mouse.y);
  }
  if (kb.presses(" ")) {
    //gems.amount = 50;
    boxes.removeAll();
  }
 

  //if (player.overlaps(coin)) coin.remove();

  let currentTime = int(millis() / 1000);
  countDown = timer - currentTime;
  if (countDown < 0) {
    countDown = 0;
    // if object collides with wall +5 on the timer
    // + 1 on the points

    textSize(100);
    text("GAME\nOVER", 270, 290);
     textSize(20);
    text("Thanks for scattering sprites \n", 300, 500);
    
    text("CREDITS\n by Alens Evra", 380, 550);
    fill(0,0,0)
  }
  
  textSize(39); 
  fill(900, 0, 0); 
  score = 0;
  if (floor1.colliding(dots)) (score += score = +1), (dots.amount = +4);
  {
    //dots.amount=+4
  }

  if (floor2.colliding(dots)) (score = score + 1), (dots.amount = +4);
  {
    dots.amount = +4;
  }

  if (floor3.colliding(dots)) (score = score + 1), (dots.amount = +4);
  {
    dots.amount = +4;
  }
  if (floor4.colliding(dots)) (score = score + 1), (dots.amount = +4);
  {
    dots.amount = +4;
  }
  if (floor15.colliding(dots)) (score = score + 5), (dots.amount = +4);
  {
    dots.amount = +4;
  }
  if (floor16.colliding(dots)) (score = score + 10), (dots.amount = +4);
  {
    dots.amount = +4;
  }
  if (floor25.colliding(dots)) (score = score + 5), (dots.amount = +4);
  {
    dots.amount = +4;
  }
  if (floor26.colliding(dots)) (score = score + 10), (dots.amount = +4);
  {
    dots.amount = +4;
  }

  /*
  if (floor3.collide(dots))dots.remove(),score= score+10 ;
  dots.amount=+1
  
    if (floor4.collide(dots)) dots.remove(),score= score+10;{
  dots.amount=+1;
      
    }
    */
  // show string and time since sketch started at ×=30, y=380 fill (0);
 

  
  text("TIME: " + countDown, 60, 30);

  text("SCORE: " + score, 600, 30);
 
}
