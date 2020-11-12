/*
https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

// n -> number of rows
// row 0 and row n-1 should have length of 1, row (n-1)/2 should have length of n, rows in between should have difference of 2 at each stage
// rows of length < n should also have m leading spaces, where m = distance from index of middle (length = n) row
  // ex. row 0 and row-1 n have (n-1)/2 leading spaces, row 1 and row n-2 have ((n-1)/2)-1 leading spaces
// n = 7 -> "   *\n  ***\n *****\n  ***\n   *\n"

// approach A: array -> string; start from beginning and end, meet in middle
  // instantiate array of size n, fill in values based on array index, then join('\n')
    // variables & initial values; in-/decrementation:
      // index pointers: fromStart = 0, fromEnd = n-1; fromStart++, fromEnd--
      // characters = 1; characters += 2
      // leading spaces: spaces = (n-1)/2; spaces--
    // expectation: end loop & join after middle row is reached (i === j & spaces = 0)
    // pros: time-efficient (divide & conquer)
    // cons: space-inefficient


function forgeDiamondA(n) {
  // edge case handling -- can't make diamonds from these values
  if(n <= 0 || n % 2 === 0) return null;

  const diamond = Array(n).fill('');

  let fromStart = 0;
  let fromEnd = n-1;

  let spaces = (n-1)/2;
  let characters = 1;

  while(fromStart < fromEnd) {
    for(let i = 0; i < spaces; i++) {
      diamond[fromStart] += ' ';
      diamond[fromEnd] += ' ';
    }

    for(let j = 0; j < characters; j++) {
      diamond[fromStart] += '*';
      diamond[fromEnd] += '*';
    }

    fromStart++;
    fromEnd--;

    spaces--;
    characters += 2;
  }

  for(let i = 0; i < spaces; i++) diamond[(n-1)/2] += ' '
  for(let j = 0; j < characters; j++) diamond[(n-1)/2] += '*'
  
  return diamond.join('\n') + '\n';
}
// result -- Time: 741ms Passed: 17 Failed: 0
// really only marginally faster!

console.log(forgeDiamondA(4));
console.log(forgeDiamondA(5));
console.log(forgeDiamondA(7));

// approach B: construct string directly
  // instantiate empty string; for each "row," construct chunk of string and append
  // variables & initial values; in-/decrementation:
      // current string section: row = 0; row++; always ends with '\n'
      // characters = 1; characters += 2 UNTIL row > (n-1)/2, at which point characters -= 2
      // leading spaces: spaces = (n-1)/2; spaces-- UNTIL row > (n-1)/2, at which point spaces++
    // expectation: end loop and return once row > (n-1/2)
    // pros: space-efficient
    // cons: time-inefficient

function forgeDiamondB(n) {
  // edge case handling -- can't make diamonds from these values
  if(n <= 0 || n % 2 === 0) return null;

  // instantiate string to store string as it's constructed
  let diamond = '';

  // variable to store string section -- will end with '\n'
  let row = 0;
  // variables to store number of spaces and characters for the current row
  // the first row will have (n-1)/2 spaces and one '*'
  let spaces = (n-1)/2;
  let characters = 1;

  // until the number of rows is equal to or greater than n (given that the first row is 0)...
  while(row < n) {
    // add the appropriate number of spaces and characters to the string, then a newline ('\n)
    for(let i = 0; i < spaces; i++) diamond += ' ';
    for(let j = 0; j < characters; j++) diamond += '*';
    diamond += '\n';

    // increment the row by 1
    row++;
    // increment or decrement spaces and rows as appropriate
    // if we haven't reached the middle row (the widest one), then we'll add 2 characters and remove 1 space for the next iteration
    // if we've passed the middle row, then we'll do the opposite -- remove 2 characters and add 1 space for the next iteration
    spaces = row > (n-1)/2 ? spaces + 1 : spaces - 1;
    characters = row > (n-1)/2 ? characters - 2 : characters + 2;
  }

  return diamond;
}
// result -- Time: 839ms Passed: 18 Failed: 0
// to me, this solution feels a lot cleaner and more readable.

console.log(forgeDiamondB(4));
console.log(forgeDiamondB(5));
console.log(forgeDiamondB(7));

// solution from BigFaceWangCY
// https://www.codewars.com/kata/reviews/55639ff791e68ecc490000ae/groups/5a0d2c67231392c9fa001ad7

/*
function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}
*/
