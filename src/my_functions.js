let range = (a, b) => a > b ? [] : [a, ...range(a + 1, b)];

const multiply = arr => arr.reduce((p, a) => p * a);

const factorial = n => multiply(range(1, n)); 