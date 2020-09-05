var button;
var popup;
var hidden=true;

var trigger;



function setup() {
  button = select('#popup_button');
  button.mousePressed(removeDiv);

  popup=select('#popup')
  popup.hide();


  trigger=createButton('trigger');
  trigger.mousePressed(showDiv);
}

function removeDiv() {
  popup.remove();
}

function showDiv(){
  popup.show();
}
