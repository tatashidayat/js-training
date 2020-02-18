const { calculate, total } = require('../index.js')

//  Calculate
test('give 0 should return not valid', () => {
  expect(calculate(0)).toBe('0 not a valid square');
})

test('give 1 should return 1', () => {
  expect(calculate(1)).toBe(BigInt(1));
})

test('give 32 should return 2147483648', () => {
  expect(calculate(32)).toBe(BigInt(2147483648));
})

test('give 65 should return not valid', () => {
  expect(calculate(65)).toBe('65 not a valid square');
})

// Total

test('call total should return', () => {
  expect(total()).toBe(BigInt(18446744073709551615n));
})