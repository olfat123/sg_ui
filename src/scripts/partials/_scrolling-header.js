import { getNodeCSSPropertyValue, getNodeHeight, getWindowScrollingValue } from "../utils/_dom";

/**
 * Implements the scrolling behavior for the app header based on the scroll position.
 *
 * @return {void} - No return value
 */
export const scrollingHeader = () => {
	const appHeader = document.querySelector(".app-header");
	const appMain = document.querySelector(".app-main");
	const appInnerHeader = document.querySelector(".inner-header");
	const heroSection = document.querySelector(".hero");
	const vendorSection = document.querySelector(".vendor");
	const errorSection = document.querySelector(".error");
	let lastScrollTop = appHeader?.offsetTop;
	let appHeaderHeight = 0;
	let appInnerHeaderHeight = 0;
	let heroSectionHeight = 0;
	let vendorSectionHeight = 0;
	let errorSectionHeight = 0;
	let headerChangePoint = 0;
	const mainPaddingTop = appMain ? getNodeCSSPropertyValue(appMain, "padding-top") : "0px";
	const innerHeaderPaddingTop = appInnerHeader ? getNodeCSSPropertyValue(appInnerHeader, "padding-top") : "0px";
	const errorSectionPaddingTop = errorSection ? getNodeCSSPropertyValue(errorSection, "padding-top") : "0px";
	const heroSectionPaddingTop = heroSection ? getNodeCSSPropertyValue(heroSection, "padding-top") : "0px";
	const vendorSectionPaddingTop = vendorSection ? getNodeCSSPropertyValue(vendorSection, "padding-top") : "0px";
	const scrollingClassName = "app-header-scrolling";
	const scrollingUpClassName = "app-header-scrolling-up";
	const scrollingDownClassName = "app-header-scrolling-down";

	/**
	 * Calculate the maximum heights of different sections and assign them to corresponding variables.
	 */
	const calculateHeights = () => {
		if (appHeader) appHeaderHeight = Math.max(getNodeHeight(appHeader), appHeaderHeight);
		if (appInnerHeader) appInnerHeaderHeight = Math.max(getNodeHeight(appInnerHeader), appInnerHeaderHeight);
		if (heroSection) heroSectionHeight = Math.max(getNodeHeight(heroSection), heroSectionHeight);
		if (vendorSection) vendorSectionHeight = Math.max(getNodeHeight(vendorSection), vendorSectionHeight);
		if (errorSection) errorSectionHeight = Math.max(getNodeHeight(errorSection), errorSectionHeight);
		headerChangePoint =
			heroSectionHeight ||
			vendorSectionHeight ||
			appInnerHeaderHeight ||
			errorSectionHeight ||
			appHeaderHeight ||
			0;
	};

	/**
	 * A function to handle the scrolling behavior.
	 *
	 * @return {void}
	 */
	const handleScroll = () => {
		const windowScroll = getWindowScrollingValue();

		if (appMain) {
			if (appInnerHeader) {
				appInnerHeader.style.paddingTop = `calc(${innerHeaderPaddingTop} + ${appHeaderHeight}px)`;
			} else if (heroSection) {
				heroSection.style.paddingTop = `calc(${heroSectionPaddingTop} + ${appHeaderHeight}px)`;
			} else if (vendorSection) {
				vendorSection.style.paddingTop = `calc(${vendorSectionPaddingTop} + ${appHeaderHeight}px)`;
			} else if (errorSection) {
				errorSection.style.paddingTop = `calc(${errorSectionPaddingTop} + ${appHeaderHeight}px)`;
			} else {
				appMain.style.paddingTop = `calc(${mainPaddingTop} + ${appHeaderHeight}px)`;
			}
		}

		if (windowScroll > headerChangePoint) {
			appHeader?.classList.add(scrollingClassName);
			if (
				windowScroll < lastScrollTop ||
				window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight
			) {
				appHeader?.classList.remove(scrollingDownClassName);
				appHeader?.classList.add(scrollingUpClassName);
			} else {
				appHeader?.classList.remove(scrollingUpClassName);
				appHeader?.classList.add(scrollingDownClassName);
			}
		} else {
			appHeader?.classList.remove(scrollingClassName, scrollingDownClassName, scrollingUpClassName);
		}
		lastScrollTop = windowScroll;
	};

	/**
	 * A function that scrolls the header.
	 */
	const scrollHeader = () => {
		calculateHeights();
		handleScroll();
	};

	scrollHeader();
	["scroll"].map((eventName) => window.addEventListener(eventName, handleScroll, false));
	["resize", "orientationchange", "focus", "blur", "visibilitychange"].map((eventName) =>
		window.addEventListener(eventName, scrollHeader, false)
	);
};

export default scrollingHeader;
