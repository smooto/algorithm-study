const { test } = require("qunit")
const comparePhones = require('../algo-club/compare-phones')

QUnit.module(comparePhones)

const phoneX = [
  'long lasting battery',
  'clear display',
  'great camera',
  'storage space'
]

const phoneY = [
  'clear display',
  'long lasting battery',
  'great camera',
  'warp-speed word processing'
]

QUnit.test('comparePhones', assert => {
  assert.equal(comparePhones(phoneX, phoneY), 'warp-speed word processing')
})