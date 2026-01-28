// element selectors
let form = document.querySelector("form");
let button = document.querySelector("button");

const toggleMessage = e => {
	const targetEl = document.querySelector(`#${e.target.name} ~ span`);
	const targetInput = document.querySelector(`#${e.target.name}`);
	trueOrFalse(e) ? targetEl.classList.remove("hide") : targetEl.classList.add("hide");
	trueOrFalse(e) ? targetInput.classList.add("invalid") : targetInput.classList.remove("invalid");
};

const trueOrFalse = e => {
	switch (e.target.name) {
		case "firstName":
		case "lastName":
			return e.target.value.length < 1;
		case "email":
			const regexMail =
				/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
			return !regexMail.test(e.target.value);
		case "tel":
			const regexTel = /(\+?( |-|\.)?\d{1,3}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/gm;
			// const regexTel =
			// 	/(^[0-9]\d{3}[ ]\d{3}[ ]\d{3}$)|(^[+][0-9]\d{1}[ ]\d{1}[ ]\d{4}[ ]\d{4}$)|(^[+][0-9]\d{1}[ ]\d{3}[ ]\d{3}[ ]\d{3}$)|(^[0-9]\d{3}[ ]\d{3}[ ]\d{3}$)|(^[0-9]\d{9}$)|(^[0-9]\d{14}$)|(^([(]([0-9]\d{1})[)][ ])([0-9]\d{3})[ ]\d{4}$)/gm;
			return !regexTel.test(e.target.value);
		case "password":
			const regexPas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
			return !regexPas.test(e.target.value);
		case "confirmPassword":
			let password = document.querySelector("#password").value;
			return password !== e.target.value || e.target.value === "";
		default:
			break;
	}
};

form.addEventListener("click", e => {
	switch (e.target.localName) {
		case "input":
			toggleMessage(e);
			break;
		default:
			break;
	}
});

form.addEventListener("input", e => {
	switch (e.target.localName) {
		case "input":
			toggleMessage(e);
			break;
		default:
			break;
	}
});

button.addEventListener("click", e => {
	// e.preventDefault;
	form.checkValidity() ? alert("Account created") : alert("Please correct invalid inputs!");
});
