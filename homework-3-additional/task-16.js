// 1. Створити пустий масив та :
//
//     a. заповнити його 50 парними числами за допомоги циклу.
//
//     b. заповнити його 50 непарними числами за допомоги циклу.
//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

let number = 0;
//     a. заповнити його 50 парними числами за допомоги циклу.
const evenNumbers = [];

while (evenNumbers.length < 50) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
  number++;
}

console.log(evenNumbers);

//     b. заповнити його 50 непарними числами за допомоги циклу.
const oddNumbers = [];

number = 0;
while (oddNumbers.length < 50) {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
  number++;
}

console.log(oddNumbers);

//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
const randomNumbers = [];

for (let i = 0; i < 20; i++) {
  const sign = Math.random() < 0.5 ? -1 : 1;
  const magnitude = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  randomNumbers.push(sign * magnitude);
}

console.log(randomNumbers);

// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
const randomDiapasonNumbers = [];

for (let i = 0; i < 20; i++) {
  randomDiapasonNumbers.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);
}

console.log(randomDiapasonNumbers);
