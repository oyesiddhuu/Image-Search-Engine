let userScore = 0;
let compScore = 0;
let message = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");



const genCompChoice = () =>{
    let Options = ["rock", "paper", "scissors"];
    let rendomnum = Math.floor(Math.random() * Options.length);
    return Options[rendomnum];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        //WIN THE MATCH
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";

    }else {
        compScore++;
        //LOSE THE MATCH
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice =", userChoice)
    const compChoice = genCompChoice();
    console.log("comp user =", compChoice);

    if(userChoice === compChoice){
        msg.innerText = "That Move was Draw!! Play Again";
        msg.style.backgroundColor = "Blue";

        //Draww game
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

