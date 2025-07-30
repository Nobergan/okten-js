// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const array = [100, 250, 50, 168, 120, 345, 188];

const sum = array.reduce((acc, item) => acc + item, 0);
const average = sum / array.length;

console.log("Average:", average.toFixed(2));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
const randomNumbers = [];

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 5) + 1);
}

console.log("randomNumbers: ", randomNumbers);

const newRandomNumbers = randomNumbers.map(item => item * 5);

console.log("newRandomNumbers: ", newRandomNumbers);

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
const randomArray = [42, 'hello', true, 3.14, '123', null, 0, 'world', -5, undefined];

const numbersOnly = [];

randomArray.forEach(item => {
  if (typeof item === 'number') {
    numbersOnly.push(item);
  }
})

console.log('numbersOnly: ', numbersOnly);
