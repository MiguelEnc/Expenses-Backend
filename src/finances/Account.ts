export default class Account {
  readonly accountName: string;
  readonly initialValue: number;
  readonly currency: string;

  constructor(name: string, initialValue: number, currency: string) {
    this.accountName = name;
    this.initialValue = initialValue;
    this.currency = currency;
  }
}