/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = "aeiouAEIOU";

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello, world!")); // Output: 3
console.log(countVowels("Coding is fun!!!")); // Output: 4
console.log(countVowels("Keep smiling, boo.")); // Output: 6
console.log(countVowels("the quick brown fox")); // Output: 5
console.log(countVowels("a e i o u")); // Output: 5
console.log(countVowels("testing spaces")); // Output: 4
console.log(countVowels("EaSiEr")); // Output: 4
console.log(countVowels("QUIET")); // Output: 3
console.log(countVowels("aEIOU")); // Output: 5
console.log(countVowels("rhythm")); // Output: 0
console.log(countVowels("fly")); // Output: 0
console.log(countVowels("")); // Output: 0
// module.exports = countVowels;
