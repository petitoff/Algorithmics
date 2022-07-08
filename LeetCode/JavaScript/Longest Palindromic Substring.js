/*
Link: https://leetcode.com/problems/longest-palindromic-substring/
Description:
Given a string s, return the longest palindromic substring in s.
*/

const getDrome = (left, right, s) => {
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) break;
    left--;
    right++;
  }

  return [left + 1, right];
};

const longestPalindrome = function (s) {
  let max = [0, 1];

  for (let i = 0; i < s.length; i++) {
    const odd = getDrome(i - 1, i + 1, s);
    const even = getDrome(i + 1, i, s);

    const curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
  }

  return s.slice(max[0], max[1]);
};

console.log(longestPalindrome('babad'));
