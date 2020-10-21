/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

const nums = [0,1,0,3,12];

function moveZeroesByCopying(array) {
  const movedZeroes = [];

  let count = 0;

  for(let i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      count++
    } else {
      movedZeroes.push(array[i])
    }
  }

  for(let j = 0; j < count; j++) {
    movedZeroes.push(0)
  }

  return movedZeroes;
}

// console.log(moveZeroesByCopying(nums));

function moveZeroes(array) {
  let lastNonZeroPosition = 0;

  for(let curr = 0; curr < array.length; curr++) {
    if(array[curr] !== 0) {
      const value = array[lastNonZeroPosition];
      
      array[lastNonZeroPosition] = array[curr];
      array[curr] = value;

      lastNonZeroPosition++
    }
  }

  return array;
}

console.log(moveZeroes(nums))
