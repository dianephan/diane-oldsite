/**
Diane Phan 
Workshop 3 October 12, 2017
**/

//bool target = false; 
var splash = false; 
var rainbow = 255; 
var radius = 10; 
var darkness = false; 

function setup() {
    createCanvas(800, 500);
    background(132, 211, 255, 255); 
    
    fill(0, 100);
    text("w a t e r c o l o r s    i n    t h e    s k y", width/2, height/11);
    text("test out colors and use the arrow keys for more features", width/2, height/8);
    text("click on dirty water box in corner to restart", width/2, height/7);
}

function draw() {
    var color = 255; 

    stroke(200, 200, 100, color); //gold color 
    color--; 
    //square to reset 
    fill(127, 164, 202, 125); 
    rect(707, 435, 198, 435);
    
    //click to restart 
    if(mouseX <= width && mouseX <= height){
        fill(0, 26, 255, 17); //light blue color  
        noStroke();
        ellipse(mouseX, mouseY, 10, 10);
    }

    if(splash == true){ //triangles 
        var endx = 300;
        var endy = 400;     
        
        for (var i = 0; i <= 100; i++){
            fill(193, 225, 255, color);
            line(random(300, 700), 480, endx, endy);
            endx++;
            endy++;
        }
        splash = false; 
    }
    if (splash == false){   //triangles 
        var leftendx=250;
        var leftendy=350;
        
        for (var i = 0; i <= 100; i++){
            line(random(0, 300), 480, leftendx, leftendy);
            endx++;
            endy++;
        }   
        splash = true; 
    }
    if (darkness == true){
        //white stars
        fill(255); 
        ellipse(random(0, 800), random(0, 500), 1, 1);            
    }
        
}


function mousePressed(){
    if(mouseX <= width && mouseY <= height){
        //big dot 
        splash = true; 
        var radius = 30; 
        fill(random(rainbow), random(rainbow), random(rainbow)); 
        ellipse(mouseX, mouseY, radius, radius);

        if (mouseX > 707 && mouseY >= 435){
            //clear the screen
            background(132, 211, 255, 255); 
        }        
    }
    
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        background(0);  //turn to night 
        fill(random(rainbow), random(rainbow), random(rainbow)); 
        ellipse(mouseX, mouseY, 10, 10);
        darkness = true; 
    }
    if(keyCode == LEFT_ARROW){ //random triangles 
        triangle(random(0, 100), random(0, 450), random(0, 100), random(0, 450), random(0, 100), random(0, 450));
        fill(random(rainbow), random(rainbow), random(rainbow)); 

        triangle(random(0, 100), random(0, 300), random(0, 100), random(0, 300), random(0, 100), random(0, 300));
        fill(0); 
    }
    if(keyCode == RIGHT_ARROW){ //random squares 
        noFill(); 
        rect(random(580, 800), random(0, 430), random(650, 800), random(0, 300));
        noFill(); 
    }
    
}
