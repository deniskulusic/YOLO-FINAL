var j=1;
var i=1;
var wid=document.querySelector(".slider-coments");
var wid2=document.querySelector(".slider");
var width = wid.scrollWidth;
var scrollw=wid.offsetWidth;
var width2 = wid2.scrollWidth;
var scrollw2=wid2.offsetWidth;
var naprid=document.querySelector(".naprid");
var nazad=document.querySelector(".nazad");
var numberOfChildren = wid.getElementsByClassName("slider-coment-content").length;
var naprid2=document.querySelector(".naprid2");
var nazad2=document.querySelector(".nazad2");
var numberOfChildren2 = wid2.getElementsByClassName("slider-element").length;
console.log(width2, numberOfChildren2)
window.onload=function(){
  nazad.style.opacity="0.2";
  wid.scrollTo(0,0);
  nazad2.style.opacity="0.2";
  wid2.scrollTo(0,0);
}

naprid.addEventListener("click", function(){
  nazad.style.opacity="1";
  if(j<numberOfChildren){
    j++;
  wid.scrollTo(680*(j-1),0);
  }
  if (j==numberOfChildren) {
    naprid.style.opacity="0.2";
  }
  
});
nazad.addEventListener("click", function(){
  naprid.style.opacity="1";
  if(j==2){
    nazad.style.opacity="0.2";
    }
  if(j!=1){
    j--;
  wid.scrollTo(680*(j-1),0);
  
}

    });
  
    naprid2.addEventListener("click", function(){
      nazad2.style.opacity="1";
      if(i<numberOfChildren2){
        i++;
      wid2.scrollTo(498*(i-1),0);
      }
      if (i==numberOfChildren2) {
        naprid2.style.opacity="0.2";
      }
      
    });
    nazad2.addEventListener("click", function(){
      naprid2.style.opacity="1";
      if(i==2){
        nazad2.style.opacity="0.2";
        }
      if(i!=1){
        i--;
      wid2.scrollTo(498*(i-1),0);
      
    }
    
        });