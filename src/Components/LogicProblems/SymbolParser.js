export default class SymbolParser {
  constructor(symbolStr) {
    this.SymbolParser = symbolStr || "";
  }

  parse(symbolStr) {
    let result = true;
    const strSize = symbolStr.length;

    if (strSize % 2 > 0) {
      return false;
    }

    console.log(strSize);
    return result;
  }
}
