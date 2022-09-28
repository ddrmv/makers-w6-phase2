/* eslint-disable require-jsdoc */
class ShoppingBasket {
  constructor() {
    this.candies = [];
    this.discount = 0;
  }

  addItem(candy) {
    this.candies.push(candy);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  /*
  // implementation without discount
  getTotalPrice() {
    return this.candies
        .map((candy) => candy.getPrice())
        .reduce((a, b) => a + b);
  }
  */

  // debugging exercise implementation
  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });
    return totalPrice - this.discount;
  }
}

module.exports = ShoppingBasket;
