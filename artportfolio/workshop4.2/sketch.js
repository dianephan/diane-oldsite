/**
Diane Phan 
Workshop 4.2 October 26, 2017

used starter code from art22 website to create bouncing red ball 
**/

var x = 100;
var y = 100;
var r = 80; 
var speedX = 5;
var speedY = 6;

//3 global variables for x and y positions of rect 
var rectX = 70;
var rectY = 70; 
var rectcolor = 255; 
//var hit = false; 

function setup() 
{
  createCanvas(800, 600);
}


function draw() 
{
    background(0);
    
    //invoking our functions
    drawBall();
    moveBall();
    bounceBall();
   
    //fill(rand(rectcolor)); 
    fill(255); 
    rect(rectX, rectY, 70, 70); 
  
//    collision(x, y, rectX, rectY); 
    if(collision() == true){
        resetrect(); 
    }
    
}

//defining our functions
function drawBall()
{
  noStroke();
  fill(220, 80, 60);
  ellipse(x, y, r); 
}

function moveBall()
{
  x += speedX;
  y += speedY;
}

function bounceBall()
{
  if (x < 30 || x > width - 30)
  speedX = -speedX;
  
  if (y < 30 || y > height - 30)
  speedY = -speedY; 
}

function resetrect(){
    background(0); 
    
    //fill(random(rectcolor)); 
    //new x y for circle
    x = random(width);
    y = random(height); 
    //new x y for rectangle 
    rectX = random(width);
    rectY = random(height);
}

function collision(){
    if((x) > rectX && (x) < rectX + 70 
      && (y) > rectY && (y) < rectY + 70){
        //hit = true; 
        //return hit; 
        return true; 
    }
    
}