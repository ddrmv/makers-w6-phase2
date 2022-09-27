const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {
  it('returns total price with one candy', () => {
    const candyDouble1 = {getPrice: () => 2.99};
    const basket = new ShoppingBasket();
    basket.addItem(candyDouble1);
    expect(basket.getTotalPrice()).toEqual(2.99);
  });

  it('returns total price with 3 candies', () => {
    const candyDouble1 = {getPrice: () => 1.99};
    const candyDouble2 = {getPrice: () => 1.0};
    const candyDouble3 = {getPrice: () => 1.0};
    const basket = new ShoppingBasket();
    basket.addItem(candyDouble1);
    basket.addItem(candyDouble2);
    basket.addItem(candyDouble3);
    expect(basket.getTotalPrice()).toEqual(3.99);
  });

  it('returns total price with 2 candies and discount', () => {
    const candyDouble1 = {getPrice: () => 3.50};
    const candyDouble2 = {getPrice: () => 1.0};
    const basket = new ShoppingBasket();
    basket.addItem(candyDouble1);
    basket.addItem(candyDouble2);
    basket.applyDiscount(2);
    expect(basket.getTotalPrice()).toEqual(2.50);
  });
});
