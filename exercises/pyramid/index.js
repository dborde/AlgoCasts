// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// version 4 - fails n = 1 and n = 2
// function pyramid(n) {
//   let step = 1;
//   let columns = n + (n - 1);

//   while (step < n) {
//     let outer = columns - (step + step);
//     let edge = Math.floor(outer / 2) + 1;
//     let inner = step + step;
//     console.log(
//       Array(edge).join(" ") + Array(inner).join("#") + Array(edge).join(" "),
//     );

//     step++;
//   }
// }

// version 1 - mine
// function pyramid(n) {
//   let columns = n + (n - 1);
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let col = 1; col <= columns; col++) {
//       if (col <= n + row && col >= n - row) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

// version 2 - S. Grider
// function pyramid(n) {
//   const columns = n + (n - 1);
//   const midpoint = Math.floor(columns / 2);
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let col = 0; col < columns; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

// version 3
function pyramid(n, row = 0, level = "") {
  const columns = n + (n - 1);
  const midpoint = Math.floor(columns / 2);
  if (row === n) {
    return;
  }
  if (level.length === columns) {
    console.log(level);
    return pyramid(n, row + 1); // return here is key. Otherwise infinite loop
  }
  const add =
    midpoint - row <= level.length && midpoint + row >= level.length
      ? "#"
      : " ";
  pyramid(n, row, level + add);
}

module.exports = pyramid;
