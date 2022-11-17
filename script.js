"use strict";
/*
let hasDriversLicence = false;
const passTest = true;
if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(`i can drive`);


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



// ARROW FUNCTION

const calAge3 = (birthhhYear) => 2037 - birthhhYear;
const age3 = calAge3(2001);
console.log(age3);

const yearsUntileRetirement = (birthhYear, firtstName) => {
  const age = 2037 - birthhYear;
  const retirement = 65 - age;

  return `${firtstName} retires in ${retirement} years.`;
};
console.log(yearsUntileRetirement(1991, "aditya"));
console.log(yearsUntileRetirement(1980, "anshul"));

//  ASSIGNMENT QUESTION

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percIndia = percentageOfWorld3(1366);
const percPakistan = percentageOfWorld3(212);
const percBangladesh = percentageOfWorld3(164.8);
console.log(percIndia, percPakistan, percBangladesh);

////////////////////////////////////////////////////////////
//  FUNCTION CALLING ANOTHER FUNCTION

const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apple, orange) {
  const piecesApple = cutFruitPieces(apple);
  const piecesOrange = cutFruitPieces(orange);

  const juice = `juice with ${piecesApple} pieces of  apple and ${piecesOrange} pieces of orange. `;
  return juice;
}

console.log(fruitProcessor(4, 6));

//  ASSIGNMENT QUESTIONS

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, 
  which is about ${percentage} of the world`;
}

console.log(describePopulation("India", 1136));
console.log(describePopulation("Pakistan", 212));
console.log(describePopulation("Bangladesh", 164.8));
*/

////////////////////////////////////////////////////////
// ARRAYS

const friends = ["RAHUL", "ANSHUL", "PIYUSH"];
console.log(friends);

const Year = new Array(2001, 2000, 1995);
console.log(Year);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 2]);

friends[2] = "PRITISH";
console.log(friends);

const firstName = "ADITYA";
const aditya = [firstName, "BISHT", 2022 - 2001, "STUDENT", friends];
console.log(aditya);
console.log(aditya.length);

// Exercise

const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 2000, 2001, 2007, 2009];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[3]);
const age4 = calAge(years[years.length - 1]);
console.log(age1, age2, age3, age4);

const age = [
  calAge(years[0]),
  calAge(years[1]),
  calAge(years[3]),
  calAge(years[years.length - 1]),
];
console.log(age);
