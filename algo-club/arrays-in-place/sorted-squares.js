/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

const nums = [-4,-1,0,3,10];

function sortedSquares(array) {
  for(let curr = 0; curr < array.length; curr++) {
    if(array[curr] < 0) {
      let j = curr + 1;

      while(array[j] < array[curr] * -1) {
        const swap = array[j];

        array[j] = array[curr];
        array[curr] = swap;

        j++
      }
    }
    array[curr] *= array[curr];
  }

  return array;
}

console.log(sortedSquares(nums));
