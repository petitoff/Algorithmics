/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */

/*
Description:
You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

Return the number of strings in words that are a prefix of s.

A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.
*/

var countPrefixes = function (words, s) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const result = s.slice(0, words[i].length);
    if (words[i] === result) count++;
  }

  return count;
};

console.log(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc'));
