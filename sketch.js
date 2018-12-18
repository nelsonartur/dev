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
	image(img,0,0)
}





