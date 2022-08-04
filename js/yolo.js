var className = "inverted";
var scrollTrigger=window.innerHeight-76;
var el3 = document.querySelector(".mini-para");
var distanceFromTop3 =window.pageYOffset + el3.getBoundingClientRect().top;
var static=window.innerHeight;
var static3=distanceFromTop3 -window.innerHeight;


window.addEventListener("resize", function() {

static=window.innerHeight;
distanceFromTop3 =window.pageYOffset + el3.getBoundingClientRect().top;
static3= distanceFromTop3 -window.innerHeight;

  });
  document.querySelector('.white_button').addEventListener("click",function(){
    document.getElementsByClassName('show-more')[0].classList.toggle('show-more-active');
    document.body.classList.toggle('stop-sroll');
  });
  document.querySelector('.back').addEventListener("click",function(){
    document.getElementsByClassName('show-more')[0].classList.toggle('show-more-active');
    document.body.classList.toggle('stop-sroll');
  });
window.addEventListener("scroll", function() {
  
  var distance = window.scrollY;
 if(distance<static2){
  document.querySelector(".menu-full").classList.remove("nonemenu");

 }
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
  }
  var value=window.scrollY ;
  var s=document.querySelector(".smalldining-img");
  var g=document.querySelector(".skiny-img");
  var b=document.querySelector(".center-img");
  var r=document.querySelector(".med-smallimg");
  var y=document.querySelector(".umde-simg");
  g.style.top = (-value+static3*1.2) * 0.11 + "px";
  s.style.top = (-value+static3*1.4) * 0.11 + "px";
  r.style.top = (-value+static3*1.7) * 0.11 + "px";
  b.style.top = (-value+static3*1.3) * 0.07 + "px";
  
  y.style.top = (-value+static3*2.1) * 0.11 + "px";
});

const acordation=document.getElementsByClassName('option');
for(i=0;i<acordation.length;i++){
    acordation[i].addEventListener('click',function(){


var elems = document.querySelectorAll(".option.active");
[].forEach.call(elems, function(el) {
el.classList.remove("active");
});
        this.classList.toggle('active');
    })
}