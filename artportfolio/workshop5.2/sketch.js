/**
Diane Phan 
Workshop 5.2 October 31, 2017
**/

var raindrops = []; 

function setup() {
    createCanvas(720, 400);

    //initialize rain 
    for (var i = 0; i < width - 100; i++){
        raindrops[i] = new rain(random(i*3 + 10), random(1, height/2), 4, 10, 2, 255);
    }
}

function draw() {
    background(200); 
    
    for (var i = 0; i < raindrops.length; i++){
        raindrops[i].drawRain(); 
        raindrops[i].pourRain(); 
        raindrops[i].resetPour();   
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