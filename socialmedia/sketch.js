//Code erstellt Seitenaufteilung abhägnig von der Länge des Arrays, stylet, layoutet und verlinkt diese:
//Input: Array Subpages[] in variabler Länge
//Output: Seiten Aufteilung in Abhängikeit von Subpages.lenght

//Styling erfolgt in html file


//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


//inhalt des Arrays kann für neue Menu Ebene genutzt werden:
//gewünschte Namen und amnzahl in Array schreiben
//(!) .html dadei mit gleichen name muss im Backend vorhanden sein, sonst funktioniert link nicht
var subpages = [];
subpages=["soundcloud","instagram","facebook","tumblr"];

//Verzeichnisdomain, unterhalb welcher die Seiten aufgehängt werden
var domainLevel = '../socialmedia/'; //var domainLevel = 'http://healthyego.studio/';




function setup (){


  if(windowWidth/windowHeight>1){
    setupHorizontal();
  }else{
    setupVertical();
  }
}

function setupVertical(){
  //erstellt soviele html paragrathen wie es elemente im Array subpages gibt;
  //Die ImageHeight ergibt sich aus der WindowHeight mal der Bildhöhe durch
  //die Bildbreite in px, bei Logo veränderung anpassen;
  //imageHeight wird genutz zur anordnung der links
  var imageHeight= windowWidth*(2100/2085);
  for(var i=0;i<subpages.length;i++ ){
    var subpage = createA(domainLevel + subpages[i]+'.html',subpages[i]);
    subpage.addClass('subpagesVertical');
    var xPosition = 0;
    var yPosition = imageHeight* 1.06 + i*50; //so schneiden sich logo und subpages nicht
    subpage.position(xPosition,yPosition, 'absolute');
  }


//passt die größe des Logos an die windowWidth an
 var images = selectAll('img');
 for(var i=0; i<images.length; i++){
   images[i].style('max-width',windowWidth + 'px');
 }


//erstellt Array aller <a> s, ordnet jedem elemente highlight und unhighlight methode zu
  offset = windowWidth-25; // so geht right aling nicht bis zum rechten rand
  paragraphs = selectAll('.subpagesVertical');
  for(var i=0; i<paragraphs.length; i++){
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unhighlight);
    paragraphs[i].style('width',offset + 'px'); //wichtig für right-align der subpages links;
  }
}

function setupHorizontal(){
  var imageHeight = windowWidth*0.15 * 1.0579;
  var imgX = windowWidth*0.5-windowWidth*0.15;
  var imgY = windowHeight*0.5-imageHeight/2
  var offset= imageHeight/subpages.length;

  for(var i=0;i<subpages.length;i++ ){
    var subpage = createA(domainLevel + subpages[i]+'.html',subpages[i]);
    subpage.addClass('subpagesHorizontal');
    var xPosition = windowWidth*0.55;
    var yPosition = imgY + i*offset; //so schneiden sich logo und subpages nicht
    subpage.position(xPosition,yPosition, 'absolute');
  }


//passt die größe des Logos an die windowWidth an
 var images = selectAll('img');
 for(var i=0; i<images.length; i++){
   images[i].style('max-width', '15%');
   images[i].position(imgX,imgY, 'absolute');

 }


//erstellt Array aller <a> s, ordnet jedem elemente highlight und unhighlight methode zu
  offset = windowWidth-25; // so geht right aling nicht bis zum rechten rand
  paragraphs = selectAll('.subpagesHorizontal');
  for(var i=0; i<paragraphs.length; i++){
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unhighlight);
    paragraphs[i].style('width',offset + 'px'); //wichtig für right-align der subpages links;
  }
}


//Hover für links des subpages Array
function highlight(){
  //stylet <a>
  this.style('color','white');
  this.style('text-transform', 'uppercase');
  this.style('font-weight', 'bold');

  //stylet <body>
  var body = select('body');
  body.style('background-color', 'black');
}

function unhighlight(){
  //stylet <a>
  this.style('color','black');
  this.style('text-transform', 'lowercase');
  this.style('font-weight', 'normal');

  //stylet <body>
  var body = select('body');
  body.style('background-color', 'white');
}
