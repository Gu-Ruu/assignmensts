/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let largestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}
const numbers = [2, 7, 5, 9, 89, 5, 7, 100, 25];
const largest = findLargestElement(numbers);
// module.exports = findLargestElement;
console.log(largest);
