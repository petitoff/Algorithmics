/*
Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
Description:
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

const findMedianSortedArrays = function (nums1, nums2) {
  const arr = [];
  arr.push(...nums1, ...nums2);
  arr.sort((a, b) => a - b);
  if (isInt(arr.length / 2)) {
    return (
      (arr[Math.floor(arr.length / 2) - 1] + arr[Math.floor(arr.length / 2)]) /
      2
    );
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
