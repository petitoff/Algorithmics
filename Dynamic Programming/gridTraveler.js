const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 2));
// console.log(gridTraveler(3, 3));j
// console.log(gridTraveler(18, 18));

const gridTravelerMemo = (m, n, memo = {}) => {
  // are the args in the memo
  const key = m + "," + n;
  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] =
    gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
  return memo[key];
};

console.log(gridTravelerMemo(2, 3));
console.log(gridTravelerMemo(3, 2));
console.log(gridTravelerMemo(3, 3));
console.log(gridTravelerMemo(18, 18));
