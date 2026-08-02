import { greet } from "./topicHandler/greetHandler.js";
import { useApi } from "./topicHandler/typeUnion.js";

console.log(greet("om garg"));

console.log(useApi("processing"));
console.log(useApi("processed"));
