var konkret;
var info;
var cnv;
var w;
var b1;
var b2;


function LINK(){
window.open("https://www.instagram.com/haelthyego/");
}

function setup(){
 
 b1=loadImage('info/b1.png');
 b2=loadImage('info/b2.png');
 konkret= loadImage('info/konkret.png');
 info= loadImage('info/Info.png');
 
 cnv=createCanvas(windowWidth,windowHeight),
 cnv.mousePressed(LINK);
 
}

function draw(){
 if(windowWidth<=1080){
 background(b1);
 }else{
 background(b2);
 }
 
 w=height/1.77
 image(konkret,0,0,w,height);

 
 imageMode(CENTER);
 push();
 image(info,windowWidth/2,windowHeight/2,w,height)
 pop();
}
