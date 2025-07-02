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
