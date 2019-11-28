export default class Category {

  name: string;
  color: string;
  type: string;
  parent?: Category;

  constructor(
    name: string,
    color: string,
    type: string,
    parent?: Category) {
    this.name = name;
    this.color = color;
    this.type = type;
    this.parent = parent;
  }
}