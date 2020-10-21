/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr =    [17,18,5,4,6,1]
Output:         [18,6,6,6,1,-1]
*/

let testArr = [17,18,5,4,6,1];
let testArr2 = [56903,18666,60499,57517,26961];

function replaceElements(arr, i = 0, n = 1, value = arr[i + 1]) {
  // base case: no elements remain to the right (i = arr.length - 1)
  // i = 0, curr = i + 1, next = curr + n
  // init n = 1
  // if next > curr, replace curr with value of arr[i + n], increment n, repeat until next > arr.length
  // if !arr[curr + n], set arr[i] = curr, increment curr, reset n = 1
  // if i = arr.length - 1, replace arr[i] with -1 and return

  if(i === arr.length - 1) {
    arr[i] = -1;
    return 'done';
  }

  const currentIndex = i + 1;
  const nextIndex = currentIndex + n;

  if(nextIndex > arr.length - 1) {
    arr[i] = value;
    const newValue = arr[currentIndex + 1];
    return replaceElements(arr, currentIndex, 1, newValue);
  }

  if(arr[nextIndex] > value) {
    const newValue = arr[nextIndex];
    return replaceElements(arr, i, n + 1, newValue);
  }

  return replaceElements(arr, i, n + 1, value);
}

// console.log('pre-run: ' + testArr)
// console.log(replaceElements(testArr))
// console.log('post-run: ' + testArr)

function replaceElementsLoop(arr) {  
  // modifiers -- i represents index of the element to be replaced, n represents distance from the element to its immediate right
  let i = 0;
  let n = 1;

  while(i < arr.length - 1) {
    // index values -- won't be mutated directly. currentIndex is the first element after the element to be replaced, nextIndex is the element n positions away from currentIndex
    let currentIndex = i + 1;
    let nextIndex = currentIndex + n;
  
    // current highest value
    let highestValue = arr[i + 1];

    while(nextIndex <= arr.length - 1) {
      if(arr[nextIndex] > highestValue) highestValue = arr[nextIndex];
      n++;
    }

    arr[i] = highestValue;
    i++;
    n = 1;
  }

  arr[i] = -1;

  return arr;
}

console.log('pre-run: ' + testArr)
console.log(replaceElementsLoop(testArr))
console.log('post-run: ' + testArr)
