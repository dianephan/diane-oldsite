/**
Diane Phan 
Workshop 4 October 24, 2017
**/

function setup() {
    createCanvas(700, 400);

}

function draw() {
    background(220); 

    stroke(0);
    strokeWeight(2); 
    noFill();
    
    mrblock(50, 150, 70);
    mrblock(170, 150, 90);
    mrblock(300, 150, 100);
    mrblock(440, 150, 90);
    mrblock(580, 150, 70);
    
    noStroke(); 
    fill(random(255), random(255), random(255));
    ellipse(width/2, 70, 70);
    text("party!", 25, 20)
;
}

function mrblock(x1, y1, x2){
    //20 radius for all  
    rect(x1, y1, x2, 50, 20); 
    body(x1, y1, x2); 
    
}

//arm flailing in response to mouseX and mouseY 
function body(x1, y1, x2){
    rect(x1+10, y1+50, x2-20, 50+50, 20);
    var armX = map(mouseX, 0, width, -40, 40);
    var armY = map(mouseY, 0, height, -40, 40); 

    /*
    instead of looking at the points on the arm as an absolute
    value, add to the amount that you currently have  */
    line(x1+10, y1+60, x1+10+armX, y1+60+armY)
    
}