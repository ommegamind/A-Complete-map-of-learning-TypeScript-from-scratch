// Generic functions

function makeCoffee<A>(a: A): [A] {
  return [a];
}

makeCoffee(5);
makeCoffee("huh??");

function arrayItem<T>(item: T): T[] {
  return [item];
}

arrayItem("hello?");
arrayItem(23);

function twoTypes<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

twoTypes("hey", 5);
twoTypes(10, { pikachu: "yes" });

// Generic interface

interface coffee<A> {
  name: string;
  data: [A];
}

const espresso: coffee<string[]> = {
  name: "espresso",
  data: [["hello", "hie", "eh"]],
};

// It is mostly used in creating libraries, api responses etc.
// Generics are also templates like interface
