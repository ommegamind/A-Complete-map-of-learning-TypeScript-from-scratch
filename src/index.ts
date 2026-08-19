//Day 1
// import { greet } from "./topicHandler/greetHandler.js";

// Day 1
// console.log(greet("om garg"));

//Day 2
// import { useApi } from "./topicHandler/typeUnion.js";

// console.log(useApi("processing"));
// console.log(useApi("processed"));

//Day3
// import {
//   serveIntStr,
//   serveMsg,
//   Pizza,
//   Burger,
//   serveItem,
// } from "./topicHandler/typeNarrowing.js";

// console.log(serveIntStr("juice"));
// console.log(serveIntStr(12));

// console.log(serveMsg());
// console.log(serveMsg("bring me a btl of water"));

// const item1 = new Pizza();
// const item2 = new Burger();
// const item3 = "item 3";

// console.log(serveItem(item1));
// console.log(serveItem(item2));
// console.log(serveItem(item3));

//Day 4
// import { orderPizza } from "./topicHandler/customTypes.js";
// import type { Pizza } from "./topicHandler/customTypes.js";

// const order1: Pizza = {
//   type: "classic",
//   size: 4,
// };

// console.log(orderPizza(order1));

//Day 5
// import type { coffee } from "./topicHandler/customTypes.js";

// import { coffeeOrder } from "./topicHandler/customTypes.js";

// const order1: coffee = { type: "chinese", temperature: "hot" };
// const order2: coffee = { type: "greek", falvour: "vanilla" };
// const order3: coffee = { type: "italian", temperature: "cold" };

// console.log(coffeeOrder(order1));
// console.log(coffeeOrder(order2));
// console.log(coffeeOrder(order3));

//Day 6
// import {
//   recievedData,
//   number,
//   recievedDataTypeAssertion,
// } from "./topicHandler/typeAssertion.js";

// console.log(number);
// console.log(recievedData);
// console.log(typeof recievedData);
// console.log(recievedDataTypeAssertion);

// //here we have direct access to the property-
//  name as it is asserted as a Book type

// console.log(typeof recievedDataTypeAssertion);

// // Note: any and unknown types are discussed in -
// // their specific files!
// // and try catch type narrowing is discussed in -
// // type narrowinng page

// Day 7
// import type { Access } from "./topicHandler/anyxUnknown.js";

// const redirectPage = (access: Access): void => {
//   if (access === "admin") {
//     console.log("hie admin");
//     return;
//   } else if (access === "user") {
//     console.log("hie user");
//     return;
//   }
//   access; //never condition only happens the program-
//   //is terminating at every other possible condition-
//   //or value to be accessed.
// };

// The below function never returns hence return type is-
// never!

// const neverReturn = (): never => {
//   while (true) {}
// };

//Day 8
//discussed in the file classes_and_interface.ts
// also the properties of custom types, the code and its explaination
// can be found in the  customTypeProperties.ts file,
// in topic handler

//Day 9

// import { coldCoffee } from "./topicHandler/duckNdInferenceTyping.js";

// console.log(coldCoffee.temp);
// console.log(coldCoffee.flavour);

// even though the obj of type brew contains both temp and flavour
// since it is explicetly defined as type brew
// which only has temp, when accessing the object coldCoffee, we won't be able
// to access flavour, thowing a compile error

// more details in duckNdInferenctTyping.ts

//Day 10
// explained in typeProperties.ts
// import {
//   requiredSelection,
//   partialSelection,
// } from "./topicHandler/typeProperties.js";

// requiredSelection({
//   name: "espresso",
//   price: 80,
//   sugar: 3,
//   coffee: 3,
//   cream: true,
// });

// partialSelection({});

// partialSelection({ name: "cafe latte" });

//Day 11
// Named tuple

// import { tuple05 } from "./topicHandler/array_Tuple_Enum.js";
// // console.log(tuple05[0]);

// Day 12
// oop in ts, oop.ts

// Day 13
// interface properties in interfaceProperty.ts,
// mergign, object body definition, extends,
// key value array declaration, readonly etc.

// Day 14
// generics, function and interface (used in api and creating libraries)
// generics.ts file.

// Day 15

// import { getDataViaAxios } from "./topicHandler/usingAxios.js";
// getDataViaAxios();
// axios in ts

// Day 16
// using react with ts and using ts with hooks
