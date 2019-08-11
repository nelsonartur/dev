let bg;
var PicNames = [];
var cnv;
var counter=0;
var imageCounter=0;
var textCounter=-3;
//------------------------------------------------------------------------------

function setup() {
  cnv=createCanvas(windowWidth,windowHeight+3);
  macBackgroundLoadImages();
  loadImagesWithProperties();
  loadTextInformation();


  textSize(50);
  fill(255,0,0);
}

function draw() {
  macBackground();
  informativeText();
  showImagesWithProperties();
  cnv.mousePressed(countup);

  //text(counter,50,50);
  //text(textCounter,100,50);
}


//Desktop-----------------------------------------------------------------------
function macBackgroundLoadImages(){
  //loads all pictures needed to create macDesktop
  bc = loadImage('https://www.healthyego.studio/events/31.12./HorizontalFootage/backgroundColor.jpeg');
  dock = loadImage('https://www.healthyego.studio/events/31.12./HorizontalFootage/dock.png');
  menu = loadImage('https://www.healthyego.studio/events/31.12./HorizontalFootage/menuBar.png');
  healthyEgo = loadImage('https://www.healthyego.studio/events/31.12./HorizontalFootage/HealthyEgo.png');
}
function macBackground(){
  //displays all pictures needed to create macDesktop
  //displaying background in right shade
  background(bc);
  //displaying Dock at bottom
  image(dock, 0, height-(windowWidth/16.744), windowWidth, windowWidth/16.744);
  //displaying MenuBar at top
  image(menu,0,0,windowWidth,windowWidth/41.143);
  //displaying HealthyEgo sign in center after counter crossed threshold
  if(textCounter>-3){
    push();
    imageMode(CENTER);
    image(healthyEgo,windowWidth/2,windowHeight/2,healthyEgo.width/4,healthyEgo.height/4);
    pop();
  }

}

//Pictures----------------------------------------------------------------------
class Picture {
  // Class for all pictures; properties get defined and pre-loaded within loadImagesWithProperties()
  constructor(x,y,picNumber,picWidth, picHeight) {
    this.x = x;
    this.y = y;
    this.picNumber = picNumber;
    this.picWidth  = picWidth;
    this.picHeight = picHeight;
    this.imagePath
  }
  load(){
    this.imagePath=loadImage('https://www.healthyego.studio/events/31.12./HorizontalFootage/0'+this.picNumber+'.png');
  }
//show function is called within showImagesWithProperties()
  show() {
    //image(this.imagePath,this.x,this.y,this.imagePath.width/5,this.imagePath.height/5);

    image(this.imagePath,this.x,this.y,this.picWidth,this.picHeight);

  }
}
function loadImagesWithProperties(){
  //loads and defines all pictures freom /HorizontalFootage/..
  // dependent on numbering and amount of pictures within /HorizontalFootage/.. "i" may need to be adjusted
  // four Arrays storing property information about pictures, distinguishing between horizontal and vertical view
  var wW=windowWidth;
  var wH=windowHeight;
  var scale=windowWidth/1440;

  if(windowWidth/windowHeight>=1){
    //horizontal
    var positionX=["platzhalter",           0,        wW/5,        wW/6,      4*wW/6,        wW/3,       wW/20,           0];
    var positionY=["platzhalter",           0,       wH/12,        wH/8,          30,        wH/4,        wH/5,       wH/20];
    var picWidth =["platzhalter",2842/3*scale,2842/3*scale,2842/3*scale,1328/3*scale,1506/3*scale,1328/3*scale,2066/3*scale];
    var picHeight=["platzhalter",1806/3*scale,1806/3*scale,1806/3*scale,1806/3*scale,1806/3*scale,1806/3*scale,1530/3*scale];
  }else{
    //vertical
    var positionX=["platzhalter",           0,       wW/30,       wW/25,      3*wW/6,        wW/3,       wW/20,           0];
    var positionY=["platzhalter",           0,       wH/12,     5*wH/10,          30,        wH/3,        wH/5,      2*wH/5];
    var picWidth =["platzhalter",2842/2*scale,2842/2*scale,2842/2*scale,1328/2*scale,1506/2*scale,1328/2*scale,2066/2*scale];
    var picHeight=["platzhalter",1806/2*scale,1806/2*scale,1806/2*scale,1806/2*scale,1806/2*scale,1806/2*scale,1530/2*scale];
  }

  for (var i = 1; i <= 7; ++i){
      PicNames[i] = new Picture(positionX[i],positionY[i],i,picWidth[i],picHeight[i])//calls constructor of Picture class
      PicNames[i].load();//calls load() function of Picture class
  }
}
function showImagesWithProperties(){
  // displays all pictures previously loaded within loadImagesWithProperties() function
  for(var i=1; i<= imageCounter; i++){
    PicNames[i].show();//calls show() function of Picture class
  }
}

