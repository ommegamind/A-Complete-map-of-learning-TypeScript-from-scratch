// Array
const array01: string[] = ["hie", "bie"];

const array02: number[][] = [
  [1, 2],
  [3, 4],
];

const array03: Array<number> = [1, 2, 3];

type Student = {
  name: string;
  rollno: number;
};

const array04: Student[] = [
  { name: "om", rollno: 23 },
  { name: "garg", rollno: 53 },
];

const array05: readonly number[] = [23, 13, 11, 99];
// array05[0] = 12; can't be assigned since declared readonly
// array05.pop(); this can't be executed as well

// Above are different ways of defining an array in typescript and its types.

//Tuples
const tuple01: [string, number] = ["hello", 63];

let tuple02: [number];

tuple02 = [12];

let tuple03: [string, number, boolean?];
tuple03 = ["omgarg", 1992];
tuple03 = ["harsh", 1121, true];

let tuple04: readonly [number, string] = [21, "om"];

// tuple04[0] = 12; is immutable

// tuple04.pop(); is immutable

//tuple04 = [12, "mo"]; // Because readonly makes the tuple's
// elements immutable, not the variable itself.

export const tuple05: [name: string, age: number] = ["omgarg", 22];
// Named tuples are for documentation/Type hint.

// One issue is that elements can be pushed into the enum, soo that could be an issue.

enum enum01 {
  ConstOne,
  ConstTwo,
}
// Initialized with 0 and 1 is added at every new variable afterwards.

// 2 Major types

// 01 Number
enum enum02 {
  ConstOne = 10,
  ConstTwo,
}
// Here the counting starts at 10.

enum enum03 {
  ConstOne = 200,
  ConstTwo = 404,
  ConstThree = 500,
}
// Each are uniquely defined.

// 02 String
enum enum04 {
  ConstOne = "ConstOne",
  ConstTwo = "ConstTwo",
}
// This is used for easier understanding.

enum Coffee {
  MOCA = "MOCA",
  LATTE = "LATTE",
  ESPRESSO = "ESPRESSO",
}

const chooseCoffee = (order: Coffee) => {
  console.log(`Preparing your order of ${order}`);
};

// chooseCoffee("MOCA") // Not allowed as its not directly refering the enum.

// chooseCoffee(Coffee.ESPRESSO); // Allowed and shows option of what can be choosen.

// NOTE: practically only one type is used while defining the constants,
// not a mix of type like string+number+boolean etc are not used.
