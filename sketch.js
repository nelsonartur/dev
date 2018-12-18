//function mousePressed(){
//window.open("")}

function setup() {
  createCanvas(windowWidth,windowHeight);
  img = loadImage('healthyegobw.png');
	
}

function draw() {
	imageMode(CENTER);
  background(0);
	image(img,windowWidth/2,windowHeight/2,width,width/1.78);
}





