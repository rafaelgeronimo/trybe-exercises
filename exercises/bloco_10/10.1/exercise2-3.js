function hydrate(phrase) {
  let numbers = (phrase.match(/\d+/g));
  let total = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    total += parseInt(numbers[index]);
  }
  if (total === 1) return (total + ' copo de água');
  return (total + ' copos de água');
}

console.log(hydrate('1 cerveja'));

module.exports = hydrate;