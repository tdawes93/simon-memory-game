let game = {
    score: 0,
    currentGame: [],
    playerMove: [],
    choices: ["button1", "button2", "button3", "button4"],
    turnNumber: 0,
};

function newGame() {
    game.score = 0;
    game.playerMove = [];
    game.currentGame = [];
    showScore();
    addTurn();
};

let showScore = () => {
    document.getElementById("score").innerText = game.score
}

let addTurn = () => {
    game.playerMove = [];
    game.currentGame.push(game.choices[Math.floor(Math.random()*4)]);
    showTurns();
}

let lightsOn = (circ) => {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

let showTurns = () => {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };