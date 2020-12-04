#!/usr/bin/env node

// npm run init-js-challenge <dir> <challenge-name>

// creates algorithm & test files with boilerplate
// starts test?

const fs = require('fs')
const toCamelCase = require('./camel-case')

const [,, challengeDirectory, challengeName] = process.argv

const challengePath = require('path').join(challengeDirectory, '/', `${challengeName}.js`)

const challengeBody = `/*
***Challenge name***

source for the challenge

challenge text
*/

/*
***Approach***

*/

const ${toCamelCase(challengeName)} = () => {
  return 'Hello, world!'
}

module.exports = ${toCamelCase(challengeName)}
`

fs.appendFile(challengePath, challengeBody, (err) => {
  if (err) throw err;
  console.log('Challenge file for ' + challengeName + ' created at ' + challengePath + '!');
})

const testPath = require('path').join('test/', `${challengeName}.test.js`)

const testBody = `const { test } = require("qunit")
const ${toCamelCase(challengeName)} = require('../${challengeDirectory}/${challengeName}')

QUnit.module(${toCamelCase(challengeName)})

QUnit.test('${toCamelCase(challengeName)}', assert => {
  assert.equal(${toCamelCase(challengeName)}(), 'Hello, world!')
})
`

fs.appendFile(testPath, testBody, (err) => {
  if (err) throw err;
  console.log('Unit test file for ' + challengeName + ' created at ' + testPath + '!');
})
