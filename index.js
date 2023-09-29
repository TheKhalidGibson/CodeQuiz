

let quizDiv = document.querySelector("#quiz");
let startDiv = document.querySelector("#start");
let hiddenDiv = document.querySelector("#hidden");
let startButton = document.querySelector('.startButton');

let questionButton1 = document.querySelector("#answer1")
let questionButton2 = document.querySelector("#answer2")
let questionButton3 = document.querySelector("#answer3")
let questionButton4 = document.querySelector("#answer4")

let h1El = document.querySelector("#question")


let timer = 90
let divEl = document.querySelector("div")

let timerId;

function startTimer() {

   timerId = setInterval(function () {
    
        divEl.textContent = timer
    
        timer -- 
        console.log(timer);
    
        if (timer <= 0) {
    
            clearInterval(timerId)
        }
    
    }, 1000)
}



let questions = [{ question: "Which pokemon does Ash get at the start of pokemon?", answers: ["Charmander", "Squirtle", "Bulbasaur", "Pikachu"], correctAnswer: "Pikachu" },
{ question: "Which pokemon deals fire damage?", answers: ["Squirtle", "Charmander", "Pikachu", "Bulbasaur"], correctAnswer: "Charmander" },
{ question: "Which pokemon has a high damaging attack called water pulse?", answers: ["Pikachu", "Bulbasaur", "Squirtle", "Charmander"], correctAnswer: "Squirtle" },
{ question: "Which pokemon has a flower on its back that grows as it evolves?", answers: ["Bulbasaur", "Charmander", "Pikachu", "Squirtle"], correctAnswer: "Bulbasaur" },
{ question: "What is Pokemon's most famous catch phrase?", answers: ["I need more", "Gotta win next time", "I choose you Boots", "Gotta catch em all"], correctAnswer: "Gotta catch em all" }

]

let question = ["0,1,2,3,4"]

let currentQuestion = 0

renderQuestion();

function renderQuestion() {



    h1El.textContent = questions[currentQuestion].question;

    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1];
    questionButton3.textContent = questions[currentQuestion].answers[2];
    questionButton4.textContent = questions[currentQuestion].answers[3];
    console.log("correct answer:" + questions[currentQuestion].correctAnswer)
}



quizDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {

        console.log("clicked!")
        console.log("value:" + event.target.innerText);
        console.log("correct answer:" + questions[currentQuestion].correctAnswer);

        if (event.target.innerText !== questions[currentQuestion].correctAnswer) {

            timer -= 5
        }

        else if (event.target.innerText === questions[currentQuestion].correctAnswer) {


        }

        currentQuestion++
        if (currentQuestion >= questions.length) {
            clearInterval(timerId)
            console.log("last question")
            gameOver()
        } else{
             renderQuestion();
        }

       
    }
})

startButton.addEventListener("click", function (event){

    quizDiv.classList.remove("hidden")
    startButton.classList.add("hidden")
        startTimer();
})


function gameOver(){

    quizDiv.classList.add("hidden")
    document.querySelector(".GameOver").classList.remove("hidden")
}

document.querySelector(".submit").addEventListener("click", function(){

    let userInitials = document.querySelector(".initials").value
        console.log(userInitials); 
        
    let obj = {
        userInitials,
        score: timer
    } 
    console.log(obj);

    let leaderBoard = JSON.parse(localStorage.getItem("leaderBoard")) || []
    leaderBoard.push(obj)
    localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard))

    window.location.replace("./highscores.html")
})

