const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

// Variable
let activeIndex = 0;

// Creation des bullets points
function createDot() {
	const dotsContainer = document.querySelector(".dots");
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dotsContainer.appendChild(dot);
		if (i === 0) {
			dot.classList.add("dot_selected");
		}
	}
}

createDot();

// Récuperation et Listener des fléches gauche et droite
document.getElementById("leftArrow").addEventListener("click", () => {
	activeIndex--;
	displaySlide(activeIndex);
	console.log("leftArrow");
});

document.getElementById("rightArrow").addEventListener("click", () => {
	activeIndex++;
	displaySlide(activeIndex);
	console.log("rightArrow");
});

// Récuperation et mise à jour des images
function displaySlide(index) {
	if (index < 0) {
		activeIndex = slides.length - 1;
	} else if (index >= slides.length) {
		activeIndex = 0;
	}
	const slide = slides[activeIndex];
	const slideImage = document.getElementById("imgBanner");
	const tagLine = document.getElementById("imgText");

	slideImage.src = `./assets/images/slideshow/${slide.image}`;
	tagLine.innerHTML = slide.tagLine;
	updateDot(activeIndex);
}

// Mise à jour des bullets
function updateDot() {
	const dots = document.querySelectorAll(".dot");

	dots.forEach((dot, index) => {
		if (index === activeIndex) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}
