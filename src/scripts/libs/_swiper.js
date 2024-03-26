export default () => {
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
