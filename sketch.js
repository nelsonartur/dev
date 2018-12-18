 var img
function setup(){ 
 var cnv = createCanvas(windowWidth,windowHeight);
  img= createImg('HE.w.png');  
}


function mousePressed(){
 window.open("https://healthyego.github.io/info/");
}

function draw(){
 background(0);
 
  push();
 image(img, windowWidth/2, windowHeight/2)
  //imageMode(CENTER);
  //image(img,windowWidth/2,windowHeight/2,(windowWidth-500),1748*((windowWidth-500)/2480));
  pop();
}





