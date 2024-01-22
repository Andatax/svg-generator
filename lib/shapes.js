class Shape {
	constructor(height, width, color) {
		this.color = color;
	}
	generateSVG() {
		throw new Error("generateSVG method must be implemented in subclasses");
	}
}

module.exports = Shape;
