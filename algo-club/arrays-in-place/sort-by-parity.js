/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/

const nums = [3,1,2,4,5];

function sortArrayByParity(array) {
  let oddsBetween = 0;

  for(let curr = 0; curr < array.length; curr++) {
    if(array[curr] % 2 !== 0) {
      oddsBetween++;
    } else {
      const swapValue = array[curr - oddsBetween];

      array[curr - oddsBetween] = array[curr];
      array[curr] = swapValue;
    }
  }

  return array;
}

console.log(sortArrayByParity(nums));
