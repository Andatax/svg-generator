const Rectangle = require("../rectangle.js");

describe("Rectangle", () => {
	test("should generate correct SVG string for a rectangle", () => {
		const width = 90;
		const height = 70;
		const color = "#ff00ff";
		const textContent = "TST";

		const rectangle = new Rectangle(width, height, color, textContent);
		const svgMarkup = rectangle.generateSVG();

		const textX = width / 2;
		const textY = height / 2 + 12.5;

		// Expected output with dynamic values
		const expectedOutput = `<rect width="100%" height="100%" fill="${color}" />
            <text x="${textX}" y="${textY}" font-family="Arial" font-size="50" fill="#FFFFFF">${textContent}</text>`;

		expect(svgMarkup.trim()).toBe(expectedOutput.trim());
	});
});
