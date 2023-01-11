export abstract class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  abstract times(multiplier: number): Money;

  equals(object: Money): boolean {
    const money = object;
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
