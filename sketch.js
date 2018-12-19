
function setup() {
 cnv= createCanvas(windowWidth,windowHeight);
 img = loadImage('HE.w.png');

r=random(100,180);
g=random(100,180);
b=random(100,180);

}

function draw() {


	
imageMode(CENTER);
background(r,g,b);
image(img,windowWidth/2,windowHeight/2,width,width/1.42);

	
cnv.mousePressed(window.open("https://healthyego.github.io/info/"));
}





