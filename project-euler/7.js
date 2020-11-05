// function findFactors(int, diff = 1, factors = []) {
//   let factor = int / (int - diff);
  
//   let updatedFactors = factors;

//   if(Number.isInteger(factor)) updatedFactors.push(factor);

//   let newDiff = diff + 1

//   if(newDiff > int) return updatedFactors;

//   return findFactors(int, newDiff, updatedFactors);
// }

function findFactors(integer) {
  let n = 1;
  let factors = [];

  while(n <= integer) {
    let factor = integer / (integer - n);

    if(Number.isInteger(factor)) factors.push(factor);

    n++;
  }

  return factors;
}

function isPrime(integer) {
  const factors = findFactors(integer);

  return factors.length < 2
    ? true
    : false;
}

function findNthPrime(n) {
  let currentNumber = 1;
  let currentIndex = 1;

  while(currentIndex <= n) {
    currentNumber++;

    if(isPrime(currentNumber)) {
      currentIndex++
      // currentNumber++
    }
    
    // currentNumber++;
    
    console.log('curr number: ' + currentNumber + '\ncurr index: ' + currentIndex)
  }

  return currentNumber;
}

// console.log(findFactors(8))
// console.log(isPrime(8))
console.log(findNthPrime(10001))
