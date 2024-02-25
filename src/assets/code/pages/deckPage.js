import { Deck } from '../classes/deck';

export class DeckPage {
  constructor(deck, containerId) {
    this.deck = deck;
    this.container = document.getElementById(containerId);
  }

  render() {
    this.container.innerHTML = ''; // Clear previous content
    this.renderSlider();
    this.renderDrawTwoButton(); // Render the button

    // Create cardDeck container.
    const cardDeckContainer = document.createElement('div');
    cardDeckContainer.id = 'cardDeckContainer';
    cardDeckContainer.classList.add('card-container')
    // Append cardDeck container to main container.
    this.container.appendChild(cardDeckContainer);

    this.renderCards(cardDeckContainer.id, this.deck);
  }

  renderSlider() {
    // Create slider container.
    const sliderContainer = document.createElement('div');
    sliderContainer.id = 'sliderContainer';

    sliderContainer.innerHTML = `
      <label for="gridSizeSlider">Grid Size</label>
      <input type="range" id="sliderContainerId" min="2" max="13" value="${this.deck.cards.length}" list="markers" />
      <datalist id="markers">
        <option value="2"></option>
        <option value="3"></option>
        <option value="5"></option>
        <option value="7"></option>
        <option value="11"></option>
        <option value="13"></option>
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
    this.renderCards('cardDeckContainer', this.deck);
  }

  renderCards(containerID, deckToRender) {
    const cardDeckContainer = document.getElementById(containerID)
    cardDeckContainer.innerHTML = ''; // Clear previous content

    deckToRender.cards.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      row.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
  
        const iconGrid = document.createElement('div'); // Create icon grid container
        iconGrid.classList.add('icon-grid'); // Add icon-grid class to the container
  
        card.getSymbols().forEach(symbol => {
          const spanElement = document.createElement('span');
          spanElement.classList.add('material-symbols-rounded');
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
  
  drawTwoCards() {
    const drawnCards = [];
    
    // Draw the first card
    const firstCard = this.deck.cards[Math.floor(Math.random() * this.deck.cards.length)][Math.floor(Math.random() * this.deck.cards[0].length)];
    drawnCards.push(firstCard);

    // Draw the second card
    let secondCard;
    do {
      secondCard = this.deck.cards[Math.floor(Math.random() * this.deck.cards.length)][Math.floor(Math.random() * this.deck.cards[0].length)];
    } while (secondCard === firstCard); // Ensure the second card is different from the first one
    drawnCards.push(secondCard);

    return drawnCards;
  }

  renderDrawTwoButton() {
    const button = document.createElement('button');
    button.classList.add('draw-two-button');
    button.textContent = 'Draw Two Cards';
    button.addEventListener('click', () => {
      const drawnCards = this.drawTwoCards();
      // Clear previous content
      const cardDeckContainer = document.getElementById('cardDeckContainer');
      cardDeckContainer.innerHTML = '';
      // Render the drawn cards
      drawnCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
  
        const iconGrid = document.createElement('div'); // Create icon grid container
        iconGrid.classList.add('icon-grid'); // Add icon-grid class to the container
  
        card.getSymbols().forEach(symbol => {
          const spanElement = document.createElement('span');
          spanElement.classList.add('material-symbols-rounded');
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
        cardDeckContainer.appendChild(cardElement);
      });
    });

    // Append the button to the main container
    this.container.appendChild(button);
  }

}

export default DeckPage;