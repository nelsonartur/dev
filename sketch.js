var img;
var pic;
var a = 0;

function setup() {
  img = loadImage("healthyego.png");
  pic = loadImage("TV.jpg");
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);


  if(a<=360){
   a=a+0.5
  }else if (a>360) {
    a=0;
  }

rotateY(a+90)
  if(a<180){
    texture(pic)
  } else if(a>180){
    texture(img)
  }

  plane(windowWidth/4,windowWidth/4)
}
