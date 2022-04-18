/*
Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
Description:
Given a string s, find the length of the longest substring without repeating characters.
*/

const lengthOfLongestSubstring = function (s) {
  const length = s.length;
  if (length <= 1) {
    return length;
  }
  let p = 0;
  let q = 1;
  let result = 1;
  while (q < length) {
    const stringSlice = s.slice(p, q);
    const checkIfExists = stringSlice.indexOf(s[q]);
    if (checkIfExists !== -1) {
      p += checkIfExists + 1;
    }
    q++;
    result = q - p > result ? q - p : result;
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
