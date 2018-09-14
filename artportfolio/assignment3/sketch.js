/**
Diane Phan 
Assignment 3 October 24, 2017

**/

    var ellipsex = 50; 
    var oneellipsey = 50; 
    var ellipser = 70; 
    var twoellipsex = 150; 
    var twoellipsey = 100; 
    var r, g, b; 
    var str;
    var blues = (255);

function setup() {
    createCanvas(1500, 490);

    stroke(255); 
    strokeWeight(5); 

     //big circles at top  
    for (var i = 0; i < 50; i++){
        fill(58, 90, 144, 255); //dark blue
        
        for (var j = 0; j < 30; j++){    
            ellipse(ellipsex, oneellipsey, ellipser); //1            
            ellipse(ellipsex, oneellipsey + 80, ellipser-10);  //2
            ellipse(ellipsex, oneellipsey + 150, ellipser-20);   //3
            ellipse(ellipsex, oneellipsey + 210, ellipser-30);   //4
            ellipse(ellipsex, oneellipsey + 265, ellipser-40);   //5
            ellipse(ellipsex, oneellipsey + 300, ellipser-50);   //6
            ellipse(ellipsex, oneellipsey + 340, ellipser-60);   //7
            ellipse(ellipsex, oneellipsey + 400, ellipser-70);   //8
            ellipse(ellipsex, oneellipsey + 370, ellipser-75);   //9
            
            ellipsex += 200;
            
            ellipse(ellipsex, oneellipsey, ellipser); //1            
            ellipse(ellipsex, oneellipsey + 80, ellipser-10);  //2
            ellipse(ellipsex, oneellipsey + 150, ellipser-20);   //3
            ellipse(ellipsex, oneellipsey + 210, ellipser-30);   //4
            ellipse(ellipsex, oneellipsey + 265, ellipser-40);   //5
            ellipse(ellipsex, oneellipsey + 300, ellipser-50);   //6
            ellipse(ellipsex, oneellipsey + 340, ellipser-60);   //7
            ellipse(ellipsex, oneellipsey + 400, ellipser-70);   //8
            ellipse(ellipsex, oneellipsey + 370, ellipser-75);   //9            
        }
    }
    //big circles start at bottom
    for (var i = 0; i < 50; i++){
        fill(255, 179, 26, 255);    //orange
        
        for (var j = 0; j < 30; j++){                                               
            ellipse(twoellipsex, oneellipsey + 340, ellipser); //1           
            ellipse(twoellipsex, oneellipsey + 265, ellipser-10);  //2
            ellipse(twoellipsex, oneellipsey + 200, ellipser-20);   //3
            ellipse(twoellipsex, oneellipsey + 140, ellipser-30);   //4
            ellipse(twoellipsex, oneellipsey + 90, ellipser-40);   //5
            ellipse(twoellipsex, oneellipsey + 50, ellipser-50);   //6
            ellipse(twoellipsex, oneellipsey + 10, ellipser-60);   //7
            ellipse(twoellipsex, oneellipsey + 20, ellipser-70);   //8
            ellipse(twoellipsex, oneellipsey - 15, ellipser-75);   //9
            
            twoellipsex += 200;
            
            ellipse(twoellipsex, oneellipsey + 340, ellipser); //1            
            ellipse(twoellipsex, oneellipsey + 265, ellipser-10);  //2
            ellipse(twoellipsex, oneellipsey + 200, ellipser-20);   //3
            ellipse(twoellipsex, oneellipsey + 140, ellipser-30);   //4
            ellipse(twoellipsex, oneellipsey + 90, ellipser-40);   //5
            ellipse(twoellipsex, oneellipsey + 50, ellipser-50);   //6
            ellipse(twoellipsex, oneellipsey + 10, ellipser-60);   //7
            ellipse(twoellipsex, oneellipsey + 20, ellipser-70);   //8
            ellipse(twoellipsex, oneellipsey - 15, ellipser-75);   //9
        }
    }
    
}

function draw() {
    //purple on the left to reddish on the right
    r = map(mouseX, 0, width, 80, 255);        
    g = map(mouseY, 0, height, 0, 100); 
    background(r, g, 100, 4); 

    //title of piece
    str = map(mouseX, 0, 100, 0, 100); 
    stroke(str);
    
    strokeWeight(6);
    fill(0, 100, random(blues), 200);
    text("o c t o p i", width/2, 480);
    strokeWeight(1);
    line(13, 480, width/2 - 12, 480); 
    line(width/2 + 60, 480, 1488, 480); 

}

