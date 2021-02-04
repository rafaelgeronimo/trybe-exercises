const fetchPromise = () => {
    const promise = new Promise((resolve, reject) => {
        const numbers = [];
        for (let index = 0; index < 10; index += 1) {
            numbers.push(Math.floor(Math.random() * 50) + 1);
            numbers[index] = numbers[index] * numbers[index];
        }
        const sumResults = Object.values(numbers).reduce(((acc, curr) => acc + curr), 0);
        (sumResults < 8000) ? resolve() : reject();
    });

    promise
        .then(() => console.log(`O resultado é menor que 8000`))
        .catch(() => console.log(`O resultado é maior que 8000!`))
}

fetchPromise();