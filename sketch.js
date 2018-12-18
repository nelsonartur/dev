function setup() {
 cnv= createCanvas(windowWidth,windowHeight);
  img = loadImage('healthyegobw.png');
	
}

function draw() {
imageMode(CENTER);
background(100);
image(img,windowWidth/2,windowHeight/2,width,width/1.42);

	
cnv.mousePressed(LINK);
}





function LINK(){
window.open("https://healthyego.github.io/info/");
}
