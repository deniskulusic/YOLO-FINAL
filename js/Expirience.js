var className = "inverted";
var scrollTrigger=window.innerHeight-76;
var el = document.querySelector(".paralaxexp");
var distanceFromTop =window.pageYOffset + el.getBoundingClientRect().top;
let static=distanceFromTop;
var paralaxheader=document.querySelector(".paralax-header");
var paralax=document.querySelector(".paralax");
var paralax2=document.querySelector(
  ".paralax2"
);
var paralax2in= document.querySelector(
  ".paralax2in"
);
var menufull=document.querySelector(".menu-full");
el3 = document.querySelector(".paralaxexp3");
var distanceFromTop3 =window.pageYOffset + el3.getBoundingClientRect().top;
let static3=distanceFromTop3;

window.addEventListener("resize", function() {
    distanceFromTop = window.pageYOffset + el.getBoundingClientRect().top;
    static=distanceFromTop;
    distanceFromTop3 = window.pageYOffset + el3.getBoundingClientRect().top;
    static3=distanceFromTop3;
    scrollTrigger=window.innerHeight-76;
  });
  
window.addEventListener("scroll", function() {

    var distance = window.scrollY;
    
    var g=document.querySelector(".skiny-img");  
    g.style.top = distance * 0.1 + "px";
    var r=document.querySelector(".wide-img");  
    r.style.top = -distance * 0.1 + "px";
   if(distance<window.innerHeight){
    paralaxheader.style.transform = `translateY(${distance *
      1}px)`;
    paralax.style.transform = `translateY(${distance * 0.1}px)`;
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
  if(static3+window.innerHeight<distance){
    document.querySelector(".menu-full").classList.add("flexmenu");
    document.querySelector(".menu-full").classList.remove("nonemenu"); 
  }
  else if(static3<distance){
    document.querySelector(".menu-full").classList.add("nonemenu");
    document.querySelector(".menu-full").classList.remove("flexmenu");
  }
  else if(distance>static+window.innerHeight && distance<static3){
  document.querySelector(".menu-full").classList.add("flexmenu");  
  document.querySelector(".menu-full").classList.remove("nonemenu"); 
  }

if(distance-static<window.innerHeight/5){
    if(static-window.innerHeight<=distance){
        paralax2.style.transform = `translateY(${(distance-static+window.innerHeight) * 1}px)`;
         paralax2in.style.transform = `translateY(${(distance-static+window.innerHeight) * 0.1}px)`;
    }
    else{
        paralax2.style.transform = `translateY(${(distance-static) * 0}px)`;
    }
}

if(distance-static3<window.innerHeight/5){
  if(static3-window.innerHeight<=distance){
      document.querySelector(
          ".paralax23"
        ).style.transform = `translateY(${(distance-static3+window.innerHeight) * 1}px)`;
        document.querySelector(
          ".paralax23in"
        ).style.transform = `translateY(${(distance-static3+window.innerHeight) * 0.1}px)`;
  }
  else{
      document.querySelector(
          ".paralax23"
        ).style.transform = `translateY(${(distance-static) * 0}px)`;
  }
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
  const acordation=document.getElementsByClassName('faq');
for(i=0;i<acordation.length;i++){
    acordation[i].addEventListener('click',function(){
        var elems = document.querySelectorAll(".faq.active");
[].forEach.call(elems, function(el) {
    el.classList.remove("active");
});
        this.classList.toggle('active');
    })
}
var i=0;
var downbox=document.getElementById('cool');
var downbutton=document.getElementById('down-button');
  downbutton.addEventListener("click", function(){
  downbox.classList.toggle('active-box');
    if(i%2==0)
    downbutton.innerHTML="SHOW LESS"
    else{
    downbutton.innerHTML="SHOW MORE"}
    i++;
    });






  


