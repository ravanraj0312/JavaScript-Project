toggleBtn = document.getElementById("toggleBtn");
closeBtn = document.getElementById("closeBtn");
mainNav = document.querySelector(".main-nav");
active = document.querySelector(".active-element")
toggleBtn.addEventListener("click",()=>{
    mainNav.style.width="100%";
    active.style.opacity="1"
})
closeBtn.addEventListener("click",()=>{
    mainNav.style.width="0%";
    active.style.opacity="0"
    
})