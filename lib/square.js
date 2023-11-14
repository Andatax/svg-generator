const Shape = require("./shapes.js");

class Square extends Shape {
	constructor(width) {
		super();
		this.width = width;
	}

	generateSVG() {
		return `<rect width="${this.width}" height="${this.width}" fill="${this.color}" />`;
	}
}

module.exports = Square;
