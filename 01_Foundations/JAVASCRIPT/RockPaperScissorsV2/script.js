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
const choices = ["rock", "paper", "scissors", "lizard", "spock", "q"];

//Computer's random choice
const computerChoice = () => choices[Math.floor(Math.random() * 5)];

//players choice
const playerChoice = () => {
	let playerChoice = prompt("Please select one of: Rock, Paper, Scissors, Lizard, Spock.");
	while (!choices.includes(playerChoice.toLowerCase())) {
		console.log("Invalid input, please try again or type q to quit.");
		playerChoice = prompt("Please select one of: Rock, Paper, Scissors, Lizard, Spock.");
	}
	return playerChoice.toLowerCase();
};

//run the game
const playTheGame = () => {
	//ask how many rounds you have to win to end the game
	let roundsToWin = prompt("How many winning rounds end the game (type q to quit)? ");

	let computerCount = 0;
	let playerCount = 0;

	const playerSelection = " ";

	while (
		computerCount !== roundsToWin &&
		playerCount !== roundsToWin &&
		playerSelection !== "q" &&
		roundsToWin !== "q"
	) {
		roundsToWin = +roundsToWin;
		const computerSelection = computerChoice();
		// console.log("in: ", computerSelection);
		const playerSelection = playerChoice();
		// console.log("in: ", playerSelection);

		switch (true) {
			case computerSelection === playerSelection:
				console.log(`Computer selected ${computerSelection} and you selected ${playerSelection}`);
				console.log("We have a tie.");
				console.log(`The score is copmuter ${computerCount} - ${playerCount} player`);
				break;

			case computerSelection === "rock" && (playerSelection === "scissors" || playerSelection === "lizard"):
				computerCount++;
				console.log(`Computer selected ${computerSelection} and you selected ${playerSelection}`);
				console.log("You loose.");
				console.log(`The score is copmuter ${computerCount} - ${playerCount} player`);
				break;

			case computerSelection === "paper" && (playerSelection === "rock" || playerSelection === "spock"):
				computerCount++;
				console.log(`Computer selected ${computerSelection} and you selected ${playerSelection}`);
				console.log("You loose.");
				console.log(`The score is copmuter ${computerCount} - ${playerCount} player`);
				break;

			case computerSelection === "scissors" && (playerSelection === "paper" || playerSelection === "lizard"):
				computerCount++;
				console.log(`Computer selected ${computerSelection} and you selected ${playerSelection}`);
				console.log("You loose.");
				console.log(`The score is copmuter ${computerCount} - ${playerCount} player`);
				break;

			case computerSelection === "lizard" && (playerSelection === "paper" || playerSelection === "spock"):
				computerCount++;
				console.log(`Computer selected ${computerSelection} and you selected ${playerSelection}`);
				console.log("You loose.");
				console.log(`The score is copmuter ${computerCount} - ${playerCount} player`);
				break;

			case computerSelection === "spock" && (playerSelection === "scissors" || playerSelection === "rock"):
				computerCount++;
				console.log(`Computer selected ${computerSelection} and you selected ${playerSelection}`);
				console.log("You loose.");
				console.log(`The score is copmuter ${computerCount} - ${playerCount} player`);
				break;

			case playerSelection === "q":
				return console.log('Thank you for playing "Rock - Paper - Scissors - Lizard - Spock"');

			default:
				playerCount++;
				console.log(`Computer selected ${computerSelection} and you selected ${playerSelection}`);
				console.log("YOU WIN!!! Well Done!!!");
				console.log(`The score is copmuter ${computerCount} - ${playerCount} player`);
		}
	}

	if (computerCount > playerCount && playerSelection !== "q") {
		console.log(`GAME OVER!!! Computer wins ${computerCount} to ${playerCount}`);
	} else if (computerCount < playerCount && playerSelection !== "q") {
		console.log(`GAME OVER!!! Player wins ${playerCount} to ${computerCount}`);
	} else if (playerSelection === "q") {
		console.log('Thank you for playing "Rock - Paper - Scissors - Lizard - Spock"');
	}
};

// playTheGame();
