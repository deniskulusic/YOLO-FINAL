var footer = "footer-color";
var el2 = document.querySelector(".paralaxexp2");
var distanceFromTop2 =window.pageYOffset + el2.getBoundingClientRect().top;
let static2=distanceFromTop2;
var height = el2.offsetHeight;
console.log(static2)
window.addEventListener("resize", function() {
distanceFromTop2 = window.pageYOffset + el2.getBoundingClientRect().top;
static2=distanceFromTop2;
height = el2.offsetHeight;
console.log(static2);
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
    if(distance>static2){
        document.querySelector(".menu-full").classList.remove("flexmenu");
        document.querySelector(".menu-full").classList.add("nonemenu");
        console.log("yo")
    }
   
    if(height>window.innerHeight){
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
      const lngactivate=document.getElementsByClassName('lngo');
for(i=0;i<lngactivate.length;i++){
    lngactivate[i].addEventListener('click',function(){


var elems = document.querySelectorAll(".lngo.lngactive");
[].forEach.call(elems, function(el) {
el.classList.remove("lngactive");
});
        this.classList.toggle('lngactive');
    })
}
  