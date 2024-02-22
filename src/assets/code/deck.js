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

    // Create cards.
    for (let i = 0; i < this.gridSize; i += 1) {
        const row = [];
        for (let j = 0; j < this.gridSize; j += 1) {
            const card = new Card();
            row.push(card);
        }
        cards2dArray.push(row);
    }

    // Horizontal line symbols.
    for (let i = 0; i < this.gridSize; i += 1) {
      for (let j = 0; j < this.gridSize; j += 1) {
        cards2dArray[i][j].addSymbol(icons[j]);
        cards2dArray[i][j].addCSSclass(`horizontal-line`);
        cards2dArray[i][j].addCSSclass(`horizontal-line-${i}`);
      }
    }

    // Vertical line symbols.
    for (let i = 0; i < this.gridSize; i += 1) {
      for (let j = 0; j < this.gridSize; j += 1) {
        cards2dArray[i][j].addSymbol(icons[i + this.gridSize * this.gridSize]);
        cards2dArray[i][j].addCSSclass(`vertical-line`);
        cards2dArray[i][j].addCSSclass(`vertical-line-${j}`);
      }
    }

    // Diagonal line symbols.
    // for (let i = 0, j = 0; i < this.gridSize; i += 1, j += 1) {
    //   cards2dArray[i][j].addSymbol(icons[i + this.gridSize * this.gridSize]);

    // }

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