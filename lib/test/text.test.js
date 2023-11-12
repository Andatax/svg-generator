const { validateTextFunction } = require("../text.js");

describe("Adds text to svg file and changes color", () => {
	it("recieves a text shorter than 3 characters ", () => {
		const text = 'Hola';
		expect(validateTextFunction(text)).toBe(false);
	});
});
