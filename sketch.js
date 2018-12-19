var cnv; 
var img; 
var r;
var g;
var b; 

function setuo (){
cnv=createCanavs(windowWidth, windowHeight);
img=loadImage('HE.png');
}

function draw(){
 r =random(100,180);
 g =random(100,180);
 b =random(100,180);
 
 background(r,g,b);
}



