//? Created Variable
const input = document.getElementById("user_input");
const msg = document.getElementById("msg");
const inpt_btn = document.getElementById("inp_btn");
const item = document.getElementById("display_item");
//? intitalized count for dynamic id
var count = 1;


//?remove message on type
input.addEventListener("keyup",()=>{
    msg.innerHTML = "";
});

//? added function to add button 
inpt_btn.addEventListener("click", () => {
  if (input.value == "") {
    msg.innerHTML = "Please add task";
  } else {
    var div = document.createElement("div")
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var del_btn = document.createElement("button");
    del_btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(div);
    div.appendChild(del_btn)
    //?set the dynamic id to button for removing
    li.setAttribute("id", "btn_" + count);
    item.appendChild(li);
    del_btn.addEventListener("click", () => {
      // alert(li.id)
      document.getElementById(li.id).remove();
    });
    count++;
   var strike= document.getElementById(li.id)
   strike.addEventListener("click",()=>{
    strike.classList.toggle("linethrough");
   })
  }
});
var emptyul = item.children.length == 0  ;
if(emptyul){
  msg.innerHTML = "Nothing is added";
};