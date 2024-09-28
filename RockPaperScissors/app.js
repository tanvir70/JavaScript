let userScore = 0;
let devScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreP = document.querySelector("#user-score");
const devScoreP = document.querySelector("#dev-score");

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


const generateDevChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const draw = () => {
    console.log("No one win. Fight again");
    msg.innerText = "No one win. Fight again"
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    const devChoice = generateDevChoice();

    if (userChoice === devChoice){
        draw();
    }else {
        let userWin = true;
        if (userChoice === "rock"){
            //dev choice = paper/ scissors
            userWin = devChoice === "scissors" ? true : false;
        }else if (userChoice === "paper"){
            //dev choice = rock / scissors 
            userWin = devChoice === "rock" ? true : false;
        }else{
            //dev choice = rock / paper
            userWin = devChoice === "paper" ? true : false;
        }
        gameWinner(userWin);
    }
};

const gameWinner = (userWin) => {
    if(userWin){
        userScore++;
        console.log("You Won. Wanna fight Again ?");
        msg.innerText = "You Won. Wanna fight Again ?"
        msg.style.backgroundColor = "green";
        userScoreP.innerText= userScore;
    }else {
        devScore++;
        console.log("You have lost. Looser! Wanna fight Again ?");
        msg.innerText = "You have lost. Looser! Wanna fight Again ?"
        msg.style.backgroundColor = "red";
        devScoreP.innerText = devScore;
    }
}