export namespace Money {
  export class Dollar {
    public amount: number;

    constructor(amount: number) {
      this.amount = amount;
    }

    times(multiplier: number): void {
      this.amount *= multiplier;
    }
  }
}