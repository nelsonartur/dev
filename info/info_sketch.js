var img;

function preload(){
img = loadImage('info/info.png');
}

function setup(){ 
 createCanvas(windowWidth, windowHeight);
 background(80);
 img.mousePressed(LINK);
}

function draw(){ 
 imageMode(CENTER);
 image(img,windowWidth/2,windowHeight/2,height/1.7777,height); 
}

function LINK(){
window.open("https://instagram.com/haelthyego/")
}
