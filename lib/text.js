const validateTextFunction = text => {
	return text.length < 4
		? true
		: (() => {
				throw new Error("Text should be 3 characters or shorter");
		  })();
};

const validateColorFunction = color => {
	const colorRegex =
		/^(#([0-9a-fA-F]{3}){1,2}|(red|blue|green|yellow|purple|pink|orange|brown|black|white|gray|cyan|magenta|aqua|lime|maroon))$/;

	return colorRegex.test(color)
		? true
		: (() => {
				throw new Error("Invalid color or color format");
		  })();
};

class Text {
	constructor(text) {
		this.text = text;
	}
	generateSVG() {
		return `<text x="150" y="150" font-family="Arial" font-size="90" fill="#FFFFFF">${this.text}</text>`;
	}
}

module.exports = {
	validateTextFunction,
	validateColorFunction,
	Text,
};
