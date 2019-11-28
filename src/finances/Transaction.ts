import Category from './Category';
import User from '../authentication/User';

export default abstract class Transaction {

  account: string;
  amount: string;
  description: string;
  date: Date;
  time: string;
  category: Category;
  readonly user: User;

  constructor(
    account: string,
    amount: string,
    description: string,
    date: Date,
    time: string,
    category: Category,
    user: User) {
    this.account = account;
    this.amount = amount;
    this.description = description;
    this.date = date;
    this.time = time;
    this.category = category;
    this.user = user;
  }
}