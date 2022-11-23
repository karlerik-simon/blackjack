var cards = [
    // Spades
    { cardId: "SAC", cardName: "Ace of Spades", color: "spades", value: 1, img: "res/img/cards/cardimage.png" },
    { cardId: "S2", cardName: "Two of Spades", color: "spades", value: 2, img: "res/img/cards/cardimage.png" },
    { cardId: "S3", cardName: "Three of Spades", color: "spades", value: 3, img: "res/img/cards/cardimage.png" },
    { cardId: "S4", cardName: "Four of Spades", color: "spades", value: 4, img: "res/img/cards/cardimage.png" },
    { cardId: "S5", cardName: "Five of Spades", color: "spades", value: 5, img: "res/img/cards/cardimage.png" },
    { cardId: "S6", cardName: "Six of Spades", color: "spades", value: 6, img: "res/img/cards/cardimage.png" },
    { cardId: "S7", cardName: "Seven of Spades", color: "spades", value: 7, img: "res/img/cards/cardimage.png" },
    { cardId: "S8", cardName: "Eight of Spades", color: "spades", value: 8, img: "res/img/cards/cardimage.png" },
    { cardId: "S9", cardName: "Nine of Spades", color: "spades", value: 9, img: "res/img/cards/cardimage.png" },
    { cardId: "S10", cardName: "Ten of Spades", color: "spades", value: 10, img: "res/img/cards/cardimage.png" },
    { cardId: "SKN", cardName: "Knight of Spades", color: "spades", value: 11, img: "res/img/cards/cardimage.png" },
    { cardId: "SDA", cardName: "Dame of Spades", color: "spades", value: 12, img: "res/img/cards/cardimage.png" },
    { cardId: "SKI", cardName: "King of Spades", color: "spades", value: 13, img: "res/img/cards/cardimage.png" },
    // Hearts
    { cardId: "HAC", cardName: "Ace of Hearts", color: "hearts", value: 1, img: "res/img/cards/cardimage.png" },
    { cardId: "H2", cardName: "Two of Hearts", color: "hearts", value: 2, img: "res/img/cards/cardimage.png" },
    { cardId: "H3", cardName: "Three of Hearts", color: "hearts", value: 3, img: "res/img/cards/cardimage.png" },
    { cardId: "H4", cardName: "Four of Hearts", color: "hearts", value: 4, img: "res/img/cards/cardimage.png" },
    { cardId: "H5", cardName: "Five of Hearts", color: "hearts", value: 5, img: "res/img/cards/cardimage.png" },
    { cardId: "H6", cardName: "Six of Hearts", color: "hearts", value: 6, img: "res/img/cards/cardimage.png" },
    { cardId: "H7", cardName: "Seven of Hearts", color: "hearts", value: 7, img: "res/img/cards/cardimage.png" },
    { cardId: "H8", cardName: "Eight of Hearts", color: "hearts", value: 8, img: "res/img/cards/cardimage.png" },
    { cardId: "H9", cardName: "Nine of Hearts", color: "hearts", value: 9, img: "res/img/cards/cardimage.png" },
    { cardId: "H10", cardName: "Ten of Hearts", color: "hearts", value: 10, img: "res/img/cards/cardimage.png" },
    { cardId: "HKN", cardName: "Knight of Hearts", color: "hearts", value: 11, img: "res/img/cards/cardimage.png" },
    { cardId: "HDA", cardName: "Dame of Hearts", color: "hearts", value: 12, img: "res/img/cards/cardimage.png" },
    { cardId: "HKI", cardName: "King of Hearts", color: "hearts", value: 13, img: "res/img/cards/cardimage.png" },
    // Clubs
    { cardId: "CAC", cardName: "Ace of Clubs", color: "clubs", value: 1, img: "res/img/cards/cardimage.png" },
    { cardId: "C2", cardName: "Two of Clubs", color: "clubs", value: 2, img: "res/img/cards/cardimage.png" },
    { cardId: "C3", cardName: "Three of Clubs", color: "clubs", value: 3, img: "res/img/cards/cardimage.png" },
    { cardId: "C4", cardName: "Four of Clubs", color: "clubs", value: 4, img: "res/img/cards/cardimage.png" },
    { cardId: "C5", cardName: "Five of Clubs", color: "clubs", value: 5, img: "res/img/cards/cardimage.png" },
    { cardId: "C6", cardName: "Six of Clubs", color: "clubs", value: 6, img: "res/img/cards/cardimage.png" },
    { cardId: "C7", cardName: "Seven of Clubs", color: "clubs", value: 7, img: "res/img/cards/cardimage.png" },
    { cardId: "C8", cardName: "Eight of Clubs", color: "clubs", value: 8, img: "res/img/cards/cardimage.png" },
    { cardId: "C9", cardName: "Nine of Clubs", color: "clubs", value: 9, img: "res/img/cards/cardimage.png" },
    { cardId: "C10", cardName: "Ten of Clubs", color: "clubs", value: 10, img: "res/img/cards/cardimage.png" },
    { cardId: "CKN", cardName: "Knight of Clubs", color: "clubs", value: 11, img: "res/img/cards/cardimage.png" },
    { cardId: "CDA", cardName: "Dame of Clubs", color: "clubs", value: 12, img: "res/img/cards/cardimage.png" },
    { cardId: "CKI", cardName: "King of Clubs", color: "clubs", value: 13, img: "res/img/cards/cardimage.png" },
    // Diamonds
    { cardId: "DAC", cardName: "Ace of Diamonds", color: "diamonds", value: 1, img: "res/img/cards/cardimage.png" },
    { cardId: "D2", cardName: "Two of Diamonds", color: "diamonds", value: 2, img: "res/img/cards/cardimage.png" },
    { cardId: "D3", cardName: "Three of Diamonds", color: "diamonds", value: 3, img: "res/img/cards/cardimage.png" },
    { cardId: "D4", cardName: "Four of Diamonds", color: "diamonds", value: 4, img: "res/img/cards/cardimage.png" },
    { cardId: "D5", cardName: "Five of Diamonds", color: "diamonds", value: 5, img: "res/img/cards/cardimage.png" },
    { cardId: "D6", cardName: "Six of Diamonds", color: "diamonds", value: 6, img: "res/img/cards/cardimage.png" },
    { cardId: "D7", cardName: "Seven of Diamonds", color: "diamonds", value: 7, img: "res/img/cards/cardimage.png" },
    { cardId: "D8", cardName: "Eight of Diamonds", color: "diamonds", value: 8, img: "res/img/cards/cardimage.png" },
    { cardId: "D9", cardName: "Nine of Diamonds", color: "diamonds", value: 9, img: "res/img/cards/cardimage.png" },
    { cardId: "D10", cardName: "Ten of Diamonds", color: "diamonds", value: 10, img: "res/img/cards/cardimage.png" },
    { cardId: "DKN", cardName: "Knight of Diamonds", color: "diamonds", value: 11, img: "res/img/cards/cardimage.png" },
    { cardId: "DDA", cardName: "Dame of Diamonds", color: "diamonds", value: 12, img: "res/img/cards/cardimage.png" },
    { cardId: "DKI", cardName: "King of Diamonds", color: "diamonds", value: 13, img: "res/img/cards/cardimage.png" }
];
var Card = /** @class */ (function () {
    function Card(color, cardValue, image) {
        this.color = color;
        this.value = cardValue;
        this.image = image;
    }
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck(cards) {
        this.cards = cards;
        this.count = cards.length;
    }
    Deck.prototype.shuffle = function () {
        if (this.count === 0 || this.cards.length === 0) {
            console.log("WARN: No cards in deck to shuffle");
            return;
        }
        var newDeck = [];
        var prevDeck = this.cards;
        for (var i = 0; i < this.count; i++) {
            var randomIndex = Math.floor(Math.random() * prevDeck.length);
            newDeck.push(prevDeck[randomIndex]);
            prevDeck.splice(randomIndex, 1);
        }
        this.cards = newDeck;
    };
    Deck.prototype.display = function () {
        this.cards.forEach(function (card) {
            console.log(card.color + ", " + card.value);
        });
    };
    Deck.prototype.insertCard = function () {
    };
    Deck.prototype.removeCard = function (index) {
        if (this.cards.length === 0 || this.count === 0) {
            console.log("INFO: Deck is empty, hence no cards to remove");
            return;
        }
        if (index < 0) {
            console.log("WARN: Cannot have a negative index");
            return;
        }
        if (index >= this.count) {
            console.log("WARN: Index cannot be greator then the length of the deck");
            return;
        }
        var card = this.cards[index];
        this.cards.splice(index, 1);
        return card;
    };
    Deck.prototype.drawCardFromTop = function () {
        return this.removeCard(0);
    };
    Deck.prototype.drawRandomCard = function () {
        if (this.count === 0 || this.cards.length === 0) {
            console.log("WARN: No cards in deck, hence no cards to draw");
            return;
        }
        var randomIndex = Math.floor(Math.random() * this.count);
        return this.removeCard(randomIndex);
    };
    return Deck;
}());
// Main program as of yet
var deckCards = [];
cards.forEach(function (card) {
    deckCards.push(new Card(card.color, card.value, card.img));
});
var deck = new Deck(deckCards);
deck.shuffle();
deck.display();
var drawnCard = deck.drawRandomCard();
if (drawnCard === null) {
    console.log("WARN: Could not deaw card from deck");
}
else {
    var dString = "".concat(drawnCard.color, ": ").concat(drawnCard.value);
    console.log("\nDrawn card:\n");
    console.log(dString);
}
