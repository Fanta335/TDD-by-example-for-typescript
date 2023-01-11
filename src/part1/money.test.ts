import { Dollar } from './dollar';
import { Franc } from './franc';

describe('Money test', () => {
  it('test multiplication', () => {
    const five = new Dollar(5);
    expect(new Dollar(10)).toEqual(five.times(2));
    expect(new Dollar(15)).toEqual(five.times(3));
  });

  it('test equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(4))).toBeFalsy();
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(4))).toBeFalsy();
    expect(new Franc(5).equals(new Dollar(5))).toBeFalsy();
  });

  it('test franc multiplication', () => {
    const five = new Franc(5);
    expect(new Franc(10)).toEqual(five.times(2));
    expect(new Franc(15)).toEqual(five.times(3));
  });
});
