let range = (a, b) => (a > b ? [] : [a, ...range(b)]);

