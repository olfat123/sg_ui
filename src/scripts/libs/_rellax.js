import Rellax from "rellax";
import { getNodeCSSPropertyValue } from "../utils/_dom";
import vars from '../utils/_vars';

export default () => {
	[...document.querySelectorAll(".rellax")].forEach((ele) => {
		const rellax = new Rellax(ele, {
			breakpoints: [
				+getNodeCSSPropertyValue(document.documentElement, `--${vars.css_prefix}xs`).split("px")[0],
				+getNodeCSSPropertyValue(document.documentElement, `--${vars.css_prefix}sm`).split("px")[0],
				+getNodeCSSPropertyValue(document.documentElement, `--${vars.css_prefix}lg`).split("px")[0],
			],
		});
		["resize", "orientationchange", "focus", "blur", "visibilitychange"].map(() => rellax.refresh());
	});
};
