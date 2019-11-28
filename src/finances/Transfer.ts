import User from "../authentication/User";
import Category from "./Category";
import Account from "./Account";

export default class Transfer {
  constructor(
    readonly accountFrom: Account,
    readonly accountTo: Account,
    public description: string,
    public date: string,
    public time: string,
    public category: Category,
    readonly user: User, ) {

    this.accountFrom = accountFrom;
    this.accountTo = accountTo;
    this.description = description;
    this.date = date;
    this.time = time;
    this.category = category;
    this.user = user;
  }
}