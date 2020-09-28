function setup(){
  if(windowWidth>windowHeight){
    
    var bg= select('body');
    bg.style('background-image', 'url("https://healthyego.github.io/dev/source/garten/9.jpeg")');

    var logo=select('#logo');
    logo.style('width','50%');
    logo.style('margin','0 auto');
    logo.style('padding', '25%');
    logo.style('padding-top', '30%');

    var logoContainer= select('.logo');

    logoContainer.style('width','50%');
    //logoContainer.style('background','black');
    logoContainer.style('padding','0');
    logoContainer.style('height','100%');





    var text=select('.text');
    text.style('width','40%');
    text.style('padding','0%');
    text.style('padding-left','5%');
    text.style('padding-top','10%');

    var content=select('.content');
    content.style('display','flex');
    content.style('overflow','auto');



  }
}
