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
// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`,
//   );
// }

//Type Conversion and Coercion
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

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

//Logical Operators
if (language === "bangla" && population > 50 && Island) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
