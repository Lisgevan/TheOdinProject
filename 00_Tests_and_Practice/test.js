// // WRITE YOUR CODE IN HERE:
// const li = document.querySelectorAll("li");

// for (let item of li) {
// 	item.classList.toggle("highlight");
// }
// // li.forEach(li=&gt;li.classList.toggle('highlight'))

const lis = document.querySelectorAll("li");
for (let li of lis) {
	console.log(li.classList.contains("highlight"));
	if (li.classList.contains("highlight")) {
		li.classList.remove("highlight");
	} else {
		li.classList.add("highlight");
	}
}
