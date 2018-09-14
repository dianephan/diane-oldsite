/**
Diane Phan 
Workshop 3 October 17, 2017

**/

function setup() {
    createCanvas(1500, 700);
    background(0); 

    
    //gradient blue to pink
    for(var i =0; i < height; i++){
        stroke(i, 193, 255); 
        line(0, i, width, i); 
    }
    
    
    //gradient pink to purple
    var r = 255; 
    var g = 193; 
    var b = 255; 
    for(var i = 400; i < height; i++){
        stroke(r, g, b, 100);  
        line(0, i, width, i);
        r -= 1;
        g -= 0.9; 
        b -= 0.2; 
    }
    
    //grid pattern 
    for(var y = 550; y < height; y++){
        for (var x = 10; x < width; x++){
            noFill();
            stroke(129, 129, 129, color);
            rect(x, y, x, y); 
            x+=20; 
        }
        y += 10; 

    }
    //center design 
    var centy = height/2 + 58;
    var color = 17; 

    for (var h = 0; h < 15; h++){
        for(var m = width/3; m < 1000; m++){   
            stroke(color); 
            ellipse(m, centy, 10); 
            m+=15;   
            color ++;
        }
        centy -=8; 
    }
    
    /*
    var triy = height/10 +355; 
    //triangle design 
    for(var t = 0; t < 500; t++){   //t is y axis 
        fill(253, 136, 136, 50); 
        //height = 700
        noStroke();
        triangle(t, triy, t+40, triy, t, triy+20);
    }
    */
    
}

function draw() {
    
    fill(226, 192, 255, 10);
    noStroke();
    text("g a t e w a y   t o   d r e a m s", 1300, 30)
    
    noStroke();
    fill(255, 255, 149, 10);
    arc(60, 50, 80, 80, 0, TWO_PI);

    //stars top
    fill(255, 100);   
    ellipse(random(0, width), random(150, 250), 1.5);  

    //stars bottom
    fill(255, 100);   
    ellipse(random(0, width), random(450, 550), 1.5);  

    
}

