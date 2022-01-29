// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let reversed = "";
//   let isNegative = false;
//   const numToString = n.toString();
//   for (char of numToString) {
//     if (char === "-") {
//       isNegative = true;
//     } else {
//       reversed = char + reversed;
//     }
//   }
//   return isNegative ? -parseInt(reversed) : parseInt(reversed);
// }

// function reverseInt(n) {
//   let isNegative = Math.sign(n) === -1;
//   const reversed = Math.abs(n).toString().split("").reverse().join("");
//   return isNegative ? -parseInt(reversed) : parseInt(reversed);
// }

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
