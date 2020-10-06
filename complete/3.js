function findFactors(int, diff = 1, factors = []) {
  let factor = int / (int - diff);
  
  let updatedFactors = factors;

  if(Number.isInteger(factor)) updatedFactors.push(factor);

  let newDiff = diff + 1

  if(newDiff > int) return updatedFactors;

  return findFactors(int, newDiff, updatedFactors);
}

function findPrimes(limit, curr = 2, primes = []) {
  let updatedPrimes = primes;

  if(findFactors(curr).length < 2) updatedPrimes.push(curr);

  let next = curr + 1;

  if(next > limit) return updatedPrimes;

  return findPrimes(limit, next, updatedPrimes);
}

function findManyPrimes(limit, step = 200, curr = 2, primes = []) {
  let newPrimes = findPrimes(step, curr);

  let updatedPrimes = [...primes, newPrimes].flat();

  let newStep = step + 200;
  
  if(newStep > limit) return updatedPrimes;
  
  let next = updatedPrimes[updatedPrimes.length - 1];

  return findManyPrimes(limit, newStep, next, updatedPrimes);
}

function findLastFactor(int) {
  const intervalSize = Math.floor(int / 10000000000);

  const startingIndex = int - intervalSize;

  console.log(intervalSize, startingIndex)

  const primes = findPrimes(int, startingIndex);

  console.log(primes)
  // const lastPrimes = findManyPrimes(400, 200, int - 100)
  // console.log(lastPrimes)
}

// function divideForFactors(integer, divisor = 2) {
//   if(integer < 1) {
//     return divisor
//   } else if(integer % divisor === 0) {
//     return divideForFactors((integer / divisor), divisor);
//   } else {
//     return divideForFactors(integer, divisor + 1)
//   }
// }

function divideForFactors(number, divisor = 2) {
  if(number < 1) return divisor;

  let nextNumber = (number % divisor === 0)
    ? number / divisor
    : number;

  let nextDivisor = (number % divisor === 0)
    ? divisor
    : divisor + 1

  return divideForFactors(nextNumber, nextDivisor)
  // var number = integer;
  // while(number > 1){
  //     if(number % divisor === 0){ 
  //         number /= divisor;
  //     } else {
  //         divisor++;
  //     }
  // }
  // return divisor
}

// console.log(findFactors(73));
// console.log(findPrimes(69));

// const test = findManyPrimes(6598);

// console.log(test[test.length - 1]);

// findLastFactor(600851475143)

console.log(divideForFactors(600851475143))
