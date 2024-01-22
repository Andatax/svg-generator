const Square = require("../square");

describe("Square", () => {
	test("should generate correct SVG string for a square", () => {
		const side = 100;
		const color = "#0000ff";
		const textContent = "TST";

		const square = new Square(side, color, textContent);
		const textX = side / 2;
		const textY = side / 2;
		const textElement = `<text x="${textX}" y="${textY}" font-family="Arial" font-size="50" fill="#FFFFFF">${textContent}</text>`;

		const svgRender = square.generateSVG();
		const expectedOutput = `<rect width="100%" height="100%" fill="${color}" />
          ${textElement}`;

		expect(svgRender).toBe(expectedOutput);
	});
});
