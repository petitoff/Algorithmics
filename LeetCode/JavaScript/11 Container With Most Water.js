/*
Link: https://leetcode.com/problems/container-with-most-water/
Description:
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/
function maxArea(height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (right > left) {
    const a = height[left];
    const b = height[right];

    const area = Math.min(a, b) * (right - left);
    if (area > result) result = area;

    if (a > b) {
      right++;
    } else {
      left--;
    }
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
