const service = require('./exercise1');

describe('Testes da função', ()  => {
  it('Testa se a função foi chamada, seu retorno e quantas vezes', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(service.randomNumber(8, 2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
})