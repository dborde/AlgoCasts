// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// version 1
// function steps(n) {
//   let step = 1;
//   while (step <= n) {
//     console.log(Array(step + 1).join("#") + Array(n + 1 - step).join(" "));
//     step++;
//   }
// }

// version 2
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

// version 3 recurion
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (stair.length === n) {
    return steps(n, row + 1); // return here is key. Otherwise infinite loop
  }
  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}

module.exports = steps;
