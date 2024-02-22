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
              card.getSymbols().forEach(symbol => {
                  const spanElement = document.createElement('span');
                  spanElement.classList.add('material-symbols-outlined');
                  spanElement.textContent = symbol;
                  cardElement.appendChild(spanElement);
              });
              rowElement.appendChild(cardElement);
          });
          this.container.appendChild(rowElement);
      });
  }
}

export default DOMController;