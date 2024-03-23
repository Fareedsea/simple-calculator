#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your First Numer:", type: "number", name: "firstNamber" },
  { message: "Enter your Second Number:", type: "number", name: "secondNumber" },
  {
    message: "Select your operator to perform action:",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multipilication", "Division"],
  },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNamber + answer.secondNumber);
  } else if (answer.operator === "Substraction") {
  console.log(answer.firstNamber - answer.secondNumber);
} else if (answer.operator === "Multipilication") {
  console.log(answer.firstNamber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNamber / answer.secondNumber);
} else {
  console.log(" Your selection is invalid");
}
console.log(answer);
