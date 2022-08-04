
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

document.getElementById("sucess").addEventListener("click",function(){
    document.querySelector(".sucess").style.display="flex";
    document.body.classList.toggle('stop-sroll');
});
document.getElementById("dismiss").addEventListener("click",function(){
    document.querySelector(".sucess").style.display="none";
    document.body.classList.toggle('stop-sroll');
});