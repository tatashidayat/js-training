const { findOlderThan24Years, sumAllAge, getAllFemaleCoder } = require('../index.js')

test('should return all people older than 24', () => {
    expect(findOlderThan24Years().length).toBe(3);
});

test('should return sum of all ages', () => {
    expect(sumAllAge()).toBe(202);
});

test('should return female coder', () => {
    expect(getAllFemaleCoder().length).toBe(1);
});