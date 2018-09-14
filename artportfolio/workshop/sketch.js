//Diane Phan 
//Workshop 1 October 3, 2017

/**
color picker
http://www.rapidtables.com/web/color/color-picker.htm
**/



function setup() {
    createCanvas(500, 500);
    background(228, 242, 255, 255);
    //if using transparencies, put things into the set up
}


function draw() {
  
    
    noStroke();
    fill(69, 229, 235); //cyan 
    textSize(35);
    text("d r e a m", 245, 260);
    textSize(24);
    text("catcher", 275, 280);
    textStyle(ITALIC);
    
    noStroke();
    fill(213, 207, 240, 255); //light purple
    //go clockwise direction
    triangle(175, 167, 195, 145, 170, 141);
    //triangle(344, 406, 365, 402, 359, 421);
    //triangle(364, 426, 385, 422, 379, 441);
    triangle(431, 145, 448, 162, 455, 142);

    
    /**gold triangles 
    fill(255, 236, 154, 255); 
    triangle(212, 140, 217, 123, 198, 123);
    **/
    
    //blue lines
    strokeWeight(2);
    stroke(207, 232, 245, 255);
    line(164, 329, 183, 428);
    line(140, 340, 222, 408);
    line(136, 390, 220, 382);
    
    //green lines
    strokeWeight(2);
    stroke(206, 233, 212, 255); 
    line(128, 410, 152, 430); 
    line(124, 418, 144, 435); 

    //pink lines
    strokeWeight(2);
    stroke(238, 216, 234); //pink 
    line(300, 400, 200, 156);
    line(280, 395, 190, 170);
    line(165, 244, 229, 373);
    line(212, 361, 464, 236);
    line(165, 245, 382, 118);
    line(167, 216, 352, 105);
    line(166, 230, 367, 110);
    line(381, 116, 463, 275);
    line(280, 395, 454, 305); 
    line(343, 102, 451, 310);
    //line(167, 272, 418, 143);


    //rectangles 
    noStroke();
    fill(255);
    //x y width height 
    rect(150, 440, 480, 50); //bottom right 
    rect(50, 120, 50, 475); //left rect 
    rect(50, 10, 500, 50); //top rect
    
    //more rectangles 
    noStroke();
    //fill(155, 195, 226, 255);
    fill(255);
    rect(9, 1, 9, 500); 
    rect(24, 1, 14, 500); 
    
    //white lines 
    strokeWeight(2);
    stroke(255);
    //upper lines 
    line(50, 70, 500, 70);
    line(50, 75, 500, 75);
    line(50, 78, 500, 78);
    line(50, 86, 500, 86);
    //left lines 
    line(105, 120, 105, 500);
    line(115, 120, 115, 500);
    line(112, 120, 112, 500);

    
    noFill();
    strokeWeight(2);
    stroke(207, 208, 209)
    ellipse(315, 250, 300, 300);
    arc(180, 378, 80, 85, 0, PI+HALF_PI); 
    arc(140, 420, 30, 30, 0, PI+HALF_PI); 

    
}

/**

function keyPressed(){
    if (keyCode == UP_ARROW){
        fillVal = 255;
    }
    else if (keyCode == DOWN_ARROW){
        fillVal = 0;
    }
    return false;
}
**/    
    
    
    