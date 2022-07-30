var footer = "footer-color";
var el2 = document.querySelector(".paralaxexp2");
var distanceFromTop2 =window.pageYOffset + el2.getBoundingClientRect().top;
let static2=distanceFromTop2;
var height = el2.offsetHeight;
window.addEventListener("resize", function() {
distanceFromTop2 = window.pageYOffset + el2.getBoundingClientRect().top;
static2=distanceFromTop2;
height = el2.offsetHeight;
});
var downbutton=document.getElementById('down-button');
downbutton.addEventListener("click", function(){
    setTimeout(function(){ 
        distanceFromTop2 = window.pageYOffset + el2.getBoundingClientRect().top;
        static2=distanceFromTop2;
     }, 500);
  
});
   


window.addEventListener("scroll", function() {
    
    var distance = window.scrollY;
    if(height>window.innerHeight-108){
        if(distance-static2<0){
            if(static2-window.innerHeight<=distance){
               
                document.querySelector(
                    ".paralax22"
                  ).style.transform = `translateY(${(distance-static2+window.innerHeight) * 1.1}px)`;
                  
            }
            else{
                document.querySelector(
                    ".paralax22"
                  ).style.transform = `translateY(${(distance-static2) * 0}px)`;
            }
        }}
        else{
            document.querySelector(
                ".paralax22"
              ).style.transform = `translateY(${(distance-static2+window.innerHeight) * 0}px)`;}
    });
    function menu() {
        document.querySelector(".menu-full").classList.toggle('menu-active');
        document.body.classList.toggle('stop-sroll');
      }
  