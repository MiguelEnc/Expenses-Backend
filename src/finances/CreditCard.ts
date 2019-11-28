class CreditCard {

  readonly expiration: string;
  readonly cutDate: string;
  limit: number;
  paymentLimit: string;

  constructor(
    limit: number,
    expiration: string,
    cutDate: string,
    paymentLimit: string) {
    this.limit = limit;
    this.expiration = expiration;
    this.cutDate = cutDate;
    this.paymentLimit = paymentLimit;
  }
}