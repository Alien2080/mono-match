import { Deck } from '../classes/deck';

export class DeckPage {
  constructor(deck, containerId) {
    this.deck = deck;
    this.container = document.getElementById(containerId);
  }

  render() {
    this.container.innerHTML = ''; // Clear previous content
    this.renderSlider();

    // Create cardDeck container.
    const cardDeckContainer = document.createElement('div');
    cardDeckContainer.id = 'cardDeckContainer';
    cardDeckContainer.classList.add('card-container')
    // Append cardDeck container to main container.
    this.container.appendChild(cardDeckContainer);

    this.renderCards(cardDeckContainer.id);
  }

  renderSlider() {
    // Create slider container.
    const sliderContainer = document.createElement('div');
    sliderContainer.id = 'sliderContainer';

    sliderContainer.innerHTML = `
      <label for="gridSizeSlider">Grid Size</label>
      <input type="range" id="sliderContainerId" min="2" max="9" value="${this.deck.cards.length}" list="markers" />
      <datalist id="markers">
        <option value="2"></option>
        <option value="3"></option>
        <option value="5"></option>
        <option value="7"></option>
        <option value="9"></option>
      </datalist>`;

    // Add event listener for slider change.
    const slider = sliderContainer.querySelector('#sliderContainerId');
    slider.addEventListener('input', (event) => this.updateDeckEvent(event));

    // Append slider container to main container.
    this.container.appendChild(sliderContainer);
  }

  // Function to update deck when slider value changes
  updateDeckEvent(event) {
    const gridSize = parseInt(event.target.value, 10);
    try {
      this.deck = new Deck(gridSize);
    } catch {
      // Do nothing. Ignore errors from non-prime numbers.
    }
    this.renderCards('cardDeckContainer');
  }

  renderCards(containerID) {
    const cardDeckContainer = document.getElementById(containerID)
    cardDeckContainer.innerHTML = ''; // Clear previous content

    this.deck.cards.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      row.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
  
        const iconGrid = document.createElement('div'); // Create icon grid container
        iconGrid.classList.add('icon-grid'); // Add icon-grid class to the container
  
        card.getSymbols().forEach(symbol => {
          const spanElement = document.createElement('span');
          spanElement.classList.add('material-symbols-outlined');
          spanElement.textContent = symbol;
  
          // Randomly change icon color
          const randomColor = `#${  Math.floor(Math.random()*16777215).toString(16)}`;
          spanElement.style.color = randomColor;
  
          // Randomly change icon size
          const randomSize = Math.floor(Math.random() * (32 - 16 + 1)) + 16; // Random size between 16px and 32px
          spanElement.style.fontSize = `${randomSize  }px`;
  
          // Randomly change icon rotation
          const randomRotation = Math.floor(Math.random() * 360); // Random rotation between 0 and 360 degrees
          spanElement.style.transform = `rotate(${randomRotation}deg)`;
  
          iconGrid.appendChild(spanElement); // Append symbols to icon grid container
        });

        cardElement.appendChild(iconGrid); // Append icon grid container to card
        rowElement.appendChild(cardElement);
      });

      cardDeckContainer.appendChild(rowElement);
    });

    // Append slider container to main container.
    this.container.appendChild(cardDeckContainer);
  }  
}

export default DeckPage;