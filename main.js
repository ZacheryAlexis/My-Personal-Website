
let mybutton = document.getElementById("submitButton");

//callback function
function onClick(event){
    event.preventDefault();
    let random_Pos = Math.floor(Math.random()*imgArray.length);
    //get the referance for our image
    let image = document.getElementById("main_image");
    image.src = imgArray[random_Pos];
}

//add event listener 

mybutton.addEventListener("click", onClick);