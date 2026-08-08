type Address = { location: string; pin: number };
type item = { name: string; quantity: number };

type order = {
  id: number;
  name: string;
  content: item[];
  address: Address;
};

//splitting types for easier understanding

type Coffee = {
  name: string;
  price: number;
  sugar?: number;
  coffee?: number;
  cream: boolean;
};

export const partialSelection = (order: Partial<Coffee>) => {
  console.log(
    `order: ${(order.name, order.coffee, order.cream, order.price, order.sugar)}`,
  );
};
// it makes EVERY FIELD of the stated type as optional, here an empty object can
// also be passed

export const requiredSelection = (order: Required<Coffee>) => {
  console.log(`order: ${order.name}, ${order.coffee}`);
  console.log(order.coffee, order.cream, order.price, order.sugar, order.name);
  console.log(
    `order: ${(order.coffee, order.cream, order.price, order.sugar, order.name)}`,
  );
};
// This makes EVERY FIELD of the stated type as REQUIRED, even if
// in the original declaration its declared to be optionl

type coffeeDisplay = Pick<Coffee, "name" | "price">;
// This helps us to pick specific types from existion types to create a new type.

const displayEspresso: coffeeDisplay = {
  name: "Espresso",
  price: 90,
};

type coffeeIngredients = Omit<Coffee, "price">;
// This helps us to hide or Omit properties of a type and create a child type with
// only the rest of the properties

const espressoIngredients: coffeeIngredients = {
  name: "espresso",
  sugar: 2,
  coffee: 2,
  cream: false,
};
