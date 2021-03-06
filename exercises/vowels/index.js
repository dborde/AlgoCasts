// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// interative
// function vowels(str) {
//   let count = 0;
//   const vowelsArray = ["a", "e", "i", "o", "u"];

//   for (let char of str.toLowerCase()) {
//     if (vowelsArray.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// regex 1
// function vowels(str) {
//   const re = /[aeiou]/gi;
//   return ((str || "").match(re) || []).length;
// }

// regex 2
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
