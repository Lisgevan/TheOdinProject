import headerComponent from "./components/headerComponent";
import footerComponent from "./components/footerComponent";
import mainHomeComponent from "./pages/homeMain";
import mainAboutComponent from "./pages/aboutMain";
import mainMenuComponent from "./pages/menuMain";
import mainContactComponent from "./pages/contactMain";

let currPage = localStorage.getItem("currPage") || "";

const mainElement = document.querySelector("main");

const seeTheMenuMain = () => {
	if (mainComponent.innerHTML !== "") {
		const seeTheMenuMain = document.querySelector(".js-seeTheMenuMain");
		seeTheMenuMain.addEventListener("click", () => {
			mainElement.appendChild(mainComponent("menu"));
			window.scrollTo(0, 0);
		});
	}
};

function mainComponent(page) {
	switch (page) {
		case "home":
			currPage = "home";
			localStorage.setItem("currPage", "home");
			return mainHomeComponent();
		case "about":
			currPage = "about";
			localStorage.setItem("currPage", "about");
			return mainAboutComponent();
		case "menu":
			currPage = "menu";
			localStorage.setItem("currPage", "menu");
			return mainMenuComponent();
		case "contact":
			currPage = "contact";
			localStorage.setItem("currPage", "contact");
			return mainContactComponent();
		default:
			console.log("page");
			console.log(currPage);
			break;
	}
}

document.querySelector("header").appendChild(headerComponent());
mainElement.appendChild(currPage !== "" ? mainComponent(currPage) : mainComponent("home"));
currPage === "home" || currPage === "about" ? seeTheMenuMain() : "";
document.querySelector("footer").appendChild(footerComponent());

const homeNav = document.querySelector(".js-homeNav");
homeNav.addEventListener("click", () => {
	mainElement.appendChild(mainComponent("home"));
	seeTheMenuMain();
	window.scrollTo(0, 0);
});
const aboutNav = document.querySelector(".js-aboutNav");
aboutNav.addEventListener("click", () => {
	mainElement.appendChild(mainComponent("about"));
	seeTheMenuMain();
	window.scrollTo(0, 0);
});
const menuNav = document.querySelector(".js-menuNav");
menuNav.addEventListener("click", () => {
	mainElement.appendChild(mainComponent("menu"));
	window.scrollTo(0, 0);
});
const contactNav = document.querySelector(".js-contactNav");
contactNav.addEventListener("click", () => {
	mainElement.appendChild(mainComponent("contact"));
	window.scrollTo(0, 0);
});
const seeTheMenuHero = document.querySelector(".js-seeTheMenuHero");
seeTheMenuHero.addEventListener("click", () => {
	mainElement.appendChild(mainComponent("menu"));
	window.scrollTo(0, 0);
});
