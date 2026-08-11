// Class Definition.

// class Coffee {
//   name: string = "black";
//   price: number;

// // without a constructor it will show error -
// // if no initial value is given.

// }

// const c1 = new Coffee();
// c1.name;
// c1.price;

// Constructors in class.
// class BlackCoffee {
//   name: string;
//   price: number;
//   sugar: boolean;

//   constructor(name: string, price: number, sugar: boolean) {
//     this.name = name;
//     this.price = price;
//     this.sugar = sugar;
//   }
// }

// const c2 = new BlackCoffee("omu", 92, false);

//Access handlers -> public, private

// class Coffee {
//   private ingredients: string[] = ["brew", "small", "hot"];
//   public name: string = "black coffee";

//   reveal() {
//     console.log(this.ingredients);
//   }
// // reveal is a simple function name not a keyword
// }

// const c3 = new Coffee();

// c3.name;
// c3.reveal;

// private as #

// class Coffee {
//   #ingredients: string[] = ["brew", "small", "hot"];
//   public name: string = "black coffee";

//   reveal() {
//     console.log(this.#ingredients);
//   }
// }
// Another way of handling private elements in ts, is through # symbol

// protected

// class Coffee {
//   protected brew: string = "Medium";
// }

// class BlackCoffee extends Coffee {
//   getBrew() {
//     console.log(this.brew);
//   }
// }

// static keyword

// class Coffee {
//   static welcome: string = "Welcome to the coffee house";
// }

// console.log(Coffee.welcome);

// abstract class

// abstract class Brew {
//   abstract make(): string;
// }

// class BlackCoffee extends Brew {
//   make() {
//     return `Making black coffee`;
//   }
// }

// readonly

// class Coffee {
//   readonly companyID: string;
//   constructor(companyID: string) {
//     this.companyID = companyID;
//   }
// }

// const c1 = new Coffee("12345");
// c1.companyID="hie" can not be reassigned

// getter and setter
// They let you make a method behave like a property.

// class Coffee {
//   private _name: string = `black coffee`;
//   get name() {
//     return this._name;
//   }
//   set name(name: string) {
//     this._name = name;
//   }
// }

// const c1 = new Coffee();

// get and set are special compared to normal function as they let us use these
// "FUNCTIONS" AS "PROPERTIES" to access them directly.

// c1.name;
// c1.name = "brown lol";

// Composition

// class Coffee {
//   brew: string = "medium";
// }

// class BlackCoffee {
//   brewSize(size: Coffee) {
//     const coffeeSize = size.brew;
//   }
// }

// as expected private members can't be accessed other than that
// all other members are accessible via this method without inheritance
