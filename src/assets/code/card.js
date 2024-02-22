/* eslint-disable no-console */
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

  getCSSclasses() {
    return this.cssClasses;
  }

  addCSSclass(className) {
    this.cssClasses.push(className);
  }

  printSymbols() {
    console.log(this.symbols);
  }
}

export default Card;