//Text--------------------------------------------------------------------------
class TXT {
  constructor(infoText, fontType, alighnment, sizeText,x,y){
    this.infoText=infoText;
    this.fontType=fontType;
    this.alighnment=alighnment;
    this.sizeText=sizeText;
    this.x=x;
    this.y=y;
  }

  show(){
    push();
    fill(255);
    textSize(this.sizeText);
    textLeading(20);
    textAlign(this.alighnment);
    textFont(this.fontType);
    text(this.infoText,this.x,this.y);
    pop();
  }
}
function loadTextInformation(){
  textEdit=loadImage('https://www.healthyego.studio/events/31.12./HorizontalFootage/textEdit.png');
  helvetica=loadFont('https://www.healthyego.studio/events/31.12./Fonts/helvetica.ttf');
  courierNew=loadFont('https://www.healthyego.studio/events/31.12./Fonts/courierNew.ttf');
  helveticaBold=loadFont('https://www.healthyego.studio/events/31.12./Fonts/HelveticaBold.ttf');
}
function informativeText(){
  
  if(windowWidth/windowHeight > 0.75){//Desktop
    var textEditWidth = 2*textEdit.width/5;
    var textEditHeight=2*textEdit.height/5;
  }else{//mobile Devices
    textEditWidth=windowWidth;
    textEditHeight=windowWidth/0.931;
  }

  if(textCounter>=-1){
    image(textEdit,0,0,textEditWidth,textEditHeight)//textEdit screenshot
  }


  //styling of Textelemts
  if(windowWidth/windowHeight > 0.75){//Desktop 
    groupA=[    helvetica, RIGHT,17,480];
    groupB=[   courierNew, RIGHT,15,480];
    groupC=[helveticaBold,  LEFT,25,46];
    groupE=[    helvetica,  LEFT,17,46];
    groupD=[   courierNew,  LEFT,15,46];
    gSpace=[    helvetica,  LEFT,17,46];
  }else {//mobile Devices
    groupA=[    helvetica, RIGHT,17,textEditWidth-width/11];
    groupB=[   courierNew, RIGHT,15,textEditWidth-width/11];
    groupC=[helveticaBold,  LEFT,25,width/11];
    groupE=[    helvetica,  LEFT,17,width/11];
    groupD=[   courierNew,  LEFT,15,width/11];
    gSpace=[    helvetica,CENTER, 6,width/2];
  }
  //joining styling with text
  font       =[groupA,//Location
               groupB,//Ausstellungs- u. Projektraum
               groupB,//" "
               groupC,//EI
               groupD,//Dalbergstr. 54
               groupD,//63739 Aschaffenburg
               gSpace,//______________________________________________
               groupA,//Artists
               groupB,//Yung $uijin
               groupB,//Soulja David
               groupB,//King Kool Jonas
               gSpace,//______________________________________________
               groupE,//Kollaboration
               groupD,//HEALTHY EGO & SixTrois
               groupE]
  
  //text for describing; Eck.da.ten
  information=["Location",
               "Ausstellungs- u. Projektraum",
               "31.12.17",
               "EI",
               "Dalbergstr. 54",
               "63739 Aschaffenburg",
               "______________________________________________",
               "Artists",
               "Yung $uijin",
               "Soulja David",
               "King Kool Jonas",
               "______________________________________________",
               "Kollaboration",
               "HEALTHY EGO & SixTrois"]

  //creating and displaying Textelemts by creating new elements by calling TXT class
  for(var i=0; i<=textCounter; i++){
    //receives 6 arguments: infoText, fontType, alighnment, sizeText,x,y
    info = new TXT(information[i],font[i][0],font[i][1],font[i][2],font[i][3],120+i*15);
    info.show();
  }
}

//Counter-----------------------------------------------------------------------
function countup(){
  counter +=1;

  if(counter<=16){
    textCounter +=1;
  }else if(counter>15 && counter<=22){
    imageCounter+=1
  }else if(counter>22){
    counter=0;
    imageCounter=0;
    textCounter=-3;
  }
}
