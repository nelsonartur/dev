function setup(){
 imageMode(CENTER);
  
 var cnv = createCanvas(windowWidth,windowHeight);
 var img= createImg('HE.png','clickable');  
}


function mousePressed(){
 window.open("https://healthyego.github.io/info/");
}

function draw(){
 background(0);
// HealthEgo();
}

function HealthyEgo(){
  push();
  imageMode(CENTER);
  image(img,windowWidth/2,windowHeight/2,(windowWidth-500),1748*((windowWidth-500)/2480));
  pop();
}





