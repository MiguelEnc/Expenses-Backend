import Category from './Category';
import Transaction from './Transaction';
import User from '../authentication/User';
import Account from './Account';

export default class Expense extends Transaction {
  constructor(
    account: Account,
    amount: number,
    description: string,
    date: Date,
    time: string,
    category: Category,
    user: User) {

    super(
      account,
      amount,
      description,
      date,
      time,
      category,
      user
    );
  }
}