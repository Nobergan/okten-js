// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 1. перебрати його циклом while
//
// 2. перебрати його циклом for
//
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// 7. замінити кожне число, кратне 3, на слово “okten”
//
// 8. вивести масив у зворотньому порядку.
//
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

const arbitraryArrayOfNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;

// 1. перебрати його циклом while
while (i < arbitraryArrayOfNumbers.length) {
  console.log("while iteration: ", arbitraryArrayOfNumbers[i]);
  i++;
}

// 2. перебрати його циклом for
for (let i = 0; i < arbitraryArrayOfNumbers.length; i++) {
  console.log("for iteration: ", arbitraryArrayOfNumbers[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arbitraryArrayOfNumbers.length) {
  if (i % 2 !== 0) {
    console.log(
      `while iteration with only odd indexes: ${i}: ${arbitraryArrayOfNumbers[i]}`
    );
  }
  i++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arbitraryArrayOfNumbers.length; i++) {
  if (i % 2 !== 0) {
    console.log(
      `for iteration with only odd indexes: ${i}: ${arbitraryArrayOfNumbers[i]}`
    );
  }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arbitraryArrayOfNumbers.length) {
  if (i % 2 === 0) {
    console.log(
      `while iteration with only even numbers: ${arbitraryArrayOfNumbers[i]}`
    );
  }
  i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arbitraryArrayOfNumbers.length; i++) {
  if (i % 2 === 0) {
    console.log(
      `for iteration with only even numbers: ${arbitraryArrayOfNumbers[i]}`
    );
  }
}

console.log(arbitraryArrayOfNumbers);

// 7. замінити кожне число, кратне 3, на слово “okten”
for (let i = 0; i < arbitraryArrayOfNumbers.length; i++) {
  if (arbitraryArrayOfNumbers[i] % 3 === 0) {
    arbitraryArrayOfNumbers[i] = "okten";

    console.log(
      `replace each number that is a multiple of three: ${i}: ${arbitraryArrayOfNumbers[i]}`
    );
  }
}
console.log('replaced array', arbitraryArrayOfNumbers);

// 8. вивести масив у зворотньому порядку.
arbitraryArrayOfNumbers.reverse();
console.log("reversed array", arbitraryArrayOfNumbers);

// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
// IN FILE task-3-reverse.js

