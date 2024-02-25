export class Card {
  constructor(){
    this.symbols = [];
  }

  getSymbols() {
    return this.symbols;
  }

  addSymbol(symbol) {
    this.symbols.push(symbol);
  }
}

export default Card;