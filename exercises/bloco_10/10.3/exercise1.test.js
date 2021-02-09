const service = require('./exercise1');

describe('Bateria de testes', () => {
it('Checar se é uma função', () => {
    expect(typeof(service.randomNumber)).toEqual('function');
  });
  it('Testa se a função foi chamada, seu retorno e quantas vezes foi chamada', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
})