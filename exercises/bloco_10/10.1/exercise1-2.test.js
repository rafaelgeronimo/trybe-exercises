const { TestScheduler } = require('jest');
const myRemove = require('./exercise1-2');

describe('myRemove', () => {
  test('verify if it returns expected array', () => {
    expect(() => (myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]));
  });
});