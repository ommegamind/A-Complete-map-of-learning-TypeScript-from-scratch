// simple definition

// interface coffee {
//   name: string;
//   price: number;
// }

// const c1: coffee = {
//   name: "espresso",
//   price: 200,
// };

// readonly properties

// interface coffee {
//   readonly ingredients: string;
//   name: string;
// }

// const c2: coffee = { ingredients: "water, coffee", name: "espresso" };
// c2.ingredients = "water, milk, coffee"; not allowed only reassignment is allowed

// function definition

// interface coffee {
//   (name: string): string;
// }

// const c3: coffee = (order: string) => {
//   return `making ${order}`;
// };

// named function definition

// interface coffee {
//   startBrew(name: string): string;
//   stopBrew(action: boolean): boolean;
// }

// const c4: coffee = {
//   startBrew(name: string) {
//     return `brewing ${name}`;
//   },
//   stopBrew(action: boolean) {
//     if (action) {
//       return action;
//     } else {
//       return !action;
//     }
//   },
// };

// a series of values

// interface coffee {
//   [name: string]: number;
// }

// const c5: coffee = {
//   espresso: 90,
//   moka: 120,
// };

//Merging values of seperately declared interface
// interface coffee {
//   name: string;
// }

// interface coffee {
//   price: number;
// }

// const c6: coffee = {
//   name: "espresso",
//   price: 99,
// };

// inheritance in interface

// interface coffeeBase {
//   coffee: string;
// }
// interface coffeeLiquid {
//   liquid: string;
// }

// interface espresso extends coffeeBase, coffeeLiquid {
//   price: number;
// }

// const espressoCup: espresso = {
//   coffee: "small size",
//   liquid: "water",
//   price: 90,
// };
