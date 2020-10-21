/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

ex:
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
*/

nums = [0,0,1,1,1,2,2,3,3,4];

function removeDuplicates(array) {
  let curr = 0;
  
  for(let next = 1; next < array.length; next++) {
    if(array[curr] !== array[next]) {
      curr++;
      array[curr] = array[next];
    }
  }

  return curr + 1;
}

// function countDuplicates(array, start, distance = 1, count = 0) {
//   if(array[start] === array[start + distance]) return countDuplicates(array, start, distance + 1, count + 1);

//   return count;
// }

// function removeDuplicates(array) {
//   // if array[i] === array[n], increment n until array[i] !== array[n]
//   // remove duplicates by shifting back by n and reducing length by n
//   // increment i, repeat

//   let i = 0;
//   let n = 1;
//   let length = array.length



//   // for(let i = 0; i < length; i++) {
//   //   const count = countDuplicates(array, i);

//     // for(let j = i + 1; j < length; j++) {
//     //   array[j - count] = array[j];
//     // }

//   //   length -= count;
//   // }

//   return array;
// }

console.log(nums);
console.log(removeDuplicates(nums));
console.log(nums);
