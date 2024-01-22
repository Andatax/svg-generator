const Shape = require("./shapes.js");
const { Text } = require("./text");

class Circle extends Shape {
	constructor(radius, color, text) {
		super();
		this.radius = radius;
		this.color = color;
		this.text = new Text(text);
	}

	generateSVG() {
		const cx = this.radius;
		const cy = this.radius;

		return `<circle cx="${cx}" cy="${cy}" r="${this.radius}" fill="${this.color}" />
            ${this.text.generateSVG(cx, cy, 50)}`;
	}
}

module.exports = Circle;
