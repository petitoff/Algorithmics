const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(2));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(50));

// memoization
// js object, key will be arg to fn, value will be the return value

const fibBetter = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibBetter(n - 1, memo) + fibBetter(n - 2, memo);
  return memo[n];
};

console.log(fibBetter(50));

const foo = (n) => {
  if (n <= 1) return;
  bar(n - 1);

  // O(n) time
  // O(n) space
};

const bar = (n) => {
  if (n <= 1) return;
  bar(n - 2);

  // O(n/2) => O(n) time
  // O(n) space
};

const dib = (n) => {
  if (n <= 1) return;
  console.log(n);
  lib(n - 1);
  lib(n - 1);

  // O(2^n) time
  // O(n) space
};

const lib = (n) => {
  if (n <= 1) return;
  console.log(n);
  lib(n - 2);
  lib(n - 2);
};
