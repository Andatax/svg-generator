const Rectangle = require("../rectangle.js");

describe("Rectangle", () => {
	it("should generate correct SVG string for a rectangle", () => {
		const rectangle = new Rectangle(120, 60);
		rectangle.setColor("red");
		const svgString = rectangle.generateSVG();
		expect(svgString).toEqual('<rect width="100" height="60" fill="red" />');
	});
});
