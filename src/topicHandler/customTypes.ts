export type Pizza = { type: string; size: number };

const isPizza = (order: any): order is Pizza => {
  return (
    typeof order === "object" &&
    order != null &&
    typeof order.type === "string" &&
    typeof order.size === "number"
  );
};

export const orderPizza = (pizza: Pizza | string): string => {
  if (isPizza(pizza)) {
    return `serving a ${pizza.type}, size ${pizza.size} `;
  }
  return `serving ${pizza}`;
};

export type coldCoffee = { type: "italian"; temperature: "cold" };
export type vanillaCoffee = { type: "greek"; falvour: "vanilla" };
export type hotCoffee = { type: "chinese"; temperature: "hot" };

export type coffee = coldCoffee | vanillaCoffee | hotCoffee;

export const coffeeOrder = (order: coffee) => {
  switch (order.type) {
    case "italian":
      return order.temperature;
    case "greek":
      return order.falvour;
    case "chinese":
      return order.temperature;
  }
};
