// Header component
function createNavigation() {
	const nav = document.createElement("nav");

	nav.classList.add(
		"navbar",
		"navbar-expand-lg",
		"shadow-md",
		"py-2",
		"bg-white",
		"fixed",
		"z-40",
		"flex",
		"items-center",
		"w-full",
		"justify-between"
	);

	nav.innerHTML += `
	<div class="px-6 w-full flex flex-wrap items-center justify-between">
						<div class="flex items-center">
							<button
									class=" navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContentY"
									aria-controls="navbarSupportedContentY"
									aria-expanded="false"
									aria-label="Toggle navigation">
								<svg
									 aria-hidden="true"
									 focusable="false"
									 data-prefix="fas"
									 class="w-5"
									 role="img"
									 xmlns="http://www.w3.org/2000/svg"
									 viewBox="0 0 448 512">
									<path
										  fill="currentColor"
										  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
									</path>
								</svg>
							</button>
							<a class="navbar-brand text-blue-600" href="#!">
								<img src="../src/assets/logo.png" style="width:50px; height:50px;" alt="">
							</a>
						</div>
						<div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
							<ul class="navbar-nav mr-auto md:flex md:flex-row md:w-full md:justify-around">
								<li class="nav-item cursor-pointer js-homeNav">
									<a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-red-600 hover:outline focus:text-red-700 transition duration-150 ease-in-out flex align-center" data-mdb-ripple="true" data-mdb-ripple-color="black">
										<img src="../src/assets/home.png" alt="home" class="w-6 h-6 mx-2">
										Home
									</a>
								</li>
								<li class="nav-item cursor-pointer js-aboutNav">
									<a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-red-600 hover:outline focus:text-red-700 transition duration-150 ease-in-out flex"
									   data-mdb-ripple="true" data-mdb-ripple-color="black">
										<img src="../src/assets/about.png" alt="home" class="w-6 h-6 mx-2">
										About</a>
								</li>
								<li class="nav-item mb-2 lg:mb-0 js-menuNav cursor-pointer ">
									<a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-red-600 hover:outline focus:text-red-700 transition duration-150 ease-in-out flex"
									   data-mdb-ripple="true" data-mdb-ripple-color="black">
										<img src="../src/assets/menu.png" alt="home" class="w-6 h-6 mx-2">
										Menu</a>
								</li>
								<li class="nav-item mb-2 lg:mb-0 js-contactNav cursor-pointer ">
									<a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-red-600 hover:outline focus:text-red-700 transition duration-150 ease-in-out flex"
									   data-mdb-ripple="true" data-mdb-ripple-color="black">
										<img src="../src/assets/contact.png" alt="home" class="w-6 h-6 mx-2">
										Contact</a>
								</li>
							</ul>
						</div>
					</div>
	`;

	return nav;
}

function createHero() {
	const div = document.createElement("div");
	div.classList.add("relative", "overflow-hidden", "bg-no-repeat", "bg-cover", "mt-12");
	div.style.backgroundPosition = "50%";
	div.style.backgroundImage = "url('../src/assets/hero.jpg')";
	div.style.height = "500px";
	div.innerHTML = `
	<div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
						 style="background-color: rgba(0, 0, 0, 0.6);">
						<div class="flex flex-col justify-center items-center h-full">
							<div class="text-center text-white px-6 md:px-12">
								<p class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
									FastFoodTopia
								</p>
								<p class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">Eat the best
									food
								</p>
								<p class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">
									in fast food.
								</p>
								<a class="inline-block px-7 py-3 mr-9 border-2 border-white text-white font-medium text-sm uppercase rounded-full shadow-md hover:bg-white hover:text-black transition duration-150 ease-in-out"
								   data-mdb-ripple="true" data-mdb-ripple-color="black" href="#!" role="button">Order
									now!</a>
								<a class="inline-block px-7 py-3 mr-9 border-2 border-white text-white font-medium text-sm uppercase rounded-full shadow-md hover:bg-white hover:text-black transition duration-150 ease-in-out js-seeTheMenuHero"
								   data-mdb-ripple="true" data-mdb-ripple-color="black" href="#!" role="button">See the
									Menu</a>
							</div>
						</div>
					</div>
					`;
	return div;
}

function createOvalShape() {
	const div = document.createElement("div");
	div.classList.add("-mt-2.5", "md:-mt-4", "lg:-mt-6", "xl:-mt-10", "js-divSvg");
	div.style.height = "50px";
	div.style.transform = "scale(2)";
	div.style.transformOrigin = "top center";
	div.style.color = "#fff";
	div.innerHTML = `
		<svg id="js-svgDiv" viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
		<path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
		fill="currentColor"></path>
		</svg>
	`;
	return div;
}

function headerComponent() {
	const headerElement = document.querySelector("header");

	const section = document.createElement("section");

	headerElement.classList.add("m-100");

	section.classList.add("overflow-hidden");

	section.appendChild(createNavigation());
	section.appendChild(createHero());
	section.appendChild(createOvalShape());

	headerElement.appendChild(section);

	return section;
}

export default headerComponent;
