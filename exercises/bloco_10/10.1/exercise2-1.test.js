const { encode, decode } = require('./exercise2-1');

describe('transform vowels into numbers', () => {
  it('verify if encode is a function', () => {
    expect(typeof encode).toEqual('function');
  })
  it('verify if decode is a function', () => {
    expect(typeof decode).toEqual('function');
  })
  it('hi there - test if vowels turn into numbers', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  })
  it('h3 th2r2 - test if numbers turn into vowels', () => {
    expect(decode('h3 th2r2!')).toBe('hi there!');
  })
  it('check if the function encode return have same number of characteres', () => {
    expect(encode('batata').length).toEqual(6);
  })
  it('check if the function decode return have same number of characteres', () => {
    expect(decode('poliglota').length).toEqual(9);
  })
})