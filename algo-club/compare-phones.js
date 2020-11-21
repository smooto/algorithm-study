/*
Interview question encountered by Briseida

Write a function that accepts as input two lists of features, one for Phone X and one for Phone Y, and returns all of the features that are present in Phone Y and not present in Phone X.

***Example***
Inputs:
phone X [
  'long lasting battery',
  'clear display',
  'great camera',
  'storage space'
]
phone Y [
  'clear display',
  'long lasting battery',
  'great camera',
  'warp-speed word processing'
]
Output: 'warp-speed word processing'

***Constraints***
1 <= n <= 100, where n = number of features in one phone
*/

const comparePhones = (x, y) => {
  return y.filter(curr => !x.includes(curr))
}

module.exports = comparePhones
