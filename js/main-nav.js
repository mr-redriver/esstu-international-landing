const navButton = document.querySelector(".menu-main__burger-button");
const navPanel = document.querySelector(".main-header");

if (!!navButton && !!navPanel) {
	navButton.addEventListener("click", () => {
		navPanel.classList.toggle("is-opened")
	})
}