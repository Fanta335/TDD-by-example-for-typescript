import { Money } from './money';

describe('Money test', () => {
  it('test multiplication', () => {
    const five = new Money.Dollar(5);
    expect(new Money.Dollar(10)).toEqual(five.times(2));
    expect(new Money.Dollar(15)).toEqual(five.times(3));
  });

  it('test equality', () => {
    expect(new Money.Dollar(5).equals(new Money.Dollar(5))).toBeTruthy();
    expect(new Money.Dollar(5).equals(new Money.Dollar(4))).toBeFalsy();
  });

  it('test franc multiplication', () => {
    const five = new Money.Franc(5);
    expect(new Money.Franc(10)).toEqual(five.times(2));
    expect(new Money.Franc(15)).toEqual(five.times(3));
  });
});
