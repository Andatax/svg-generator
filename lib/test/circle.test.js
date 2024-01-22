const Circle = require("../circle");

describe("Circle", () => {
	test("should generate correct SVG string for a circle", () => {
		const radius = 90;
		const color = "#00ff00";
		const textContent = "TST";
		const circle = new Circle(radius, color, textContent);
		const svgRender = circle.generateSVG();
		const expectedX = radius - (textContent.length * (50 * 0.6)) / 2;
		const expectedY = radius + 50 / 4;
		const expectedOutput = `<circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" />
            <text x="${expectedX}" y="${expectedY}" font-family="Arial" font-size="50" fill="#FFFFFF">${textContent}</text>`;

		expect(svgRender).toBe(expectedOutput);
	});
});
