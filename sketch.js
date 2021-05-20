
var hr, min, sec;
var hrAngle, minAngle, secAngle; 

function setup(){
    createCanvas(displayWidth,displayHeight); 
    angleMode(DEGREES);   
}

function draw(){
    background("black");
    textSize(30)
    stroke("white")
    text("CLOCK",displayWidth/2-50,displayHeight-displayHeight+100)
    translate(displayWidth/2,displayHeight/2)
    rotate(-90);
    
    hr = hour();
    min= minute();
    sec = second();

    secAngle = map(sec, 0, 60, 0, 360);
    minAngle = map(min,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    push();
    rotate(secAngle);
    stroke(255,66,132);
    strokeWeight(3);
    line(0,0,100,0);
    pop()

    push();
    rotate(minAngle);
    stroke(144,255,142);
    strokeWeight(3);
    line(0,0,75,0);
    pop()

    push();
    rotate(hrAngle);
    stroke(102,140,255);
    strokeWeight(3);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    strokeWeight(10);
    noFill();

    stroke(255,66,132);
    arc(0,0,300,300,0,secAngle);

    stroke(144,255,142);
    arc(0,0,280,280,0,minAngle);

    stroke(102,140,255);
    arc(0,0,260,260,0,hrAngle);
   // console.log(mouseX)
 
}