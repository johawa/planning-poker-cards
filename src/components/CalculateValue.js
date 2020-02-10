import React from "react";

const MAP_VALUES = [
    { index: 0, value: "Card_DONT_KNOW" },
    { index: 1, value: "Card_INFINIT" },
    { index: 3, value: 0 },
    { index: 4, value: 1 },
    { index: 5, value: 2 },
    { index: 6, value: 3 },
    { index: 7, value: 5 },
    { index: 8, value: 8 },
    { index: 9, value: 13 },
    { index: 10, value: 20 },
    { index: 11, value: 40 },
    { index: 12, value: 100 }
];

export default function CalculateValue({ selectedCards }) {
    const toSum = selectedCards.map(cardIndex => {
        return MAP_VALUES.filter(mapValue => mapValue.index === cardIndex);
    });

    let sum = 0;
    toSum.flat().map(item => (sum += item.value));

    return <p>{sum}</p>;
}
