import SlimSelect from "slim-select";

export default () => {
	[...(document.querySelectorAll(".slim-select") || [])].map(
		(ele) =>
			new SlimSelect({
				select: ele,
				settings: { allowDeselect: true, closeOnSelect: false, hideSelected: true },
			})
	);
};
