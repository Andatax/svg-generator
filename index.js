const inquirer = require("inquirer");
const fs = require("fs");
const Rectangle = require("./lib/rectangle");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
inquirer
	.prompt([
		{
			type: "list",
			name: "shapeSelection",
			message: "Select a shape:",
			choices: ["square", "rectangle", "circle"],
		},
		{
			type: "input",
			name: "color",
			message: "Enter the color for the shape (e.g., #ff0000 or red):",
			default: "#000000",
		},
	])
	.then(shapeSelected => {
		const shapePrompts = [];

		if (shapeSelected.shapeType === "rectangle") {
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
		} else if (shapeSelected.shapeType === "circle") {
			shapePrompts.push({
				type: "number",
				name: "radius",
				message: "Enter radius for the circle:",
			});
		} else if (shapeSelected.shapeType === "square") {
			shapePrompts.push({
				type: "number",
				name: "width",
				message: "Enter width for the square:",
			});
		}
	})
	.catch(error => {
		console.log(error);
	});
