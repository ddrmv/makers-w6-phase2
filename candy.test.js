const Candy = require('./candy');

describe('candy', () => {
  it('creates candy with name Mars and price 4.99', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toEqual('Mars');
    expect(candy.getPrice()).toEqual(4.99);
  });
});
