const dec = document.getElementById("dec_btn");
const inc = document.getElementById("inc_btn");
const res = document.getElementById("res_btn");
var count = 1;
var counterText = document.getElementById("count");
inc.addEventListener("click",()=>{
    count+=1;
    counterText.innerHTML=count;
})
dec.addEventListener("click",()=>{
    count--;
    if(count<1){
        count=1;
    }
    counterText.innerHTML=count;
})
res.addEventListener("click",()=>{
    count=1;
    counterText.innerHTML=count;
})

if(count < 1){
    count == 1;
    counterText.innerHTML=count;
}

