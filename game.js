let player1Choice = "";
let player2Choice = "";
let player1Score = 0;
let player2Score = 0;

function determineWinner() {
    if (player1Choice === player2Choice) {
        return "It's a tie!";
    }

    if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'scissors' && player2Choice === 'paper') ||
        (player1Choice === 'paper' && player2Choice === 'rock')
    ) {
        player1Score++;
        return "Player 1 wins!";
    } else {
        player2Score++;
        return "Player 2 wins!";
    }
}

function playerChoice(player, choice) {
    if (player === 1) {
        player1Choice = choice;
        document.getElementById("result").textContent = "Player 1 chose " + choice;
    } else {
        player2Choice = choice;
        document.getElementById("result").textContent += "\nPlayer 2 chose " + choice;
        const resultMessage = determineWinner();
        document.getElementById("result").textContent += `\n${resultMessage}`;
        document.getElementById("score").textContent = `Player 1: ${player1Score} | Player 2: ${player2Score}`;
    }
}

function resetGame() {
    player1Choice = "";
    player2Choice = "";
    document.getElementById("result").textContent = "";
}
