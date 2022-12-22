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

// 3. How do you access the last element of any array?

console.log("\n3. How do you access the last element of any array?");
console.log("anyArray[anyArray.length - 1]");

// 4. How do you access the first element of any array?

console.log("\n4. How do you access the first element of any array?");
console.log("anyArray[0]");

/* 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.For example:
namesArray = ["Kelly", "Sam", "Kate"] given this array
nameLengths = [5, 3, 4] create this new array */

let nameLengths = [];
for (let name of names) {
  nameLengths.push(name.length);
}
console.log("\n5. The lengths of each name are:");
console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sumNameLengths = 0;
for (let x of nameLengths) {
  sumNameLengths += x;
}
console.log("\n6. The sum total of all nameLengths is:");
console.log(sumNameLengths);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function repeater(word, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}
console.log("\n7. repeater function test result:");
console.log(repeater("Hello", 3));

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.

function nameJoiner(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log("\n8. nameJoiner function test result:");
console.log(nameJoiner("John", "Doe"));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let sumOfArrayOfNumbers = 0;
function hundredTest(arrayOfNumbers) {
  for (let i of arrayOfNumbers) {
    sumOfArrayOfNumbers += i;
  }
  return sumOfArrayOfNumbers > 100;
}
let testNumbersArray1 = [20, 30, 40];
console.log("\n9. hundredTest function test result 1:");
console.log(hundredTest(testNumbersArray1));
let testNumbersArray2 = [23, 34, 41, 59, 68, 90];
console.log("hundredTest function test result 2:");
console.log(hundredTest(testNumbersArray2));

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

let sumTotalOfNumbers = 0;
function averageFinder(arrayOfNumbers) {
  for (let i of arrayOfNumbers) {
    sumTotalOfNumbers += i;
  }
  return sumTotalOfNumbers / arrayOfNumbers.length;
}
console.log("\n10. averageFinder function test result:");
console.log(averageFinder(testNumbersArray2));

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function firstBigger(arr1, arr2) {
  let total1 = 0;
  let total2 = 0;
  for (let i of arr1) {
    total1 += i;
  }
  for (let i of arr2) {
    total2 += i;
  }
  return total1 > total2;
}
console.log("\n11. Test result for firstBigger function:");
console.log(firstBigger(testNumbersArray2, testNumbersArray1));

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50

function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside === true && moneyInPocket > 10.5;
}
console.log("\n12. Test result for willBuyDrink function:");
console.log(willBuyDrink(true, 15));

// 13. Create a function of your own that solves a problem.
// In comments, write what the function does and why you created it

// I set myself a goal to run at least 50 miles every month. With this function I can enter the number of miles I have already run this month, and the number of days left in the month, and it will return a daily run goal that will allow me to reach my monthly goal. Because I need time to rest, I will make a maximum of five runs per week. The function will take this into account.

function dailyGoalCalculator(milesRunAlready, daysLeftInMonth) {
  let daysAvailableToRun = daysLeftInMonth * (5 / 7);
  let unroundedResult = (50 - milesRunAlready) / daysAvailableToRun;
  return Math.round(unroundedResult * 100) / 100;
}

console.log("\n13. Result of my personal running calculator function:");
let dailyGoal = dailyGoalCalculator(8, 25);

console.log(
  "You must run at least " +
    dailyGoal +
    " miles each day to reach your goal this month."
);
