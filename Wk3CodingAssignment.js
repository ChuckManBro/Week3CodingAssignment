// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array
// Do not use numbers to reference the last element, find it programmatically,
// ages[7] – ages[0] is not allowed!

console.log("1a. First value subtracted from last:");
console.log(ages[ages.length - 1] - ages[0]);

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic.
// (works for arrays of different lengths).

ages.push(80);
console.log("\n1b. First value subtracted from last (after addition):");
console.log(ages[ages.length - 1] - ages[0]);

// 1c. Use a loop to iterate through the array and calculate the average age.

let ageTotal = 0;
for (let i = 0; i < ages.length; i++) {
  ageTotal += ages[i];
}
let averageAge = ageTotal / ages.length;
console.log("\n1c. The average age is:");
console.log(averageAge);

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.

let totalNameLength = 0;
for (let i = 0; i < names.length; i++) {
  totalNameLength += names[i].length;
}
let averageNameLength = totalNameLength / names.length;
console.log("\n2a. Average name length is:");
console.log(averageNameLength);

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let allNamesTogether = "";
for (let i = 0; i < names.length; i++) {
  allNamesTogether += names[i];
  if (i < names.length - 1) {
    allNamesTogether += " ";
  }
}
console.log("\n2b. All names concatenated are:");
console.log(allNamesTogether);
