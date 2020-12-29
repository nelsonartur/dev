function setup(){
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  bcg = loadImage("./slotmachine/sources/slots/background.png");
  icons=[];
  loadIcons();

  positions = [];
  for(var i=0; i< 5; i++){
    position = new Position(windowWidth/2-windowWidth/9*2+i*windowWidth/9);
    positions.push(position);
  }

  stopPosition=-1;
  restart = false;

  btn = select('#play')
  home = select('#home')

  btn.mousePressed(function(){
    if(!restart){
      btn.attribute('disabled',true)

      for(var i=0; i<positions.length; i++){
        createTimeout(i);
      }
    }else{
      stopPosition=-1;
    }
    restart = !restart;
  })
}

function createTimeout(i){
  setTimeout(function(){
    stopPosition=i;
    if(i==4){
      checkWin()
      btn.removeAttribute('disabled');
    }
  },1000+1000*i);
}


function draw(){
  background(100);
  image(bcg,windowWidth/2, windowHeight/2, windowWidth, windowHeight);

  for(var i=0; i<positions.length; i++){
    if(stopPosition<i){
      positions[i].play();
    }else{
      positions[i].stop();
    }
    positions[i].display();
  }
}

class Icon{
  constructor(id,img){
    this.id=id;
    this.img=img;
  }
  display(xPosition){
    image(this.img,xPosition,windowHeight/2,windowWidth/10,windowWidth/10)
  }
}

class Position{
  constructor(xPosition){
    this.xPosition=xPosition;
    this.icon=random(icons);
  }
  play(){
    this.icon = random(icons);
  }
  stop(){
    return this.icon.id;
    console.log(this.icon.id)
  }
  display(){
    this.icon.display(this.xPosition);
  }
}

function loadIcons(){
  for(var i=0; i<7;i++){
    img = loadImage("./slotmachine/sources/slots/"+i+".png");
    icon = new Icon(i,img);
    icons.push(icon);
  }
}

function checkWin(){
  win=false;
  if(checkSameIcon()){
    win=true;
  }
  if(win){
    alert("You've won!")
  }else{
    alert("No Win for you! Try again")
  }
}

function checkSameIcon(){
  sameIcon=false;
  for(var i=0; i<positions.length; i++){
    if(!positions[0].icon.id==positions[i].icon.id){
      sameIcon=false;
      break;
    }
  }
  return sameIcon
}
