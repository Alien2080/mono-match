/* eslint-disable no-console */
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

  printSymbols() {
    console.log(this.symbols);
  }
}

export default Card;