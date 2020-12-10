const { test } = require("qunit")
const dayOfTheProgrammer = require('../algo-club/day-of-the-programmer')

QUnit.module(dayOfTheProgrammer)

QUnit.test('dayOfTheProgrammer', assert => {
  assert.equal(dayOfTheProgrammer(2017), '13.09.2017')
  assert.equal(dayOfTheProgrammer(2016), '12.09.2016')
  assert.equal(dayOfTheProgrammer(1800), '12.09.1800')
})
