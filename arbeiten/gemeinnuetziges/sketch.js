var counter=0;
var cnv;
var divHeight;
var height;
var img;
var language;
var englishText;
var germanText;

function preload() {
  img = loadImage('../source/arbeiten/gemeinnuetziges/BLM.png');
  englishText= loadStrings('../source/arbeiten/gemeinnuetziges/englishText.txt');
  germanText= loadStrings('../source/arbeiten/gemeinnuetziges/germanText.txt');
}

function setup (){

  var myDiv=document.getElementById("blm");
  divHeight= myDiv.clientHeight;
  if(divHeight>windowHeight){
    height=1.015*divHeight;
  }else{
    height=windowHeight;
  }


  cnv=createCanvas(0.5*windowWidth,height);
  cnv.style('z-index','-1');
  cnv.position(0,0);
  cnv.style('top','0');
  cnv.style('left','50%');


  button= select('button');
  button.mousePressed(changeLanguage);
}

function draw(){
  if(counter<520){
      var size=random(20,60)
      image(img,random(0,windowWidth),random(windowHeight*0.1,height),size, size);
      counter+=1;
  }
}

function changeLanguage(){
  var text= select('#text');

  if(language == "English"){
    language="German";
    text.html(englishText);
  }else{
    language= 'English';
    text.html(germanText);
  }



  button.html(language);
}
