function mainAboutComponent() {
	const bodyElement = document.querySelector("body");
	bodyElement.removeAttribute("style");
	bodyElement.style.backgroundColor = "#000";

	document.querySelector(".js-divSvg").style.color = "#000";

	const mainElement = document.querySelector("main");
	mainElement.innerHTML = "";
	mainElement.className = "";
	mainElement.classList.add("bg-cover", "bg-center", "bg-no-repeat", "min-h-screen");
	mainElement.style.backgroundImage = "url(../src/assets/mainAbout.jpg";
	mainElement.style.backgroundColor = "#000";

	mainElement.innerHTML = "";

	const div = document.createElement("div");
	div.classList.add("relative", "overflow-hidden", "bg-no-repeat", "bg-cover", "mt-12", "min-h-screen");
	div.innerHTML = `
	<div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
					 style="background-color: rgba(0, 0, 0, 0.6);">
					<div class="flex flex-col justify-center items-center h-full">
						<div class="text-center text-white px-6 md:px-12">
							<p class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
								FastFoodTopia
							</p>
							<p class="text-xl font-bold tracking-tight mb-3">Founded in 2002 by a
								group of friends, lovers of cooking and eating fast food,
							</p>
							<p class="text-xl font-bold tracking-tight mb-3">
								it grew to be the biggest delivery servise of quality fast food in the town.
							</p>
							<p class="text-xl font-bold tracking-tight mb-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu rutrum ante, sed
								accumsan libero.
							</p>
							<p class="text-xl font-bold tracking-tight mb-3">
								Suspendisse viverra eu mauris eu ornare. Fusce a cursus risus, ut
								elementum purus. Mauris volutpat, libero eu ultrices tincidunt, nunc nunc consectetur
								massa, eget ornare nibh urna a felis.
							</p>
							<p class="text-xl font-bold tracking-tight mb-12">
								Nulla laoreet vehicula velit. Nam et enim lectus.
								Donec ut ex eu metus suscipit pretium.
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

export default mainAboutComponent;
