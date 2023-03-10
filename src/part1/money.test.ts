import { Franc, Money } from './money';

describe('Money test', () => {
  it('test multiplication', () => {
    const five = Money.dollar(5);
    expect(Money.dollar(10)).toEqual(five.times(2));
    expect(Money.dollar(15)).toEqual(five.times(3));
  });

  it('test equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(4))).toBeFalsy();
    expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
    expect(Money.franc(5).equals(Money.franc(4))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  it('test franc multiplication', () => {
    const five = Money.franc(5);
    expect(Money.franc(10)).toEqual(five.times(2));
    expect(Money.franc(15)).toEqual(five.times(3));
  });

  it('test currency', () => {
    expect('USD').toBe(Money.dollar(1).getCurrency());
    expect('CHF').toBe(Money.franc(1).getCurrency());
  });

  it('test different class equality', () => {
    expect(new Money(10, 'CHF').equals(new Franc(10, 'CHF'))).toBeTruthy();
  });
});
