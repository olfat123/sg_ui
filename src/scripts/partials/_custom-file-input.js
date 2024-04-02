export default () => {
	[...(document.querySelectorAll("input.custom-file-input[type='file']") || [])].forEach((fileInput) => {
		const targetDataMaxSize = fileInput.getAttribute("data-max-size");
		const targetPreviewImage = fileInput.getAttribute("data-preview");
		const targetPreviewImageDefault = document.querySelector(targetPreviewImage).getAttribute("src");
		const inputInvalidFeedBack = fileInput.parentElement.querySelector("[class^='invalid-'] strong");
		const inputInvalidFeedBackText = inputInvalidFeedBack ? inputInvalidFeedBack?.textContent || "" : "";
		fileInput.addEventListener("change", ({ target }) => {
			const files = [...(target.files || [])];

			// resetting input
			target.classList.remove("is-invalid");
			if (inputInvalidFeedBack) inputInvalidFeedBack.textContent = inputInvalidFeedBackText;
			if (targetPreviewImage && targetPreviewImageDefault)
				document.querySelector(targetPreviewImage).setAttribute("src", targetPreviewImageDefault);

			// validating input
			if (files.length) {
				const filteredFiles = targetDataMaxSize
					? files.filter(({ size }) => size && size <= +targetDataMaxSize * 1024 * 1024)
					: files;
				if (!filteredFiles.length) {
					if (inputInvalidFeedBack) inputInvalidFeedBack.textContent = "Invalid file size";
					target.classList.add("is-invalid");
				}
				filteredFiles.forEach((file) => {
					if (targetPreviewImage)
						document
							.querySelector(targetPreviewImage)
							.setAttribute("src", window.URL.createObjectURL(file));
				});
			}
		});
	});
};
