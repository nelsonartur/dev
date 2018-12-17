function setup(){
 imageMode(CENTER);
  
 var cnv = createCanvas(windowWidth,windowHeight);
// var img= createImg('HE.w.png','clickable');  
}


function mousePressed(){
 //window.open("https://healthyego.github.io/info/");
}

function draw(){
 background(0);
 
  push();
  imageMode(CENTER);
  image('HE.w.png',windowWidth/2,windowHeight/2,(windowWidth-500),1748*((windowWidth-500)/2480));
  pop();
}





