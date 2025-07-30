// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
const arbitraryArrayOfNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = arbitraryArrayOfNumbers.length - 1;

// 1. перебрати його циклом while
while (i >= 0) {
  console.log("while iteration reverse: ", arbitraryArrayOfNumbers[i]);
  i--;
}

// 2. перебрати його циклом for
for (let i = arbitraryArrayOfNumbers.length - 1; i >= 0; i--) {
  console.log("for iteration reverse: ", arbitraryArrayOfNumbers[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = arbitraryArrayOfNumbers.length - 1;
while (i >= 0) {
  if (i % 2 !== 0) {
    console.log(
      `while iteration with only odd indexes reverse: ${i}: ${arbitraryArrayOfNumbers[i]}`
    );
  }
  i--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = arbitraryArrayOfNumbers.length - 1; i >= 0; i--) {
  if (i % 2 !== 0) {
    console.log(
      `for iteration with only odd indexes reverse: ${i}: ${arbitraryArrayOfNumbers[i]}`
    );
  }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = arbitraryArrayOfNumbers.length - 1;
while (i >= 0) {
  if (i % 2 === 0) {
    console.log(
      `while iteration with only even numbers reverse: ${arbitraryArrayOfNumbers[i]}`
    );
  }
  i--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = arbitraryArrayOfNumbers.length - 1; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(
      `for iteration with only even numbers reverse: ${arbitraryArrayOfNumbers[i]}`
    );
  }
}

// 7. замінити кожне число, кратне 3, на слово “okten”
for (let i = arbitraryArrayOfNumbers.length - 1; i >= 0; i--) {
  if (arbitraryArrayOfNumbers[i] % 3 === 0) {
    arbitraryArrayOfNumbers[i] = "okten";

    console.log(
      `replace each number that is a multiple of three reverse: ${i}: ${arbitraryArrayOfNumbers[i]}`
    );
  }
}

console.log(arbitraryArrayOfNumbers.reverse());
