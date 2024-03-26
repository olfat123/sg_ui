import aos from "./libs/_aos";
import bootstrap from "./libs/_bootstrap";
import rellax from "./libs/_rellax";
import swiper from "./libs/_swiper";
import navigateAnimation from "./partials/_navigate-animation";
import scrollToTopButton from "./partials/_scroll-to-top-button";
import scrollingHeader from "./partials/_scrolling-header";
import animateCss from "./utils/_animate-css";

(() => {
	// Executes the given code when the window is fully loaded.
	window.onload = () => {
		const loaderImage = document.querySelector(".app-loader img");
		animateCss(loaderImage, "fadeOut").then(() => {
			loaderImage.parentNode.removeChild(loaderImage);
			animateCss(".app-loader", "fadeOut").then(() => {
				document.body?.classList.add("dom-loaded");
				aos();
			});
		});
	};

	// Executes the given code when the dom content loaded.
	document.addEventListener("DOMContentLoaded", () => {
		navigateAnimation();
		scrollingHeader();
		scrollToTopButton();
		rellax();
		bootstrap();
		swiper();
	});
})();
