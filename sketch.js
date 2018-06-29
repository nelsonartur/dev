var counter=true;
var length;
var value;

var Length1;
var Value1;

var Length2;
var Value2;

var sound;
var pictures1=[];
var pictures2=[];
var spectrum;

function preload(){
  for (var i = 0; i< 10; i++){
    pic1= loadImage("pics/"+i+".jpg");
    pictures1.push(pic1);
  }

  for(var i=0;i<46;i++){
    pic2= loadImage("gif/frame-"+i+".gif");
    pictures2.push(pic2);
  }
}


function setup(){
  cnv= createCanvas(windowWidth,windowHeight);
  gr= createGraphics(windowWidth,windowHeight);
  cnv.mouseClicked(colorchange);
  cnv.drop(gotFile);
  fft = new p5.FFT(0.8,64);
}


function gotFile(file){
   sound= new p5.SoundFile(file.data, Play);
}


function Play(){
  sound.loop();
}


function draw(){
  background(0);
  spectrum = fft.analyze();

  //pictures
  if(spectrum[Length1]>Value1){
    Pictures1();
   }

  if(spectrum[Length2]>Value2){
     Pictures2();
    }

  //tool
  if (counter){
    tool();
  }


}


function Pictures1(){
  push();
  imageMode(CENTER)
  image(pictures1[round(random(0,pictures1.length-1))],random(0,width),random(0,height));
  pop();
}
function Pictures2(){
  push();
  imageMode(CENTER)
  image(pictures2[round(random(0,pictures2.length-1))],windowWidth/2,windowHeight/2);
  pop();
}


function tool(){
  gr.background(80);



  gr.stroke(250,30,180);
  gr.fill(200,50,250,200);
  gr.rect(0,mouseY,width,height-mouseY)
  gr.line(mouseX,0,mouseX,height);
  gr.line(0,mouseY,width,mouseY);


  length=round(map(mouseX,0,width,0,spectrum.length));
  value=round(map(mouseY,0,height,255,0));
  gr.text(length + " / "+ value,width-43,mouseY-5);

  gr.stroke(230);
  gr.noFill();

  gr.text("SHIFT   "+ Length2 + " / "+ Value2,width-90,mouseY-35);
  gr.text("ENTER "+ Length1 + " / "+ Value1,width-90,mouseY-20);

  gr.noStroke();
  for (var i = 0; i< spectrum.length; i++){
      var x = map(i, 0, spectrum.length, 0, width);
      var y =  map(spectrum[i], 0, 255, height, 0);
      gr.stroke(200,0,y);
      gr.text(spectrum[i],x,y);
    }

  image(gr,0,0);
}


function keyPressed(){

  if(keyCode===ENTER){
    Length1=length;
    Value1 =value;
  }
  if(keyCode===SHIFT){
    Length2=length;
    Value2 =value;
  }
}



function colorchange(){
  counter=!counter;
}
