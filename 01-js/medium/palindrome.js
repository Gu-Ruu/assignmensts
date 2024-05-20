/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   // Convert the string to lowercase to ensure case insensitivity
//   const lowerStr = str.toLowerCase();

//   // Initialize two pointers, one at the start and one at the end of the string
//   let left = 0;
//   let right = lowerStr.length - 1;

//   // Loop until the pointers meet in the middle
//   while (left < right) {
//     // Move the left pointer to the right if it's not an alphanumeric character
//     while (left < right && !isAlphanumeric(lowerStr[left])) {
//       left++;
//     }
//     // Move the right pointer to the left if it's not an alphanumeric character
//     while (left < right && !isAlphanumeric(lowerStr[right])) {
//       right--;
//     }
//     // Compare the characters at the current pointers
//     if (lowerStr[left] !== lowerStr[right]) {
//       return false;
//     }
//     // Move the pointers closer to the middle
//     left++;
//     right--;
//   }

//   // If all characters matched, return true
//   return true;
// }

// Helper function to check if a character is alphanumeric
// function isAlphanumeric(char) {
//   return /^[a-z0-9]$/i.test(char);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////// shorter/simplest way to doing
function isPalindrome(str) {
  // Normalize the string by converting to lowercase and removing non-alphanumeric characters
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(normalizedStr);
  // Compare the normalized string with its reverse
  return normalizedStr === normalizedStr.split("").reverse().join("");
}

// Export the function for testing purposes
module.exports = isPalindrome;

console.log(isPalindrome("Nan")); // Output: true
console.log(isPalindrome("Racecar")); // Output: true
console.log(isPalindrome("Hello, world!")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("No 'x' in Nixon")); // Output: true
console.log(isPalindrome("12321")); // Output: true
console.log(isPalindrome("12345")); // Output: false
