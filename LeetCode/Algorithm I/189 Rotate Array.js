/*
Link: https://leetcode.com/problems/rotate-array/
Description:
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

const reverseNums = (nums, start, end) =>{
	while(start < end){
		[nums[start], nums[end]] = [nums[end], nums[start]];
		start++;
		end--;
	}
}

const rotate = function(nums, k) {
	k = k % nums.length; // check if k is not greater that nums.length
	nums.reverse();

	reverseNums(nums, 0, k - 1);
	reverseNums(nums, k, nums.length - 1);

    return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));

