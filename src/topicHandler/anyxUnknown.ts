// let storage: any;
// storage = "52";
// storage = [1, 2, 3];
// storage = 32.5;
// storage.toUpper();
// this doesn't show any error but will crash at execution.

// let newStorage: unknown;
// newStorage = "52";
// newStorage = [1, 2, 3];
// newStorage = 32.5;

// newStorage.toUpper();
// this throws error while the one with any type doesn't.
// both will crash at execution.

// to handle unknown type, we need to define a type -
// before we use it.
// as shown below:

// if (typeof newStorage === `string`) {
//   newStorage.toUpperCase();
// }
// now no error is shown

// Note: assignment is allowe for both types -
// the difference is when they are used with a method.

// experimenting with never condition in index.ts
// export type Access = "admin" | "user";
