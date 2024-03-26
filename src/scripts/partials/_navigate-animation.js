import animateCss from "../utils/_animate-css";

const navigateAnimation = () => {
	[
		...(document.querySelectorAll(
			"a:not([href*='#']):not([href='javascript:void(0)']):not([href^='mailto:']):not([href^='tel:']):not([target='_blank'])"
		) || []),
	].forEach((link) =>
		link.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			document.body?.classList.remove("dom-loaded");
			animateCss(".app-loader", "slideInRight").then(() => {
				window.location.href = link.href;
			});
		})
	);
};

export default navigateAnimation;
