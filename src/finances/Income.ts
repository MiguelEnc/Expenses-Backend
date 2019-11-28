import Category from './Category';
import Transaction from './Transaction';
import User from '../authentication/User';

export class Income extends Transaction {

  constructor(
    account: string,
    amount: string,
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