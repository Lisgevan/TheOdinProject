const movies = [
	{
		title: "Amadeus",
		score: 99,
		year: 1984,
	},
	{
		title: "Sharknado",
		score: 35,
		year: 2013,
	},
	{
		title: "13 Going On 30",
		score: 70,
		year: 2004,
	},
	{
		title: "Stand By Me",
		score: 85,
		year: 1986,
	},
	{
		title: "Waterworld",
		score: 62,
		year: 1995,
	},
	{
		title: "Jingle All The Way",
		score: 71,
		year: 1995,
	},
	{
		title: "Notting Hill",
		score: 165,
		year: 1999,
	},
	{
		title: "Alien",
		score: 90,
		year: 1979,
	},
];

const highestRated = movies.reduce((bestMovie, currMovie) => {
	if (currMovie.score > bestMovie.score) {
		return currMovie;
	}
	return bestMovie;
});

// const highestRated = movies.reduce((bestMovie, currMovie) => {
// 	if (currMovie.score > bestMovie.score) {
// 		return currMovie.title;
// 	}
// 	return bestMovie.title;
// });

// const highestRated = movies.reduce((bestMovie, currMovie) => {
// 	if (currMovie.score > bestMovie.score) {
// 		return currMovie.title;
// 	}
// 	return bestMovie.title;
// });

console.log(typeof highestRated);
console.log(highestRated);
const title = highestRated.map(m => m.title);

console.log(highestRated.title);
console.log(title);
