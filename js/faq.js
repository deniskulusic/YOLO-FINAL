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
function down() {
    downbox.classList.toggle('active-box');
    if(i%2==0)
    downbutton.innerHTML="SHOW LESS"
    else{
    downbutton.innerHTML="SHOW MORE"}
    i++;
  }