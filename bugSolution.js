function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error('Invalid input types. Both arguments must be numbers.');
    return NaN; // or throw an error
  }
}

console.log(foo(1, 1)); // Output: 2
console.log(foo(1, '1')); // Output: Invalid input types...