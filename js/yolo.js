var className = "inverted";
var scrollTrigger=window.innerHeight-76;
window.addEventListener("scroll", function() {
  var distance = window.scrollY;
   if(distance<window.innerHeight){
    document.querySelector(".paralax-header").style.transform = `translateY(${distance *
      1}px)`;
    document.querySelector(
      ".paralax"
    ).style.transform = `translateY(${distance * 0.1}px)`;}
if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName('menu-full')[0].classList.add(className);
    document.getElementsByClassName('none')[0].classList.add('flex-imp');
    document.getElementsByClassName('flex')[0].classList.add('none-imp');
  } else {
    document.getElementsByClassName('menu-full')[0].classList.remove(className);
    document.getElementsByClassName('none')[0].classList.remove('flex-imp');
    document.getElementsByClassName('flex')[0].classList.remove('none-imp');
  }});