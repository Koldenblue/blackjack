// Parent class Deck.
function Deck(playerCount=4) {
  // Sets up an empty deck array.
  this.cardsInDeck = [];
  this.playerCount = playerCount;
  // Sets up a 2d hands array, with each element of the array being an empty array representing an empty hand.
  this.hands = [];
  for (let x = 0; x < playerCount; x++) {
    this.hands.push([]);
  }

  // function for dealing cards out of deck.
  this.dealAll = function() {
    // currentHand represents the player the card will be dealt to.
    let currentHand = 0;
    // Remove a random card from the deck and place it in a hand. Loop until all cards in deck are dealt.
    for (let i = 0, j = this.cardsInDeck.length; i < j; i++) {
      let cardsRemaining = this.cardsInDeck.length;
      let dealtCardIndex = Math.floor(Math.random() * cardsRemaining);
      // Splice the dealt card out of the deck. Add the 0th element of dealtCard (a string of the card name) to the next player's hand.
      let dealtCard = this.cardsInDeck.splice(dealtCardIndex, 1);
      this.hands[currentHand].push(dealtCard[0]);
      // Increment currentHand so as to deal to the next player.
      currentHand++;
      if (currentHand == this.playerCount) {
        currentHand = 0;
      }
    }
  }

  this.dealOne = function(currentPlayer) {
    let currentHand = currentPlayer;
    let dealtCardIndex = Math.floor(Math.random() * this.cardsInDeck.length);
    let dealtCard = this.cardsInDeck.splice(dealtCardIndex, 1);
    this.hands[currentPlayer].push(dealtCard[0]);
  }
}


// child of Deck class:
function PlayingCards(playerCount=4) {
  // Inherit the properties of the Deck class:
  Deck.call(this);

  // Build a deck of 52 cards
  // cards is an array of strings, each corresponding to a card
  const num_suits = 4;
  const num_ranks = 13;
  this.suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  this.ranks = ['Ace'];
  for (let i = 2; i <= 10; i++) {
    this.ranks.push(i.toString());
  };
  this.ranks.push('Jack', 'Queen', 'King');
  this.cards = [];
  for (let i = 0; i < num_suits; i++) {
    for (let j = 0; j < num_ranks; j++) {
      this.cards.push(this.ranks[j] + " of " + this.suits[i]);
    };
  };
  this.cardsInDeck = this.cards;
}

/*
function Hearts() {
  PlayingCards.call(this);
}
*/

const btn
function Blackjack() {
  PlayingCards.call(this, 1);
}

let myDeck = new PlayingCards();
console.log(myDeck.cards);

