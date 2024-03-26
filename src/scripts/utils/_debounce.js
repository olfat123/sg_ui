/**
 * Returns a debounced function that will delay invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. If immediate is true, func is invoked on the leading edge, instead of the trailing.
 *
 * @param {function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @param {boolean} immediate - Whether to invoke the function on the leading edge.
 * @return {function} The debounced function.
 */
const debounce = (func, wait, immediate) => {
	let timeout;
	function fn(...args) {
		const context = this;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	}
	return fn;
};

export default debounce;
