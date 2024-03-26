import animateCss from "../utils/_animate-css";
import debounce from "../utils/_debounce";
import { scrollToTop } from "../utils/_dom";
import vars from "../utils/_vars";

/**
 * Function adds or removes the "app-scroll-top-scrolling" class from the scroll-to-top button
 * based on whether the window is scrolling or not.
 *
 * @param {HTMLElement} scrollToTopButtonDOM - The DOM element of the scroll-to-top button
 * @returns {void}
 */
const scrollToTopButtonVisibilityIndicator = (scrollToTopButtonDOM) => {
	const scrollingClassName = "app-scroll-to-top-scrolling"; // Class name used to indicate the scrolling state

	// Calculates the scrolling value of the window
	const doc = document.documentElement;
	const wScroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

	// Checks if the window is not scrolling (i.e. the scrolling value is 0)
	const isWNotScrolling = wScroll === 0;

	if (isWNotScrolling) {
		// Removes the "app-scroll-top-scrolling" class and animates the fade-out of the button
		if (scrollToTopButtonDOM.classList.contains(scrollingClassName))
			animateCss(scrollToTopButtonDOM, "fadeOutRight").then(() =>
				scrollToTopButtonDOM?.classList.remove(scrollingClassName)
			);
	} else if (!scrollToTopButtonDOM.classList.contains(scrollingClassName)) {
		// Adds the "app-scroll-top-scrolling" class and animates the fade-in of the button
		scrollToTopButtonDOM?.classList.add(scrollingClassName);
		animateCss(scrollToTopButtonDOM, "fadeInRight");
	}
};

/**
 * Initializes the scroll-to-top button functionality.
 *
 * @returns {void}
 */
export const scrollToTopButton = () => {
	// Finds the scroll-to-top button element in the DOM
	const scrollToTopButtonDOM = document.querySelector(".app-scroll-to-top");

	if (!scrollToTopButtonDOM) return; // Return if the button is not found

	// Initializes the visibility indicator for the scroll-to-top button
	scrollToTopButtonVisibilityIndicator(scrollToTopButtonDOM);

	// Adds a click event listener to the scroll-to-top button
	scrollToTopButtonDOM.addEventListener("click", debounce(scrollToTop, vars.debounce_time_in_ms));

	// Adds a scroll, resize, and orientationchange event listener to the window
	// to update the visibility of the scroll-to-top button
	["resize", "orientationchange", "focus", "blur", "visibilitychange"].forEach((event) => {
		window.addEventListener(
			event,
			debounce(() => scrollToTopButtonVisibilityIndicator(scrollToTopButtonDOM), vars.debounce_time_in_ms)
		);
	});
};

export default scrollToTopButton;
