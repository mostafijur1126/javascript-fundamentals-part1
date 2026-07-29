//1st example

const country = "bangladesh";
const contient = "asia";
const population = 20;

//2nd example
const IsIsland = true;
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

// console.log(typeof country);
// console.log(typeof contient);
// console.log(typeof population);
// console.log(typeof IsIsland);
console.log(recreateDescription);
