function mainHomeComponent() {
	document.querySelector("body").style.backgroundColor = "#000";
	document.querySelector(".js-divSvg").style.color = "#000";

	const mainElement = document.querySelector("main");
	mainElement.innerHTML = "";
	mainElement.classList.add("bg-cover", "bg-center", "bg-no-repeat", "min-h-screen");
	mainElement.style.backgroundImage = "url(../src/assets/mainHome.jpg)";
	mainElement.style.backgroundColor = "#000";

	const div = document.createElement("div");
	div.classList.add("relative", "overflow-hidden", "bg-no-repeat", "bg-cover", "mt-12", "min-h-screen");

	div.innerHTML = `
				<div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
					 style="background-color: rgba(0, 0, 0, 0.6);">
					<div class="flex flex-col justify-center items-center h-full">
						<div class="text-center text-white px-6 md:px-12">
							<p class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
								Welcome
							</p>
							<p class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">to the best food
								delivery sercvice in the town
							</p>
							<p class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">
								Taste the best fast food
							</p>
							<p class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">
								delivered fast and safe
							</p>
							<a class="inline-block px-16 py-6 mr-9 border-2 border-white text-white font-medium text-sm uppercase rounded-full shadow-md hover:bg-white hover:text-black transition duration-150 ease-in-out"
							   data-mdb-ripple="true" data-mdb-ripple-color="black" href="#!" role="button">Order
								now!</a>
							<a class="inline-block px-16 py-6 mr-9 border-2 border-white text-white font-medium text-sm uppercase rounded-full shadow-md hover:bg-white hover:text-black transition duration-150 ease-in-out js-seeTheMenuMain"
							   data-mdb-ripple="true" data-mdb-ripple-color="black" href="#!" role="button">See the
								Menu</a>
						</div>
					</div>
				</div>
	`;

	return div;
}

export default mainHomeComponent;
