/**
Diane Phan 
Assignment 4 October 31, 2017
**/


//var frank = new mrblock(50, 200, 100); //50, 130
var m1 = new monster(550, 250); 
var smile = false; 
var eat = false; 

//global variables for candy
var pink, blue, green; 


function setup() {
    createCanvas(850, 700);
    pink = new candy(420, 220, 50, 40, 5, 5); 
    blue = new candy(50, 50, 50, 40, 5, 5); 
    green = new candy(700, 200, 50, 40, 5, 5); 

}


function draw() {
    background(220); 

    stroke(0);
    strokeWeight(2); 
    noFill();
    
//    frank.drawFrank(); 
//    frank.drawBody(); 

    m1.drawMonster(); 
    
    fill(255, 150, 150, 255); 
    pink.drawCandy(); 
    pink.moveCandy(); 
        
    fill(75, 93, 255, 255); 
    blue.drawCandy(); 
    blue.moveCandy(); 

    fill(75, 255, 124, 255); 
    green.drawCandy();
    green.moveCandy(); 
    
    //if (candy.cx < 360 || candy.cx > width -30){
    if(pink.bounceCandy() == true){
        m1.monsterEat(); 
    }
    if(blue.bounceCandy() == true){
        m1.monsterEat();
    }
    if(green.bounceCandy() == true){
        m1.monsterEat();
    }
    
    
    
}

function monster(c1, c2){
    this.c1 = c1; 
    this.c2 = c2; 
    
    this.drawMonster = function(){
        fill(55, 63, 132, 255);
        stroke(21, 24, 105); 
        strokeWeight(50); 
        ellipse(this.c1, this.c2, 250, 200); //550, 250 
        triangle(455, 155, 522, 128, 490, 55); //left horn
        triangle(618, 138, 676, 179, 698, 94); //right horn 
        strokeWeight(15); 
        fill(55, 63, 132, 255);
        triangle(513, 203, 495, 220, 523, 227); //left eye
        triangle(580, 231, 598, 211, 598, 231); //right eye 
    }
    this.monsterShake = function(){
        //took this shake code from Solen's Art22 website
        //https://sites.google.com/view/art22-f17/week-4-functions
        fill(55, 63, 132, 255);
        var shakeX = random(-5, 5);
        var shakeY = random(-5, 5); 
        ellipse(this.c1 +shakeX, this.c2 +shakeY, 250, 200); 
    }
    this.monsterEat = function(){
        this.monsterShake(); 
        text("S U G A R ! ! !", this.c1 +1, this.c1 - 450);
        fill(0);
        noStroke(); 
        // 500, 220 
        rect(this.c1 -40, this.c2 +10, 100, 60); 
        strokeWeight(5); 
        fill(132, 0, 4, 255);
        strokeWeight(20); 
        triangle(513, 203, 495, 220, 523, 227); //left eye
        triangle(580, 231, 598, 211, 598, 231); //right eye 
        fill(255); //tooth
        rect(this.c1 - 20, this.c2 +10, 10, 10); 
        rect(this.c1 + 20, this.c2 +10, 10, 10); 

    }
    
}


function candy(cx, cy, cr1, cr2, speedX, speedY){
    this.cx = cx;
    this.cy = cy;
    this.cr1 = cr1; 
    this.cr2 = cr2; 
    this.speedX = speedX;
    this.speedY = speedY; 
    
    this.drawCandy = function(){
        noStroke(); 
        ellipse(this.cx, this.cy, this.cr1, this.cr2); 
        fill(255, 50, 50, 255); 
        text("candy", this.cx-15, this.cy); 
    }
    this.moveCandy = function(){
        this.cx += this.speedX; 
        this.cy += this.speedY; 
    }
    this.bounceCandy = function(){
        //750, 400
        if (this.cx < 0 || this.cx > width){
            this.speedX = -this.speedX; 
        } 
        if (this.cy < 0 || this.cy > height){
            this.speedY = -this.speedY; 
        }
        //if hit monster 
        if(this.cx < 800 && this.cy < 100){
            eat = true;
            return eat;     
        }    
    }
    
}


/*
    ended up taking this frank character out of my picture but I wanted to show you
    that I made this object and functions for mrblock class

*/

//function mrblock(x1, y1, x2){
//    this.x1 = x1; //50
//    this.y1 = y1; //200
//    this.x2 = x2; 
//    
//    this.drawFrank = function(){
//        noStroke(); 
//        fill(0, 151, 30, 255); 
//        rect(this.x1, this.y1, this.x2, 50, 20);  //20 radius head 
//        fill(0); 
//        line(150, 350, 200, 350); 
//    }
//    this.drawBody = function(){
//        fill(0, 151, 30, 255); 
//        rect(this.x1+10, this.y1+50, this.x2-20, 50+50, 20);
//        //line(this.x1+10, this.y1+60, x1+10+armX, y1+60+armY);
//        //this.zombie(); 
//    }
//    this.reach = function(){
//        //when mouse cursor is above head, reach up
//        var armX = map(mouseX, 0, width, -40, 40);
//        var armY = map(mouseY, 0, height, -40, 40); 
//        stroke(0); 
//        strokeWeight(5); 
//        fill(0, 151, 30, 255); 
//        line(this.x1+10, this.y1+60, this.x1+10+armX, this.y1+60+armY); //left arm
//        line(this.x1+85, this.y1+60, this.x1+85+armX, this.y1+60+armY); //right arm
//    }
//    this.angry = function(){
//        fill(0);
//        noStroke(); 
//        arc(this.x1/2 +95, this.y1 + 17, 20, 20, 0,  PI+QUARTER_PI, PIE);
//        arc(this.x1/2 +55, this.y1 + 17, 20, 20, 0,  PI+QUARTER_PI, PIE);
//        text("GRRRR!", this.x1 + 20, this.y1 - 35); 
//    }
//    this.smile = function(){
//        fill(0); 
//        ellipse(this.x1/2 +95, this.y1 + 17, 10); //left eye
//        ellipse(this.x1/2 +55, this.y1 + 17, 10); //right eye
//        arc(this.x1 +70, this.y1+ 40, this.x2, 10, HALF_PI, PI); 
//        fill(0); 
//        text("C A N D Y!", this.x1 + 20, this.y1 - 35); 
//    }
//}
