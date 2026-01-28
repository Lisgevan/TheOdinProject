function mainMenuComponent() {
	const bodyElement = document.querySelector("body");
	bodyElement.removeAttribute("style");

	document.querySelector(".js-divSvg").style.color = "#fff";

	const mainElement = document.querySelector("main");
	mainElement.innerHTML = "";
	mainElement.removeAttribute("style");
	mainElement.removeAttribute("class");

	const div = document.createElement("div");
	div.innerHTML = `
	<div class="mx-auto container px-12">
					<h2 class="font-black underline tracking-wide text-4xl text-zinc-700 mb-3">Burgers</h2>
					<div class="flex flex-wrap items-center lg:justify-between justify-center">
						<!-- Card 1 -->
						<div class="mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="burger1"
									 src="../src/assets/menuPics/burger1.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Burger 01</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 8.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 1 Ends -->
						<!-- Card 2 -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="burger2"
									 src="../src/assets/menuPics/burger2.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Burger 02</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 10.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 2 Ends -->
						<!-- Card 3  -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="burger3"
									 src="../src/assets/menuPics/burger3.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Burger 03</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 7.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 3 Ends -->
						<!-- Card 4  -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="burger4"
									 src="../src/assets/menuPics/burger4.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Burger 04</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 5.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 4 Ends -->
					</div>
					<h2 class="font-black underline tracking-wide text-4xl text-zinc-700 mb-3">Pizza</h2>
					<div class="flex flex-wrap items-center lg:justify-between justify-center">
						<!-- Card 1 -->
						<div class="mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="pizza1"
									 src="../src/assets/menuPics/pizza1.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Pizza 01</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Small (8 slices)</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Large (16 slices)</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 8.00 - €
											12.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold"></p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 1 Ends -->
						<!-- Card 2 -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="pizza2"
									 src="../src/assets/menuPics/pizza2.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Pizza 02</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Small (8 slices)</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Large (16 slices)</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 9.00 - €
											13.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold"></p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 2 Ends -->
						<!-- Card 3  -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="pizza3"
									 src="../src/assets/menuPics/pizza3.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Pizza 03</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Small (8 slices)</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Large (16 slices)</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 8.00 - €
											12.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold"></p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 3 Ends -->
						<!-- Card 4  -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="pizza4"
									 src="../src/assets/menuPics/pizza4.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Pizza 04</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Small (8 slices)</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Large (16 slices)</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 10.00 - €
											17.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold"></p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 4 Ends -->
					</div>
					<h2 class="font-black underline tracking-wide text-4xl text-zinc-700 mb-3">Hot Dogs</h2>
					<div class="flex flex-wrap items-center lg:justify-between justify-center">
						<!-- Card 1 -->
						<div class="mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="hotdog1"
									 src="../src/assets/menuPics/hotdog1.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Hotdog 01</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 5.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 1 Ends -->
						<!-- Card 2 -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="hotdog2"
									 src="../src/assets/menuPics/hotdog2.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Hotdog 02</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 5.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 2 Ends -->
						<!-- Card 3  -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="hotdog3"
									 src="../src/assets/menuPics/hotdog3.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Hotdog 03</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 5.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 3 Ends -->
						<!-- Card 4  -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="hotdog4"
									 src="../src/assets/menuPics/hotdog4.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Hotdog 04</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 5.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 4 Ends -->
					</div>
					<h2 class="font-black underline tracking-wide text-4xl text-zinc-700 mb-3">Sandwiches</h2>
					<div class="flex flex-wrap items-center lg:justify-between justify-center">
						<!-- Card 1 -->
						<div class="mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="sandwiche1"
									 src="../src/assets/menuPics/sandwiche1.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Sandwiche 01</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 5.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 1 Ends -->
						<!-- Card 2 -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="sandwiche2"
									 src="../src/assets/menuPics/sandwiche2.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Sandwiche 02</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 7.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 2 Ends -->
						<!-- Card 3  -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="sandwiche3"
									 src="../src/assets/menuPics/sandwiche3.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Sandwiche 03</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 8.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 3 Ends -->
						<!-- Card 4  -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="sandwiche4"
									 src="../src/assets/menuPics/sandwiche4.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Sandwiche 04</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												extra fried potatoes</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												kids size available</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 10.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(kids size
											is normal price -50%)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 4 Ends -->
					</div>
					<h2 class="font-black underline tracking-wide text-4xl text-zinc-700 mb-3">Drinks</h2>
					<div class="flex flex-wrap items-center lg:justify-between justify-center">
						<!-- Card 1 -->
						<div class="mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="drinks1"
									 src="../src/assets/menuPics/drinks1.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Drinks 1.5lt</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Available drinks:</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Cola - Soda - Lemon - Orange</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 2.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(Please return
											all for recycling)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 1 Ends -->
						<!-- Card 2 -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="drinks3"
									 src="../src/assets/menuPics/drinks3.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Drinks 330ml (aluminum can)
										</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Available drinks:</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Cola - Soda - Lemon - Orange</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 1.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(Please return
											all for recycling)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 2 Ends -->
						<!-- Card 3  -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="drinks4"
									 src="../src/assets/menuPics/drinks4.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Drinks 330ml (glass bottle)
										</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Available drinks:</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Cola - Soda - Lemon - Orange</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 1.00</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(Please return
											all for recycling)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 3 Ends -->
						<!-- Card 4  -->
						<div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
							<div>
								<img alt="drinks2"
									 src="../src/assets/menuPics/drinks2.jpg"
									 class="focus:outline-none w-full h-44" />
							</div>
							<div class="bg-white">
								<div class="p-4">
									<div class="flex items-center">
										<h2 class="focus:outline-none text-lg font-semibold">Water 0.5lt</h2>
									</div>
									<p class="focus:outline-none text-xs text-gray-600 mt-2">Lorem ipsum dolor sit amet,
										consectetur adipiscing elit. Mauris eu rutrum ante, sed accumsan libero.
										Suspendisse viverra eu mauris eu ornare.
									</p>
									<div class="flex mt-4">
										<div>
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												Mineral water</p>
										</div>
										<div class="pl-2">
											<p class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
												No bubbles</p>
										</div>
									</div>
									<div class="items-center justify-between py-4">
										<p class="focus:outline-none text-indigo-700 text-3xl font-semibold">€ 0.50</p>
										<p class="focus:outline-none text-gray-500 text-xs font-semibold">(Please return
											all for recycling)</p>
									</div>
								</div>
							</div>
						</div>
						<!-- Card 4 Ends -->
					</div>
				</div>
	`;

	return div;
}

export default mainMenuComponent;
