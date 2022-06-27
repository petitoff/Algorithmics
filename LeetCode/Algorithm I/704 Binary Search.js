/*
Link: https://leetcode.com/problems/binary-search/
Description:
Given an array of integers nums which is sorted in ascending order, and an integer target, 
write a function to search target in nums. If target exists, then return its index.
Otherwise, return -1.

You must write an algorithm with $O(\log n)$ runtime complexity.
*/
var search = function(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while(leftIndex <= rightIndex){
        const middle = Math.floor((leftIndex + rightIndex) / 2); // middle index of arr
        const currentNumber = nums[middle];

        if(currentNumber > target) rightIndex = middle - 1;
        else if(currentNumber < target) leftIndex = middle + 1;
        else return middle
    }

    return -1; // if target is not in arr
};

console.log(search([-1,0,3,5,9,12], 9))