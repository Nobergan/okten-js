// Створити функцію, яка робить глибоку копію об’єкта.
//
// Додати перевірки на undefined, null, NaN.
//
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

const deepCopy = (object) => {
  if (object === undefined || object === null || typeof object !== "object") {
    throw new Error("Invalid input");
  }

  const functions = [];

  for (const key in object) {
    if (typeof object[key] === "function") {
      functions.push({ clonedFunc: object[key], key });
    }
  }

  const clonedObj = JSON.parse(JSON.stringify(object));

  functions.forEach((fn) => {
    clonedObj[fn.key] = fn.clonedFunc;
  });

  console.log("clonedObj", clonedObj);

  return clonedObj;
};

const originalObj = {
  id: 1111,
  name: "Nika",
  greet() {
    console.log(`Hi ${this.name}`);
  },
  sayId() {
    console.log(`Your id is ${this.id}`);
  },
};

const clone = deepCopy(originalObj);
console.log("originalObj: ", originalObj);

clone.greet();
clone.sayId();

// ------------------------------------------------------------------------------------------

// const deepCopy = (obj) => {
//   if (obj === null) return null;
//
//   if (typeof obj !== "object" && typeof obj !== "function") {
//     return obj;
//   }
//
//   const result = Array.isArray(obj) ? [] : {};
//
//   for (const key in obj) {
//     const value = obj[key];
//
//     if (typeof value === "function") {
//       result[key] = value;
//     } else if (typeof value === "object" && value !== null) {
//       result[key] = deepCopy(value);
//     } else if (typeof value === "number" && Number.isNaN(value)) {
//       result[key] = NaN;
//     } else {
//       result[key] = value;
//     }
//   }
//
//   return result;
// };
//
// const original = {
//   name: "Nika",
//   age: NaN,
//   greet() {
//     console.log(`Hi, ${this.name}`);
//   },
//   nested: {
//     say() {
//       console.log("Nested");
//     },
//   },
// };
//
// const clone = deepCopy(original);
// console.log("original: ", original);
// console.log("clone: ", clone);
// console.log("original === clone: ", original === clone);
//
// // deepCopy(undefined);
//
// // deepCopy(null);
//
// // deepCopy(NaN);
//
// // clone.greet();
