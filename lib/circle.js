const Shape = require("./shapes.js");

class Circle {
	constructor(radius, color) {
		this.radius = radius;
		this.color = color;
	}

	generateSVG() {
		const cx = this.radius;
		const cy = this.radius;

		return `<circle cx="${cx}" cy="${cy}" r="${this.radius}" fill="${this.color}" />`;
	}
}

module.exports = Circle;
