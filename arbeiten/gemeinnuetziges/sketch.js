var counter=0;
var cnv;
var divHeight;
var height;
var img;


function preload() {
  img = loadImage('../source/arbeiten/gemeinnuetziges/BLM.png');
}

function setup (){

  var myDiv=document.getElementById("blm");
  divHeight= myDiv.clientHeight;
  if(divHeight>windowHeight){
    height=1.015*divHeight;
  }else{
    height=windowHeight;
  }


  cnv=createCanvas(0.6*windowWidth,height);
  cnv.style('z-index','-1');
  cnv.position(0,0);
  cnv.style('top','0');
  cnv.style('left','40%');
}

function draw(){
  if(counter<510){
      var size=random(20,60)
      image(img,random(0,windowWidth),random(0,height),size, size);
      counter+=1;
  }
}
