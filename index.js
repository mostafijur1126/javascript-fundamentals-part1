//1st example

const country = "bangladesh";
const contient = "asia";
const population = 20;

//2nd example
const Island = true;
let language = "bangla";
language = "hindi";

//3rd example
const result = population / 2;
const res = population + 1;
const Bangladesh = 20;
const Finland = 6;
if (Finland > Bangladesh) {
  console.log("Finland has more population");
} else {
  //   console.log("Bangladesh has more population");
}
if (33 < Bangladesh) {
  console.log("Finland has more population");
} else {
  //   console.log("Bangladesh has Les population");
}

//String and template literals
const description =
  country +
  " is in " +
  contient +
  " and its  " +
  population +
  " million people speak " +
  language;

const recreateDescription = `${country} is in ${contient} ann it's ${population} million people speak ${language}`;

//Taking Decisions: if / else Statements
const birthday = 1982;
let century;
if (birthday <= 2000) {
  century = 20;
} else {
  century = 21;
}
// console.log(century);

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`,
//   );
// }

//Type Conversion and Coercion

let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);
// console.log(typeof "javascriptIsFun");
// console.log(typeof 123);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function () {});
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(NaN ===  NaN);

//Type Conversion and Coercion
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

javascriptIsFun = "yes";
// console.log(javascriptIsFun);

// lastName = "Mostafijur";
// console.log(lastName);

//Precendence of operator
const now = 2037;
const ageMostafijur = now - 1991;
const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2028);

let x, y;
x = y = 25 - 10 - 5;
// console.log(x, y);
// console.log(10 % 3);

//Truthy and falsy values

//Equality Operators: == vs. ===

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?",
// );

// LATER : This helps us prevent bugs
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?"),
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

//Boolean logic

//Logical Operators
// if (language === "bangla" && population > 50 && Island) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

const hasLicense = true;
const hasVision = true;

const isTired = false;

// console.log(hasLicense && hasVision && !isTired);

//The Switch Statement
const day = "monday";

switch (day) {
  case "monday":
    console.log("plan course");
    break;
  case "tuesday":
    console.log("prepare theory video");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "fryday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("not a valid day!");
}

// explore Expression and statement

//Expression
const name = "rahim";

//statement
if (name === "raju") {
  console.log("hi");
}
