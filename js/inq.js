
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