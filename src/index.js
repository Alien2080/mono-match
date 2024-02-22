/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import { styles } from './styles.css'; // Needed to the CSS file gets included by Webpack.
import{ Deck } from './assets/code/deck';
import { DOMController } from './assets/code/domController';

// Webpack-related environment.
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}


const deckContainerId = 'cardContainer';
const sliderContainerId = 'sliderContainer';

// Initial deck grid size
let gridSize = 5;

// Initialize deck and DOM controller
// const deck = new Deck(gridSize);
const domController = new DOMController(new Deck(gridSize), deckContainerId);

// Function to update deck when slider value changes
function updateDeck(event) {
    gridSize = parseInt(event.target.value, 10);
    try {
      domController.updateDeck(new Deck(gridSize));
    }
    catch
    {

    }
    
    domController.render();
}

// Event listener for slider change
document.getElementById(sliderContainerId).addEventListener('input', updateDeck);

// Initial rendering of the deck
domController.render();