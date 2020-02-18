const sum = require('../index.js');

test('give 0 should return not natural number', () => {
    expect(sum(0)).toBe('0 isn\'t natural number');
});

test('give -1 should return not natural number', () => {
    expect(sum(-1)).toBe('-1 isn\'t natural number');
});

test('give 1 should return 1', () => {
    expect(sum(1)).toBe(1);
});

test('give 2 should return 5', () => {
    expect(sum(2)).toBe(5);
});

test('give 100000 should return 333338333350000', () => {
    expect(sum(100000)).toBe(333338333350000);
});