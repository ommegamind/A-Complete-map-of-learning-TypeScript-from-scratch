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
