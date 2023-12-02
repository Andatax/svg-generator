const Square = require("../square");

describe("Square", () => {
	test("should generate correct SVG string for a square", () => {
		const width = 100;
		const color = "#0000ff";

		const square = new Square(width, color);
		const svgRender = square.generateSVG();
		const expectedOutput = `<rect width="${width}%" height="${width}%" fill="${color}" />`;

		expect(svgRender).toBe(expectedOutput);
	});
});
