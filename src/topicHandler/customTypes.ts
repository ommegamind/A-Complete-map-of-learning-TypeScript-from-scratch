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
