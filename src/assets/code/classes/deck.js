/* eslint-disable no-console */
import iconData from "../../../icons";
import { Card } from "./card";

export class Deck {
  constructor(gridSize) {
    if (!this.constructor.isPrime(gridSize)) {
        throw new Error("Grid size must be a prime number less than 8 (i.e. 2, 3, 5, 7, 11, 13).");
    }
    this.gridSize = gridSize;
    this.cards = [];
    this.infiniteProjectivePlaneCards = [];
    this.generateCards(this.constructor.getUniqueIcons(this.constructor.calcNumOfSymbols(gridSize)));

    // Output for debugging.
    console.log(`GridSize(n) = ${gridSize}`);
    console.log(`Number of cards = ${this.constructor.calcNumCardsInDeck(gridSize)}`);
    console.log(`Number of symbols per card = ${this.constructor.calcNumSymbolsPerCard(gridSize)}`);
    console.log(`Number of Symbols = ${this.constructor.calcNumOfSymbols(gridSize)}`);
  }
 
  generateCards(icons) {
    const cards2dArray = [];
    const infiniteProjectivePlane = [];

    // Create cards.
    for (let i = 0; i < this.gridSize; i += 1) {
        const row = [];
        for (let j = 0; j < this.gridSize; j += 1) {
            const card = new Card();
            row.push(card);
        }
        cards2dArray.push(row);
    }

    for (let i = 0; i < this.gridSize + 1; i += 1) { 
      const card = new Card();
      infiniteProjectivePlane.push(card);     
    }
    
    // Implementation of Finite projective planes.
    // Horizontal line symbols.
    for (let i = 0; i < this.gridSize; i += 1) {
      for (let j = 0; j < this.gridSize; j += 1) {
        cards2dArray[i][j].addSymbol(icons[j]);      
      }
      infiniteProjectivePlane[0].addSymbol(icons[i]);
    }

    // Vertical line symbols.
    for (let i = 0; i < this.gridSize; i += 1) {
      for (let j = 0; j < this.gridSize; j += 1) {
        cards2dArray[i][j].addSymbol(icons[i + this.gridSize]);
      }
      infiniteProjectivePlane[0].addSymbol(icons[i + this.gridSize]);
    }

    // Diagonal line symbols.
    for (let lineNo = 0; lineNo < this.gridSize - 1; lineNo += 1) { // Each line is a new symbol.
      for (let columnIndexPerLine = 0; columnIndexPerLine < this.gridSize; columnIndexPerLine += 1) { // Draws all the diagonals for each line.
        // Calculate diagonal line, and add symbols to those cards.
        for (let i = columnIndexPerLine, j = 0, k = 0; k < this.gridSize; i += 1, j += (lineNo + 1), k += 1) {
          // Adjust using modulo operator to cause the line to wrap around.
          const adjustedColumnIndex = j % this.gridSize;
          const adjustedRowIndex = i % this.gridSize;
          cards2dArray[adjustedColumnIndex][adjustedRowIndex].addSymbol(icons[columnIndexPerLine + 2*(this.gridSize) + (lineNo*this.gridSize)]);
        }
      }
    }

    this.cards = cards2dArray;
  }



  static getUniqueIcons(numIcons) {
    // Shuffle the icon data
    const shuffledIcons = iconData.slice().sort(() => Math.random() - 0.5);
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
      case 11:
      case 13:
        return true;
      default:
        return false;
    }
  }
}

export default Deck;