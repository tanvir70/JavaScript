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

const draw = (devChoice,userChoice) => {
    console.log(`No one win! You choose = ${userChoice} Dev choose = ${devChoice}`);
    msg.innerText = "No one win. Fight again"
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    const devChoice = generateDevChoice();

    if (userChoice === devChoice){
        draw(devChoice,userChoice);
    }else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = devChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            userWin = devChoice === "scissors" ? false : true;
        }else{
            userWin = devChoice === "rock" ? false : true;

        }
        gameWinner(userWin,devChoice,userChoice);
    }
};

const gameWinner = (userWin,devChoice,userChoice) => {
    if(userWin){
        userScore++;
        console.log(`USER WIN You choose = ${userChoice} Dev choose = ${devChoice}`);
        msg.innerText = "You Won. Wanna fight Again ?"
        msg.style.backgroundColor = "green";
        userScoreP.innerText= userScore;
    }else {
        devScore++;
        console.log(`DEV WIN You choose = ${userChoice} Dev choose = ${devChoice}`);
        msg.innerText = "You have lost. Looser! Wanna fight Again ?"
        msg.style.backgroundColor = "red";
        devScoreP.innerText = devScore;
    }
}