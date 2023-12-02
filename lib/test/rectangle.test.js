const Rectangle = require("../rectangle.js");

describe("Rectangle", () => {
	test("should generate correct SVG string for a rectangle", () => {
		const width = 100;
		const height = 50;
		const color = "#ff00ff";

		const rectangle = new Rectangle(width, height, color);
		const svgMarkup = rectangle.generateSVG();

		// You can customize the expected output based on your specific requirements
		const expectedOutput = `<rect width="${width}%" height="${height}%" fill="${color}" />`;

		expect(svgMarkup).toBe(expectedOutput);
	});
});
