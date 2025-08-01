// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
//
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const cardSuits = ["spade", "diamond", "heart", "clubs"];
const cardValues = ["6", "7", "8", "9", "10", "ace", "jack", "queen", "king"];

const cards = [];
cardSuits.forEach((suit) => {
  cardValues.forEach((value) => {
    cards.push({
      cardSuit: suit,
      cardValue: value,
      cardColor: suit === "heart" || suit === "diamond" ? "red" : "black",
    });
  });
});

console.log(cards);

// const reduce = cards.reduce(
//   (acc, card) => {
//     if (card.cardSuit === "spade") {
//       acc.spades.push(card);
//     } else if (card.cardSuit === "diamond") {
//       acc.diamonds.push(card);
//     } else if (card.cardSuit === "heart") {
//       acc.hearts.push(card);
//     } else if (card.cardSuit === "clubs") {
//       acc.clubs.push(card);
//     }
//
//     return acc;
//   },
//   {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: [],
//   }
// );

// const groupedCards = cards.reduce(
//   (acc, card) => {
//     switch (card.cardSuit) {
//       case "spade":
//         acc.spades.push(card);
//         break;
//       case "diamond":
//         acc.diamonds.push(card);
//         break;
//       case "heart":
//         acc.hearts.push(card);
//         break;
//       case "clubs":
//         acc.clubs.push(card);
//         break;
//     }
//
//     return acc;
//   },
//   {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: [],
//   }
// );

const suitMap = {
    spade: 'spades',
    diamond: 'diamonds',
    heart: 'hearts',
    clubs: 'clubs',
};

const groupedCards = cards.reduce((acc, card) => {
    acc[suitMap[card.cardSuit]].push(card);
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
});

console.log(groupedCards);
