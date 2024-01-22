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
	constructor(content) {
		this.content = content;
	}

	generateSVG(centerX, centerY, fontSize) {
		const textWidth = this.content.length * (fontSize * 0.6);
		const textHeight = fontSize;

		const x = centerX - textWidth / 2;
		const y = centerY + textHeight / 4;

		return `<text x="${x}" y="${y}" font-family="Arial" font-size="${fontSize}" fill="#FFFFFF">${this.content}</text>`;
	}
}
module.exports = {
	validateTextFunction,
	validateColorFunction,
	Text,
};
