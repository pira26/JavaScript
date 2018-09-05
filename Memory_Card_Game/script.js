const cards       = document.querySelectorAll('.memory-card');
let isCardFlipped = false;
let lockBoard     = false;
let firstCard, secondCard;

addCardEventListener(cards);

const addCardEventListener = (cards) => {
    return cards.map((card) => {
        return card.addEventListener('click', flipCard);
    });
}

const flipCard = () => {

    // wait for the set of cards to flip
    if (lockBoard) return;

    // disabled card flip when double clicking onto
    if (this === firstCard) return;

    this.classList.toggle('flip');

    if (!isCardFlipped) {
        isCardFlipped = true;
        firstCard     = this;
        return;
    }

    secondCard = this;
    checkforMatchingCards(isCardFlipped, lockBoard, firstCard, secondCard);
}

const checkforMatchingCards = (isCardFlipped, lockBoard, firstCard, secondCard) => {
    let isMatchingCards = firstCard.dataset.jsFramework === secondCard.dataset.jsFramework;
    return isMatchingCards
        ? disableFlip(isCardFlipped, lockBoard, firstCard, secondCard)
        : unflipCards(isCardFlipped, lockBoard, firstCard, secondCard);  
}

const disableFlip = (isCardFlipped, lockBoard, firstCard, secondCard) => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard(isCardFlipped, lockBoard, firstCard, secondCard);
}

const unflipCards = (isCardFlipped, lockBoard, firstCard, secondCard) => {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard(isCardFlipped, lockBoard, firstCard, secondCard);
    }, 1500);
}

const resetBoard = (isCardFlipped, lockBoard, firstCard, secondCard) => {
    [isCardFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

const shuffle = ((cards) => {
    return cards.map((card) => {
        let randomPosition = Math.random() * 12;
        card.style.order   = randomPosition;
    });
})();