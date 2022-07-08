/*
Link: https://leetcode.com/problems/search-insert-position/
Description:
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

var searchInsert = function(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while(leftIndex <= rightIndex){
    	const middle = Math.floor((leftIndex + rightIndex) / 2);

    	if(nums[middle] === target){
    		return middle;
    	} else if(nums[middle] < target){
    		leftIndex = middle + 1;
    	} else{
    		rightIndex = middle - 1;
    	}
    }

    return leftIndex;
};