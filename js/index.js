var className = "inverted";
var scrollTrigger=window.innerHeight-76;
var el = document.querySelector(".paralaxexp");
var distanceFromTop =window.pageYOffset + el.getBoundingClientRect().top;
let static=distanceFromTop;

window.addEventListener("resize", function() {
    distanceFromTop = window.pageYOffset + el.getBoundingClientRect().top;
    static=distanceFromTop;
    scrollTrigger=window.innerHeight-76;
   
  });
  
window.addEventListener("scroll", function() {
    var distance = window.scrollY;
   if(distance<window.innerHeight){
    document.querySelector(".paralax-header").style.transform = `translateY(${distance *
      1}px)`;
    document.querySelector(
      ".paralax"
    ).style.transform = `translateY(${distance * 0.1}px)`;}
if(distance-static<window.innerHeight/5){
    if(static-window.innerHeight<=distance){
        document.querySelector(
            ".paralax2"
          ).style.transform = `translateY(${(distance-static+window.innerHeight) * 1.1}px)`;
          
    }
    else{
        document.querySelector(
            ".paralax2"
          ).style.transform = `translateY(${(distance-static) * 0}px)`;
    }
}
if(static+window.innerHeight<distance){
      document.querySelector(".menu-full").classList.add("flexmenu");
      document.querySelector(".menu-full").classList.remove("nonemenu"); 
    }
    else if(static<distance){
      document.querySelector(".menu-full").classList.add("nonemenu");
      document.querySelector(".menu-full").classList.remove("flexmenu");
    }
    else{
    document.querySelector(".menu-full").classList.add("flexmenu");  
    document.querySelector(".menu-full").classList.remove("nonemenu"); 
    }
if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
  document.getElementsByClassName('menu-full')[0].classList.add(className);
  document.getElementsByClassName('none')[0].classList.add('flex-imp');
  document.getElementsByClassName('flex')[0].classList.add('none-imp');
} else {
  document.getElementsByClassName('menu-full')[0].classList.remove(className);
  document.getElementsByClassName('none')[0].classList.remove('flex-imp');
  document.getElementsByClassName('flex')[0].classList.remove('none-imp');
}


  });
 
   
      




