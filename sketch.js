var Value  =130;
var Length =20;

var Value2  =170;
var Length2 =5;

var space;


var song;
var playing = false;
var show = true;


var pictures1=[];
var pictures2=[];
var HE;

var spectrum;

function preload(){
 
  
  song = loadSound('sosi.mp3');
  HE = loadImage('HE.jpg');
 HE1 = loadImage('HE.png');

  for (var i = 1; i< 10; i++){
    pic1=loadImage("Lisa/IMG_918"+i+".jpg");
    //loadImage("pics/"+i+".jpg");
    pictures1.push(pic1);
  }
}


function setup(){
  cnv = createCanvas(windowWidth,windowHeight);
  fft = new p5.FFT(0.8,64);
  
   img= createImg('instagram.png','clickable');
  
  cnv.mousePressed(togglePlay)
  
  img.position((windowWidth/2)-30,3*(windowHeight/4));
    img.size(80,60);
    img.mousePressed(link);
  
}

function link(){
     window.open("https://instagram.com/haelthyego");
 }




function draw(){
   background(0);

  if(show){
    HealthyEgo();
    img.show();
  }else{
  img.hide()};

 
 
 



  spectrum = fft.analyze();

  //pictures
  if(spectrum[Length2]>Value2){
   Pictures2();
   Value2+=1;
  }
 
  if(spectrum[Length]>Value){
    Pictures1();
  }
 
 

}



function Pictures1(){
  push();
  imageMode(CENTER);

  image(pictures1[round(random(0,pictures1.length-1))],windowWidth/2,windowHeight/2,(windowWidth-500),3456*((windowWidth-500)/5184));
  pop();
}

function Pictures2(){
  push();
  imageMode(CENTER);
 
 space=random(0,1000);

  image(HE1,windowWidth/2,windowHeight/2,(windowWidth-space),3456*((windowWidth-space)/5184));
  pop();
}

function HealthyEgo(){
  push();
  imageMode(CENTER);
  image(HE,windowWidth/2,windowHeight/2,(windowWidth-500),1748*((windowWidth-500)/2480));
  pop();
}

function tool(){

  for (var i = 0; i< spectrum.length; i++){
      var x = map(i, 0, spectrum.length, 0, width);
      var y =  map(spectrum[i], 0, 255, height, 0);
    }

}

function togglePlay() {
  if (playing) {
    song.pause();

  } else {
    song.loop();
  }
  playing = !playing;
  show=!show;
}

