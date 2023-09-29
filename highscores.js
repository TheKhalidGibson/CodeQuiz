function highScoresInitials(){

    let highScores = JSON.parse(localStorage.getItem("leaderBoard")) || []
    
    highScores.sort((a, b) =>  b.score - a.score);

    for (let i = 0; i < highScores.length; i++) {
        let li = document.createElement("li")
        li.textContent = " Player: " + highScores[i].userInitials + " Score: " + highScores[i].score
        document.querySelector(".topScores").append(li)
    }    
}

highScoresInitials();

let clearScores = document.querySelector("#clear")

clearScores.addEventListener("click", function(){

    localStorage.clear()
    document.querySelector(".topScores").innerHTML = ""

})