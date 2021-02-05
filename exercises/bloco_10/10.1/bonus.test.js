const searchEmployee = require('./bonus');

describe('Testes para a função searchEmployee', () => {
  it('Checar se a função existe', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Checar se searchEmployee é uma função', () => {
    expect(typeof(searchEmployee)).toBe('function');
  });

});