/* TODO: 	- add UI for players to select "X" and "O" and max winnings
			- counter of wins per player 
			- make it look better */

const GameBoard = (function () {
	// element selectors
	const allBtns = document.querySelectorAll(".board-btn");
	const board = document.querySelector(".board");
	const reset = document.querySelector(".reset");
	const message = document.querySelector(".message");

	let boardArray = Array(9).fill(null);
	// prettier-ignore
	// (do not put each sub-array to new line)
	const winningArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

	let xIsNext = true;

	const clickHandle = e => {
		if (!["X", "O"].includes(e.target.innerText)) {
			let sign = xIsNext ? "X" : "O";
			boardArray[+e.target.value] = sign;
			xIsNext = !xIsNext;
			e.target.value ? (e.target.innerText = sign) : "";
			checkWinner(sign);
		}
	};

	const checkWinner = XO => {
		const isWinner = winningArray.some(row => row.every(i => boardArray[i] === XO));
		const noMoreMoves = boardArray.every(item => item !== null);
		if (isWinner || noMoreMoves) {
			// Array.from(allBtns).forEach(btn => (btn.disabled = true));
			board.removeEventListener("click", clickHandle);
			message.innerText = isWinner ? `winner is ${XO}` : noMoreMoves ? `This is a draw!` : ``;
		} else {
			Array.from(allBtns).forEach(btn => (btn.disabled = false));
		}
		return { isWinner, XO };
	};

	const resetGame = () => {
		Array.from(allBtns).forEach(btn => {
			btn.disabled = false;
			btn.innerText = "";
		});
		xIsNext = true;
		boardArray = Array(9).fill(null);
		message.innerText = `Game is on!`;
		board.addEventListener("click", clickHandle);
	};

	// event listeners
	reset.addEventListener("click", resetGame);
})();
