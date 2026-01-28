// const values = require("./follow");
import { testGroup, birthYear, thisYear, firstName, lastName, greeting, age, fullName } from "./follow.js";
let errored = false;

console.log("\n---------------------------------\n\n");

if (testGroup === "a") {
	if (birthYear !== 1948) {
		console.error(`birthYear is incorrect, it's currently: "${birthYear}"`);
		errored = true;
	}

	if (thisYear !== 1965) {
		console.error(`thisYear is incorrect, it's currently: "${thisYear}"`);
		errored = true;
	}

	if (firstName !== "Carlos") {
		console.error(`firstName is incorrect, it's currently: "${firstName}"`);
		errored = true;
	}

	if (lastName !== "Stevenson") {
		console.error(`lastName is incorrect, it's currently: "${lastName}"`);
		errored = true;
	}

	if (greeting !== "Hello! My name is Carlos Stevenson and I am 17 years old.") {
		console.error(`greeting is incorrect, it's currently: "${greeting}"`);
		errored = true;
	}
}

if (testGroup === "b") {
	if (birthYear !== 1948) {
		console.error(`birthYear is incorrect, it's currently: "${birthYear}"`);
		errored = true;
	}

	if (thisYear !== 1965) {
		console.error(`thisYear is incorrect, it's currently: "${thisYear}"`);
		errored = true;
	}

	if (firstName !== "Carlos") {
		console.error(`firstName is incorrect, it's currently: "${firstName}"`);
		errored = true;
	}

	if (lastName !== "Stevenson") {
		console.error(`lastName is incorrect, it's currently: "${lastName}"`);
		errored = true;
	}

	if (age !== 17) {
		console.error(`age is incorrect, it's currently: "${age}"`);
		errored = true;
	}

	if (fullName !== "Carlos Stevenson") {
		console.error(`fullName is incorrect, it's currently: "${fullName}"`);
		errored = true;
	}

	if (greeting !== "Hello! My name is Carlos Stevenson and I am 17 years old.") {
		console.error(`greeting is incorrect, it's currently: "${greeting}"`);
		errored = true;
	}
}

if (!errored && testGroup === "a") {
	console.log("Congrats! Move onto the next step!");
} else if (errored && testGroup === "a") {
	console.log("Try again");
}

if (!errored && testGroup === "b") {
	console.log("Congrats! Move onto the next lesson!");
} else if (errored) {
	console.log("Try again");
}

console.log("\n---------------------------------\n\n");
