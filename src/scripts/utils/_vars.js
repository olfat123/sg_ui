import { getNodeCSSPropertyValue } from "./_dom";

const vars = {
	debounce_time_in_ms: 100,
	swiper_speed: 500,
	swiper_autoplay_delay: 5000,
	swiper_autoplay_enable: true,
	swiper_enable_loop: true,
	css_prefix: getNodeCSSPropertyValue(document.documentElement, "--prefix"),
	direction: document.dir || document.getElementsByTagName("html")?.[0]?.getAttribute("dir") || "ltr",
};

export default vars;
