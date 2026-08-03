import { greet } from "./topicHandler/greetHandler.js";
import { useApi } from "./topicHandler/typeUnion.js";
import {
  serveIntStr,
  serveMsg,
  Pizza,
  Burger,
  serveItem,
} from "./topicHandler/typeNarrowing.js";

// Day 1
// console.log(greet("om garg"));

//Day 2
// console.log(useApi("processing"));
// console.log(useApi("processed"));

//Day 3
console.log(serveIntStr("juice"));
console.log(serveIntStr(12));

console.log(serveMsg());
console.log(serveMsg("bring me a btl of water"));

const item1 = new Pizza();
const item2 = new Burger();
const item3 = "item 3";

console.log(serveItem(item1));
console.log(serveItem(item2));
console.log(serveItem(item3));
