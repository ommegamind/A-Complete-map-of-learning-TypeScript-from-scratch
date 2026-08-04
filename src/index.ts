//Day 1
// import { greet } from "./topicHandler/greetHandler.js";

//Day 2
// import { useApi } from "./topicHandler/typeUnion.js";

//Day3
// import {
//   serveIntStr,
//   serveMsg,
//   Pizza,
//   Burger,
//   serveItem,
// } from "./topicHandler/typeNarrowing.js";

import { orderPizza } from "./topicHandler/customTypes.js";
import type { Pizza } from "./topicHandler/customTypes.js";

// Day 1
// console.log(greet("om garg"));

//Day 2
// console.log(useApi("processing"));
// console.log(useApi("processed"));

//Day 3
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
const order1: Pizza = {
  type: "classic",
  size: 4,
};

console.log(orderPizza(order1));
