
var x, y, d = 0, pacX = 0, pacY = 0, pacSpeed = 4;//position & diameter
let r = 25;
var oc;        //mouth open/close
var a;  //angle of mouth
function setup() {
  createCanvas(400, 400);
  fill(255,255,0);
  noStroke();
	x = width / 2;
	y = height / 2;
    a = 9;  //angle of mouth
    oc= 0;
}

function draw() {
  background(0);
	
	if (pacX == 1 && x < width-r){//right pac move
		x += pacX*pacSpeed;
	}
	
	else if (pacX == -1 && x > +r){// left pac move
		x += pacX*pacSpeed;
	}
	
	if (pacY == 1 && y < height-r) //down pac move
	{
		y += pacY*pacSpeed;
	}
	else if (pacY == -1 && y > r) // up pac move
	{
		y += pacY*pacSpeed;
      
	}
	push();
	translate(x,y);
  rotate(d); // pac rotation 
  //draw arc
	arc(0,0,r*4,r*4,oc, -oc); 
  //conditional
  //to open/close mouth
	if (oc >= .90 ) a = -1;// pac mouth speed 
	if (oc <= 0.01) a = 1;
	oc += (a * 0.06);
	pop();
	

}

function keyPressed(){
if (keyCode === UP_ARROW) { // pac arrow activation up key 
  x += pacX*pacSpeed;
	d = -1.57; 
	pacX = 0;
	pacY = -1;
}
	
else if (keyCode === DOWN_ARROW) { // pac arrow activation down key 
  x += pacX*pacSpeed;
	d = 1.57;
	pacX = 0;
	pacY = 1;
}
	
else if (keyCode === RIGHT_ARROW) { // pac arrow activation right key 
  		x += pacX*pacSpeed;
	d = 0;
	pacX = 1;
	pacY = 0;
}

else if (keyCode === LEFT_ARROW) {// pac arrow activation left key 
  x += pacX*pacSpeed;
	d = 3.14;
	pacX = -1;
	pacY = 0;
}
}


