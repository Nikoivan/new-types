import Buyable from "./buyable";
import Movie from "./movie";

export default class Cart {
  items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }

  getItems(): Buyable[] {
    return [...this.items];
  }
}

const avengers = new Movie(
  111,
  "Avengers Assemble!",
  1000,
  2012,
  "USA",
  ["fantastic", "action", "fantasy", "adventures", "..."],
  "137 мин. / 02:17"
);

const cart = new Cart();

cart.add(avengers);

const test = cart.getItems();

console.log(test);
