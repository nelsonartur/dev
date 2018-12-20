var cnv;
var img; 
var b;
var c;

function setup (){
cnv= createCanvas(windowWidth, windowHeight);
img=loadImage('HE.png');
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
 image(img,windowWidth/2,windowHeight/2,width,width/1.42);

 
 
 //cnv.mousePressed(window.open('http://www.healthyego.studio/konkret'));
}




