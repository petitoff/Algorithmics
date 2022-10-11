/**
 *
 * @param {array} arr
 * @returns {array}
 */

const insertionSort = (arr = []) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }

  return arr;
};

console.log(insertionSort([5, 1, 2, 8]));
