let game = {
    score: 0,
    currentGame: [],
    playerMove: [],
    choices: ["button1", "button2", "button3", "button4"],
    turnNumber: 0,
    lastButton: "",
    turnInProgress: false,
};

function newGame() {
    game.score = 0;
    game.playerMove = [];
    game.currentGame = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    lightsOn(move);
                    game.playerMove.push(move);
                    playerTurn();
                };
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
};

let showScore = () => {
    document.getElementById("score").innerText = game.score
}

let addTurn = () => {
    game.playerMove = [];
    game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
    showTurns();
}

let lightsOn = (circ) => {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

let showTurns = () => {
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
}

let playerTurn = () => {
    let i = game.playerMove.length - 1;
    if (game.currentGame[i] === game.playerMove[i]) {
        if (game.currentGame.length == game.playerMove.length) {
            game.score++;
            showScore();
            addTurn();
        };
    } else {
        alert("Wrong Move!");
        newGame();
    };
};

module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn,
    showTurns,
    playerTurn
};