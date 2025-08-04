// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//     – знайти піковий туз
//     – всі шістки
//     – всі червоні карти
//     – всі буби
//     – всі трефи від 9 та більше
//
// Приклад моделі об’єкту карти:
//
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

const cardSuits = ["spade", "diamond", "heart", "clubs"];
const cardValues = [
    "6",
    "7",
    "8",
    "9",
    "10",
    "ace",
    "jack",
    "queen",
    "king",
];
const cardColors = ["red", "black"];

// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
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

// Після опису, використовуючи функції масивів:
//     – знайти піковий туз
//     – всі шістки
//     – всі червоні карти
//     – всі буби
//     – всі трефи від 9 та більше

console.log(
    "ace of spades",
    cards.find(
        (card) => card.cardValue === "ace" && card.cardSuit === "spade"
    )
);

console.log(
    "all 6",
    cards.filter((card) => card.cardValue === "6")
);

console.log(
    "all red cards",
    cards.filter((card) => card.cardColor === "red")
);

console.log(
    "all diamond cards",
    cards.filter((card) => card.cardSuit === "diamond")
);

const clubValuesMoreThanNine = cardValues.slice(cardValues.indexOf("10"));
console.log(
    "all clubs cards more than 9",
    cards.filter(
        (card) =>
            card.cardSuit === "clubs" &&
            clubValuesMoreThanNine.includes(card.cardValue)
    )
);

console.log(
    "REDUCE all clubs cards more than 9",
    cards.reduce((acc, card) => {
        const clubValuesMoreThanNine = cardValues.slice(
            cardValues.indexOf("10")
        );

        if (
            card.cardSuit === "clubs" &&
            clubValuesMoreThanNine.includes(card.cardValue)
        ) {
            acc.push(card);
        }

        return acc;
    }, [])
);
