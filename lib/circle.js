const Shape = require("./shapes.js");

class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}

	generateSVG() {
		return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
	}
}

module.exports = Circle;
