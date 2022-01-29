// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // iterative
// function fib(n) {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n];
// }

// // recursive
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// memoize
function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    cache[args] = fn.apply(this, args);
    return cache[args];
  };
}
function fib(n) {
  if (n < 2) {
    return n;
  }
  /**
   * When we call fib below it is no longer a reference to the fib function
   * declared above but rather the reassigned memoized version of the function below:
   * fib = memoize(fib);
   */
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
