//Roch Paper Scissors Game

// Global variables
let roundsPlayed = 5;
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

// Function to prompt user to make a choice and save to varable
function getUserChoice() {
	userChoice = prompt(
		"Please choose one of the:\n 1. Rock (press 1).\n 2. Paper (press 2).\n 3. Scissors (press 3).\n Press zero (0) to exit.",
	);

	while (userChoice !== "1" && userChoice !== "2" && userChoice !== "3") {
		if (userChoice === "0") {
			break;
		}
		console.log("Invalid choice. Please try again or type '0' to exit");
		userChoice = prompt(
			"Please choose one of the:\n 1. Rock (press 1).\n 2. Paper (press 2).\n 3. Scissors (press 3).\n Press zero (0) to exit.",
		);
	}
	userChoice = +userChoice;
	return userChoice;
}

// Function to generate random choice for computer and save o variable
function getComputerChoice() {
	computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	return computerChoice;
}

// Function to compare two variables, increments the round winner’s score and logs a winner announcement
function playRound(userChoice, computerChoice) {
	let result;
	// rock beats scissors,  scissors beats paper.  paper beats rock
	// 1 beats 3,  3 beats 2.  2 beats 1
	if (userChoice === 0) {
		return;
	} else if (userChoice === computerChoice) {
		result = "It is a tie!";
	} else if (
		(userChoice === 1 && computerChoice === 3) ||
		(userChoice === 2 && computerChoice === 1) ||
		(userChoice === 3 && computerChoice === 2)
	) {
		result = `Congratulations! You win! ${userChoice == 1 ? "Rock" : userChoice == 2 ? "Paper" : "Scissors"} beats ${computerChoice == 1 ? "Rock" : computerChoice == 2 ? "Paper" : "Scissors"}.`;
		userScore++;
	} else {
		result = `Computer wins! ${userChoice == 1 ? "Rock" : userChoice == 2 ? "Paper" : "Scissors"} beats ${computerChoice == 1 ? "Rock" : computerChoice == 2 ? "Paper" : "Scissors"}.`;
		computerScore++;
	}

	// console the result
	console.log("You selected: ", userChoice == 1 ? "Rock" : userChoice == 2 ? "Paper" : "Scissors");
	console.log("Computer selected: ", computerChoice == 1 ? "Rock" : computerChoice == 2 ? "Paper" : "Scissors");
	console.log(result);
}

function runGame() {
	let rounds;
	for (rounds = 0; rounds < roundsPlayed; rounds++) {
		playRound(getUserChoice(), getComputerChoice());

		if (userChoice === 0) {
			console.log("Thank you for playing our game. Hope to see you again.");
			return;
		}
		console.log(`The score is:\n User: ${userScore}\n Computer: ${computerScore}`);
	}

	while (userScore === computerScore) {
		playRound(getUserChoice(), getComputerChoice());
		console.log(`The score is:\n User: ${userScore}\n Computer: ${computerScore}`);
	}

	if (rounds === 5) {
		if (userScore > computerScore)
			console.log("Congratulations! You have won the game! Refresh page (F5) to play again.");
		else {
			console.log("Computer wins! Thank you for playing. Refresh page (F5) to play again.");
		}
	}
}

runGame();
