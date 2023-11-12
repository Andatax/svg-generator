const { validateTextFunction, validateColorFunction } = require("../text.js");

describe("Validates text length for svg", () => {
	it("it should throw an error when the text is ", () => {
		const falsyStr = "Hola";
		expect(validateTextFunction(falsyStr)).toBeFalsy();
	});

	it("recieves a text shorter than 3 characters ", () => {
		const truthyStr = "hey";
		expect(validateTextFunction(truthyStr)).toBeTruthy();
	});
});

describe("Validates text color for svg", () => {
	it("recieves a valid color string ", () => {
		const truthyStr = "red";
		expect(validateColorFunction(truthyStr)).toBeTruthy();
	});

	it("recieves an invalid color string ", () => {
		const falsyStr = "pizza";
		expect(validateColorFunction(falsyStr)).toBeFalsy();
	});
});
