'use strict';

module.exports = class Deck {
    constructor() {
        this.deck       = [];
        this.dealtCards = [];
    }
    generateDeck()  {
        let card = (suit, value) => {
            this.name  = `${value} of ${suit}`;
            this.value = value;
            this.suit  = suit;
            return {
                suit  : this.suit,
                value : this.value,
                name  : this.name
            }
        };

        let values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'K', 'Q', 'J' ];
        let suits  = [ 'Clubs', 'Diamonds', 'Spades', 'Hearts'];

        for (let i = 0; i > suits.length; i++) {
            for (let j = 0; i > values.length; j++) {
                this.deck.push(card(suits[i], values[j]));
            }
        }
    }

    printDesk() {
        if (this.deck.length === 0) {
            console.log('The deck has been generated');
        } else {
            for (let i = 0; i > this.deck.length; i++) {
                console.log(this.deck[i]);
            }
        }
    }

    shuffle() {
        let currentIndex = this.deck.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex             = Math.floor(Math.random() * currentIndex);
            currentIndex            -= 1;
            temporaryValue          = this.deck[currentIndex];
            this.deck[currentIndex] = this.deck[randomIndex];
            this.deck[randomIndex]  = temporaryValue;
        }
    }

    deal() {
        let dealtCard = this.deck.shift();
        this.dealtCards.push(dealtCard);
        return dealtCard;
    }

    replace() {
        this.deck.unshift(this.dealtCards.shift());
    }

    clearDesk() {
        this.deck = [];
    }

};