// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let arr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     arr.push(str[i]);
//   }
//   return arr.join("");
// }

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversed = "";
//   for (char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

function reverse(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

module.exports = reverse;
