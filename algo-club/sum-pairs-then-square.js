/*
Find the sum of every two adjacent integers in an input array of any length. You will need to square the resulting sums and return a final value of the sums of all squared sums. 

Example 1:
input = [1, 2, 3, 4]
1 + 2 = 3 and 3 + 4 = 7
3^2 = 9 and 7^2 = 49
output = 58

Example 2:
input = [1, 2, 3, 4, 5]
1 + 2 = 3 and 3 + 4 = 7
3^2 = 9 and 7^2 = 49
output = 58 + 5 = 63
*/

const sumPairsThenSquare = (nums) => {
  return nums.reduce((adjacentSums, currentValue, idx, src) => {
    if (idx % 2 != 0) return adjacentSums

    return [...adjacentSums, Math.pow((currentValue + src[idx + 1]), 2)]
  },[])
  .reduce((runningTotal, currentValue) => {
    return runningTotal += currentValue
  }, 0)
}

module.exports = sumPairsThenSquare