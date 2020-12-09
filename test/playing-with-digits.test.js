const { test } = require("qunit")
const playingWithDigits = require('../algo-club/playing-with-digits')

QUnit.module(playingWithDigits)

QUnit.test('playingWithDigits', assert => {
  assert.equal(playingWithDigits(89, 1), 1)
  assert.equal(playingWithDigits(92, 1), -1)
  assert.equal(playingWithDigits(695, 2), 2)
  assert.equal(playingWithDigits(46288, 3), 51)
})
