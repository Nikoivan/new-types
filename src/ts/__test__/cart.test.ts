import Cart from "../service/cart";
import Movie from "../domain/movie";

const cart = new Cart();
const avengers = new Movie(
  111,
  "Avengers Assemble!",
  1000,
  2012,
  "USA",
  ["fantastic", "action", "fantasy", "adventures", "..."],
  "137 мин. / 02:17"
);
cart.add(avengers);

test("test for method add of class Cart", () => {
  expect(cart.items.length).toBe(1);
});

test("test for method getItems of class Cart", () => {
  const result = cart.getItems();
  expect(result).toEqual([
    {
      id: 111,
      title: "Avengers Assemble!",
      price: 1000,
      year: 2012,
      country: "USA",
      genres: ["fantastic", "action", "fantasy", "adventures", "..."],
      time: "137 мин. / 02:17",
    },
  ]);
});
