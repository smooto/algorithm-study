// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// sum of the squares

function sumSquares(max, n = 0, sum = 0) {
  if(n > max) return sum;

  const newSum = sum + Math.pow(n, 2);

  return sumSquares(max, n + 1, newSum);
}

function squareSum(max, n = 0, sum = 0) {
  if(n > max) return Math.pow(sum, 2);

  const newSum = sum + n;

  return squareSum(max, n + 1, newSum);
}

function findDifference(n) {
  return squareSum(n) - sumSquares(n);
}

console.log(sumSquares(100))
console.log(squareSum(100))
console.log(findDifference(100))
