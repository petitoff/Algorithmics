const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function search(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    // can we assume always 2 params?
  
    let map = {};
    for (let i=0; i < arr1.length; i++) {
      if(!map[arr1[i]]) {
        const item = arr1[i];
        map[item] = true;
      }
    }
    // loop through second array and check if item in second array exists on created object. 
    for (let j=0; j < arr2.length; j++) {
      if (map[arr2[j]]) {
        return true;
      }
    }
    return false
  }

console.log(search(array1, array2))