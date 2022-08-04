var fixedofset=window.innerHeight+100;
var heightleftsel=document.querySelector(".hug-left");
var heightleft=heightleftsel.offsetHeight;
var heightrightsel=document.querySelector(".left-img-center");
var heightright=heightrightsel.offsetHeight;
window.addEventListener("resize", function() {
    fixedofset=window.innerHeight+100;
    heightleft=heightleftsel.offsetHeight;
    heightright=heightrightsel.offsetHeight;
});
window.addEventListener("scroll", function() {
    var distance=window.scrollY;
    if(distance-fixedofset+heightright>heightleft+80){
        heightrightsel.classList.remove('left-img-active');
        heightrightsel.classList.add('left-img-static');    }
    
    else if(distance>fixedofset){
        heightrightsel.classList.remove('left-img-static');
        heightrightsel.classList.add('left-img-active');    }
    else{
        heightrightsel.classList.remove('left-img-active');    } 
});