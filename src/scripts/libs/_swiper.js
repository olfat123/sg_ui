/* eslint-disable no-new */
import Swiper, { Autoplay, Keyboard, Lazy, Navigation } from "swiper";
import { getNodeCSSPropertyValue } from "../utils/_dom";
import vars from "../utils/_vars";

export default () => {
	// companies slider
	new Swiper("#companies-sponsored-slider", {
		modules: [...(vars.swiper_autoplay_enable ? [Autoplay] : []), Keyboard, Navigation, Lazy],
		speed: vars.swiper_speed,
		loop: false,
		observer: true,
		observeParents: true,
		resizeObserver: true,
		updateOnWindowResize: true,
		centeredSlides: true,
		slideToClickedSlide: true,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 16,
		keyboard: { enabled: true, onlyInViewport: true },
		...(vars.swiper_autoplay_enable && { autoplay: { delay: vars.swiper_autoplay_delay } }),
		loopedSlides: [...document.querySelectorAll("#companies-sponsored-slider .swiper-slide")].length,
		preloadImages: false,
		lazy: { checkInView: true },
		navigation: {
			prevEl: ".swiper-navigation-btn-prev[data-target='#companies-sponsored-slider']",
			nextEl: ".swiper-navigation-btn-next[data-target='#companies-sponsored-slider']",
		},
		breakpoints: {
			// when window width is medium
			[+getNodeCSSPropertyValue(document.documentElement, `--${vars.css_prefix}md`).split("px")[0]]: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				centeredSlides: false,
			},
			// when window width is x-large
			[+getNodeCSSPropertyValue(document.documentElement, `--${vars.css_prefix}xl`).split("px")[0]]: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				centeredSlides: false,
			},
		},
	});

	// reviews slider
	new Swiper("#reviews-slider", {
		modules: [...(vars.swiper_autoplay_enable ? [Autoplay] : []), Keyboard, Navigation],
		speed: vars.swiper_speed,
		loop: false,
		observer: true,
		observeParents: true,
		resizeObserver: true,
		updateOnWindowResize: true,
		centeredSlides: true,
		slideToClickedSlide: true,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 16,
		keyboard: { enabled: true, onlyInViewport: true },
		...(vars.swiper_autoplay_enable && { autoplay: { delay: vars.swiper_autoplay_delay } }),
		loopedSlides: [...document.querySelectorAll("#reviews-slider .swiper-slide")].length,
		navigation: {
			prevEl: ".swiper-navigation-btn-prev[data-target='#reviews-slider']",
			nextEl: ".swiper-navigation-btn-next[data-target='#reviews-slider']",
		},
		breakpoints: {
			// when window width is large
			[+getNodeCSSPropertyValue(document.documentElement, `--${vars.css_prefix}md`).split("px")[0]]: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				centeredSlides: false,
			},
			// when window width is x-large
			[+getNodeCSSPropertyValue(document.documentElement, `--${vars.css_prefix}xl`).split("px")[0]]: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				centeredSlides: false,
			},
		},
	});

	[...document.querySelectorAll(".swiper")].forEach((ele) =>
		ele.addEventListener("mouseenter", ({ target }) => {
			if (target?.swiper) {
				target.swiper?.autoplay?.stop();
				target?.classList.add("swiper-paused");
			}
		})
	);
	[...document.querySelectorAll(".swiper")].forEach((ele) =>
		ele.addEventListener("mouseleave", ({ target }) => {
			if (target?.swiper) {
				target.swiper?.autoplay?.start();
				target?.classList.remove("swiper-paused");
			}
		})
	);
};
