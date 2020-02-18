const { fibonacci, total } = require('../index.js');

test(`give 1 should return 1`, () => {
    expect(fibonacci(1)).toBe(1);
})

test(`give 2 should return 1`, () => {
    expect(fibonacci(2)).toBe(1);
})

test(`give 3 should return 2`, () => {
    expect(fibonacci(3)).toBe(2);
})

test(`give 10 should return 55`, () => {
    expect(fibonacci(10)).toBe(55);
})

test(`give 4 should return 3`, () => {
    expect(total(4)).toBe(3);
})