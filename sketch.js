var cnv; 
var img; 
var b;
var c;

function setuo (){
cnv=createCanavs(width, Height);
img=loadImage('HE.png');
}

function draw(){
 b = random(0,1);
 
 if(b>0.5){
 c=0;
 }else{
 c=255
 }
 
 background(c);
}



