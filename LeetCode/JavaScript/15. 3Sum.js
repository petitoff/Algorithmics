/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const res = [];

  // sort arr inc
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    // if number before is same value as current
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    // left and right pointer
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      // our sum of a + b + c
      const threeSum = nums[i] + nums[l] + nums[r];

      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] == nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return res;
};

console.log(threeSum([[-1, 0, 1, 2, -1, -4]]));
