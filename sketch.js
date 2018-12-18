var img;

function preload() {
  img = loadImage('HE.w.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
	
}

function draw() {
	imageMode(CENTER);
  background(0);
	image(img,windowWidth/2,windowHeight/2,width/2,height/2)
}





