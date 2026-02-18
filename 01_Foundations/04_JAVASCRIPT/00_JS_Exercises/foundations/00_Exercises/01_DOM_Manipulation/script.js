const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

// 1. a <p> with red text that says “Hey I’m red!”
const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.innerText = "Hey I’m red!";

container.appendChild(redParagraph);

// 2. an <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.innerText = "I’m a blue h3!";

container.appendChild(blueH3);

// 3. a <div> with a black border and pink background color with the following elements inside of it:
//  - another <h1> that says “I’m in a div”
//  - a <p> that says “ME TOO!”
//  - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const blackDiv = document.createElement("div");
blackDiv.setAttribute("style", "border: blue solid 2px; background-color: pink;");

const anotherH1 = document.createElement("h1");
anotherH1.innerText = "I’m in a div";

const anotherP = document.createElement("p");
anotherP.innerText = "ME TOO!";

blackDiv.appendChild(anotherH1);
blackDiv.appendChild(anotherP);
container.appendChild(blackDiv);
