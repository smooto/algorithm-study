// function smallestMultiple(maxDivisor, currentValue = 1, currentDivisor = 2) {
//   if(currentDivisor === maxDivisor) return currentValue

//   const nextValue = currentValue % currentDivisor === 0
//   ? currentValue
//   : currentValue + 1
  
//   const nextDivisor = currentValue % currentDivisor === 0
//   ? currentDivisor + 1
//   : 2

//   // console.log(nextValue, nextDivisor)

//   return smallestMultiple(maxDivisor, nextValue, nextDivisor)
// }

function smallestMultiple(maxDivisor) {
  let value = 1;
  let divisor = 2;

  while (maxDivisor > divisor) {
    if(value % divisor === 0) {
      divisor++
    }

    if(value % divisor !== 0) {
      value++
      divisor = 2
    }
  }

  return value;
}

console.log(smallestMultiple(10))
