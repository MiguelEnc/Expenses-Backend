import User from "../authentication/User";
import Category from "./Category";

class Transfer {
  readonly accountFrom: string;
  readonly accountTo: string;
  readonly user: User;
  description: string;
  date: string;
  time: string;
  category: Category;

  constructor(
    accountFom: string,
    accountTo: string,
    description: string,
    date: string,
    time: string,
    category: Category,
    user: User, ) {
    this.accountFrom = accountFom;
    this.accountTo = accountTo;
    this.description = description;
    this.date = date;
    this.time = time;
    this.category = category;
    this.user = user;
  }
}