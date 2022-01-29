// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunked = [];

//   for (let i = 0; i < array.length; i++) {
//     let chunk = chunked[chunked.length - 1];

//     if (!chunk || chunk.length === size) {
//       chunk = chunked.push([array[i]]);
//     } else {
//       chunk.push(array[i]);
//     }
//   }
//   return chunked;
// }

// function chunk(array, size) {
//   const chunked = [];

//   array.forEach((e) => {
//     const chunk = chunked[chunked.length - 1];
//     if (!chunk || chunk.length === size) {
//       chunked.push([array[e - 1]]);
//     } else {
//       chunk.push(array[e - 1]);
//     }
//   });
//   return chunked;
// }

// function chunk(array, size) {
//   const chunked = [];

//   for (let el of array) {
//     const chunk = chunked[chunked.length - 1];
//     if (!chunk || chunk.length === size) {
//       chunked.push([el]);
//     } else {
//       chunk.push(el);
//     }
//   }
//   return chunked;
// }

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
