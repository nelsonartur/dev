var button;
var trigger;
var popup;
var hidden=true;



function setup() {
  button = select('#popup_button');
  button.mousePressed(removeDiv);

  trigger= createButton('trigger')
  trigger.mousePressed(showDiv);

  popup=select('#popup')
  popup.hide();



}

function removeDiv() {

  popup.remove();
}

function showDiv(){
  popup.show();
}
