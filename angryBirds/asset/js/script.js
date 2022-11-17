const mainBird=document.querySelector(".char-bird")

document.addEventListener("mousemove",(e)=>{
    mainBird.style.left=e.clientX+"px";
    mainBird.style.top=e.clientY+"px";
})
// function rotation(){
    document.querySelectorAll('.char-bird').forEach(cell => cell.addEventListener('click', handleCellClick));
    function handleCellClick(e){
        mainBird.style.transform="rotate(360deg)"
        //         mainBird.style.transform="transform .5s ease"
        console.log(e);
        console.log("click");
    }

// mainBird.addEventListener("mousedown",(e)=>{
//         mainBird.style.transform="rotate(360deg)"
//         mainBird.style.transform="transform .5s ease"
//     })
    // console.log(this);
// }

// rotation();
