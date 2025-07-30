// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const arrayNumbers = [10, 25, -3, 0, 99];

for (let i = 0; i < arrayNumbers.length; i++) {
  console.log(arrayNumbers[i]);
}

// Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
const arrayStrings = ["apple", "hello", "JavaScript", "sun", "world"];

for (const string of arrayStrings) {
  console.log(string);
}

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const arrayMixed = ["text", 123, true, "another string", false];

for (const item of arrayMixed) {
  console.log(item);
}

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
const arrayMixed2 = [123, "text", true, "another string", false];

arrayMixed2.forEach((item) => {
  if (typeof item === "boolean") {
    console.log(item);
  }
});

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
const arrayMixed3 = [123, "text", true, "another string", 456];
arrayMixed3
  .filter((item) => typeof item === "number")
  .forEach((number) => console.log(number));

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
const arrayMixed4 = [123, "text", true, "another string", 456];
arrayMixed4.map((item) =>
  typeof item === "string" ? console.log(item) : null
);

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const arrayEmpty = [];

arrayEmpty[0] = 42;
arrayEmpty[1] = "Hello";
arrayEmpty[2] = true;
arrayEmpty[3] = null;
arrayEmpty[4] = undefined;
arrayEmpty[5] = [1, 2, 3];
arrayEmpty[6] = { name: "John" };
arrayEmpty[7] = false;
arrayEmpty[8] = "World";

for (const item in arrayEmpty) {
  console.log(`Element ${item}:`, arrayEmpty[item]);
}

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
  document.write(`${i + 1} <br>`);
}

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
  console.log(i + 1);
  document.write(`${i + 1} <br>`);
}

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i + 1);
    document.write(`${i + 1} <br>`);
}

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      console.log(i + 1);
      document.write(`${i + 1} <br>`);
    }
}

// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i + 1);
        document.write(`${i + 1} <br>`);
    }
}

// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
// – знайти найбільшу книжку.
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//
// – знайти книжку/ки з найдовшою назвою
//
// – знайти книжку/ки, які писали 2 автори
//
// – знайти книжку/ки, які писав 1 автор
const books = [
  {
    title: "To Kill a Mockingbird",
    pages: 281,
    authors: ["Harper Lee"],
    genres: ["Fiction", "Classic", "Bildungsroman"],
  },
  {
    title: "1984",
    pages: 328,
    authors: ["George Orwell"],
    genres: ["Dystopian", "Science Fiction", "Political Fiction"],
  },
  {
    title: "The Hobbit",
    pages: 310,
    authors: ["J.R.R. Tolkien"],
    genres: ["Fantasy", "Adventure"],
  },
  {
    title: "The Great Gatsby",
    pages: 180,
    authors: ["F. Scott Fitzgerald"],
    genres: ["Fiction", "Classic"],
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    pages: 223,
    authors: ["J.K. Rowling"],
    genres: ["Fantasy", "Young Adult"],
  },
  {
    title: "A Game of Thrones",
    pages: 694,
    authors: ["George R.R. Martin"],
    genres: ["Fantasy", "Drama", "Political Fiction"],
  },
  {
    title: "The Catcher in the Rye",
    pages: 214,
    authors: ["J.D. Salinger"],
    genres: ["Fiction", "Coming-of-Age"],
  },
  {
    title: "Pride and Prejudice",
    pages: 279,
    authors: ["Jane Austen"],
    genres: ["Romance", "Classic", "Satire"],
  },
  {
    title: "The Alchemist",
    pages: 208,
    authors: ["Paulo Coelho"],
    genres: ["Adventure", "Fantasy", "Philosophy"],
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    pages: 443,
    authors: ["Yuval Noah Harari"],
    genres: ["Non-fiction", "History", "Anthropology"],
  },
];

// – знайти найбільшу книжку.
books.sort((a, b) => b.pages - a.pages);
console.log(books[0]);

// ----- Another option
if (books.length) {
  const theBiggestBook = books.reduce((maxBook, currentBook) => {
    return maxBook.pages > currentBook.pages ? maxBook : currentBook;
  }, books[0]);

  console.log(theBiggestBook);
}
