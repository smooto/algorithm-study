const { test } = require("qunit")
const sumPairsThenSquare = require('../algo-club/sum-pairs-then-square')

QUnit.module(sumPairsThenSquare)

QUnit.test('sumPairsThenSquare', assert => {
  const nums = [1, 2, 3, 4]

  assert.equal(sumPairsThenSquare(nums), 58)
})