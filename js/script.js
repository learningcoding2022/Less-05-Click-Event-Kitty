var button = document.querySelector(".show-cat");
/*console.log(kittyButton);*/

var cat = document.querySelector(".cat");
/*console.log(catFigure);*/

/* When user clicks on the button, function is triggered to show cat image*/
button.addEventListener("click", function () {
    button.innerText = "it's working.";
    cat.classList.add("show");
/*don't have to have the "." before a class when adding the class*/
});