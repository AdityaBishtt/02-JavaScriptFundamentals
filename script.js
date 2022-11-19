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
// returns retirement 
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


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntileRetirement = function (birthYear, firtstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firtstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firtstName} has already retired🎉`);
    return -1;
  }
};

console.log(yearsUntileRetirement(2001, "Aditya"));
console.log(yearsUntileRetirement(1971, "Anshul"));

// CODING CHALLENGE
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphines win 🏆 (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log(`No team wins`);
  }
};

//test 1
checkWinner(scoreDolphins, scoreKoalas);
//test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
////////////////////////////////////////////////////////
// ARRAYS

// const friends = ["RAHUL", "ANSHUL", "PIYUSH"];
// console.log(friends);

// const Year = new Array(2001, 2000, 1995);
// console.log(Year);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 2]);

// friends[2] = "PRITISH";
// console.log(friends);

// const firstName = "ADITYA";
// const aditya = [firstName, "BISHT", 2022 - 2001, "STUDENT", friends];
// console.log(aditya);
// console.log(aditya.length);

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

/////////////////////////////////////////////////////////
// Arrays operation (method)

const friends = ["RAHUL", "ANSHUL", "PIYUSH"];

// add element  (push)
const newLength = friends.push("NIKHIL", "SABHYA");
console.log(friends);
console.log(newLength);

// add element at beginning  (unshift)
friends.unshift("PRITISH");
console.log(friends);

// remove element from the last  (pop)
const popped = friends.pop();
console.log(popped);
console.log(friends);

// remove  the first element  (shift)
friends.shift();
console.log(friends);

// to return the index value of an element  (.indexOf)
console.log(friends.indexOf("NIKHIL"));

// to know if the element is present in array  (includes)
console.log(friends.includes("ANSHUL"));
console.log(friends.includes("PRITISH"));

if (friends.includes("ANSHUL")) {
  console.log("You have a friend called ANSHUL");
}

//////////////////////////////////////////////////////////////////
// OBJECTS

const aditya = {
  firstName: "Aditya",
  lastName: "Bisht",
  age: 2037 - 1991,
  job: "student",
  friends: ["Anshul", "Rahul", "Sabhya"],
};
console.log(aditya);

console.log(aditya.lastName);
console.log(aditya["lastName"]);

const nameKey = "Name";
console.log(aditya["first" + nameKey]);
console.log(aditya["last" + nameKey]);

const intrestedIn = prompt(
  `What do you want to know about Aditya? Choose between firstName, lastName, age, job, and friends `
);

if (aditya[intrestedIn]) {
  console.log(aditya[intrestedIn]);
} else {
  console.log(
    `Wrong request! Choose between firstName, lastName, age, job, and friends `
  );
}

aditya.location = "India";
aditya["twitter"] = "@Aditya_Bisht";
console.log(aditya);

console.log(
  `${aditya.firstName} has ${aditya.friends.length} friends, and his best friend is called ${aditya.friends[0]}`
);


/////////////////////////////////////////////////////////////
// Object Methods

const aditya = {
  firstName: "Aditya",
  lastName: "Bisht",
  birthYear: 2001,
  job: "student",
  friends: ["Mayank", "Anshul", "Nikhil"],
  hasDriversLicence: false,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and has ${
      this.hasDriversLicence === true ? "a" : "no"
    } driver's licence.`;
  },
};

console.log(aditya.calcAge());
// console.log(aditya["calcAge"](2001));
console.log(aditya.friends.length);
console.log(aditya.friends[0]);

console.log(aditya.age);

console.log(aditya.getSummary());
*/
//////////////////////////////////////////////////////////////////////
// CODING CHALLENGE

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calsBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calsBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calsBMI();
john.calsBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher tham ${john.fullName}'s (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher tham ${mark.fullName}'s (${mark.bmi})`
  );
}
/////////////////////////////////////////////////////////////////
// ARRAYS CODING CHALLENGE

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill = [125, 555, 444];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const totals = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(bill, tips, totals);
//////////////////////////////////////////////////////////
// FOR LOOPS
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}🏋️‍♀️`);
}

const aditya = [
  "Aditya",
  "Bisht",
  21,
  "student",
  ["mayank", "anshul", "nikhil"],
  true,
];

const type = [];

for (let i = 0; i < aditya.length; i++) {
  console.log(aditya[i], typeof aditya[i]);

  type.push(typeof aditya[i]);
}
console.log(type);

const years = [1991, 1995, 1999, 2006];
const age = [];
for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}
console.log(age);

// continue statement
console.log(`-------continue with number------------`);
for (let i = 0; i < aditya.length; i++) {
  if (typeof aditya[i] !== "string") continue;
  console.log(aditya[i], typeof aditya[i]);
}

// break statement
console.log(`-------break with number------------`);
for (let i = 0; i < aditya.length; i++) {
  if (typeof aditya[i] === "number") break;
  console.log(aditya[i]);
}

///////////////////////////////////////////////////////
// LOOPING BACKWARD AND LOPPS IN LOOPS
console.log(`-----------looping backwards and loops in loops `);
for (let i = aditya.length - 1; i >= 0; i--) {
  console.log(i, aditya[i], typeof aditya[i]);
}

// loops in loops

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------Starting exercise ${exercise}`);

  for (let reps = 1; reps < 6; reps++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${reps} `);
  }
}
