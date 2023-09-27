let nav=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    let x=window.scrollY;
if(x>680){
    nav.style.background="#0a0f12"
}

else{
    nav.style.display="block" 
}
 if(x>2000){nav.style.background="#081f30"}

})

var typed = new Typed('.content .home #content-text h3 span', {
    strings:["Robots","Distance Learning"],
    backSpeed:100,
    backDelay:1000,
    typeSpeed:100,
   loop:true,
  });
 