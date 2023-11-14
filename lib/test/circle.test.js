const Circle = require("../circle.js");

describe("Circle", () => {
	it("should generate correct SVG string for a circle", () => {
		const circle = new Circle(50);
		circle.setColor("blue");
		const svgString = circle.generateSVG();
		expect(svgString).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
	});
});
