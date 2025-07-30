// 2. Вивести за допомогою console.log кожен третій елемент
const array = [1, 2, 3, 5, 7, 9, 56, 8, 67];

for (let i = 2; i < array.length; i += 3) {
  console.log(array[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
const array2 = [1, 2, 3, 4, 5, 6, 56, 8, 68];

for (let i = 2; i < array2.length; i += 3) {
  if (array2[i] % 2 === 0) {
    console.log(array2[i]);
  }
}

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
const newArray = [];
for (let i = 2; i < array2.length; i += 3) {
  if (array2[i] % 2 === 0) {
    console.log(array2[i]);
    newArray.push(array2[i]);
  }
}
console.log("newArray: ", newArray);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
const array3 = [1, 2, 3, 5, 7, 9, 56, 8, 67];

array3.forEach((item, index) => {
  if (index + 1 < array3.length && array3[index + 1] % 2 === 0) {
    console.log(item);
  }
});
