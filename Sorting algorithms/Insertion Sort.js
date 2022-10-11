/**
 *
 * @param {array} arr
 * @returns {array}
 */

const insertionSort = (arr = []) => {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }

  return arr;
};

console.log(insertionSort([5, 4, 3, 2, 1]));

// S: O(1)
// T: O(n^2)
