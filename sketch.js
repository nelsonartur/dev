var img;

function preload() {
  img = loadImage('healthyegobw.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
	
}

function draw() {
	imageMode(CENTER);
  background(0);
	image(img,windowWidth/2,windowHeight/2,width,width/1.78);
}





