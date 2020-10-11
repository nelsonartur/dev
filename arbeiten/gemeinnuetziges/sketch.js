var counter=0;
var cnv;
var divHeight;
var height;
var img;
var language;
var englishText;
var germanText;
var textcontent;
var yPosition=0;
var icons=[];
var bool=true;

function preload() {
  img = loadImage('../source/arbeiten/gemeinnuetziges/BLM.png');
  englishText= loadStrings('../source/arbeiten/gemeinnuetziges/englishText.txt');
  germanText= loadStrings('../source/arbeiten/gemeinnuetziges/germanText.txt');
}

function setup (){

  cnv=createCanvas(windowWidth,windowHeight);
  cnv.style('z-index','-1');
  cnv.position(0,0);


  button= select('button');
  button.mousePressed(changeLanguage);
  textcontent= select('#text');
  language="DE";


  for (var i = 0; i < 530; i++) {
    icons[i]= new Icon();
  }


}

function draw(){
  if(frameCount<200){
    background(250);

    for(var i=0;i<icons.length;i++)
      {
        icons[i].fall();
        icons[i].show();
      }
  }else{
    //background(255,255);
    cnv.remove();
    noLoop();
    changeLanguage();
    select('img').show();
  }
}

class Icon{
  constructor(){
    this.x = random(0,width);
    this.y = random(-200,-100);
    this.z = random(0,20);
    this.yspeed = map(this.z,0,20,4,10);

  }

  fall(){
        this.y = this.y + this.yspeed;
        var g = map(this.z,0,20,0,0.2);
        this.yspeed = this.yspeed + g;
    }

    show(){
        var size = map(this.z,0,20,10,100);
        image(img,this.x,this.y,size,size);
    }
}





function changeLanguage(){

  if(language == "DE"){
    language= 'EN';
    textcontent.html(germanText);
  }else{
    language="DE";
    textcontent.html(englishText);
  }



  button.html(language);
}
