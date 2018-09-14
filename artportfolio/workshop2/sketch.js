/**
Diane Phan 
Workshop 2 October 10, 2017

**/


function setup() {
    createCanvas(500, 500);
}

function draw() {
    
    background(132, 211, 255, 255); 

    var ellipsewidth = width/2;
    var ellipseheight = height/2;
   
    if(mouseX <= ellipsewidth){
        //default eyes
        fill(255, 255, 255);
        ellipse(ellipsewidth-115, ellipseheight-20, 99, 70); //left eye
        ellipse(ellipsewidth+115, ellipseheight-20, 99, 70); //right eye

        fill(0); 
        ellipse((ellipsewidth-115), ellipseheight-20, 20, 20); //left eye
        ellipse((ellipsewidth+115), ellipseheight-20, 20, 20); //right eye  

    }
    else if(mouseX >= ellipsewidth+100){          
        background(0);
        
        //lasers 
        fill(255, 255, 255);
        stroke(255);
        stroke(0);
        strokeWeight(5);
        ellipse(ellipsewidth-115, ellipseheight-20, 99, 70); //left eye
        ellipse(ellipsewidth+115, ellipseheight-20, 99, 70); //right eye
   
        stroke(255, 0, 0, 255);
        strokeWeight(25);
        line((ellipsewidth+115), ellipseheight-20, 1250, 490); //left
        line((ellipsewidth-115), ellipseheight-20, 1250, 600); //right
        
    }
    else{
        //middle part of the screen
                
        //eye
        noStroke();
        fill(255);
        ellipse(ellipsewidth-115, ellipseheight-20, 99, 70); //left eye
        ellipse(ellipsewidth+115, ellipseheight-20, 99, 70); //right eye

        //pupils
        fill(0);
        ellipse((ellipsewidth-115), ellipseheight-20, 20, 20); //left eye
        ellipse((ellipsewidth+115), ellipseheight-20, 20, 20); //right eye     
        
        stroke(0);
        //brows
        line(86, 154, 218, 241); 
        line(279, 241, 426, 157);
        
        //eye
        noStroke();
        fill(255);
        ellipse(ellipsewidth-115, ellipseheight-20, 99, 70); //left eye
        ellipse(ellipsewidth+115, ellipseheight-20, 99, 70); //right eye
         //pupils
        fill(0);
        ellipse((ellipsewidth-115), ellipseheight-20, 20, 20); //left eye
        ellipse((ellipsewidth+115), ellipseheight-20, 20, 20); //right eye     
        

        
    }
    
}


