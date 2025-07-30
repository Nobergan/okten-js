// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

const array = ["a", "b", "c"];
let word = "";

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
for (let i = 0; i < array.length; i++) {
  word += array[i];
}

console.log("for: ", word);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
word = "";
let i = 0;

while (i < array.length) {
  word += array[i];
  i++;
}

console.log("while: ", word);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.
word = "";

for (const item of array) {
  word += item;
}

console.log("for of: ", word);
