const sum = require('./exercise1-1');

describe('sum', () => {
  test('soma de dois valores', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  })
  
  test('lança um erro quando recebe string', () => {
    expect(() => sum(4, "5")).toThrow();
  }) 
  
  test('verifica qual a mensagem de erro apresentada', () => {
    expect(() => sum(4, '5')).toThrow(/parameters must be numbers/);
  })
});
