const Shape = require("./shapes.js");

class Square extends Shape {
	constructor(width, color) {
		super();
		this.width = width;
		this.color = color;
	}

	generateSVG() {
		return `<rect width="${this.width}%" height="${this.width}%" fill="${this.color}" />`;
	}
}

module.exports = Square;
