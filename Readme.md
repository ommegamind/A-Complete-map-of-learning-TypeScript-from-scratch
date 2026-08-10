Day 1: of starting with Ts, I didn't understand how a .ts file is ran? executed? using node we can do it! but i was looking more into the part of running it directly via code runner. Will come back to this tommorrow.

Day 2: soo i've started with the first function "greet()":
commands npm init -y, npm i -D typescript, npx tsc init, create src and dist folders.
To run the program run the compiled index.js in dist.

Questions: Here idk lets say i created a folder in src and imported a function from that into index.ts, how will my index.js recreate this structure??

Answer: well for now, it literally creates any folder structure i create in the src folder inside the dist folder and the script in package.json can run these scripts as instructed!

Day 3: understanding type annotation and inference and union of multiple type, the union thing can be used to accept multiple types of data into a variable from a API.

Day 4: learning about type narrowing, or type guarding, or guardraling.

Question: Here i don't understand the working of classes, objects, their type checking and exporting them and handling them

It wasn't much of an issue, just remember to use default types as stated, i.e. string or number are not written as "string" or "number"

Day 5: Custom types, created and used custom types in functions, also a tip for exporting and importing custom types in typescript
Tip: Pizza is only a TypeScript type, not a runtime value. With "verbatimModuleSyntax": true, TypeScript requires you to explicitly mark type imports.
Correct: import type { Pizza } from "./pizza";

Another thing, we can create custom types and use those custom types to create a new type consisting of values from only these custom types. Also applied type narrowing using switch case.

Day 6: type assertion using () and as keyword, here we assure typescript that the recieved value of the type we are asserting, hence giving us access to propertis and functions of that particular type.
Note: The built in typeof function only recognizes the built in types, not custom types.

Day 7: learning implementaion of classes using instances rather
than using types, as types defined in certain format may not
function properly with class implementaion

Day 8: learned about properties of custom types

Day 9: learned about object inference by type script and duck typing, AND how does
object inference effect the use of objects, specially in duck typing!

Day 10: Learned different ways to split types.
Another method was way to: Omit or Pick from existing type to create a new type.
And the Required and Partial function where we can set if the property of the type
will we compulsory or optional to pass.

Day 11: Learned about Tuples, Array, enum in array_Tuple_Enum.
