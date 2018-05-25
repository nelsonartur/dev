var spectrum;
var sound;

var x=0;
var y=0;
var z=0;
var counter=0;
var r=0;
var g=0;
var b=0;
var rest=false;






function setup(){
  cnv= createCanvas(windowWidth,windowHeight,WEBGL);

  background(0);
  cnv.drop(gotFile);
  fft = new p5.FFT(0.8,128);


}

function gotFile(file){
   sound= new p5.SoundFile(file.data, Play);
}



function Play(){
  sound.loop();
}

function draw(){

  //rest background
  if(rest){
    background(0);
  }

  spectrum = fft.analyze();

  counter+=0.01;
  r=80+(sin(counter)+1)*60
  g=(sin(counter)+1)*50
  b=(cos(counter+1)+1)*128
  raster();
}

function raster(){


  for(var i=0;i<spectrum.length;i++){
    if (spectrum[i]>200-i*150/spectrum.length){
      stroke(r,g,b);
    }else{
      noStroke();
    }



    //mit WEBGL
    rotateX(millis()/1000);
    rotateY(millis()/1500);
    rotateZ(millis()/2000);

    //vertical
    line((i+1)*-width/(spectrum.length+1),-height,(i+1)*-width/(spectrum.length+1),height)
    line((i+1)*width/(spectrum.length+1),-height,(i+1)*width/(spectrum.length+1),height)

    //horizontal
    line(-width,(i+1)*-height/(spectrum.length+1),width,(i+1)*-height/(spectrum.length+1))
    line(-width,(i+1)*height/(spectrum.length+1),width,(i+1)*height/(spectrum.length+1))


    //ohne WebGL
    line((i+1)*width/(spectrum.length+1),0,(i+1)*width/(spectrum.length+1),height);
    line(0,(i+1)*height/(spectrum.length+1),width,(i+1)*height/(spectrum.length+1));
  }
}







function keyPressed() {
  if(UP_ARROW){
    x+=1
  }
  if(DOWN_ARROW){
    z+=1
  }
  if(RIGHT_ARROW){
    y+=1
  }
  if(ENTER){
    rest=!rest
  }
}
