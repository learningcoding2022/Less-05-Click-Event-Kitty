var button = document.querySelector(".show-cat");
/*console.log(kittyButton);*/

var cat = document.querySelector(".cat");
/*console.log(catFigure);*/

/* When user clicks on the button, function is triggered to show cat image*/
button.addEventListener("click", function () { 
if (cat.classList.contains("show")) {
  /*console.log("Yes.");*/
   cat.classList.remove("show");
   button.innerText = ("Wait, come back!");
   button.classList.add("disappear");
} else {
    cat.classList.add("show");  
    /*console.log("No.");*/
    button.innerText = ("Shoo, cat!!");
    button.classList.remove("disappear");
}
});