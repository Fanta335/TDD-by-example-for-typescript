import { Money } from './money';

describe('Money test', () => {
  it('test multiplication', () => {
    const five = new Money.Dollar(5);
    const product = five.times(2);
    expect(10).toBe(product.amount);
  });

  it('test equality', () => {
    expect(new Money.Dollar(5).equals(new Money.Dollar(5))).toBeTruthy();
    expect(new Money.Dollar(5).equals(new Money.Dollar(4))).toBeFalsy();
  });
});
