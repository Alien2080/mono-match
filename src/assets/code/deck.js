/* eslint-disable no-console */
import iconData from "../../icons";
import { Card } from "./card";

export class Deck {
  constructor(gridSize) {
    if (!this.constructor.isPrime(gridSize) || gridSize >= 9) {
        throw new Error("Grid size must be a prime number less than 10.");
    }
    this.gridSize = gridSize;
    this.cards = this.generateCards(this.constructor.getUniqueIcons(this.constructor.calcNumOfSymbols(gridSize), iconData));
  }

  generateCards(icons) {
    const cards2dArray = [];

    for (let i = 0; i < this.gridSize; i += 1) {
        const row = [];
        for (let j = 0; j < this.gridSize; j += 1) {
            const card = new Card();
            card.addSymbol(icons[i * this.gridSize + j % icons.length]);
            row.push(card);
        }
        cards2dArray.push(row);
    }

    return cards2dArray;
}


  printDeck() {
    for (let i = 0; i < this.gridSize; i += 1) {
      for (let j = 0; j < this.gridSize; j += 1) {
        console.log(`Card ${i}, ${j}`);
        this.cards[i][j].printSymbols();
      }     
    }
  }

  static getUniqueIcons(numIcons, iconsToPickFrom) {
    // Shuffle the icon data
    const shuffledIcons = iconsToPickFrom.slice().sort(() => Math.random() - 0.5);
    // Return a slice of the shuffled array with the required number of unique icons
    return shuffledIcons.slice(0, numIcons);
  }

  static calcNumCardsInDeck(num) {
    return num * (num + 1) + 1;
  }

  static calcNumSymbolsPerCard(num) {
    return num + 1;
  }

  static calcNumOfSymbols(num) {
    return this.calcNumCardsInDeck(num);
  }

  static isPrime(num) {
    switch(num) {
      case 2:
      case 3:
      case 5:
      case 7:
      case 9:
        return true;
      default:
        return false;
    }
  }
}

export default Deck;