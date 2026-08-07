// const object = {
//   objName: "first Object",
//   value: "1",
//   available: true,
// };

// here its types are infered directly by ts, it is important to keep in mind
// during assignments and other use of objects.

type coffee = {
  coffeeName: string;
  price: number;
  ingridents: string[];
};

const blackCoffee: coffee = {
  coffeeName: "black coffee",
  price: 125,
  ingridents: ["water", "coffee"],
};
//another example of defining types

//DUCK TYPING
type Brew = {
  temp: string;
};

const coldMoca = {
  temp: "cold",
  flavour: "vanilla",
};

export const coldCoffee: Brew = coldMoca;
// now this will wor because the original type Brew is declared with base type
// string.
// BUT it wouldn't work if the delclaration was

// type Brew = {
//   temp: "hot"| "cold";
// };

// Because then type script when reading the object coldMoca would read it as:

// const coldMoca = {
//   temp: string,
//   flavour: string,
// };

// Due to object inference in typescript
