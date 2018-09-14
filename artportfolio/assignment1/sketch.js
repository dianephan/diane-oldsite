/**
Diane Phan 
Workshop 1 October 3, 2017

color picker
http://www.rapidtables.com/web/color/color-picker.htm

1. [x] increasing radius of circles at bottom 
2. [x] flashing text 
3. [x] background red to black? 
4. [x] used random for sparkles 
5. [x] changed stroke size

**/



var allColors = 255;
var radius = 25;  
var backR = 199; 
var backG = 32;
var backB = 32; 
var fadeYellow= 255; 
var rainbow = 255; 

var noiseScale=0.02;


function setup() {
    createCanvas(1250, 600);
    frameRate(20);    
    console.log("Setup"); 
}


function draw() {
    
    backR--; 
    backG--;
    backB--;
    background(backR, backG, backB, 100);
    
    noStroke();
    //random generated color 
    //fill(random(allColors), random(allColors), random(allColors)); 
    fill(238, 255, 0, 100);
    textSize(35);
    text("m o o n  f e s t i v a l", 480, 270);
    textSize(18);
    text("october 4, 2017", 580, 300);
    text("san jose, ca", 592, 317);
    textStyle(ITALIC);

    //circle
    fill(249, 229, 54, fadeYellow);
    fadeYellow--;
    strokeWeight(3);
    stroke(207, 208, 209)
    ellipse(640, 290, 350, 350);
    
 
    //make a bunch of circles at the bottom for light effect 
    noFill();
    for (var x = 170; x < 999; x++){
        x= x+50; 
        arc(x, 550, radius, radius, 0, TWO_PI); 
        radius++;        
    }
    
    
    //make random pale yellow circles appear     
    noStroke();
    fill(255, 251, 92, 175);
    //range from [# to #] 
    ellipse(random(400, 500), random(300, 130), 15, 15);
    ellipse(random(640, 500), random(640, 290), 15, 15);
    ellipse(random(700, 990), random(190, 500), 15, 15);

    
    //colorful random circles 
    noStroke(); 
    fill(random(rainbow), random(rainbow), random(rainbow));
    ellipse(random(100, 400), random (100, 600), 10, 10); //left side 
    ellipse(random(1000, 1200), random (100, 600), 10, 10); //right side 

    var lanternW = 40; //lantern width 
    var lanternL = 50; //lantern length 
    var glow = (random(1, 12));
    
    //lanterns 
    noStroke();
 //   fill(0, 255, 26, 255);
    stroke(255, 255, 143, 255); //glow
    strokeWeight(glow);
    
    
    fill(77, 255, 0, 255); //green lantern
    ellipse(420, 35, lanternW, lanternL); 
    fill(205, 0, 255, 255); //purple lantern
    ellipse(270, 35, lanternW+25, lanternL+5); 
    fill(255, 119, 0, 255); //red orange lantern
    ellipse(120, 35, lanternW, lanternL); 
    fill(0, 255, 238, 255); //cyan lantern
    ellipse(620, 35, 40, 50);
    
    fill(77, 255, 0, 255); //green lantern
    ellipse(1130, 35, lanternW, lanternL); 
    fill(205, 0, 255, 255); //purple lantern
    ellipse(980, 35, lanternW+25, lanternL+5); 
    fill(255, 119, 0, 255); //red orange lantern
    ellipse(820, 35, lanternW, lanternL); 


    //message appear after dark
    if (frameCount >270){
        noStroke(); 
        fill(random(rainbow), random(rainbow), random(rainbow));
        text("click to rsvp", width/2 + 480, height/2); 
        textStyle(ITALIC);
    }
   
    
    //trying out noise
    //credit to the provided noise example code from the art22 website as reference
    for (var x=0; x < width; x++) { //expands to whole width screen
        //for(var y=40; y < length; y++){
        var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
        //stroke(199, 32, 32, 100); //red mountains
        stroke(1, 9, 124, 200); //blue clouds
        line(x, 500+noiseVal*80, x, height);
        stroke(60, 73, 255, 20); //lighter blue clouds
        line(x, 490+noiseVal*80, x, height);
        stroke(115, 115, 155, 20); //grey clouds
        line(x, 480+noiseVal*80, x, height);
    }

    
}
