import { isNode } from "./_dom";

/**
 * Animate an element with a specified CSS animation.
 *
 * @param {string|HTMLElement} element - The element to be animated.
 * @param {string} animation - The name of the CSS animation to be applied.
 * @param {string} [prefix=""] - The prefix to be added to the animation class.
 * @return {Promise} A promise that resolves when the animation ends.
 */
export const animateCss = (element, animation, animateClass = "animated", prefix = "") => {
	// We create a Promise and return it
	const animatePromise = new Promise((resolve) => {
		const animationName = `${prefix}${animation}`;
		const node = isNode(element) ? element : document.querySelector(element);

		node.classList.add(`${prefix}${animateClass}`, animationName);

		// When the animation ends, we clean the classes and resolve the Promise
		const handleAnimationEnd = (event) => {
			event.stopPropagation();
			node.classList.remove(`${prefix}${animateClass}`, animationName);
			resolve("Animation ended");
		};

		node.addEventListener("animationend", handleAnimationEnd, { once: true });
	});
	return animatePromise;
};

export default animateCss;
