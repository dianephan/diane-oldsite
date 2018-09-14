/**
Diane Phan 
Workshop3.1 October 19, 2017

sorry it's not very pretty because I was having a 
difficult time understanding maps and I made mistakes. 
**/

    
    var xsun = 0; 
    var ysun = 300; 
    var speed = 1; 

function setup() {
    createCanvas(600, 600);
    /*
    copied the colorMode line from https://sites.google.com/view/art22-f17/week-3-loops
    by Instructor Solen 
    */
    colorMode(HSB, 360, 100, 100)

    //background(166, 196, 255, 180); 

    noStroke();
}

function draw() {
    /* 
    as you move from 0 to 600 on x axis, 
    color changes from black to white 
    */
    var mapbg = map(xsun, 0, 300, 0, 255);
    background(mapbg);
    
    //bottom
    fill(189, 100, 50, 255); 
    rect(0, 355, width, height);
    
    fill(60, 100, 84, 255); 
    ellipse(xsun, ysun, 80);

    xsun++; 
    ysun = ysun - speed; 
    
    if (ysun ==0 ){
        speed = speed * -1; 
    }            
}

