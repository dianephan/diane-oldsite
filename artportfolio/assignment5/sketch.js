/**
Diane Phan 
Assignment 5 November 7, 2017
Option 1

Data regarding hour of screen time vs exercise depending on age and gender taken from StatCrunch found at 
https://www.statcrunch.com/5.0/viewreport.php?reportid=41371
**/

var screenexercise;
var gender = []; 
var age = [];
var screentime = []; 
var exercise = [];
var screenSize = [];        //blue
var exerciseSize = [];      //green

function preload(){
    screenexercise = loadTable("screenexercise.csv")
}


function setup() {
    createCanvas(900, 580);
    background(255); 
    
    //get column numbers 
    gender = screenexercise.getColumn(0);  
    age = screenexercise.getColumn(1);
    screentime = screenexercise.getColumn(2); 
    exercise = screenexercise.getColumn(3); 
    
    for (var i = 0; i < screenexercise.getRowCount(); i++){
        gender[i] = screenexercise.getString(i, 0);
        age[i] = screenexercise.getNum(i, 1);
        screentime[i] = screenexercise.getNum(i, 2); 
        exercise[i] = screenexercise.getNum(i, 3); 
        
        //size changes based on amount of screentime and exercise  
        //map(value,start1,stop1,start2,stop2,[withinBounds])
        screenSize[i] = map(screentime[i], 1, 100, 10, 60); 
        exerciseSize[i] = map(exercise[i], 1, 100, 10, 60); 
    }      
}

function draw() {
    for (var i = 0; i < screenexercise.getRowCount(); i++){
            
        if (gender[i] == "FEMALE"){
            stroke(251, 112, 255); 
            strokeWeight(1);
        }
        if (gender[i] == "MALE"){
            stroke(0); 
            strokeWeight(1);
        }
        
        //if age is between 20-30
        if (age[i] >= 20 && age[i] < 30){
            text("age is between 20 and 30", width/2 -30, 20);
            fill(0); 
            fill(115, 167, 255, (age[i] * 2)); //blue for screenSize
            ellipse((i*8) + 25, 50, screenSize[i]);
            //print age below the circle 
            fill(0); 
            text(age[i], (i*8) + 25, 75);

            fill(153, 255, 115, (age[i] * 2)); //green for exerciseSize 
            ellipse((i*8) + 25, 100, exerciseSize[i]); 
            //print age below the circle 
            fill(0); 
            text(age[i], (i*8) + 25, 125);
        }      
        
        //if age is between 30 - 40
        if (age[i] >= 30 && age[i] < 40){
            text("age is between 30 and 40", width/2 -30, 150);
            fill(0); 
            fill(115, 167, 255, (age[i] * 2)); //blue for screenSize
            ellipse((i*8) + 25, 170, screenSize[i]);
            //print age below the circle 
            fill(0); 
            text(age[i], (i*8) + 25, 195);

            fill(153, 255, 115, (age[i] * 2)); //green for exerciseSize 
            ellipse((i*8) + 25, 230, exerciseSize[i]); 
            //print age below the circle 
            fill(0); 
            text(age[i], (i*8) + 25, 255);
        }
        
         //if age is between 40 - 50
        if (age[i] >= 40 && age[i] < 50){
            text("age is between 40 and 50", width/2 -30, 280);
            fill(0); 
            fill(115, 167, 255, (age[i] * 2)); //blue for screenSize
            ellipse((i*8) + 25, 310, screenSize[i]);
            //print age below the circle 
            fill(0); 
            text(age[i], (i*8) + 25, 345);

            fill(153, 255, 115, (age[i] * 2)); //green for exerciseSize 
            ellipse((i*8) + 25, 360, exerciseSize[i]); 
            //print age below the circle 
            fill(0); 
            text(age[i], (i*8) + 25, 385);
        }
        
          //if age is > 50
        if (age[i] >= 50){
            text("age is greater than 50", width/2 -30, 400);
            fill(0); 
            fill(115, 167, 255, (age[i] * 2)); //blue for screenSize
            ellipse((i*8) + 25, 425, screenSize[i]);
            //print age below the circle 
            fill(0); 
            text(age[i], (i*8) + 25, 453);

            fill(153, 255, 115, (age[i] * 2)); //green for exerciseSize 
            ellipse((i*8) + 25, 480, exerciseSize[i]); 
            //print age below the circle 
            fill(0); 
            text(age[i], (i*8) + 25, 515);
        }
        
    }
    stroke(115, 167, 255);
    text("Blue = amount of screentime", width/2 -250, 560); 
    stroke(153, 255, 115);
    text("Green = amount of exercise time", width/2 +200, 560); 
    stroke(251, 112, 255); 
    text("Pink = female participants", width/2 - 250, 580);
    stroke(0); 
    text("Black = male participants", width/2 +200, 580); 
    
}
    
