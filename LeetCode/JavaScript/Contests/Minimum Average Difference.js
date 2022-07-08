/**
 * @param {number[]} nums
 * @return {number}
 */

const idivmod = (a, b) => [(a / b) | 0, a % b];

var minimumAverageDifference = function (nums) {
  let lastIndex = nums.length;
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    lastIndex--;
    const sum1 = idivmod(
      nums.slice(0, i + 1).reduce((a, b) => Number(a) + Number(b), 0),
      i + 1
    )[0];

    const sum2 = idivmod(
      nums.slice(i + 1, nums.length).reduce((a, b) => Number(a) + Number(b), 0),
      lastIndex
    )[0];

    const sum = sum1 - sum2;
    obj[i] = Math.floor(Math.abs(sum));
  }

  let arr = Object.values(obj);
  const minimalValue = arr.sort((a, b) => a - b)[0];

  for (const [key, value] of Object.entries(obj)) {
    if (value === minimalValue) return key;
  }
};

console.log(minimumAverageDifference([2, 5, 3, 9, 5, 3]));
