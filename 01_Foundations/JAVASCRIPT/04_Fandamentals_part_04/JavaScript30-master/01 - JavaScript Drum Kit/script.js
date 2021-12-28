window.addEventListener("keydown", e => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) return; // If an other key is pressed no audio is selected and the function stops
	key.classList.add("playing");
	audio.currentTime = 0; //rewinds the audio file
	audio.play();
});

window.addEventListener("keyup", e => {
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!key) return; // If an other key is pressed no audio is selected and the function stops

	key.classList.remove("playing");
});
