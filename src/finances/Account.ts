export default class Account {
  constructor(
    readonly name: string,
    readonly initialValue: number,
    readonly currency: string) {

    this.name = name;
    this.initialValue = initialValue;
    this.currency = currency;
  }
}