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
 r;g;b =random(100,180);
 
 background(r,g,b);
}



/*function LINK(){
 window.open("http://www.healthyego.studio/info");
}


function setup() {
 cnv= createCanvas(windowWidth,windowHeight);
 img = loadImage('HE.png');

r=random(100,180);
g=random(100,180);
b=random(100,180);

}

function draw() {
 
 imageMode(CENTER);
 background(r,g,b);
 image(img,windowWidth/2,windowHeight/2,width,width/1.42);

 cnv.mousePressed(LINK());
}
