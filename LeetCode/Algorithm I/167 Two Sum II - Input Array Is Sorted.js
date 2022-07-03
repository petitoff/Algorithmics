var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    let sum = numbers[l] + numbers[r];

    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
