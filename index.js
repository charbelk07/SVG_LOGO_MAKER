const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

function generateSvgFile (data){
  let shape;
  let x = 0;
  let y = 0;
  if (data.shape === "Circle") {
    shape = new Circle();
    x = 150;
    y = 125;
    shape.color = data.shapeColor
  } else if (data.shape === "Square") {
    shape = new Square();
    x = 115;
    y = 130;
    shape.color = data.shapeColor
  } else {
    shape = new Triangle();
    x = 145;
    y = 150;
    shape.color = data.shapeColor
  }
  console.log(shape);

  const svgXml = ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width = '100%' height= '100%' fill='white' />  
    ${shape.render()}
    <text x="${x}" y="${y}" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.character}</text>
  </svg>`
  fs.writeFile('./examples/logo.svg', svgXml, (err) =>
  err ? console.log(err) : console.log('Generated logo.svg')
  )
}

async function init() {
  const responses = await inquirer.prompt([
    {
      type: "input",
      name: "character",
      message: "Enter Up to three characters",
    },

    {
      type: "input",
      name: "textColor",
      message: "enter a color keyword (OR a hexadecimal number)for your Text",
    },

    {
      type: "list",
      name: "shape",
      choices: ["Circle", "Square", "Triangle"],
      message: "Selec a Shape",
    },

    {
      type: "input",
      name: "shapeColor",
      message: "enter a color keyword (OR a hexadecimal number) for your Shape",
    },
  ]);
  console.log(responses);

//  generateSvgFile()
 console.log(generateSvgFile(responses))
} 
init();
