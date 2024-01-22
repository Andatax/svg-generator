const Shape = require("./shapes.js");
const { Text } = require("./text");

class Rectangle extends Shape {
	constructor(width, height, color, text) {
		super();
		this.width = width;
		this.height = height;
		this.color = color;
		this.text = new Text(text);
	}

	generateSVG() {
		const textX = this.width / 2 + 45;
		const textY = this.height / 2;
		const textElement = this.text.generateSVG(textX, textY, 50, this.width, this.height);

		return ` 
            <rect width="100%" height="100%" fill="${this.color}" />
            ${textElement}
          `;
	}
}

module.exports = Rectangle;
