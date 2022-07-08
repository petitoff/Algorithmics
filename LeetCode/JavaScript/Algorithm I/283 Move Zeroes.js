/*
Link: https://leetcode.com/problems/move-zeroes/
Description:
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

var moveZeroes = function (nums) {
  let placeNonZeros = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[placeNonZeros] = nums[i];
      placeNonZeros++;
    }
  }

  for (let i = placeNonZeros; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums; // only for github purpose bcz in leetcode this is not allowed (in this exercise)
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
