var cnv;
var img1; 
var img2;
var b;
var c;

function setup (){
cnv= createCanvas(windowWidth, windowHeight);
img1=loadImage('frontpage/HE.png');
 img2=loadImage('frontpage/Logo_konkret.png');
 cnv.mousePressed(LINK);
}

function draw(){
 b = random(0,1);
 
 if(b>0.5){
 c=0;
 }else{
 c=255
 }
 
 background(100);
 imageMode(CENTER);
 image(img1,windowWidth/2,windowHeight/2,width,width/1.42);
}


function LINK(){
window.open("http://www.healthyego.studio/konkret");
}

