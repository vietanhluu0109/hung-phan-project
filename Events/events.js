const startgame = document.getElementById("start");
const quiz = document.getElementById("quiz");
const footer = document.getElementById("footer");

function start() {
    menu.style.display = "none";
    quiz.style.display = "initial";
    footer.style.display = "initial";
    RunningQuestionIndex = 0;
    earlygame()
    LoopthroughQuestion();
}

var quest = document.getElementsByClassName("question")
quest.textContent = ``

function ANS(Answer) {
    console.log(Answer);
    // alert("Wronggggggg");
    // return true;    
}

function colorafter(ID) {
    document.getElementById(ID).style.backgroundColor = "orange";
}

function colorbefore(ID) {
    document.getElementById(ID).style.backgroundColor = "lightgray";
}



function skipquest() {
    skips-=1;
    skipEl.textContent = `SKIP: ${skips}`;
    if (skips ===0) {
        alert("No more skipping meit!!");
        document.getElementById("skips").disabled = true;
    }
    if (RunningQuestionIndex === lastQuestionIndex) {
        alert("No more skipping meit!!")
    } else {
    RunningQuestionIndex++;        
    LoopthroughQuestion();
    questionnumber++;
    var number = document.getElementById("questionnumber");
    number.textContent = `${questionnumber}.`;}
}


