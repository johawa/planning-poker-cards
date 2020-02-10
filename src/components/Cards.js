import React, { Component } from "react";
import Card_0 from "../images/pokerCards/0.png";
import Card_1 from "../images/pokerCards/1.png";
import Card_100 from "../images/pokerCards/100.png";
import Card_13 from "../images/pokerCards/13.png";
import Card_2 from "../images/pokerCards/2.png";
import Card_20 from "../images/pokerCards/20.png";
import Card_3 from "../images/pokerCards/3.png";
import Card_40 from "../images/pokerCards/40.png";
import Card_5 from "../images/pokerCards/5.png";
import Card_8 from "../images/pokerCards/8.png";
import Card_DONT_KNOW from "../images/pokerCards/dontknow.png";
import Card_INFINIT from "../images/pokerCards/infinit.png";
import CalculateValue from "./CalculateValue";
import Card from "./Card";
import "./Cards.css";

const DELAY_DECK_ROTATION = 500; //ms
const DELAY_SPREAD_CARDS = DELAY_DECK_ROTATION + 300; //ms
const DELAY_CHOOSE_CARD = DELAY_SPREAD_CARDS + 100; //ms
const ANGLE_SPREAD_CARDS = "75deg";
const ANGLE_DECK_ROTATION = "0";
const DURATION_CHOOSE_CARD = "0.3s";

const CARDS_ARRAY = [
    { index: 0, imgSrc: Card_DONT_KNOW },
    { index: 1, imgSrc: Card_INFINIT },
    { index: 3, imgSrc: Card_0 },
    { index: 4, imgSrc: Card_1 },
    { index: 5, imgSrc: Card_2 },
    { index: 6, imgSrc: Card_3 },
    { index: 7, imgSrc: Card_5 },
    { index: 8, imgSrc: Card_8 },
    { index: 9, imgSrc: Card_13 },
    { index: 10, imgSrc: Card_20 },
    { index: 11, imgSrc: Card_40 },
    { index: 12, imgSrc: Card_100 }
];

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.cards = React.createRef();
        this.state = {
            currentCards: [],
            amountOfCards: null
        };
    }

    componentDidMount() {
        // GET ARRAY FROM CARDS
        const cards = Array.from(this.cards.current.children);
        const amountOfCards = cards.length;
        this.setState({ amountOfCards });
        // set global css-length variable
        document.documentElement.style.setProperty(
            "--length",
            amountOfCards - 1
        );

        // SET INDEX PROPERTY FOR EACH CARD
        cards.forEach((card, i) => {
            card.style.setProperty("--index", i);
        });

        this.triggerStartingAnimation();
    }

    triggerStartingAnimation = () => {
        // DECK ANGLE
        setTimeout(() => {
            document.documentElement.style.setProperty(
                "--card-deck-rotation",
                ANGLE_DECK_ROTATION
            );
        }, DELAY_DECK_ROTATION);
        // SPREAD CARDS
        setTimeout(() => {
            document.documentElement.style.setProperty(
                "--angle",
                ANGLE_SPREAD_CARDS
            );
        }, DELAY_SPREAD_CARDS);
        // SET COOSE CARD ANIMATION DELAY
        setTimeout(() => {
            const cardDiv = this.cards.current;

            cardDiv.style.setProperty(
                "--card-animation-duration",
                DURATION_CHOOSE_CARD
            );
        }, DELAY_CHOOSE_CARD);
    };

    handleClickOnCard = cardIndex => {
        ///////////////////////////////////////////
        /// INCLUDE HANDLER FOR INFINTY AND ? /////
        ///////////////////////////////////////////

        const currentCardsState = this.state.currentCards;
        let newArray = [...currentCardsState];
        const infinteOrDontknow = newArray.includes(0 || 1);

        const whereIsIT = newArray.indexOf(cardIndex);

        if (whereIsIT === -1) {
            newArray.push(cardIndex);
        } else {
            newArray.splice(whereIsIT, 1);
        }

        // Set currentCard state to selected Card
        this.setState({
            currentCards: newArray
        });
    };

    render() {
        const { currentCards } = this.state;

        return (
            <div className="wrapper">
                <div className="poker-cards">
                    <div className="cards" ref={this.cards}>
                        {CARDS_ARRAY.map((card, index) => {
                            return (
                                <Card
                                    key={index}
                                    currentCards={currentCards}
                                    index={card.index}
                                    imgSrcProp={card.imgSrc}
                                    handleClickOnCardProp={index =>
                                        this.handleClickOnCard.bind(this, index)
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
                <CalculateValue selectedCards={currentCards} />
            </div>
        );
    }
}
