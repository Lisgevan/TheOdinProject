let input = prompt("what do want to do in todo list");

const list = ["bobo", "clean"];

while (input !== "quit" && input !== "q") {
	if (input === "list") {
		console.log("***********");

		for (let i = 0; i < list.lenth; i++) {
			console.log(`${i}:${list[i]}`);
		}

		console.log("************");
	} else if (input === "new") {
		const newtodo = prompt("ok,what is new to do?");

		list.push(newtodo);

		console.log(`${newtodo} added to the list`);
	} else if (input === "delete") {
		let index = parseInt(prompt("enter index which you want to delete"));

		const deleted = list.splice(index, 1);

		console.log(`${deleted[0]}ok deleted from list`);
	}

	prompt("what do want to do in todo list");
}
console.log("ok you quit the app");
