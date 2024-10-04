let userScore = 0;
let devScore = 0;
let round = 1;
const maxRounds = 125;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const roundInfo = document.querySelector("#round-info"); 
const resetBtn = document.querySelector("#reset-btn");

const userScoreP = document.querySelector("#user-score");
const devScoreP = document.querySelector("#dev-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (round <= maxRounds) { 
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        } else {
            msg.innerText = "Game Over. Click Reset to play again.";
        }
    });
});

const generateDevChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const draw = (devChoice, userChoice) => {
    console.log(`No one wins! You chose = ${userChoice}, Dev chose = ${devChoice}`);
    msg.innerText = "It's a draw! Try again!";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    const devChoice = generateDevChoice();

    if (userChoice === devChoice) {
        draw(devChoice, userChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = devChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = devChoice === "scissors" ? false : true;
        } else {
            userWin = devChoice === "rock" ? false : true;
        }
        gameWinner(userWin, devChoice, userChoice);
    }

    round++; 
    updateRoundInfo();

    if (round > maxRounds) {
        msg.innerText = "Game Over. Click Reset to play again.";
    }
};

const gameWinner = (userWin, devChoice, userChoice) => {
    if (userWin) {
        userScore++;
        console.log(`USER WINS! You chose = ${userChoice}, Dev chose = ${devChoice}`);
        msg.innerText = "You Won! Want to play again?";
        msg.style.backgroundColor = "green";
        userScoreP.innerText = userScore;
    } else {
        devScore++;
        console.log(`DEV WINS! You chose = ${userChoice}, Dev chose = ${devChoice}`);
        msg.innerText = "You lost! Try again!";
        msg.style.backgroundColor = "red";
        devScoreP.innerText = devScore;
    }
};

const updateRoundInfo = () => {
    roundInfo.innerText = `Round: ${round}/${maxRounds}`;
};

const resetGame = () => {
    userScore = 0;
    devScore = 0;
    round = 1;
    userScoreP.innerText = userScore;
    devScoreP.innerText = devScore;
    msg.innerText = "Can you WIN!";
    msg.style.backgroundColor = "#46656F";
    updateRoundInfo();
};

resetBtn.addEventListener("click", resetGame);

updateRoundInfo();


let arr = [1, 2, 3];
console.log(arr.toString());  // Output: "1,2,3"
