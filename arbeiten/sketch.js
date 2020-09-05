//Code erstellt Seitenaufteilung abhägnig von der Länge des Arrays, stylet, layoutet und verlinkt diese:
//Input: Array Subpages[] in variabler Länge
//Output: Seiten Aufteilung in Abhängikeit von Subpages.lenght

//Styling erfolgt in html file


//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


//inhalt des Arrays kann für neue Menu Ebene genutzt werden:
//gewünschte Namen und amnzahl in Array schreiben
//(!) .html dadei mit gleichen name muss im Backend vorhanden sein, sonst funktioniert link nicht
var subpages = [];
subpages=["gemeinnütziges","fotografisch","audiovisuell","plastisch"];

//Verzeichnisdomain, unterhalb welcher die Seiten aufgehängt werden
var domainLevel = './arbeiten/'; //var domainLevel = 'http://healthyego.studio/';

function setup (){

  if(windowWidth/windowHeight>1){
    setupHorizontal();
  }else{
    setupVertical();
  }
}

function setupVertical(){
  //Variablen für die Anordnung:
  var imageWidth=windowWidth*0.3; //Das logo ist 30% der Breite groß
  var imageMiddle=windowWidth/2-imageWidth/2; //x-koordinate damit logo genau in der mitte platziert ist


  //erstellt soviele html paragrathen wie es elemente im Array subpages gibt;
  //Die ImageHeight ergibt sich aus der WindowHeight mal der Bildhöhe durch
  //die Bildbreite in px, bei Logo veränderung anpassen;
  //imageHeight wird genutz zur anordnung der links
  var imageHeight= windowWidth*(2100/2085);
  for(var i=0;i<subpages.length;i++ ){
    var subpage = createA(domainLevel + subpages[i]+'.html',subpages[i]);
    subpage.addClass('subpagesVertical');
    var xPosition = imageMiddle; // so alignen text und logo
    var yPosition = windowHeight*0.5+i*(windowHeight*0.4/subpages.length); //Links erst in der unteren Häl
    subpage.position(xPosition,yPosition, 'absolute');
  }


//passt die größe des Logos an die windowWidth an
 var images = selectAll('img');
 for(var i=0; i<images.length; i++){
    images[i].style('max-width',imageWidth + 'px');//images[i].style('max-width',windowWidth + 'px');
    images[i].position(imageMiddle,windowHeight*0.17, 'absolute');
 }
}

function setupHorizontal(){
  var imageHeight = windowWidth*0.15 * 1.0579;// he.studio logo höhe
  var imgX = windowWidth*0.5-windowWidth*0.15;
  var imgY = windowHeight*0.5-imageHeight/2
  var offset= imageHeight/subpages.length;//zeilen höhe für subpages

  for(var i=0;i<subpages.length;i++ ){
    var subpage = createA(domainLevel + subpages[i]+'.html',subpages[i]);
    subpage.addClass('subpagesHorizontal');
    var xPosition = windowWidth*0.53;
    var yPosition = imgY + i*offset; //so schneiden sich logo und subpages nicht
    subpage.position(xPosition,yPosition);
    subpage.style('line-height', offset + 'px');
  }


//passt die größe des Logos an die windowWidth an
 var images = selectAll('img');
 for(var i=0; i<images.length; i++){
   images[i].style('max-width', '15%');
   images[i].position(imgX,imgY, 'absolute');

 }
}
