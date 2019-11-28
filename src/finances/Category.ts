export default class Category {
  constructor(
    public name: string,
    public color: string,
    public type: string,
    public parent?: Category) {

    this.name = name;
    this.color = color;
    this.type = type;
    this.parent = parent;
  }
}