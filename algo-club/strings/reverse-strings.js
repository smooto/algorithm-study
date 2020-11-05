/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

const testStringA = ["h","e","l","l","o"];
const testStringB = ["e","v","e","n"];

function reverseString(string) {
  // edge cases: string length < 2
  if(string.length < 2) return string;

  // first and last elements need to switch positions
  // then second-to-last, and so on
  // if string length is odd, median character (Math.floor(string.length/2)) won't change position

  // tracking/pointers: position from start, position from end, midpoint
  // const midpoint = (string.length - 1) / 2;

  let i = 0;
  let j = string.length - 1;

  while(i < j) {
    const swap = string[i];

    string[i] = string[j];
    string[j] = swap;

    i++;
    j--;
  }

  return string;
}

console.log(reverseString(testStringA));
console.log(reverseString(testStringB));
