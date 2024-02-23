import{ Deck } from './classes/deck';
import { DeckPage } from './pages/deckPage';

export class DOMController {
  constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.deckPage = '';
  }

  render(gridSize) {
    this.container.innerHTML = ''; // Clear previous content
    this.createDeckPage(gridSize); 
  }

  createDeckPage(gridSize) {
    // Create deckPage container.
    const deckPageContainer = document.createElement('div');
    deckPageContainer.id = 'deckPageContainer';
    // Append deckPage container to main container.
    this.container.appendChild(deckPageContainer);

    // Create deckPage.
    this.deckPage = new DeckPage(new Deck(gridSize), 'deckPageContainer')
    this.deckPage.render();
  }
}

export default DOMController;