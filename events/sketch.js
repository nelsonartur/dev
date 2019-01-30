var cnv;
var img1; 
var b;
var c;

function setup (){
cnv= createCanvas(windowWidth, windowHeight);
img1=loadImage('events/IMG_5864.jpg');

 cnv.mousePressed(LINK);
}

function draw(){
 b = random(0,1);
 
 if(b>0.5){
 c=0;
 }else{
 c=255
 }
 
 background(0);
 push()
 imageMode(CENTER);
 image(img1,windowWidth/2,windowHeight/2,height/1.77,height);
 pop()
}


function LINK(){
window.open("http://www.healthyego.studio/konkret");
}
