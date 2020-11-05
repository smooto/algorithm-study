/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 
Note: You may assume the string contains only lowercase English letters.
*/

const stringA = 'leetcode';
const stringB = 'loveleetcode';

function firstUniqChar(string) {
  const characterMap = {};

  string.split('').forEach(character => {
    characterMap[character]
      ? characterMap[character]++
      : characterMap[character] = 1;
  })

  let answer = undefined;

  let i = 0;

  while(answer === undefined) {
    Object.values(characterMap)[i] === 1
      ? answer = i
      : i++;
  }

  return answer;
}

console.log(firstUniqChar(stringA));
console.log(firstUniqChar(stringB));
