/* eslint-disable no-new */
import Alert from "bootstrap/js/dist/alert";
import Dropdown from "bootstrap/js/dist/dropdown";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import Tab from "bootstrap/js/dist/tab";
import Toast from "bootstrap/js/dist/toast";
import Tooltip from "bootstrap/js/dist/tooltip";

export default () => {
	[...(document.querySelectorAll(".alert") || [])].map((ele) => new Alert(ele));
	[...(document.querySelectorAll(".offcanvas") || [])].map((ele) => new Offcanvas(ele));
	[...(document.querySelectorAll(".toast") || [])].map((ele) => new Toast(ele, { autohide: false })?.show());
	[...(document.querySelectorAll("[data-bs-toggle='tooltip']") || [])].map((ele) => new Tooltip(ele));
	[...(document.querySelectorAll(".dropdown-toggle") || [])].forEach((ele) => {
		const dropdown = new Dropdown(ele);
		const enterEvents = ["mouseenter"];
		const outEvents = ["mouseleave"];

		enterEvents.forEach((eventName) =>
			ele.addEventListener(eventName, ({ target }) => {
				dropdown.show();
				target.blur();
			})
		);
		outEvents.forEach((eventName) =>
			ele.addEventListener(eventName, ({ target }) => {
				const dropdownMenu = target.closest(".dropdown").querySelector(".dropdown-menu");
				const t = setTimeout(() => dropdown.hide(), 100);

				enterEvents.forEach((name) =>
					dropdownMenu.addEventListener(name, () => {
						dropdown.show();
						clearTimeout(t);
					})
				);
				outEvents.forEach((name) => dropdownMenu.addEventListener(name, () => dropdown.hide()));
			})
		);
		if (ele.nodeName === "A" && ele.hasAttribute("href"))
			ele.addEventListener("click", () => {
				window.location.href = ele.getAttribute("href");
			});
	});
	[...document.querySelectorAll(".needs-validation")].forEach((form) =>
		form.addEventListener(
			"submit",
			(e) => {
				if (!form.checkValidity()) {
					e.preventDefault();
					e.stopPropagation();
				}
				form.classList.add("was-validated");
			},
			false
		)
	);
	[...(document.querySelectorAll("button[data-bs-toggle='tab']") || [])].forEach((triggerEl) => {
		const tabTrigger = new Tab(triggerEl);
		triggerEl.addEventListener("click", (event) => {
			event.preventDefault();
			tabTrigger.show();
		});
	});
};
