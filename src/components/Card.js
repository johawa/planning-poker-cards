import React from "react";
import "./Card.css";

export default function Card({
    currentCards,
    index,
    handleClickOnCardProp,
    imgSrcProp
}) {
    const isItSlected = currentCards.includes(index);

    
    return (
        <figure
            data-selected={isItSlected}
            data-index={index}
            className="card"
            onClick={handleClickOnCardProp(index)}
        >
            <img src={imgSrcProp} alt="" className="card-image" />
            <figcaption></figcaption>
        </figure>
    );
}
