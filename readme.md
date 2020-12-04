Just a repository for algorithm practice. Problems are sourced primarily from LeetCode and Project Euler.

Basic unit testing workflow for challenges:

_These steps can be run automatically with the command `npm run init-js-challenge <subdirectory-name> <challenge-name>`_

1. Set up algorithm in appropriate folder, and export:

```js
const exampleAlgorithm = () => {
  return 'Hello, world!'
}

module.exports = exampleAlgorithm
```

2. Set up unit test in appropriate file under `test/`, and import algorithm module:

```js
const { test } = require("qunit")
const exampleAlgorithm = require('../exampleDirectory/exampleAlgorithm')

QUnit.module(exampleAlgorithm)

QUnit.test('exampleAlgorithm', assert => {
  assert.equal(exampleAlgorithm(), 'Hello, world!')
})
```

3. Run challenge-specific test with `npm run test exampleAlgorithm`
 - `--watch` flag enabled by default