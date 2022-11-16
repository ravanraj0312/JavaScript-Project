function filter(val){
    const cakes = document.querySelector(".cakesList");
    const pancake = document.querySelector(".pancakesList");
    const chocolate = document.querySelector(".chocolateList");
    if(val == "pancake"){
     pancake.style.display="block";
    cakes.style.display="none";
    chocolate.style.display="none";
  }else if(val == "cakes"){
       pancake.style.display="none";
      cakes.style.display="block";
      chocolate.style.display="none";
  }else if(val == "chocolate"){
    pancake.style.display="none";
      cakes.style.display="none";
      chocolate.style.display="block";
  }
  else{
    pancake.style.display="block";
    cakes.style.display="block";
    chocolate.style.display="block";
  }
}