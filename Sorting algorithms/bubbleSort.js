const bubbleSort = (arr = []) => {
  const arrLength = arr.length;
  let isSwapped = false;

  for (let i = 0; i < arrLength; i++) {
    isSwapped = false;

    for (let j = 0; j < arrLength; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }

  return arr;
};

console.log(bubbleSort([5, 4, 3, 2, 1]));
