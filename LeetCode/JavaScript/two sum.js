/*
Link: https://leetcode.com/problems/two-sum/
Description:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

const twoSum = function (nums, target) {
  const indices = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (indices.has(complement)) return [indices.get(complement), i];

    indices.set(nums[i], i);
  }
};

console.log(twoSum([14, 2, 7], 9));
