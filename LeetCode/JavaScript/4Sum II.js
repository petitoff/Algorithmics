/*
Link: https://leetcode.com/problems/4sum-ii/
Description:
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of 
tuples (i, j, k, l) such that:

    0 <= i, j, k, l < n
    nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
*/

const fourSumCount = function (nums1, nums2, nums3, nums4) {
  const obj = {};
  let res = 0;
  let key = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      key = nums1[i] + nums2[j];
      obj[key] = (obj[key] || 0) + 1;
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      key = -(nums3[i] + nums4[j]);
      res += obj[key] || 0;
    }
  }
  return res;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
