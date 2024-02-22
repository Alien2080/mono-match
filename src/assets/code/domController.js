export class DOMController {
  constructor(deck, containerId) {
      this.deck = deck;
      this.container = document.getElementById(containerId);
  }

  updateDeck(deck) {
    this.deck = deck;
  }

  render() {
    this.container.innerHTML = ''; // Clear previous content
    const cards2dArray = this.deck.cards;
    cards2dArray.forEach((row, i) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      row.forEach((card, j) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        card.getCSSclasses().forEach(className => {
          cardElement.classList.add(className); // Add CSS classes from Card to cardElement
        });
  
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
      this.container.appendChild(rowElement);
    });
  }
  
  
}

export default DOMController;