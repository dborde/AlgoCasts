// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// version 1
// function capitalize(str) {
//   let wb = [];
//   wb.push(str[0].toUpperCase());

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       wb.push(str.slice(i + 1, i + 2).toUpperCase());
//     } else {
//       wb.push(str[i + 1]);
//     }
//   }
//   return wb.join("");
// }

// version 2
// function capitalize(str) {
//   let words = [];
//   const wordsArr = str.split(" ");

//   for (let i = 0; i < wordsArr.length; i++) {
//     words.push(wordsArr[i].slice(0, 1).toUpperCase() + wordsArr[i].slice(1));
//   }
//   return words.join(" ");
// }

// version 3
// function capitalize(str) {
//   let words = [];

//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(" ");
// }

// version 4
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
module.exports = capitalize;
