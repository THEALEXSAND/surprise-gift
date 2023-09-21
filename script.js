const giftTitle = document.querySelector(".gift__title");
const flowers = document.querySelector(".yellow__flowers");

const music = document.getElementById("music");

giftTitle.addEventListener("click", () => {
	giftTitle.style.zIndex = "0";
	Hide(giftTitle);
	flowers.classList.add("show__card");

	setTimeout(() => {
		giftTitle.classList.add("hide__display");
		document.querySelector(".hearts__bg").classList.add("hide__display");

		document.body.classList.add("gift__opened");
		flowers.classList.add("opened");
	}, 1000);
});

function Hide(element) {
	element.classList.toggle("hide");
}
