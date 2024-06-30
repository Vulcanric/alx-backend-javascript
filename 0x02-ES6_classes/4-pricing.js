// Implements a new class, Pricing that utilizes class Currency
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Implements getters and setters for the instance attributes defined above
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // A new method that returns the attributes in a styled format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static class method
  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
