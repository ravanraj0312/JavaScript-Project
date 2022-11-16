const gen_btn = document.querySelector("#gen_color");
var hex_text = document.querySelector(".hex_text");


gen_btn.addEventListener("click",()=>{
    var hex_val = Math.floor(100000+Math.random()*9000000).toString(16);
    document.body.style.backgroundColor="#"+hex_val;
    hex_text.innerHTML=hex_val;
})