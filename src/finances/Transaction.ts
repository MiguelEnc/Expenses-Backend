import Category from './Category';
import User from '../authentication/User';
import Account from './Account';

export default abstract class Transaction {
  constructor(
    public account: Account,
    public amount: number,
    public description: string,
    public date: Date,
    public time: string,
    public category: Category,
    readonly user: User) {

    this.account = account;
    this.amount = amount;
    this.description = description;
    this.date = date;
    this.time = time;
    this.category = category;
    this.user = user;
  }
}