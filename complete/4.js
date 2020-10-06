function findBestPalindrome(maxValue = 998001) {
  let currentHighest = findHighestPalindrome(maxValue)

  if(!isDivisible(currentHighest)) return findBestPalindrome(currentHighest)

  const { factorA, factorB } = isDivisible(currentHighest)
  console.log(factorA, factorB)

  if(factorA.toString().length != 3 || factorB.toString().length != 3) return findBestPalindrome(currentHighest)

  return currentHighest
}

console.log(findBestPalindrome())

// helper functions

function isPalindrome(value) {
  const palindrome = value.toString()

  const firstHalf = palindrome.slice(0, Math.floor(palindrome.length / 2))

  const secondHalf = palindrome.length % 2 === 0
    ? palindrome.slice(Math.floor(palindrome.length / 2), palindrome.length)
    : palindrome.slice(Math.floor(palindrome.length / 2) + 1, palindrome.length)

  return firstHalf == secondHalf.split('').reverse().join('')
    ? true
    : false
}

function isDivisible(value, factor = 999) {
  if(factor < 100) return null

  if(value % factor === 0) return { factorA: factor, factorB: value / factor }

  return isDivisible(value, factor - 1)
}

function findHighestPalindrome(maxValue, diff = 1) {
  let currentValue = maxValue - diff

  if(isPalindrome(currentValue)) return currentValue

  return findHighestPalindrome(maxValue, diff + 1)
}
