var Value=120;
var Length=35;
var song;

var counter=true;

var pictures1=[];
var pictures2=[];
var HE;

var spectrum;

function preload(){
  song = loadSound('sosi.mp3');
  HE =loadImage('HE.jpg');

  for (var i = 0; i< 10; i++){
    pic1= loadImage("Lisa/IMG_"9180+i+".JPG");
    pictures1.push(pic1);
  }

}


function setup(){
  cnv= createCanvas(windowWidth,windowHeight);
  song.loop();
  fft = new p5.FFT(0.8,64);
}


function draw(){



  console.log(Length)
  background(0);
  spectrum = fft.analyze();

  //pictures
  if(spectrum[Length]>Value){
    Pictures1();
    counter=!counter;
  }

  if(counter){
    HealthyEgo();
  }

}


function Pictures1(){
  push();
  imageMode(CENTER)
  image(pictures1[round(random(0,pictures1.length-1))],windowWidth/2,windowHeight/2);
  pop();
}

function HealthyEgo(){
  push();
  imageMode(CENTER);
  image(HE,windowWidth/2,windowHeight/2,);
  pop();
}

function tool(){

  for (var i = 0; i< spectrum.length; i++){
      var x = map(i, 0, spectrum.length, 0, width);
      var y =  map(spectrum[i], 0, 255, height, 0);

    }


}
