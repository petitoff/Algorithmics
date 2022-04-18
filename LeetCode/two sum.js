/*
Link: https://leetcode.com/problems/two-sum/
Description:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

const twoSum = function (nums, target) {
  const indices = new Map();

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];

    if (indices.has(complement)) return [indices.get(complement), index];

    indices.set(nums[index], index);
  }
};

console.log(twoSum([14, 2, 7], 9));
