/**
Diane Phan 
Workshop 5.1 November 2, 2017
**/


var m1 = new monster(550, 250); 
var smile = false; 
var eat = false; 

var bats = []; 
var raindrops = []; 

function setup() {
    createCanvas(1000, 700);

    //initialize the array with minimum 20 
    for(var i = 0; i < 20; i++){
        bats[i] = new bat(random(width), random(height), 50, 40, 5, 5); 
    }
    //initialize rain 
    for (var i = 0; i < width - 100; i++){
        raindrops[i] = new rain(random(i*3 + 10), random(1, height/2), 4, 10, 2, 255);
    }
    
}


function draw() {
    background(200); 

    stroke(0);
    strokeWeight(2); 
    noFill();

    m1.drawMonster(); 
    
    //call bats
    for(var i = 0; i < 20; i++){
        fill(0); 
        bats[i].drawBat(); 
        bats[i].moveBat();
        
        if(bats[i].bounceBat() == true){
            m1.monsterEat(); 
        }
    }
    
    //call for rain
    for (var i = 0; i < raindrops.length; i++){
        raindrops[i].drawRain(); 
        raindrops[i].pourRain(); 
        raindrops[i].resetPour();   
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


function bat(cx, cy, cr1, cr2, speedX, speedY){
    this.cx = cx;
    this.cy = cy;
    this.cr1 = cr1; 
    this.cr2 = cr2; 
    this.speedX = speedX;
    this.speedY = speedY; 
    
    this.drawBat = function(){
        noStroke(); 
        ellipse(this.cx, this.cy, this.cr1, this.cr2); 
        fill(0);
        //triangle(this.cx, this.cy, this.wingspan1, this.cy, 5, 12);
        rect(this.cx+20, this.cy-20, 30, 20); //right
        rect(this.cx-40, this.cy-20, 40, 20); 
        fill(255); 
        ellipse(this.cx, this.cy, 28, 20);
        fill(0);
        ellipse(this.cx, this.cy, 14);

    }
    this.moveBat = function(){
        this.cx += this.speedX; 
        this.cy += this.speedY; 
    }
    this.bounceBat = function(){
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


function rain(x, y, rw, rl, speed, opacity){
    this.x = x; 
    this.y = y; 
    this.rw = rw; //radius width
    this.rl = rl; //radius length
    //direction of rain 
    this.speed = speed; 
    this.opacity = opacity; 
    this.lowerOpacity = opacity -1.2;
    
    this.drawRain = function(){
        strokeWeight(0.1); 
        fill(200, 226, 255, this.opacity); 
        ellipse(this.x, this.y, this.rw, this.rl); 
    }
    
    this.pourRain = function(){
        this.y += this.speed;   
        return this.lowerOpacity; 
    }
    
    this.resetPour = function(){
        if(this.y > height){
            this.x = random(1, width); 
            this.y = random(1, height/2); 
            this.opacity; 
        }      
    }        
}
