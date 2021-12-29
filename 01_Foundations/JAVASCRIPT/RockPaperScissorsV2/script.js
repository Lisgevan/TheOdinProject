//**************************************************//

//Rock Paper Scissors Game
//As practice project while doing "The Odin Project"

//my solution

//**************************************************//

//TODO: Add GUI to play from browser

//TODO: Option to add Lizard, Spock in the game
// rock crushes scissors.
// rock crushes lizard,
// paper covers rock,
// paper disproves Spock,
// Scissors cuts paper,
// scissors decapitates lizard,
// lizard poisons Spock,
// lizard eats paper,
// Spock smashes scissors,
// Spock vaporizes rock,

//Games choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const winScore = document.querySelector("#winScore");
const startGame = document.querySelector("#start");
const stopGame = document.querySelector("#stop");
const scoreSection = document.querySelector("#scoreSection");
const selectScore1 = document.querySelector("#selectScore1");
const selectScore2 = document.querySelector("#selectScore2");
const selectionButtons = document.querySelector("#selectButtons");
const js_buttons = document.querySelectorAll(".js_buttons");
const js_player = document.querySelector(".js_player");
const js_computer = document.querySelector(".js_computer");
const js_playerCount = document.querySelector(".js_playerCount");
const js_computerCount = document.querySelector(".js_computerCount");
const js_scoreMSG = document.querySelector(".js_scoreMSG");

let roundsToWin = +winScore.value;
let computerCount = 0;
let playerCount = 0;
let computerSelection;
let playerSelection;

//Computer's random choice
const computerChoice = () => choices[Math.floor(Math.random() * 5)];

startGame.addEventListener("click", e => {
	roundsToWin = +winScore.value;
	computerCount = 0;
	playerCount = 0;
	selectionButtons.classList.remove("d-none");
	scoreSection.classList.remove("d-none");
	selectScore1.classList.add("d-none");
	selectScore2.classList.remove("d-none");
	selectScore2.innerText = `Playing to ${roundsToWin}`;
	js_playerCount.innerText = `${playerCount}`;
	js_computerCount.innerText = `${computerCount}`;
	js_scoreMSG.innerText = "";
	js_player.innerHTML = ``;
	js_computer.innerHTML = ``;
	window.scrollTo(0, document.body.scrollHeight);
});

stopGame.addEventListener("click", e => {
	computerCount = 0;
	playerCount = 0;
	selectionButtons.classList.add("d-none");
	scoreSection.classList.add("d-none");
	selectScore1.classList.remove("d-none");
	selectScore2.classList.add("d-none");
	js_player.innerHTML = ``;
	js_computer.innerHTML = ``;
	js_scoreMSG.innerText = "";
});

js_buttons.forEach(button => {
	button.addEventListener("click", e => {
		computerSelection = computerChoice();
		playerSelection = button.value;
		js_player.innerHTML = `<object data="./images/${button.value}Black.svg" class="w-100 h-100 p-2" name="rockBlack">{" "}</object>`;
		js_computer.innerHTML = ``;
		playTheGame(playerSelection, computerSelection);
	});
});

const updateSelection = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		return (
			(js_player.innerHTML = `<object data="./images/${playerSelection}Black.svg" class="w-100 h-100 p-2" name="rockBlack">{" "}</object>`),
			(js_computer.innerHTML = `<object data="./images/${computerSelection}Black.svg" class="w-100 h-100 p-2" name="rockBlack">{" "}</object>`),
			(js_scoreMSG.innerText = "We have a tie.")
		);
	} else {
		return (
			(js_player.innerHTML = `<object data="./images/${playerSelection}Red.svg" class="w-100 h-100 p-2" name="rockBlack">{" "}</object>`),
			(js_computer.innerHTML = `<object data="./images/${computerSelection}Green.svg" class="w-100 h-100 p-2" name="rockBlack">{" "}</object>`),
			(js_scoreMSG.innerText = "Computer wins.")
		);
	}
};

const checkGameOver = (computerCount, playerCount, roundsToWin) => {
	if (computerCount === roundsToWin || playerCount === roundsToWin) {
		selectScore1.classList.remove("d-none");
		selectScore2.classList.add("d-none");
		selectionButtons.classList.add("d-none");
		scoreSection.classList.add("d-none");
		if (computerCount === roundsToWin) {
			js_scoreMSG.innerText = `GAME OVER! Computer wins ${computerCount} to ${playerCount}.`;
		} else if (playerCount === roundsToWin) {
			js_scoreMSG.innerText = `GAME OVER! YOU WIN ${playerCount} to ${computerCount}!`;
		}
	}
	return;
};

//----------------------------//
const playTheGame = (playerSelection, computerSelection) => {
	switch (true) {
		case computerSelection === playerSelection:
			js_playerCount.innerText = `${playerCount}`;
			js_computerCount.innerText = `${computerCount}`;
			updateSelection(playerSelection, computerSelection);
			checkGameOver(computerCount, playerCount, roundsToWin);
			break;

		case computerSelection === "rock" && (playerSelection === "scissors" || playerSelection === "lizard"):
			++computerCount;
			js_playerCount.innerText = `${playerCount}`;
			js_computerCount.innerText = `${computerCount}`;
			updateSelection(playerSelection, computerSelection);
			checkGameOver(computerCount, playerCount, roundsToWin);
			break;

		case computerSelection === "paper" && (playerSelection === "rock" || playerSelection === "spock"):
			++computerCount;
			js_playerCount.innerText = `${playerCount}`;
			js_computerCount.innerText = `${computerCount}`;
			updateSelection(playerSelection, computerSelection);
			checkGameOver(computerCount, playerCount, roundsToWin);
			break;

		case computerSelection === "scissors" && (playerSelection === "paper" || playerSelection === "lizard"):
			++computerCount;
			js_playerCount.innerText = `${playerCount}`;
			js_computerCount.innerText = `${computerCount}`;
			updateSelection(playerSelection, computerSelection);
			checkGameOver(computerCount, playerCount, roundsToWin);
			break;

		case computerSelection === "lizard" && (playerSelection === "paper" || playerSelection === "spock"):
			++computerCount;
			js_playerCount.innerText = `${playerCount}`;
			js_computerCount.innerText = `${computerCount}`;
			updateSelection(playerSelection, computerSelection);
			checkGameOver(computerCount, playerCount, roundsToWin);
			break;

		case computerSelection === "spock" && (playerSelection === "scissors" || playerSelection === "rock"):
			++computerCount;
			js_playerCount.innerText = `${playerCount}`;
			js_computerCount.innerText = `${computerCount}`;
			updateSelection(playerSelection, computerSelection);
			checkGameOver(computerCount, playerCount, roundsToWin);
			break;

		default:
			++playerCount;
			js_playerCount.innerText = `${playerCount}`;
			js_computerCount.innerText = `${computerCount}`;
			js_player.innerHTML = `<object data="./images/${playerSelection}Green.svg" class="w-100 h-100 p-2" name="rockBlack">{" "}</object>`;
			js_computer.innerHTML = `<object data="./images/${computerSelection}Red.svg" class="w-100 h-100 p-2" name="rockBlack">{" "}</object>`;
			js_scoreMSG.innerText = "You win. Well done.";
			checkGameOver(computerCount, playerCount, roundsToWin);
	}
};

// playTheGame();
