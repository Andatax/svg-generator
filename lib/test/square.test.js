const Square = require("../square.js");

describe("Square", () => {
	it("should generate correct SVG string for a square", () => {
		const square = new Square(80);
		square.setColor("green");
		const svgString = square.generateSVG();
		expect(svgString).toEqual('<rect width="80" height="80" fill="green" />');
	});
});
