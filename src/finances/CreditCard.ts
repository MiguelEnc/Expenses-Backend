import Account from "./Account";

export default class CreditCard extends Account {
  constructor(
    readonly name: string,
    readonly initialValue: number,
    readonly currency: string,
    readonly expiration: Date,
    readonly cutDate: string,
    public paymentLimit: string) {

    super(name, initialValue, currency);
    this.expiration = expiration;
    this.cutDate = cutDate;
    this.paymentLimit = paymentLimit;
  }
}