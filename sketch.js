var cnv;
var img1; 
var b;
var c;

function setup (){
cnv= createCanvas(windowWidth, windowHeight);
img1=loadImage('frontpage/front.png');

 cnv.mousePressed(LINK);
}

function draw(){
 b = random(0,1);
 
 if(b>0.5){
 c=0;
 }else{
 c=255
 }
 
 background(c);
 push()
 imageMode(CENTER);
 image(img1,windowWidth/2,windowHeight/2,height,height/1.77);
 pop()
}


function LINK(){
window.open("http://www.healthyego.studio/konkret");
}

