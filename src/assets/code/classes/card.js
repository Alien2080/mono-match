export class Card {
  constructor(){
    this.symbols = [];
    this.cssClasses = [];
  }

  getSymbols() {
    return this.symbols;
  }

  addSymbol(symbol) {
    this.symbols.push(symbol);
  }
}

export default Card;