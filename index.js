const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Rectangle = require("./lib/rectangle");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Text = require("./lib/text").Text;
const { validateTextFunction } = require("./lib/text");
const { validateColorFunction } = require("./lib/text");

const defaultOutputDirectory = "./SVG-output";

inquirer
	.prompt([
		{
			type: "list",
			name: "shapeType",
			message: "Select a shape:",
			choices: ["square", "rectangle", "circle"],
		},
		{
			type: "input",
			name: "color",
			message: "Enter the color for the shape (e.g., #ff0000 or red):",
			default: "#000000",
			validate: validateColorFunction,
		},
		{
			type: "input",
			name: "text",
			message: "Enter a string (up to 3 characters) to add to the SVG:",
			validate: validateTextFunction,
		},
	])
	.then(({ shapeType, color, text }) => {
		const shapePrompts = [];

		if (shapeType === "rectangle") {
			shapePrompts.push({
				type: "number",
				name: "width",
				message: "Enter width for the rectangle:",
			});
			shapePrompts.push({
				type: "number",
				name: "height",
				message: "Enter height for the rectangle:",
			});
		} else if (shapeType === "circle") {
			shapePrompts.push({
				type: "number",
				name: "radius",
				message: "Enter radius for the circle:",
			});
		} else if (shapeType === "square") {
			shapePrompts.push({
				type: "number",
				name: "side",
				message: "Enter side length for the square:",
			});
		}

		return inquirer.prompt(shapePrompts).then(shapeDimensions => ({
			shapeType,
			color,
			text,
			shapeDimensions,
		}));
	})
	.then(({ shapeType, color, text, shapeDimensions }) => {
		let shape;
		let textElement;

		switch (shapeType) {
			case "rectangle":
				shape = new Rectangle(shapeDimensions.width, shapeDimensions.height, color, text);
				break;
			case "circle":
				shape = new Circle(shapeDimensions.radius, color, text);
				break;
			case "square":
				shape = new Square(shapeDimensions.side, color, text);
				break;
			default:
				console.error("Invalid shape type");
				throw new Error("Invalid shape type");
		}
		const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"> 
  ${shape.generateSVG()} 
</svg>`;

		const fileName = `${shapeType}.svg`;
		const outputPath = path.join(defaultOutputDirectory, fileName);

		fs.writeFileSync(outputPath, svgContent);
		console.log(`SVG file "${outputPath}" generated successfully.`);
	})
	.catch(error => {
		console.log(error.message);
	});
