window.addEventListener("scroll", function() {
    var detination=window.scrollY;
    if(detination<static2){
        document.querySelector(".menu-full").classList.add("flexmenu");
        document.querySelector(".menu-full").classList.remove("nonemenu"); 
    }
});