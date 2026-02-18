// test.js
const assert = require('assert');

function add(a, b) {
  return a + b;
}

try {
  assert.strictEqual(add(2, 3), 5);
  console.log("Unit tests passed.");
} catch (err) {
  console.error("Unit tests failed.", err);
  process.exit(1);
}
