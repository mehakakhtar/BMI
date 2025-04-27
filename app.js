// BMI Calculator

console.log("Welcome to the BMI Calculator!");

//weight from user
let weight = prompt("Enter your weight in kilograms (kg):");

//height from user
let height = prompt("Enter your height in meters (m):");

// Convert inputs to numbers
weight = Number(weight);
height = Number(height);

// Calculate BMI
let bmi = weight / (height * height);

// Show the BMI result
console.log("Your BMI is: " + bmi.toFixed(2));