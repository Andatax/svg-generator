const Circle = require("../circle");

describe("Circle", () => {
	test("should generate correct SVG string for a circle", () => {
		const radius = 50;
		const color = "#00ff00";

		const circle = new Circle(radius, color);
		const svgRender = circle.generateSVG();
		const expectedOutput = `<circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" />`;

		expect(svgRender).toBe(expectedOutput);
	});
});
