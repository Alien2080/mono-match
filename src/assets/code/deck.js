/* eslint-disable import/prefer-default-export */
class Deck {
  constructor(gridSize) {
    if (!this.constructor.isPrime(gridSize) || gridSize >= 9) {
        throw new Error("Grid size must be a prime number less than 10.");
    }
    this.gridSize = gridSize;
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

export { Deck };