//Code erstellt Seitenaufteilung abhägnig von der Länge des Arrays, stylet, layoutet und verlinkt diese:
//Input: Array Subpages[] in variabler Länge
//Output: Seiten Aufteilung in Abhängikeit von Subpages.lenght


//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

var subpages = [];



//Verzeichnisdomain, unterhalb welcher die Seiten aufgehängt werden
var domainLevel = 'https://www.healthyego.studio/';

function setup (){
  //inhalt des Arrays kann für neue Menu Ebene genutzt werden:
  //gewünschte Namen und amnzahl in Array schreiben
  //(!) .html dadei mit gleichen name muss im Backend vorhanden sein, osnt funktioniert link nicht
  subpages=["events","association","socialmedia"];

  //erstellt soviele html paragrathen wie es elemente im Array subpages gibt;
  //ordnent diese zufällig, jedesmal anders, auf der Seite an
  //Styling erfolgt in html file
  //Die ImageHeight ergibt sich aus der WindowHeight mal der Bildhöhe durch
  //die Bildbreite in px, bei Logo veränderung anpassen;
  //imageHeight wird genutz zur anordnung der links

  var imageHeight= windowWidth*(2100/2085);
  for(var i=0;i<subpages.length;i++ ){
    var subpage = createA(domainLevel + subpages[i],subpages[i]);
    subpage.addClass('subpages');
    var xPosition = 0;
    var yPosition = imageHeight + i*40;
    subpage.position(xPosition,yPosition);
  }


//passt die größe des Logos an die windowWidth an
 var images = selectAll('img');
 for(var i=0; i<images.length; i++){
   images[i].style('max-width',windowWidth + 'px');
 }


  paragraphs = selectAll('.subpages');
  for(var i=0; i<paragraphs.length; i++){
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unhighlight);
  }
}

function highlight(){
  this.style('background-color','yellow')
}

function unhighlight(){
  this.style('background-color','#666666')
}
