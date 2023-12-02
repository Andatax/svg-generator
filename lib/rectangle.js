const Shape = require("./shapes.js");

class Rectangle extends Shape {
	constructor(width, height, color) {
		super();
		this.width = width;
		this.height = height;
		this.color = color;
	}

	generateSVG() {
		return `<rect width="${this.width}%" height="${this.height}%" fill="${this.color}" />`;
	}
}

module.exports = Rectangle;
