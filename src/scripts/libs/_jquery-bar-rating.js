import "jquery-bar-rating";

export default () => {
	const $ = window.jQuery || window.$;
	[...(document.querySelectorAll(".stars-readOnly") || [])].forEach((element) => {
		const initialRating = +element.getAttribute("data-init") || "null";
		$(element).barrating({
			theme: "fontawesome-stars-o",
			...(initialRating && { initialRating }),
			readonly: true,
			showSelectedRating: true,
			hoverState: false,
			silent: true,
		});
	});

	[...(document.querySelectorAll(".stars-input") || [])].forEach((element) => {
		const initialRating = +element.getAttribute("data-init") || "null";
		$(element).barrating({
			theme: "fontawesome-stars-o",
			...(initialRating && { initialRating }),
			readonly: false,
			showSelectedRating: true,
			hoverState: true,
			silent: false,
		});
	});
};
