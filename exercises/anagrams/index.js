// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// version 1
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   const compare = (element) => aCharMap[element] === bCharMap[element];

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   } else {
//     return Object.keys(aCharMap).every(compare);
//   }
// }

// function buildCharMap(str) {
//   let charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// version 2

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (char in aCharMap) {
//     return aCharMap[char] === bCharMap[char];
//   }
// }

// function buildCharMap(str) {
//   let charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// version 3

function anagrams(stringA, stringB) {
  return cleanAndSort(stringA) === cleanAndSort(stringB);
}

function cleanAndSort(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
