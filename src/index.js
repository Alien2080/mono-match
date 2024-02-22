/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import { styles } from './styles.css'; // Needed to the CSS file gets included by Webpack.
import{ Deck } from './assets/code/deck';
import { DOMController } from './assets/code/domController';

// Webpack-related environment.
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// const deck = new Deck(7);
const n = 9;

console.log(`Number of cards: ${Deck.calcNumCardsInDeck(n)}`);
console.log(`Number of symbols in total: ${Deck.calcNumOfSymbols(n)}`);
console.log(`Number of symbols per card: ${Deck.calcNumSymbolsPerCard(n)}`);

const deck = new Deck(7);
deck.printDeck();

const domController = new DOMController(deck, 'cardContainer');
domController.render();