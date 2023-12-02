const { validateTextFunction, validateColorFunction } = require("../text.js");

describe("Validates text length for svg", () => {
	test("it should return true when the text is shorter than 3 characters", () => {
		const shortText = "hey";
		expect(validateTextFunction(shortText)).toBe(true);
	});

	test("it should throw an error when the text is longer than 3 characters", () => {
		const longText = "Hola";
		expect(() => validateTextFunction(longText)).toThrowError("Text should be 3 characters or shorter");
	});
});

describe("Validates color for SVG", () => {
	test("should return true if the color is a valid color", () => {
		const validColor = "#00ff00";
		expect(validateColorFunction(validColor)).toBe(true);
	});

	test("should throw an error if the color is an invalid color", () => {
		const invalidColor = "invalidColor";
		expect(() => validateColorFunction(invalidColor)).toThrowError("Invalid color or color format");
	});
});
