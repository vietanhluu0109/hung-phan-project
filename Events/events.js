var lives = 3;


function loaded() {
    // console.log("Body")
    alert("let's playyy mind hung phan!!")
}

function ANS(Answer) {
    console.log(Answer);
    alert("Wronggggggg");
}

var haha = document.getElementById("pglayout")
var rightAns = haha.getElementsByClassName("Ansbox")

var livesEl = document.getElementById("lives")
livesEl.textContent = `Lives: ${lives}`; 
