/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Check if the lengths of the two strings are equal
  if (str1.length !== str2.length) {
      return false;
  }

  // Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Sort the characters of both strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false


// module.exports = isAnagram;
// isAnagram();
