import test from 'node:test';
import assert from 'node:assert';

// Example function to test
function add(a, b) {
  return a + b;
}

test('add() adds two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

// Test to check if a string includes a substring
test('string includes substring', () => {
  const str = 'Hello, GitHub Copilot!';
  const substr = 'Copilot';
  assert.ok(str.includes(substr));
});

// You can add more tests for your own utility functions here.
// ...existing code...

// Test for array equality
test('arrays are equal', () => {
  assert.deepStrictEqual([1, 2, 3], [1, 2, 3]);
});

// Test for object property
test('object has property', () => {
  const user = { name: 'Adam', role: 'admin' };
  assert.ok('role' in user);
  assert.strictEqual(user.role, 'admin');
});

// Test for thrown error
function throwsError() {
  throw new Error('This is an error');
}
test('function throws an error', () => {
  assert.throws(throwsError, /This is an error/);
});

// Test for async function
async function fetchData() {
  return Promise.resolve('data');
}
test('async function returns data', async () => {
  const result = await fetchData();
  assert.strictEqual(result, 'data');
});
