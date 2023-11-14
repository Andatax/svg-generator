const Shape = require("./shapes.js");

class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	generateSVG() {
		return `<rect width="${this.width}" height="${this.height}" fill="${this.color}" />`;
	}
}

module.exports = Rectangle;
