const validateTextFunction = text => {
	return text.length < 4
		? true
		: (() => {
				return false;
				throw new Error("Text should be 3 characters or shorter");
		  })();
};

const validateColorFunction = color => {
	const colorRegex = new RegExp(
		/^(#([0-9a-fA-F]{3}){1,2}|(red|blue|green|yellow|purple|pink|orange|brown|black|white|gray|cyan|magenta|aqua|lime|maroon))$/
	);
	return colorRegex.test(color)
		? true
		: (() => {
				return false;
				throw new Error("Invalid color or color format");
		  })();
};

module.exports = {
	validateTextFunction,
	validateColorFunction,
};
