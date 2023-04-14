import Buyable from "../domain/buyable";
import Movie from "../domain/movie";

export default class Cart {
  items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }

  getItems(): Buyable[] {
    return [...this.items];
  }
}
