const Shape = require("./shapes.js");
const { Text } = require("./text");

class Square extends Shape {
	constructor(side, color, text) {
		super();
		this.side = side;
		this.color = color;
		this.text = new Text(text);
	}

	generateSVG() {
		const textX = this.side / 2 + 45;
		const textY = this.side / 2 - 12.5;
		const textElement = this.text.generateSVG(textX, textY, 50, this.side, this.side);

		return `<rect width="100%" height="100%" fill="${this.color}" />
          ${textElement}`;
	}
}
module.exports = Square;
