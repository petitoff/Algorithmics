/*
Link: https://leetcode.com/problems/squares-of-a-sorted-array/
Description:
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

var sortedSquares = function(nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let resultIndex = right;

    while(left <= right){
        const leftValue = Math.pow(nums[left], 2);
        const rightValue = Math.pow(nums[right], 2);

        if(leftValue < rightValue){
            result[resultIndex] = rightValue;
            right--;
        } else{
            result[resultIndex] = leftValue;
            left++;
        }
        resultIndex--;
    }

    return result;
};

console.log(sortedSquares([-4,-1,0,3,10]));