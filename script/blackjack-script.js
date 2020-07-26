/*import {test} from './modules/test-script.js'
test();
Modules won't work unless done through a server
also script type needs to = 'module' */


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

  this.shuffle = function() {
    ;
  }

  this.dealOne = function(currentPlayer, playerHands) {
    // Deals one random card from the deck to the player.
    let currentHand = currentPlayer;
    let dealtCardIndex = Math.floor(Math.random() * this.cardsInDeck.length);
    let dealtCard = this.cardsInDeck.splice(dealtCardIndex, 1);
    playerHands[currentPlayer].push(dealtCard[0]);

    // Display the card:
    let graphicCard = document.createElement('p');
    graphicCard.id = 'graphicCard';
    graphicCard.textContent = playerHands[currentPlayer][(playerHands[currentPlayer]).length - 1];
    graphicHand.appendChild(graphicCard);
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


// click start to begin a new game, dealing 2 cards to the hand.
const startBtn = document.getElementById('start');
const dealBtn = document.getElementById('deal');
const graphicHand = document.getElementById('graphicHand');
dealBtn.style.visibility = 'hidden';
let blackjackGame;

startBtn.addEventListener('click', newGame);
function newGame() {
  blackjackGame = new Blackjack();
  console.log(blackjackGame.hand);
  startBtn.style.display = 'None';
  dealBtn.style.visibility = 'visible';
  return blackjackGame;
}


/** 
 *  Child class for blackjack game. Contains blackjack rules functions.
 */
function Blackjack() {
  // create a new 52 card deck for one player.
  PlayingCards.call(this, 1);
  // initialize score for player
  this.score = 0;
  // Initialize player hand. Is a 2D array where the outer array length represents num players (only one in this case).
  this.hand = [[]];

  this.get_score = function(card_name) {
    let blackjack_deck = new PlayingCards();
    let player_hand = this.hand;
    let card_score = 0;
    card_name = player_hand[0][player_hand[0].length - 1];
    card_name = card_name.split(' ');
    card_name = card_name[0].toString();
    face_cards = ['Queen', 'Jack', 'King'];
    for (let i = 0, j = 13; i < j; i++) {
      if (card_name === blackjack_deck.ranks[i]) {
        if (face_cards.includes(card_name)) {
          card_score = 10;
        }
        else {
          card_score = i + 1;
        }
        break;
      }
    }
    this.score += card_score;
    console.log("score is " + this.score.toString());
  }

  /**
  * Deals one card to a player. Adds that card to player's score.
  */
  this.hit = function() {
    this.dealOne(0, this.hand);
    this.get_score(this.hand);
  }

    // Deal two cards to hand. 
    this.hit();
    console.assert(this.score > 0);
    this.hit();
    console.assert(this.score > 0);

  this.win_lose = function() {
    if (this.score == 21) {
      console.log("21!");
    }
    if (this.score > 21) {
      console.log("busted!");
    }
  }
}


  /*
Blackjack.prototype.hit() = function() {
  Blackjack.dealOne(0, Blackjack.hand);
}
*/


dealBtn.addEventListener('click', hitMe);
function hitMe() {
  blackjackGame.hit();
}
dealBtn.addEventListener('click', win_lose);
function win_lose() {
  blackjackGame.win_lose(this.score);
}
let myDeck = new PlayingCards();
console.log(myDeck.cards);


