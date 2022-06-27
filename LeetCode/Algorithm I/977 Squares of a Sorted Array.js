/*
Link: https://leetcode.com/problems/squares-of-a-sorted-array/
Description:
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

var sortedSquares = function(nums) {
    const result = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1;
    let resultIndex = right;

    while(left <= right){
    	let leftVal = Math.pow(nums[left], 2);
    	let rightVal = Math.pow(nums[right], 2);

    	if(leftVal < rightVal){
    		result[resultIndex] = rightVal;
    		right--;
    	} else{
    		result[resultIndex] = leftVal;
    		left++;
    	}
		resultIndex--;
    }

    return result;
};

console.log(sortedSquares([-4,-1,0,3,10]));