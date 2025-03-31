const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const thread = document.getElementById('thread');
let resultDiv = document.querySelector(".result");
let computersGuess;
let you, com;
let result;
let wins = 0;
let losses = 0;
let draws = 0;

rock.addEventListener("click", () => {
    computersGuess = Math.floor(Math.random() * 4);
    you = rock.textContent;

    if (computersGuess == 0) {
        draws++;
        result = 2;
        com = rock;
    } else if (computersGuess == 1) {
        losses++;
        result = 0;
        com = paper;
    } else if (computersGuess == 2) {
        wins++;
        result = 1;
        com = scissor;
    } else if (computersGuess == 3) {
        losses++;
        result = 0;
        com = thread;
    }

    updateOutcome(result);
});

paper.addEventListener("click", () => {
    computersGuess = Math.floor(Math.random() * 4);
    you = paper.textContent;

    if (computersGuess == 0) {
        wins++;
        result = 1;
        com = rock;
    } else if (computersGuess == 1) {
        draws++;
        result = 2;
        com = paper;
    } else if (computersGuess == 2) {
        losses++;
        result = 0;
        com = scissor;
    } else if (computersGuess == 3) {
        losses++;
        result = 0;
        com = thread;
    }

    updateOutcome(result);
});

thread.addEventListener("click", () => {
    computersGuess = Math.floor(Math.random() * 4);
    you = thread.textContent;

    if (computersGuess == 0) {
        losses++;
        result = 0;
        com = rock;
    } else if (computersGuess == 1) {
        losses++;
        result = 0;
        com = paper;
    } else if (computersGuess == 2) {
        wins++;
        result = 1;
        com = scissor;
    } else if (computersGuess == 3) {
        draws++;
        result = 2;
        com = thread;
    }

    updateOutcome(result);
});

scissor.addEventListener("click", () => {
    computersGuess = Math.floor(Math.random() * 4);
    you = scissor.textContent;

    if (computersGuess == 0) {
        losses++;
        result = 0;
        com = rock;
    } else if (computersGuess == 1) {
        wins++;
        result = 1;
        com = paper;
    } else if (computersGuess == 2) {
        draws++;
        result = 2;
        com = scissor;
    } else if (computersGuess == 3) {
        wins++;
        result = 1;
        com = thread;
    }

    updateOutcome(result);
});

let commentry = document.createElement('p');
commentry.style.fontSize = '20px';
let fightPara=document.createElement('p');
fightPara.style.fontWeight='500';
fightPara.style.fontSize='50px';

function updateOutcome(result) {
    if (result == 0) {
        document.getElementById('outcome').innerText = "You Lose!";
    } else if (result == 1) {
        document.getElementById('outcome').innerText = "You Win!";
    } else {
        document.getElementById('outcome').innerText = "Draw!";
    }
    fightPara.textContent=`You :${you} ${com.textContent}: computer`;
    resultDiv.appendChild(fightPara);
    commentry.textContent=`Wins: ${wins}, Losses: ${losses}, Draws: ${draws}`;
    resultDiv.appendChild(commentry);
}

