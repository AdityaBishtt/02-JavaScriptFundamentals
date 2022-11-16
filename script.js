"use strict";
/*
let hasDriversLicence = false;
const passTest = true;
if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(`i can drive`);
*/

///////////////////////////////////////////////
// FUNCTION

function logger() {
  console.log(`My name is Aditya`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apple, orange) {
  // console.log(apple, orange);
  const juice = `Juice with ${apple} apples and ${orange} oranges. `;
  return juice;
}

const applejuice = fruitProcessor(5, 4);
console.log(applejuice);

const orangejuice = fruitProcessor(2, 4);
console.log(orangejuice);

// ASSIGNMENT QUESTION

function describeCountry(country, population, capitalCity) {
  const worldCountry = `${country} has ${population} million people and its 
  capital city is ${capitalCity}`;
  return worldCountry;
}

const a = describeCountry("India", 138, "Delhi");
console.log(a);

const b = describeCountry("Pakistan", 74, "Karchi");
console.log(b);

const c = describeCountry("Bangladesh", 64, "Dhaka");
console.log(c);

////////////////////////////////////////////////////
// FUNCTION DECLERATION AND EXPRESSION

// FUNCTION DECLERATION
function calAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calAge1(2001);

// FUNCTION EXPRESSION
const calAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calAge2(2003);
console.log(age1, age2);

// ASSIGNMENT QUESTION

function percentageOfWorld1(Population) {
  return (Population / 7900) * 100;
}
const india = percentageOfWorld1(1366);
const pakistan = percentageOfWorld1(212);
const bangladesh = percentageOfWorld1(164.8);
console.log(india, pakistan, bangladesh);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const India = percentageOfWorld2(1366);
const Pakistan = percentageOfWorld2(212);
const Bangladesh = percentageOfWorld2(164.8);
console.log(India, Pakistan, Bangladesh);
