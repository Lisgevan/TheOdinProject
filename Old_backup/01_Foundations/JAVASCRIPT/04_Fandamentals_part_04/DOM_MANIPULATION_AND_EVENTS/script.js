//select the element to place the created elements
const container = document.querySelector("#container");

//example of creating a div, adding a class and content
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//Add the following elements to the container using ONLY javascript and the DOM

//1. a <p> with red text that says “Hey I’m red!”
const redP = document.createElement("p");
redP.style.color = "red";
redP.innerText = "Hey I’m red!";

container.appendChild(redP);

//2. an <h3> with blue text that says “I’m a blue h3!”

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.innerText = "I’m a blue h3!";

container.appendChild(blueH3);

//3. a <div> with a black border and pink background color with the following elements inside of it:
//	a. another <h1> that says “I’m in a div”
//	b. a <p> that says “ME TOO!”
//	c. Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

//create elements
const blackDiv = document.createElement("div");
const inDivH1 = document.createElement("h1");
const inDivP = document.createElement("p");

//style and add the div
blackDiv.style.border = "1px solid black";
blackDiv.style.backgroundColor = "pink";

container.appendChild(blackDiv);

//style and add the h1
inDivH1.innerText = "I'm in a div";

blackDiv.appendChild(inDivH1);

//style and add the p
inDivP.innerText = "ME TOO";

blackDiv.appendChild(inDivP);

//end of exercise

//EVENTS
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
	alert("Hello World");
});
