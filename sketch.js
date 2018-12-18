var img;

function preload() {
  img = loadImage('HE.w.jpg');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
	
}

function draw() {
	imageMode(CENTER);
  background(0);
	image(img,0,0)
}





